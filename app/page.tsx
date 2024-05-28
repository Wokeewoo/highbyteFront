"use client"
import Image from "next/image";
import React from "react";
import {Button} from "@nextui-org/button";
import axios from 'axios';
import Hero from "@/components/hero";
import AboutSection from "@/components/aboutSection";
import Benefits from "@/components/benefits";
import DescriptionSection from "@/components/descriptionSection";



export default function Home() {

return (
	<>
		<Hero/>
		<AboutSection/>
		<Benefits/>
		<DescriptionSection/>


	</>
)
	;
}
