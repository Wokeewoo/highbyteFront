export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "HighByte",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Главная",
			href: "#main",
		},
    {
      label: "О нас",
      href: "#about",
    },
    {
      label: "Услуги",
      href: "#services",
    },
    {
      label: "Контакты",
      href: "#contacts",
    }
	],
	navMenuItems: [
		{
			label: "Главная",
			href: "#main",
		},
		{
			label: "О нас",
			href: "#about",
		},
		{
			label: "Услуги",
			href: "#services",
		},
		{
			label: "Контакты",
			href: "#contacts",
		}
	],
	links: {
		telegram: "/",
		whatsapp: "/"
	},
};
