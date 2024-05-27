"use client"
import Image from "next/image";
import React from "react";
import {Button} from "@nextui-org/button";
import axios from 'axios';



export default function Home() {
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [phone, setPhone] = React.useState("");
	const [message, setMessage] = React.useState("");
return (
	<>
		<div className="home-elem-1 flex-wrap">
			<div className="home-elem-2">
					<Image alt="ee" src="/hero_pic.jpg" width={400} height={400} className="hero_pic" />
				<div className="home-elem-4">
					<div className="home-elem-5">
						<p>Премьер Веб Разработка </p>
					</div>
					<div className="home-elem-6">
						<p>Наша команда экспертов создает передовые веб-сайты, которые повышают вовлеченность и способствуют достижению результатов для вашего бизнеса. </p>
					</div>
					<button className="home-elem-7">
						<a href="#" className="link" target="_self">
							<p>Начало работы </p>
						</a>
					</button>
				</div>
			</div>
		</div>
		<div className="home-elem-15">
			<span className="home-elem-14">
				<p>Исключительные возможности веб-разработки </p>
			</span>
			<div className="home-elem-13">
				<div className="home-elem-12">
					<div className="home-elem-11">
						<div className="home-elem-24">
							<i className="fas fa-wifi home-elem-8"></i>
						</div>
						<span className="home-elem-9">
							<a href="#" className="link" target="_self">
								<p>Индивидуальные решения </p>
							</a>
						</span>
						<span className="home-elem-10">
							<a href="#" className="link" target="_self">
								<p>Наши индивидуальные веб-решения соответствуют конкретным потребностям вашего бизнеса, повышая эффективность и удовлетворенность пользователей. </p>
							</a>
						</span>
					</div>
				</div>
				<div className="home-elem-23">
					<div className="home-elem-22">
						<div className="home-elem-26"><i className="fas fa-laptop home-elem-25"></i></div>
						<span className="home-elem-20"><a href="#" className="link" target="_self">
                            <p>Инновационный дизайн </p>
                        </a> </span><span className="home-elem-21"><a href="#" className="link" target="_self">
                            <p>Наши дизайны визуально привлекательны и удобны для пользователя, оптимизируя путешествие клиента с помощью интуитивно понятной навигации. </p>
                        </a> </span></div>
				</div>
				<div className="home-elem-19">
					<div className="home-elem-18">
						<div className="home-elem-28"><i className="fas fa-atom home-elem-27"></i></div>
						<span className="home-elem-16"><a href="#" className="link" target="_self">
                            <p>Надежная защита </p>
                        </a> </span><span className="home-elem-17"><a href="#" className="link" target="_self">
                            <p>Внедрение передовых мер безопасности для защиты вашего веб-сайта и обеспечения безопасного взаимодействия с пользователем. </p>
                        </a> </span></div>
				</div>
			</div>
		</div>
		<div className="home-elem-34">
			<div className="home-elem-32">
				<div className="home-elem-31">
					<div className="home-elem-30"> <span className="home-elem-33">
                        <p>Преимущества выбора нас </p>
                    </span><span className="home-elem-29"><a href="#" className="link" target="_self">
                            <p>Ощутите трансформационные преимущества с нашими адаптивными и безопасными веб-сайтами, адаптированными для достижения успеха вашего бизнеса. </p>
                        </a> </span>
						<button className="home-elem-35">
							<a href="#" className="link" target="_self">
								<p>Узнать больше </p>
							</a>
						</button>
					</div>
				</div>
				<span className="home-elem-36"> <Image alt="ee" width={500} height={500}
													   src="/vizfrblut3kmwwmieyhc.jpg"/> </span></div>
		</div>
		<div className="home-elem-41"> <span className="home-elem-40">
            <p>Основные преимущества и преимущества для клиентов </p>
        		</span><span className="home-elem-42"><a href="#" className="link" target="_self">
                <p>Ознакомьтесь с нашими первоклассными решениями для веб-разработки. </p>
            	</a> </span>
			<div className="home-elem-39">
				<div className="home-elem-38">
					<span className="home-elem-43">
						<Image width={500} height={500} alt="a" src="/imageffe9dcfi_1716707374_38415.jpg"/>
					</span>
					<span className="home-elem-37">
					<a href="#" className="link" target="_self">
						<p>Максимизируйте свой бизнес-потенциал в Интернете </p>
					</a>
					</span>
			</div>
			<div className="home-elem-49"><span className="home-elem-48"> <Image width={500} height={500} alt="a"
																				 src="/imageffe9gevf_1716707419_67215.jpg"/> </span><span
				className="home-elem-47"><a href="#" className="link" target="_self">
                        <p>Настраиваемые функции для уникальных бизнес-потребностей </p>
                    </a> </span></div>
			<div className="home-elem-46"><span className="home-elem-45"> <Image width={500} height={500} alt="a"
																				 src="/imageffe9k8gx_1716707525_30380.jpg"/> </span><span
				className="home-elem-44"><a href="#" className="link" target="_self">
                        <p>Передовые технологии и круглосуточная поддержка</p>
                    </a></span></div>
		</div>
		<div className="home-elem-56">
			<div className="home-elem-55"><span className="home-elem-54"> <Image width={500} height={500} alt="a"
																				 src="/ccqejfmppzszrqdassmj.jpg"/> </span>
				<div className="home-elem-53">
					<div className="home-elem-52"> <span className="home-elem-51">
                        <p>Впечатляющие показатели успеха и вовлеченности </p>
                    </span><span className="home-elem-50"><a href="#" className="link" target="_self">
                            <p>Наши веб-сайты достигают успеха благодаря высокой вовлеченности, коэффициенту конверсии и удовлетворенности пользователей. </p>
                        </a> </span>
						<div className="home-elem-60">
							<div className="home-elem-59"> <span className="home-elem-57">
                                <p>95% </p>
                            </span><span className="home-elem-58"><a href="#" className="link" target="_self">
                                    <p>Удовлетворённость пользователей </p>
                                </a></span></div>
							<div className="home-elem-63"> <span className="home-elem-61">
                                <p>80% </p>
                            </span><span className="home-elem-62"><a href="#" className="link" target="_self">
                                    <p>Удержание клиентов </p>
                                </a> </span></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</div>
		<div className="home-elem-65">
			<div className="home-elem-64">
				<div className="home-elem-124">
					<div className="home-elem-108"> <span className="cd-paragraph-clean home-elem-107">
                        <p>Свяжитесь с нами</p>
                    </span><span className="cd-paragraph-clean home-elem-106">
                        <p>Наши специалисты ответят на все ваши вопросы</p>
                    </span>
						<div className="home-elem-123">
							<div className="home-elem-113"><i className="fas fa-mail-bulk home-elem-109"></i><span
								className="cd-paragraph-clean home-elem-110">
                                <p>Email</p>
                            </span><span className="cd-paragraph-clean home-elem-111">
                                <p>company@highbyte.ru</p>
                            </span><span className="cd-paragraph-clean home-elem-112">
                                <p>contacts@highbyte.ru</p>
                            </span></div>
							<div className="home-elem-118"><i className="fas fa-phone-alt home-elem-114"></i><span
								className="cd-paragraph-clean home-elem-115">
                                <p>Телефон</p>
                            </span><span className="cd-paragraph-clean home-elem-116">
                                <p>+7 (958) 801-07-16</p>
                            </span><span className="cd-paragraph-clean home-elem-117">
                                <p>+7 (919) 777-99-95</p>
                            </span></div>
							<div className="home-elem-122"><i className="fas fa-map-marker-alt home-elem-119"></i><span
								className="cd-paragraph-clean home-elem-120">
                                <p>Адрес</p>
                            </span><span className="cd-paragraph-clean home-elem-121">
                                <p>Москва, ул. Академика Варги, д.8к1</p>
                            </span></div>
						</div>
					</div>
				</div>
				<div className="home-elem-66">
					<div className="home-elem-67"> <span className="home-elem-68">
                        <p>Или оставьте заявку</p>
                    </span>
						<div className="home-elem-69"> <span className="home-elem-70"><a href="#" className="link"
																						 target="_self">
                                <p>Имя</p>
                            </a></span>
							<input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Имя" className="home-elem-100" required={true}/></div>
						<div className="home-elem-74">
							<input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="home-elem-101" required={true}/><span
							className="home-elem-71"><a href="#" className="link" target="_self">
                                <p>Email</p>
                            </a>
                    </span></div>
						<div className="home-elem-105">
							<input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Телефон" className="home-elem-104" required={true}/> <span
							className="home-elem-103">
									<a href="#" className="link" target="_self">
								<p>Номер телефона</p>
								</a>
							</span></div>
						<div className="home-elem-72"> <span className="home-elem-73"><a href="#" className="link"
																						 target="_self">
                                <p>Сообщение</p>
                            </a></span>
							<textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Введите ваше сообщение" className="home-elem-102"
									  required={true}></textarea>
						</div>
						<Button onClick={(e) => {
							axios.post('http://45.141.103.150:8080/api/sendmessage',
								{"message": message},
								{
									params: {
										name: name,
										mail: email,
										phone: phone
									},
									method: 'POST',
										headers: {
											'Content-Type': 'application/json',
											'Accept': 'application/json',
										}
									})
								.then((response) => {
									console.log(response.data);
									// Handle data
								}).then(() => setName('')).then(() => setEmail('')).then(() => setMessage('')).then(() => setPhone(''))
								.catch((error) => {
									console.log(error);
								})
						}
						} className="home-elem-75">Отправить сейчас
						</Button>
					</div>
				</div>
			</div>
		</div>
		<div className="home-elem-89">
			<div className="home-elem-94"> <span className="home-elem-90">
                <p>© Copyright {new Date().getFullYear()}, All Rights Reserved</p>
            </span>
				<div className="home-elem-93"> <span className="home-elem-91">
                    <p>Privacy Policy </p>
                </span><span className="home-elem-92">
                    <p> Terms &amp; Conditions</p>
                </span></div>
			</div>
		</div>
	</>
)
	;
}
