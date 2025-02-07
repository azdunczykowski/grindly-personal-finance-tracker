import { Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "../components/ThemeToggle";
import "./globals.css";

const poppinsFont = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Grindly",
  description: "Your finance tracker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppinsFont.variable} antialiased`}>
        <ThemeProvider attribute="class">
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
