import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "../styles/global.scss";
import "react-toastify/dist/ReactToastify.css";
import styles from './page.module.scss';

import Header from "@/components/organizms/header";
import Footer from "@/components/organizms/footer";

export const metadata: Metadata = {
	title: "Next",
	description: "Next description",
	keywords: "raz, dwa, trzy",
};

const inter = Inter({
	weight: ["200", "400", "500", "700", "900"],
	style: ["normal"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

export interface ILayoutProps {
  children?: React.ReactNode;
}

const RootLayout: React.FC<ILayoutProps> = async ({ children }) => {
	return (
		<html lang="pl">
			<body className={inter.variable}>
				<Header/>
				<main className={styles.main}>
					{children}
				</main>
				<Footer/>
			</body>
		</html>
	);
};

export default RootLayout;
