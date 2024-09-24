"use client"

import ButtonGroup from "@/components/GroupButton";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import image1 from '../../public/image/primeira.jpeg';
// import image4 from '../../public/image/quarta.jpeg';
// import image5 from '../../public/image/quinta.webp';
// import image2 from '../../public/image/segundo.jpeg';
import premio from '../../../public/image/premio.jpeg';
import bk from '../../../public/image/bk.png'
import { RxTextAlignJustify } from "react-icons/rx";

interface Pergunta {
  titulo: string;
  btn1: string;
  btn2: string;
}

interface Item {
  img: StaticImageData,
  primeiro: string;
  primeiraQ: Pergunta;
  segundaQ: Pergunta;
}
export default function Home() {


  const [count, setCount] = useState(0)
  const [button, setButton] = useState(0)
  const router = useRouter();

  const handleRatingChange = (newRating: number) => {
    setButton((butt) => (butt + 1))
    console.log(button);

  };

  return (
    <>
      <header className="flex flex-row bg-red2 justify-start items-center gap-10 h-16">
        <RxTextAlignJustify className="w-10 h-10 ml-5" />
        <Image src={bk} alt={""} className="w-10 h-10" />
      </header>
      <main className="flex flex-col items-center justify-between  h-full md:px-24 sm:p-0 lg:px-24">
        <div className="flex items-center justify-center bg-red3  h-full px-5 md:px-20 sm:p-5 lg:px-20 ">
          <div className="flex flex-col gap-5 rounded-lg bg-gray-100 h-1/2  p-4 my-10 md:p-10 lg:p-10">
            <figure className="flex flex-col w-full justify-center items-center">
              <Image src={premio} alt={""} className="rounded-lg" />
              <div className="flex flex-col gap-2 my-5 max-w-[75rem]">
                <h1>PARABÉNS! FALTA POUCO PARA RESGATAR SEU GALÃO BK É FOGO! 🔥</h1>
                <p>Você concluiu o nosso Quiz Exclusivo Burguer King + Stanley! Como agradecimento, você ganhou um <b>1 Ano de Refil em qualquer uma das franquias Burguer King</b>, precisando apenas do seu Galão! 😍! Clique no botão RESGATAR abaixo para resgatar seu prêmio e aproveitar essa oferta Exclusiva do BK.</p>
                <p>Agradecemos pela sua participação e esperamos que desfrute do GALÃO STANLEY BK com qualidade e praticidade que a Stanley oferece.</p>
                <div>
                  <p>Com carinho,</p>
                  <p>Equipe Burguer King.</p>
                </div>
              </div>
            </figure>



            <button className="h-16 rounded-lg font-bold text-lg w-full bg-red2 text-white transition delay-150"
              onClick={() => {
                router.push("/seupremio.html");
              }}
            >
              RESGATAR
            </button>
          </div>
        </div>

      </main></>
  );
}