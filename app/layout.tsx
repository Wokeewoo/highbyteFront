import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import {NavbarM} from "@/components/navbar";
import clsx from "clsx";
import React from "react";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon-32x32.png",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ru" >
			<head>
			<title>HighByte - Home</title>

			<link rel="stylesheet" type="text/css" href="main.css"/>
				<link rel="stylesheet" type="text/css" href="responsive-mobile.css"/>
					<link rel="stylesheet" type="text/css" href="responsive-tablet.css"/>
						<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"/>

							<meta content="width=device-width, initial-scale=1" name="viewport"/>

								<link rel="icon" href="https://res.cloudinary.com/dbyioi2qq/q_auto/v1716708751/EVPR9GGW/favicon-32x32png_1716708747_55371.png" type="image/x-icon"/>
									<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Nunito Sans:100,200,300,400,500,600,700,800,900"/>
										<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Noto Sans TC:100,200,300,400,500,600,700,800,900"/>
											<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Kumbh Sans:100,200,300,400,500,600,700,800,900"/>
												<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900"/>
													<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Inter:100,200,300,400,500,600,700,800,900"/>
														<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Manrope:100,200,300,400,500,600,700,800,900"/>
															<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open Sans:100,200,300,400,500,600,700,800,900"/>
																<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Prosto One:100,200,300,400,500,600,700,800,900"/>
																	<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,600,700,800,900"/>
			</head>

		<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="hero relative flex flex-col h-screen">
						<NavbarM/>
						<main className="">
							{children}
						</main>
					</div>
				</Providers>
			</body>
		</html>
	);
}
