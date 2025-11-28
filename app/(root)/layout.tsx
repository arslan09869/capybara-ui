import type { Metadata } from "next";
import { Sniglet,Inter } from "next/font/google";


const sniglet = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Capybara UI - Open Source Components",
    default: "Capybara UI - Open Source Components",
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className={`${sniglet.className}`}>{children}</main>
    </>
  );
}
