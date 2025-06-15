import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Providers } from "./Providers";

export const metadata = {
  title: "Clausely",
  description: "AI-first Legal Compliance",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <body>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}