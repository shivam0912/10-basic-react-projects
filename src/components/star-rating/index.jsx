/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import "./style.css";

export default function StarRating({ noOfStars }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(index) {
        setRating(index);
    }

    function handleMouseEnter(index) {
        setHover(index);
    }

    function handleMouseLeave() {
        setHover(rating);
    }

    return (
        <div className="star-rating">
            {
                [...Array(noOfStars)].map((_, index) => {
                    const starValue = index + 1;
                    return (
                        <FaStar
                            key={index}
                            className={starValue <= (hover || rating) ? "active" : "inactive"}
                            onClick={() => handleClick(starValue)}
                            onMouseEnter={() => handleMouseEnter(starValue)}
                            onMouseLeave={handleMouseLeave}
                            size={40}
                        />
                    );
                })
            }
        </div>
    );
}
