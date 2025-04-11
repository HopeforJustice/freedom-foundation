import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import { SelectionProvider } from "./context/SelectionContext";
import { Suspense } from "react";

const canela = localFont({
	src: "fonts/Canela-Medium.woff2",
	variable: "--font-canela",
});

const fk = localFont({
	src: "fonts/FKScreamerLegacy-Upright.woff2",
	variable: "--font-fk",
});

const apercu = localFont({
	src: [
		{
			path: "fonts/apercu-regular-pro.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "fonts/apercu-italic-pro.woff2",
			weight: "400",
			style: "italic",
		},
		{
			path: "fonts/apercu-bold-pro.woff2",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-apercu",
});

export const metadata = {
	title: {
		// template: '%s - Docs',
		default: "Hope for Justice Design",
	},
	description: "Hope for Justice brand guide.",
	robots: {
		index: false,
		follow: false,
		googleBot: {
			index: false,
			follow: false,
			noimageindex: false,
		},
	},
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={`h-full antialiased ${fk.variable} ${apercu.variable} ${canela.variable}`}
		>
			<body className="min-h-full bg-hfj-white max-w-dvw overflow-x-hidden text-hfj-black font-apercu w-full">
				<div className="w-full relative">
					<Suspense>
						<SelectionProvider>
							<Header />
							<div className="relative">{children}</div>
						</SelectionProvider>
					</Suspense>
				</div>
			</body>
		</html>
	);
}
