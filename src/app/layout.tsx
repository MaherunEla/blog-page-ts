import Navbar from "@/components/layout/Navbar";
import "./styles/globals.css";
import { Inter, Sen } from "next/font/google";
import Footer from "@/components/layout/Footer";
import AuthProvider from "@/providers/AuthProvider";
import GlobalState from "@/context";

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
});
const sen = Sen({
  weight: ["400", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--sen",
});
type Props = {
  children: JSX.Element;
};
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`${sen.variable} ${inter.variable}`}>
        <AuthProvider>
          <GlobalState>
            <div>
              <Navbar />
              {children}
              <Footer />
            </div>
          </GlobalState>
        </AuthProvider>
      </body>
    </html>
  );
}
