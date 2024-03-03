import "@/styles/globals.scss";
import type { Metadata } from "next";
import { ThemeProvider } from "./theme";
import { ClerkProvider } from "@clerk/nextjs";

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
    <ClerkProvider>
      <html lang="en">
        <body className="w-full h-screen flex prose lg:prose-xl">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
