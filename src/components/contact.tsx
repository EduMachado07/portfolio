import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import { Input } from './ui/input'
import { Check, LoaderCircle, Send, X } from 'lucide-react'
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";
import { Label } from './ui/label';
import { useState } from 'react';

interface IDataMail {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const Contact = () => {
    const { register, handleSubmit, reset, formState } = useForm<IDataMail>();
    const { errors } = formState;
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const sendEmail = async (data: IDataMail) => {
        try {
            setStatus("loading");

            await emailjs.send(
                "service_hdixvby",
                "template_unqjued",
                {
                    name: data.name,
                    email: data.email,
                    subject: data.subject,
                    message: data.message
                },
                "_SkJkk77ucFlFJB7G"
            )

            setStatus("success");
            reset();
        } catch (error) {
            console.error(error);
            setStatus("error");
        } finally {
            setTimeout(() => setStatus("idle"), 3000);
        }

    };

    const renderButtonContent = () => {
        switch (status) {
            case "loading":
                return (
                    <>
                        {/* <Loader2 /> */}
                        <LoaderCircle className="mr-2 animate-spin" />
                        Enviando...
                    </>
                );
            case "success":
                return (
                    <>
                        <Check className="mr-2" />
                        Enviado!
                    </>
                );
            case "error":
                return (
                    <>
                        <X className="mr-2" />
                        Erro ao enviar
                    </>
                );
            default:
                return (
                    <>
                        <Send className="mr-2" />
                        Enviar mensagem
                    </>
                );
        }
    }

    return (
        <form onSubmit={handleSubmit(sendEmail)} className="flex flex-col gap-6">
            <p className="dark:text-zinc-50 text-lg font-supreme">
                Deseja trabalhar comigo ou tem uma ideia para ser desenvolvida? Entre em contato. <span className="font-supreme-bold text-[#3399FF] underline underline-offset-4">Vamos construir algo juntos!</span>
            </p>
            {(errors.name || errors.email || errors.subject || errors.message) && (
                <p className="text-red-400 font-supreme text-base">
                    Por favor, preencha todos os campos antes de enviar.
                </p>
            )}
            <section className="w-full justify-center flex gap-8">
                <div className="w-full flex flex-col gap-3">
                    <Label htmlFor="name">Nome</Label>
                    <Input type="text" id="name" placeholder="Seu nome" {...register("name", { required: true })} />
                </div>
                <div className="w-full flex flex-col gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" placeholder="seu@email.com" {...register("email", { required: true })} />
                </div>
            </section>
            <div className="flex flex-col gap-3">
                <Label htmlFor="subject">Assunto</Label>
                <Input type="text" id="subject" placeholder="Do que se trata?" {...register("subject", { required: true })} />
            </div>
            <div className="flex flex-col gap-3">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                    className="min-h-50 max-h-90"
                    id="message"
                    placeholder="Sua mensagem..."
                    {...register("message", { required: true })}
                />
            </div>
            <Button size="lg" className="w-50" type="submit" disabled={status === "loading"}>
                {renderButtonContent()}
            </Button>
        </form>
    )
}

export default Contact