import Image from "next/image";
import React from "react";
import { fadeIn } from "react-animations"

export default function Hero() {

    return (
        <>
            <div id="main" className="home-elem-1 flex-wrap ">
                <div className=" home-elem-2 animate-appearance-in">
                    <Image alt="ee" src="/hero_pic.jpg" width={400} height={400} className="hero_pic"/>
                    <div className="home-elem-4">
                        <div className="home-elem-5">
                            <p>Премьер Веб Разработка </p>
                        </div>
                        <div className="home-elem-6">
                            <p>Наша команда экспертов создает передовые веб-сайты, которые повышают вовлеченность и
                                способствуют достижению результатов для вашего бизнеса. </p>
                        </div>
                        <button className="home-elem-7">
                            <a href="#" className="link" target="_self">
                                <p>Начало работы </p>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}