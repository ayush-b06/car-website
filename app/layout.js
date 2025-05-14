import { Inter, Jost } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const jost = Jost({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jost.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
