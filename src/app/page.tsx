"use client"

import ButtonGroup from "@/components/GroupButton";
import StarRating from "@/components/StarRating";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RxTextAlignJustify } from "react-icons/rx";
import bk from '../../public/image/bk.png';
import image1 from '../../public/image/primeira.jpeg';
import image4 from '../../public/image/quarta.jpeg';
import image5 from '../../public/image/quinta.webp';
import image2 from '../../public/image/segundo.jpeg';
import image3 from '../../public/image/terceira.webp';

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

export interface IQ {
  q1:boolean
  q2:boolean
  q3:boolean
}

export default function Home() {
  const [text, setText] = useState<Item[]>([
    {
      img: image1,
      "primeiro": "De 0 a 5, qual seu grau de familiaridade com a marca Stanley?",
      "primeiraQ": { "titulo": "Qual é sua maior preocupação na hora de adquirir um produto Stanley?", "btn1": "Preço", "btn2": "Qualidade" },
      "segundaQ": { "titulo": "Qual tipo de bebida você vai usar com Galão Térmico?", "btn1": "Quente", "btn2": "Fria" }
    },
    {
      img: image2,
      "primeiro": "De 0 a 5, como você classificaria a qualidade dos produtos Stanley?",
      "primeiraQ": { "titulo": "Você conhece os produtos Stanley?", "btn1": "Sim", "btn2": "Não" },
      "segundaQ": { "titulo": "Você sabia que os produtos Stanley são reconhecidos mundialmente pela sua durabilidade e eficiência térmica?", "btn1": "Sim, eu sabia", "btn2": "Não, primeira vez que vou testar" }
    },
    {
      img: image3,
      "primeiro": "De 0 a 5, Você acha que a capacidade térmica de um produto Stanley influencia na sua qualidade?",
      "primeiraQ": { "titulo": "Você já conhece nosso novo galão personalizado 'O BK É FOGO', em parceria com o Burger King?", "btn1": "Sim", "btn2": "Não" },
      "segundaQ": { "titulo": "Entre os seguintes modelos, qual você escolheria?", "btn1": "Stanley Convecional", "btn2": "O BK É FOGO (Personalizado BK)" }
    },
    {
      img: image4,
      "primeiro": "De 0 a 5, qual a probabilidade de você comprar um Produto Stanley?",
      "primeiraQ": { "titulo": "Você já escolheu algum produto Stanley por conta do seu design?", "btn1": "Sim", "btn2": "Não" },
      "segundaQ": { "titulo": "Entre os seguintes ML, qual você considera mais essencial para você?", "btn1": "COPO DE 473ML", "btn2": "GALÃO DE 1.9 LITROS" }
    },
    {
      img: image5,
      "primeiro": "De 0 a 5, o quão feliz você ficaria de ganhar um galão personalizado 'O BK É FOGO', para compartilhar momentos especiais com seus amigos?",
      "primeiraQ": { "titulo": "Você sabia que os produtos Stanley são ideais para manter suas bebidas na temperatura perfeita durante churrascos e encontros ao ar livre, proporcionando uma experiência única e agradável?", "btn1": "Sim", "btn2": "Não" },
      "segundaQ": { "titulo": "Você gostaria de receber 1 ano de refil grátis diretamente do Burguer King?", "btn1": "Eu quero", "btn2": "Não quero" }
    },
  ] as unknown as Item[])

  

  const [count, setCount] = useState(0)
  const [button, setButton] = useState(0)
  const [verify, setVerify] = useState<IQ>({"q1":false,"q2":false,"q3":false} as IQ)
  const [resetButton1, setResetButton1] = useState(false)
  const [resetButton2, setResetButton2] = useState(false)

  const [rating, setRating] = useState<number>(0);

  const router = useRouter();

  const handleRatingChange = (newRating: number) => {
    setButton((butt) => (butt + 1))
    console.log(button);
    setVerify((v)=> {return{"q1":v.q1, "q2":v.q2,"q3":true}})
  };

  return (
    <>
      <header className="flex flex-row bg-red2 justify-start items-center gap-10 h-16">
        <RxTextAlignJustify className="w-10 h-10 ml-5" />
        <Image src={bk} alt={""} className="w-10 h-10" />
      </header>
      <main className="flex flex-col items-center justify-between  h-full md:px-24 sm:p-0 lg:px-24">
        <div className="flex items-center justify-center bg-red3  h-full px-5 w-full md:px-20 sm:p-5 lg:px-20 ">
          <div className="flex flex-col justify-center items-center gap-5 rounded-lg bg-gray-100 h-1/2 w-full  p-4 my-10 md:p-5 lg:p-10 text-black">

            <Image src={text[count].img} alt={""} className="rounded-md" />
            <p className="font-bold text-2xl text-center">{text[count].primeiro}</p>
            <StarRating maxRating={5} onRatingChange={handleRatingChange} setRating={setRating} rating={rating}/>
            <ButtonGroup titulo={text[count].primeiraQ.titulo} btn1={text[count].primeiraQ.btn1} btn2={text[count].primeiraQ.btn2} setButton={setButton} setVerify={setVerify} question={1} setReset={setResetButton1} reset={resetButton1}/>
            <ButtonGroup titulo={text[count].segundaQ.titulo} btn1={text[count].segundaQ.btn1} btn2={text[count].segundaQ.btn2} setButton={setButton} setVerify={setVerify} question={2} setReset={setResetButton2} reset={resetButton2}/>

            {/* <button className="w-60 h-20 bg-gray-50 rounded-lg"
              onClick={() => {
                count < text.length - 1 ? setCount(count + 1) : router.push("/oldindex.html");
              }}

            >
              Enviar avaliação
            </button> */}
            <button className="h-20 bg-gray-300 rounded-lg font-bold text-lg w-full hover:bg-red2 hover:text-white transition delay-150"
              onClick={() => {
                console.log(verify)
                count < text.length - 1 ?
                 verify.q1  && verify.q2 && verify.q3 ?
                  (setCount(count + 1), setVerify({"q1":false,"q2":false,"q3":false}), setResetButton1(true),setResetButton2(true), setRating(0)): null
                    : router.push("/premio");
              }}
              disabled={verify.q1 && verify.q2 && verify.q3 ? false : true }
            >
              Enviar avaliação
            </button>
          </div>
        </div>

      </main></>
  );
}