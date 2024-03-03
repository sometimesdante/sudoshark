import "@/styles/globals.scss";
import Footer from "@/ui/Footer";
import Header from "@/ui/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SudoShark",
  description: "The only dX focused hosting you will ever need",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="margins">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
