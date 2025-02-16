import NextAuth from "next-auth";
import User from "@/app/models/User";
import connectToDatabase from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        try {
          await connectToDatabase();
          const user = await User.findOne({ email: credentials?.email });
          if (!user) {
            throw new Error("User not found");
          }
          const isValidPassword = await bcrypt.compare(
            credentials?.password ?? "",
            user.password
          );
          if (!isValidPassword) {
            throw new Error("Invalid password");
          }
          return user;
        } catch {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        await connectToDatabase();
        const existingUser = await User.findOne({ email: profile?.email });
        if (!existingUser) {
          await User.create({
            name: profile?.name,
            email: profile?.email,
            image: profile?.picture, // Dodaj obraz użytkownika
          });
        }
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.picture = user.image; // Dodaj obraz użytkownika do tokena
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          email: token.email,
          name: token.name,
          image: token.picture, // Dodaj obraz użytkownika do sesji
        };
      }
      return session;
    },
  },
  pages: {
    signIn: "/sign-in",
    signUp: "/sign-up",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
