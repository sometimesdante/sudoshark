import "@/styles/globals.scss";
import Sidebar from "@/ui/Sidebar";
import type { Metadata } from "next";
import { ThemeProvider } from "./theme";

export const metadata: Metadata = {
  title: "SudoShark",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full h-screen flex prose lg:prose-xl">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Sidebar />
          <div>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
