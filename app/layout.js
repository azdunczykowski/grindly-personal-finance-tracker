import { Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "../components/ThemeToggle";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { getSession } from "@/lib/getSession";
import AuthProvider from "../app/providers/AuthProvider";

const poppinsFont = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Grindly",
  description: "Your finance tracker",
};

export default async function RootLayout({ children }) {
  const session = await getSession();

  return (
    <html lang="en" className="dark">
      <AuthProvider>
        <body className={`${poppinsFont.variable} antialiased`}>
          <Navbar session={session} />
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
