import "@/styles/globals.scss";
import type { Metadata } from "next";
import { ThemeProvider } from "./theme";
import { ClerkProvider } from "@clerk/nextjs";

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
    <ClerkProvider>
      <html lang="en">
        <body className="w-full h-screen flex prose lg:prose-xl bg-canvas-light dark:bg-canvas-dark">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div>{children}</div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
