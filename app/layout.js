import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
    <html lang="en" className="dark">
      <body className={`${poppinsFont.variable} antialiased`}>
        <Navbar />
        <div className="max-w-7xl mx-auto pt-20 px-6">{children}</div>
      </body>
    </html>
  );
}
