'use client';
import {Input, Textarea} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {Spacer} from "@nextui-org/spacer";
import axios from "axios";
import React from "react";

export default function ContactUs() {
    async function handleSubmit(event: React.MouseEvent) {
        await axios.post('https://45.141.103.150:8080/api/sendmessage',
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
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [message, setMessage] = React.useState("");

    return (
        <>
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
                                <div className="home-elem-122"><i
                                    className="fas fa-map-marker-alt home-elem-119"></i><span
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
                                <input value={name} onChange={(e) => setName(e.target.value)} type="text"
                                       placeholder="Имя"
                                       className="home-elem-100" required={true}/></div>
                            <div className="home-elem-74">
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"
                                       placeholder="Email" className="home-elem-101" required={true}/><span
                                className="home-elem-71"><a href="#" className="link" target="_self">
                                <p>Email</p>
                            </a>
                    </span></div>
                            <div className="home-elem-105">
                                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text"
                                       placeholder="Телефон" className="home-elem-104" required={true}/> <span
                                className="home-elem-103">
									<a href="#" className="link" target="_self">
								<p>Номер телефона</p>
								</a>
							</span></div>
                            <div className="home-elem-72"> <span className="home-elem-73"><a href="#" className="link"
                                                                                             target="_self">
                                <p>Сообщение</p>
                            </a></span>
                                <textarea value={message} onChange={(e) => setMessage(e.target.value)}
                                          placeholder="Введите ваше сообщение" className="home-elem-102"
                                          required={true}></textarea>
                            </div>
                            <Button onClick={handleSubmit} className="home-elem-75">Отправить сейчас
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}