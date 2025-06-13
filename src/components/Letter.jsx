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
                        Você é o motivo do meu sorriso todos os dias. Sua presença ilumina meu mundo e faz tudo valer a pena.
                        <br /><br />
                        Te amo mais do que palavras podem dizer. Que essa cartinha te lembre o quanto você é amada, especial e essencial na minha vida.
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
