import React, { useState } from "react";
import "./Letter.css";
import { Link } from "react-router-dom";

function Letter() {
    const [aberta, setAberta] = useState(false);

    const handleAbrirCarta = () => {
        setAberta(true);
    };

    const handleFecharCarta = () => {
        setAberta(false);
    };

    return (

        <div className="letter-container">
            <div className={`envelope-wrapper ${aberta ? "open" : ""}`} onClick={handleAbrirCarta}>
                <div className="envelope-top"></div>
                <div className="envelope-bottom"></div>
                <div className="envelope-left"></div>
                <div className="envelope-right"></div>
            </div>

            {aberta && (
                <div className="letter fullscreen">
                    <button className="close-btn" onClick={handleFecharCarta}>✖</button>
                    <p className="letter-message">
                        Minha princesa 💜
                        <br /><br />
                        Meu amor, hoje é um dia muito especial para nós. É o dia em que celebramos o nosso amor, a nossa união e tudo o que construímos juntos. Eu quero que você saiba o quanto você é importante para mim e como sou grato por ter você na minha vida
                        <br /><br />
                        Te amo mais do que palavras podem dizer. Que essa cartinha te lembre o quanto você é amada, especial e essencial na minha vida.
                        <br /><br />
                        Quero te dizer que todo esse tempo, cada dia que se passou, percebo o quão orgulhoos estou de nós, crescemos juntos e mudamos, iss foi tão bom, e mágico pra mim... Eu agradeço por tudo, meu amor, e espero que possamos um dia ver o melhor um do outro, juntos, na nossa casa, com nossos filhos, e vivendo a vida que sempre sonhamos.
                        <br /><br />
                        E vê se naum iquece, faltam ainda 14 dias pro melhor dia do mundo todo!! 😘
                        <br /><br />
                        Para sempre com você 💖
                    </p>
                </div>
            )}

            {!aberta && (
                <p className="click-message">Clique no envelope para abrir sua mensagem especial ✨</p>
            )}
            <Link to="/" className="btn-voltar">⬅️ Voltar para Home</Link>
        </div>

    );
}

export default Letter;
