import { Poppins } from "next/font/google";
import "./globals.css";

// Load only Poppins
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Choose weights as needed
});

export const metadata = {
  title: "NextPick",
  description: "A movie, game, series and book finder",
  icons: {
    icon: "/assets/logoIco.ico",
    shortcut: "/assets/logoIco.ico",
    apple: "/assets/logoIco.ico",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased bg-[#10172A]`}>
        {children}
      </body>
    </html>
  );
}
