import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ClientOnly } from "@/components/client-only";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A portfolio website built with Next.js and Shadcn/ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					storageKey="theme-mode"
					disableTransitionOnChange>
					<ClientOnly>
						<Header />
						{children}
						<Footer />
					</ClientOnly>
				</ThemeProvider>
			</body>
		</html>
  );
}