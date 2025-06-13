import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";

// Exemplo de dados com título e legenda
const imagens = [
    { src: "./Img1.jpg", titulo: "Nosso Primeiro Encontro", legenda: "O início de tudo 💖" },
    { src: "./Img2.jpg", titulo: "Passeio no Parque", legenda: "Um dia inesquecível juntos." },
    { src: "./Img3.jpg", titulo: "Sorrisos", legenda: "Sempre felizes um com o outro." },
    { src: "./Img8.jpg", titulo: "Viagem", legenda: "Explorando novos lugares." },
    { src: "./Img4.jpg", titulo: "Momentos Simples", legenda: "Curtindo a companhia." },
    { src: "./Img5.jpg", titulo: "Diversão", legenda: "Rindo até doer a barriga." },
    { src: "./Img6.jpg", titulo: "Jantar Especial", legenda: "Uma noite só nossa." },
    { src: "./Img7.jpg", titulo: "Mais Aventuras", legenda: "Sempre juntos." },
    { src: "./Img9.jpg", titulo: "Amor", legenda: "Te amo cada dia mais." },
    { src: "./Img10.jpg", titulo: "Festa", legenda: "Celebrando a vida." },
    { src: "./Img11.jpg", titulo: "Cumplicidade", legenda: "Parceiros para tudo." },
    { src: "./Img12.jpg", titulo: "Carinho", legenda: "Seu abraço é meu lar." },
    { src: "./Img13.jpg", titulo: "Alegria", legenda: "Sorrisos que contagiam." },
    { src: "./Img14.jpg", titulo: "Descanso", legenda: "Relaxando juntos." },
    { src: "./Img15.jpg", titulo: "Viagem 2", legenda: "Mais memórias incríveis." },
    { src: "./Img16.jpg", titulo: "Noite Estrelada", legenda: "Sonhando acordados." },
    { src: "./Img17.jpg", titulo: "Diversão 2", legenda: "Brincadeiras e risadas." },
    { src: "./Img18.jpg", titulo: "Passeio", legenda: "Caminhando lado a lado." },
    { src: "./Img19.jpg", titulo: "Amor 2", legenda: "Meu coração é seu." },
    { src: "./Img20.jpg", titulo: "Mais Sorrisos", legenda: "Felicidade em dobro." },
    { src: "./Img21.jpg", titulo: "Juntos Sempre", legenda: "Nada nos separa." },
    { src: "./Img22.jpg", titulo: "Momentos Únicos", legenda: "Cada instante vale ouro." },
    { src: "./Img23.jpg", titulo: "Para Sempre", legenda: "Nossa história continua." },
];

function splitArray(arr, n) {
    const mid = Math.ceil(arr.length / n);
    return [arr.slice(0, mid), arr.slice(mid)];
}

function Gallery() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalImg, setModalImg] = useState(null);

    const openModal = (img) => {
        setModalImg(img);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setModalImg(null);
    };

    const [row1, row2] = splitArray(imagens, 2);

    return (
        <div className="gallery-container">
            <h1>🖼️ Nossa Galeria de Memórias 🖼️</h1>
            <div className="gallery-double-row">
                <div className="gallery-grid">
                    {row1.map((img, index) => (
                        <div className="gallery-item" key={index}>
                            <img
                                src={img.src}
                                alt={img.titulo}
                                className="gallery-image"
                                onClick={() => openModal(img)}
                                style={{ cursor: "pointer" }}
                            />
                            <div className="gallery-caption">

                            </div>
                        </div>
                    ))}
                </div>
                <div className="gallery-grid">
                    {row2.map((img, index) => (
                        <div className="gallery-item" key={index + row1.length}>
                            <img
                                src={img.src}
                                alt={img.titulo}
                                className="gallery-image"
                                onClick={() => openModal(img)}
                                style={{ cursor: "pointer" }}
                            />
                            <div className="gallery-caption">
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Link to="/" className="btn-voltar">⬅️ Voltar para Home</Link>

            {modalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <img src={modalImg.src} alt={modalImg.titulo} className="modal-image" />
                        <div className="modal-caption">
                            {/* Removido o título */}
                            <p>{modalImg.legenda}</p>
                        </div>
                        <button className="modal-close" onClick={closeModal}>Fechar</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Gallery;