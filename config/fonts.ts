import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google"
import {Prosto_One as FontHero} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["cyrillic"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["cyrillic"],
  variable: "--font-mono",
})

export const fontHero = FontHero({
  subsets: ["cyrillic"],
  variable: "--font-hero",
  weight: ["400"],
})