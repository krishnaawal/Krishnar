import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Krishna Rawal — Digital designer & frontend developer",
  description: "Portfolio of Krishna Rawal, a BCA student, frontend developer, visual designer, and digital marketing learner from Nepal.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
