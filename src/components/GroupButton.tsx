"use client"

import { IQ } from '@/app/page';
import React, { Dispatch, SetStateAction, useState } from 'react';

interface ButtonGroupProps {
  titulo: string;
  btn1: string;
  btn2: string;
  setButton: (value: number) => void;
  setVerify: Dispatch<SetStateAction<IQ>>;
  question: number;
  setReset: Dispatch<SetStateAction<boolean>>
  reset: boolean
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ titulo, btn1, btn2, setButton, setVerify, question, setReset, reset }) => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const handleClick = (button: string, value: number) => {
    setSelectedButton(button);
    setButton(value);
    if (question == 1){
      setVerify((v: any)=> {return{"q1":true, "q2":v.q2,"q3":v.q3}})
    } else {
      setVerify((v: any)=> {return{"q1":v.q1, "q2":true,"q3":v.q3}})
    }
  };

  return (
    <div className='flex flex-col items-center gap-5 w-full font-bold text-2xl'>
      <h3 className='text-center'>{titulo}</h3>
      <div style={{ display: 'flex', gap: '10px' }} className='w-full h-21'>
        <button
          style={{
            backgroundColor: reset === false && selectedButton === 'btn1' ? '#d62400' : 'lightgray',
            color: reset === false && selectedButton === 'btn1' ? '#fff' : 'black',
            padding: '10px 20px',
            border: 'none',
            cursor: 'pointer',
          }}
          className='rounded-lg w-1/2 text-xl h-21 transition delay-150'
          onClick={() => (handleClick('btn1', 1), setReset(false))} // Passando um número diretamente
        >
          {btn1}
        </button>
        <button
          style={{
            backgroundColor: reset === false && selectedButton === 'btn2' ? '#d62400' : 'lightgray',
            color: reset === false && selectedButton === 'btn2' ? '#fff' : 'black',
            padding: '10px 20px',
            border: 'none',
            cursor: 'pointer',
          }}
          className='rounded-lg w-1/2 text-xl h-21 transition delay-150'
          onClick={() => (handleClick('btn2', 2), setReset(false))} // Passando um número diretamente
        >
          {btn2}
        </button>
      </div>
    </div>
  );
};

export default ButtonGroup;
