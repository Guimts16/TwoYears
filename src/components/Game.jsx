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
    },
    {
        nome: "Roxo",
        moletons: [
            { nome: "Moletom Preto", classe: "roupa-azul" },
            { nome: "Moletom Roxo", classe: "roupa-macacao" }
        ],
        calcas: [
            { nome: "Sem calça", classe: "" },
            { nome: "Calça preta", classe: "calca-preta" },
            { nome: "Calça roxa", classe: "calca-rosa" }
        ]
    },
    {
        nome: "Preto",
        moletons: [
            { nome: "Moletom Preto", classe: "roupa-preto" },
            { nome: "Moletom Cinza", classe: "roupa-cinza" }
        ],
        calcas: [
            { nome: "Sem calça", classe: "" },
            { nome: "Calça preta", classe: "calca-preta" },
            { nome: "Calça cinza", classe: "calca-cinza" }
        ]
    }
];

const acessorios = [
    { nome: "Laço", classe: "acessorio-laco" },
    { nome: "Chapéu", classe: "acessorio-chapeu" },
    { nome: "Óculos", classe: "acessorio-oculos" }
];

function getRandomIdx(arr) {
    return Math.floor(Math.random() * arr.length);
}

function Game() {
    const [conjuntoIdx, setConjuntoIdx] = useState(0);
    const [roupa, setRoupa] = useState(0);
    const [calca, setCalca] = useState(0);
    const [acessorio, setAcessorio] = useState(0);
    const [fotoMsg, setFotoMsg] = useState("");

    const moletons = conjuntos[conjuntoIdx].moletons;
    const calcas = conjuntos[conjuntoIdx].calcas;

    const trocarRoupa = () => setRoupa((prev) => (prev + 1) % moletons.length);
    const trocarCalca = () => setCalca((prev) => (prev + 1) % calcas.length);
    const trocarAcessorio = () => setAcessorio((prev) => (prev + 1) % acessorios.length);

    const randomizar = () => {
        setRoupa(getRandomIdx(moletons));
        setCalca(getRandomIdx(calcas));
        setAcessorio(getRandomIdx(acessorios));
        setFotoMsg("");
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
                    <button className="game-menina-btn" onClick={trocarAcessorio}>{acessorios[acessorio].nome}</button>
                </div>
                <div className="game-menina-imgbox">
                    <img src={personagemBase} alt="Personagem base" className="personagem-base" draggable={false} />
                    <div className={`roupa-layer ${moletons[roupa].classe}`}></div>
                    <div className={`calca-layer ${calcas[calca].classe}`}></div>
                    <div className={`acessorio-layer ${acessorios[acessorio].classe}`}></div>
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
