import Image from "next/image";

export default function Hero() {
    return (
        <>
        <div className="home-elem-2"> <span className="home-elem-3"> <Image width={500} height={500} src="/hero_pic.jpg" alt="sl"/> </span>
            <div className="home-elem-4"> <span className="home-elem-5">
                    <p>Премьер Веб Разработка </p>
                </span><span className="home-elem-6">
                    <p>Наша команда экспертов создает передовые веб-сайты, которые повышают вовлеченность и способствуют достижению результатов для вашего бизнеса. </p>
                </span><button className="home-elem-7"><a href="#home-elem-65" className="link" target="_self">
                <p>Начало работы </p>
            </a> </button></div>
        </div>
        </>
    )
}