"use client"

import React, { useState } from 'react';

interface ButtonGroupProps {
  titulo: string;
  btn1: string;
  btn2: string;
  setButton: (value: number) => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ titulo, btn1, btn2, setButton }) => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const handleClick = (button: string, value: number) => {
    setSelectedButton(button);
    setButton(value); // Agora passando o valor diretamente
  };

  return (
    <div className='flex flex-col items-center gap-5 w-full font-bold text-2xl'>
      <h3 className='text-center'>{titulo}</h3>
      <div style={{ display: 'flex', gap: '10px' }} className='w-full h-20'>
        <button
          style={{
            backgroundColor: selectedButton === 'btn1' ? '#d62400' : 'lightgray',
            color: selectedButton === 'btn1' ? '#fff' : 'black',
            padding: '10px 20px',
            border: 'none',
            cursor: 'pointer',
          }}
          className='rounded-lg w-1/2 text-xl text-bl transition delay-150'
          onClick={() => handleClick('btn1', 1)} // Passando um número diretamente
        >
          {btn1}
        </button>
        <button
          style={{
            backgroundColor: selectedButton === 'btn2' ? '#d62400' : 'lightgray',
            color: selectedButton === 'btn2' ? '#fff' : 'black',
            padding: '10px 20px',
            border: 'none',
            cursor: 'pointer',
          }}
          className='rounded-lg w-1/2 text-xl transition delay-150'
          onClick={() => handleClick('btn2', 2)} // Passando um número diretamente
        >
          {btn2}
        </button>
      </div>
    </div>
  );
};

export default ButtonGroup;
