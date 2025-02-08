import { Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "../components/ThemeToggle";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppinsFont = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["sans-serif"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Grindly",
  description: "Your finance tracker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppinsFont.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
