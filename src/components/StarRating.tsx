import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa'; // Biblioteca de ícones

interface StarRatingProps {
    maxRating?: number;
    onRatingChange?: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ maxRating = 5, onRatingChange }) => {
    const [rating, setRating] = useState<number>(0);

    const handleClick = (ratingValue: number) => {
        setRating(ratingValue);
        if (onRatingChange) {
            onRatingChange(ratingValue); // Opcionalmente, chama a função de callback para enviar a avaliação
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }} className='flex-col w-full'>
            <div className='flex gap-10'>
                {Array.from({ length: maxRating }, (_, index) => {
                    const ratingValue = index + 1;
                    return (
                        <FaStar
                            key={ratingValue}
                            size="2rem"
                            onClick={() => handleClick(ratingValue)}
                            style={{
                                marginRight: '10px',
                                cursor: 'pointer',
                                color: ratingValue <= rating ? 'yellow' : 'gray',
                            }}
                        />
                    );
                })}</div>
        </div>
    );
};

export default StarRating;
