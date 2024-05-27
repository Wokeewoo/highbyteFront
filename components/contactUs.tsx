'use client';
import {Input, Textarea} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {Spacer} from "@nextui-org/spacer";

export default function ContactUs() {
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("http://localhost:3000/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
        }
    }


    return (
        <>
            <form className="w-3/5" onSubmit={handleSubmit}>
                <Input type="text" name="Имя" placeholder="Имя"/>
                <Spacer/>
                <Input type="email" name="email" placeholder="Email"/>
                <Spacer/>
                <Input type="tel" name="Номер телефона" placeholder="Номер телефона"/>
                <Spacer/>
                <Textarea name="Сообщение" placeholder="Сообщение"></Textarea>
                <Spacer/>
                <Button type="submit">Отправить заявку</Button>
            </form>
        </>
    );
}