import React, { useEffect, useRef, useState } from "react";
import "./Music.css";
import { Link } from "react-router-dom";
const images = ["/Img1.jpg", "/Img2.jpg", "/Img3.jpg", "/Img4.jpg", "/Img5.jpg", "/Img6.jpg", "/Img7.jpg", "/Img8.jpg", "/Img9.jpg", "/Img10.jpg"];
const phrases = [
    "Você é a melhor parte dos meus dias.",
    "Cada segundo contigo é um presente.",
    "Nosso amor é minha maior alegria.",
    "Você ilumina minha vida de uma forma única.",
    "Teu sorriso é meu sol em dias nublados.",
    "Amo cada momento que passamos juntos.",
    "Você é a razão do meu sorriso.",
    "Teu amor é meu porto seguro.",
    "Cada dia contigo é uma nova aventura.",
    "Você é a minha felicidade em forma de pessoa.",
    "Teu amor é a música que embala meu coração."
];

export default function MusicPlayer() {
    const [currentImage, setCurrentImage] = useState(0);
    const [currentPhrase, setCurrentPhrase] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
            setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    const prevSlide = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
        setCurrentPhrase((prev) => (prev - 1 + phrases.length) % phrases.length);
    };

    const nextSlide = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    };

    return (
        <div className="player-container">
            <div className="player-frame">
                <div className={`image-container ${isPlaying ? "rotating" : ""}`}>
                    <img src={images[currentImage]} alt="Foto do amor" />
                    <div className="wave"></div>
                </div>
                <p className="phrase">{phrases[currentPhrase]}</p>
                <div className="controls">
                    <button className="control-btn" onClick={prevSlide}>
                        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                            <path d="M11 18V6l-8.5 6L11 18zM13 6v12h2V6h-2z" />
                        </svg>
                    </button>
                    <button className="control-btn play-btn" onClick={togglePlay}>
                        {isPlaying ? (
                            <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                            </svg>
                        ) : (
                            <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        )}
                    </button>
                    <button className="control-btn" onClick={nextSlide}>
                        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                            <path d="M13 6v12l8.5-6L13 6zM11 6v12H9V6h2z" />
                        </svg>
                    </button>
                </div>
            </div>
            <audio ref={audioRef} loop>
                <source src="/music.mp3" type="audio/mpeg" />
            </audio>
            <div className="navigation">
                <Link to="/" className="nav-link">
                    <span className="link-icon"></span>
                    Voltar para o Início
                </Link>
            </div>
        </div>
    );
}
