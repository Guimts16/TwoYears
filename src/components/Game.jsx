import React, { useState } from "react";
import "./Game.css";
import personagemBase from "/personagem.png";
import { Link } from "react-router-dom";
const conjuntos = [
    {
        nome: "Marrom",
        moletons: [
            { nome: "Sem Moletom", classe: "" },
            { nome: "Moletom Biscoito", classe: "roupa-cookie" },
            { nome: "Moletom Ursinho", classe: "roupa-ursinho" },
            { nome: "Moletom Ursinho 2", classe: "roupa-ursinho2" },
            { nome: "Pijama Ursinho", classe: "pijama-marrom" }
        ],
        calcas: [
            { nome: "Sem calça", classe: "" },
            { nome: "Calça de Ursinho", classe: "calca-pijama" },
            { nome: "Calça marrom", classe: "calca-Crispy" }
        ]
    }

];


function getRandomIdx(arr) {
    return Math.floor(Math.random() * arr.length);
}

function Game() {
    const [conjuntoIdx, setConjuntoIdx] = useState(0);
    const [roupa, setRoupa] = useState(0);
    const [calca, setCalca] = useState(0);

    const moletons = conjuntos[conjuntoIdx].moletons;
    const calcas = conjuntos[conjuntoIdx].calcas;

    const trocarRoupa = () => setRoupa((prev) => (prev + 1) % moletons.length);
    const trocarCalca = () => setCalca((prev) => (prev + 1) % calcas.length);

    const randomizar = () => {
        setRoupa(getRandomIdx(moletons));
        setCalca(getRandomIdx(calcas));
    };
    const escolherConjunto = (idx) => {
        setConjuntoIdx(idx);
        setRoupa((prev) => Math.min(prev, conjuntos[idx].moletons.length - 1));
        setCalca((prev) => Math.min(prev, conjuntos[idx].calcas.length - 1));
    };

    return (
        <div className="game-container">
            <h2 className="game-title">Joguinho de vestir!</h2>
            <div style={{ marginBottom: 20 }}>
                {conjuntos.map((c, idx) => (
                    <button
                        key={c.nome}
                        className={`game-reset-btn${conjuntoIdx === idx ? " selected" : ""}`}
                        style={{ marginRight: 10, fontWeight: conjuntoIdx === idx ? "bold" : undefined }}
                        onClick={() => escolherConjunto(idx)}
                    >
                        {c.nome}
                    </button>
                ))}
            </div>
            <div className="game-uma-menina">
                <div className="game-coluna-botoes">
                    <button className="game-menina-btn" onClick={trocarRoupa}>{moletons[roupa].nome}</button>
                    <button className="game-menina-btn" onClick={trocarCalca}>{calcas[calca].nome}</button>
                </div>
                <div className="game-menina-imgbox">
                    <img src={personagemBase} alt="Personagem base" className="personagem-base" draggable={false} />
                    <div className={`roupa-layer ${moletons[roupa].classe}`}></div>
                    <div className={`calca-layer ${calcas[calca].classe}`}></div>
                </div>
            </div>
            <div style={{ margin: "30px 0" }}>
                <button className="game-reset-btn" onClick={randomizar} style={{ marginRight: 10 }}>
                    Aleatorizar Look
                </button>
            </div>
            <Link to="/" className="btn-voltar">⬅️ Voltar para Home</Link>

        </div>
    );
}

export default Game;
