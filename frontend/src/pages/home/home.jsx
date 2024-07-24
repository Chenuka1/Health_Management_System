import React, { useState, useEffect } from 'react';
import Navbar from "../../component/navbar/navbar";
import slider1 from '../../assets/slider-1.jpg';
import slider2 from '../../assets/slider-2.jpg';
import slider3 from '../../assets/slider-3.jpg';
import './home.css';

export default function Home() {
    const [currentImage, setCurrentImage] = useState(1);
    const intervalDuration = 5000;

    const nextSlide = () => {
        setCurrentImage((prevImage) => (prevImage === 3 ? 1 : prevImage + 1));
    };

    const prevSlide = () => {
        setCurrentImage((prevImage) => (prevImage === 1 ? 3 : prevImage - 1));
    };

    const getImage = () => {
        switch (currentImage) {
            case 1:
                return slider1;
            case 2:
                return slider2;
            case 3:
                return slider3;
            default:
                return slider1;
        }
    };

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, intervalDuration);
        return () => clearInterval(slideInterval);
    }, [currentImage]);

    return (
        <div>
            <Navbar />
            <div className="home">
                <div className="slider-container">
                    <button className="slider-button left" onClick={prevSlide}>❮</button>
                    <img
                        src={getImage()}
                        alt={`Slide ${currentImage}`}
                        className={`slider-image ${currentImage}`}
                    />
                    <button className="slider-button right" onClick={nextSlide}>❯</button>
                </div>
                <h1>Our services</h1>
                <h1>About us</h1>
            </div>
        </div>
    );
}
