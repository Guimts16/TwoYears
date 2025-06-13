import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Surpresa.css";

const presentes = [
    { dia: 23, titulo: "Presente 1", mensagem: "❤️ Você me faz lembrar como a vida é importante, e é preciso sempre se manter forte e persistente, é como um sábia me disse.. 'Depois da tempestade, terá o árco-íris'", Imagem: "../public/Img1.jpg" },
    { dia: 24, titulo: "Presente 2", mensagem: "❤️ Nunca se esqueça dos seus valores, você é inteligente e muito capaz! Eu tenho muito orgulho de você e isso eu percebo todos os dias que se passam!!", Imagem: "../public/Img2.jpg" },
    { dia: 25, titulo: "Presente 3", mensagem: "❤️ A cada dia que passa, percebo o quanto você ilumina minha vida com sua força e determinação. Você é a prova de que o amor e a persistência podem superar qualquer desafio.", Imagem: "../public/Img3.jpg" },
    { dia: 26, titulo: "Presente 4", mensagem: "❤️ Você é a razão pela qual acredito que os dias podem ser melhores. Sua coragem e inteligência me inspiram a ser alguém melhor a cada momento.", Imagem: "../public/Img4.jpg" },
    { dia: 27, titulo: "Presente 5", mensagem: "❤️ Você é o meu porto seguro, o lugar onde encontro paz e felicidade. Obrigado por ser tão especial e por me mostrar o verdadeiro significado do amor.", Imagem: "../public/Img5.jpg" },
    { dia: 28, titulo: "Presente 6", mensagem: "❤️ Cada momento ao seu lado é uma lembrança preciosa que guardo com carinho. Você é a luz que ilumina meu caminho e me faz acreditar em dias melhores.", Imagem: "../public/Img6.jpg" },
    { dia: 29, titulo: "Presente 7", mensagem: "❤️❤️❤️ Faltando 1 dia… Já tô ansioso pelo que preparei pra amanhã!", Imagem: "../public/Img7.jpg" },
    { dia: 30, titulo: "Presente Final", mensagem: "Feliz 2 anos de nós 💜 Que venham muitos mais e que cada dia que passe nós estejamos mais próximos e que isso se mutiplique até o final! Eu te amo, zuzu!", Imagem: "../public/Img8.jpg" },
];

function Surpresa() {
    const hoje = new Date().getDate();
    const [abertos, setAbertos] = useState([]);

    const handleAbrir = (dia) => {
        if (hoje >= dia && !abertos.includes(dia)) {
            setAbertos([...abertos, dia]);
        }
    };

    return (
        <div className="surpresa-container">
            <h2>🎁 Presentes para você 🎁</h2>
            <div className="presentes-grid">
                {presentes.map((presente, index) => (
                    <div key={index} className="presente-card">
                        <button
                            className="btn-abrir"
                            disabled={hoje < presente.dia}
                            onClick={() => handleAbrir(presente.dia)}
                        >
                            {hoje < presente.dia
                                ? `Somente dia ${presente.dia}`
                                : abertos.includes(presente.dia)
                                    ? presente.titulo
                                    : "Clique para abrir 🎁"}
                        </button>
                        {abertos.includes(presente.dia) && (
                            <>
                                <p className="mensagem">{presente.mensagem}</p>
                                <img
                                    src={presente.Imagem}
                                    alt={presente.titulo}
                                    className="presente-imagem"
                                />
                            </>
                        )}
                    </div>
                ))}
            </div>
            <Link to="/" className="btn-voltar">⬅️ Voltar para Home</Link>
        </div>
    );
}

export default Surpresa;
