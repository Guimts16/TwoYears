import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
    const [contador, setContador] = useState("");
    const [frase, setFrase] = useState("");
    const [desbloqueado, setDesbloqueado] = useState(false);

    useEffect(() => {
        const calcularTempoRestante = () => {
            const hoje = new Date();
            const dia30 = new Date(hoje.getFullYear(), hoje.getMonth(), 30, 0, 0, 0); // Dia 30 à meia-noite
            const diferenca = dia30 - hoje;

            if (diferenca > 0) {
                const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
                const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
                const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

                setContador(`${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos restantes para o nosso dia especial!`);
            } else {
                setContador("Hoje é o grande dia! 🎉");
            }
        };

        const verificarDesbloqueio = () => {
            const hoje = new Date();
            const diaAtual = hoje.getDate();
            setDesbloqueado(diaAtual >= 15);
        };

        const frasesRomanticas = [
            "Você é a razão do meu sorriso, zuzu 💜",
            "Cada dia ao seu lado é um presente, xuxu 🎁",
            "Você ilumina minha vida como ninguém, amor 🌟",
            "Meu coração é seu, hoje e sempre, pincesa 💌",
        ];

        calcularTempoRestante();
        verificarDesbloqueio();

        const intervalo = setInterval(() => {
            calcularTempoRestante();
            verificarDesbloqueio();
            const index = Math.floor(Math.random() * frasesRomanticas.length);
            setFrase(frasesRomanticas[index]);
        }, 3000);

        return () => clearInterval(intervalo);
    }, []);

    return (
        <div className="home-container">
            <div className="home-header">
                <h1>🌟 Bem-vinda, meu Amor 💜</h1>
                <p>{contador}</p>
                <p className="frase-romantica">{frase}</p>
            </div>
            <div className="home-links">
                <Link to="/surpresa" className={`home-link ${desbloqueado ? "" : "bloqueado"}`}>
                    <span className="link-icon">🎁</span>
                    Surpresas
                </Link>
                <Link to="/galeria" className={`home-link ${desbloqueado ? "" : "bloqueado"}`}>
                    <span className="link-icon">🖼️</span>
                    Galeria
                </Link>
                <Link to="/carta" className={`home-link ${desbloqueado ? "" : "bloqueado"}`}>
                    <span className="link-icon">💌</span>
                    Carta
                </Link>
                <Link to="/music" className={`home-link `}>
                    <span className="link-icon">🎶</span>
                    Zuzu
                </Link>
            </div>
            {!desbloqueado && <p className="bloqueio-mensagem">Os links serão desbloqueados no dia 15! 💖</p>}
        </div>
    );
}

export default Home;