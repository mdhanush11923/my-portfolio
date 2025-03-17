import type { Metadata } from "next";
import {
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from "@mantine/core";
import theme from "./theme";
import "./globals.scss";
import { Inconsolata, Montserrat, Poppins } from "next/font/google";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "400", "900"],
  style: ["normal", "italic"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Next App Mantine Tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`antialiased ${poppins.className} bg-[#f1f1f1]`}>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
