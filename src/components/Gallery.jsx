import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";

// Exemplo de dados com título e legenda
const imagens = [
    { src: "./Img1.jpg", titulo: "Nosso Primeiro Encontro", legenda: "Nossas fotos bobas de testa kkk" },
    { src: "./Img2.jpg", titulo: "Passeio no Parque", legenda: "Lembra desse dia, zuzu?" },
    { src: "./Img3.jpg", titulo: "Sorrisos", legenda: "Como eu amei esse dia.. Honestamente um dos meus favoritos.. Eu queria sair mais com você!!" },
    { src: "./Img8.jpg", titulo: "Viagem", legenda: "Amo nosso beijo, já te contei que acho ele muito bonito? Encaixa direitinho" },
    { src: "./Img4.jpg", titulo: "Momentos Simples", legenda: "...Eu te amo" },
    { src: "./Img5.jpg", titulo: "Diversão", legenda: "Uma das nossas primeiras fotos.. Lembro desse dia até hoje. Eu havia te falado que não tiravamos muitas fotos e eu gostava de recordar dos momentos kkk" },
    { src: "./Img6.jpg", titulo: "Jantar Especial", legenda: "Continuaçãozinha." },
    { src: "./Img7.jpg", titulo: "Mais Aventuras", legenda: "Essa sim... Um dos dias mais especiais para mim... Foi quando começamos a andar juntos, lembro que não sentia sentimentos por mim, mas eu te achava incrivel e muito bonita.." },
    { src: "./Img9.jpg", titulo: "Amor", legenda: "Esse dia estava brava comigo, não me recordo do porque, mas apareceu umas meninas e tirou foto nossa, lembra? kkk você não queria." },
    { src: "./Img10.jpg", titulo: "Festa", legenda: "Eu" },
    { src: "./Img11.jpg", titulo: "Cumplicidade", legenda: "te" },
    { src: "./Img12.jpg", titulo: "Carinho", legenda: "amo" },
    { src: "./Img13.jpg", titulo: "Alegria", legenda: "Bejinho." },
    { src: "./Img14.jpg", titulo: "Descanso", legenda: "Esse abraço... Só Deus sabe o quão feliz que eu estava nesse dia!!" },
    { src: "./Img15.jpg", titulo: "Viagem 2", legenda: "Amo essas fotos bobas!" },
    { src: "./Img16.jpg", titulo: "Noite Estrelada", legenda: "Zuzuuuuuuuu" },
    { src: "./Img17.jpg", titulo: "Diversão 2", legenda: "Um dia colocarei um anel nesse seu dedo também." },
    { src: "./Img18.jpg", titulo: "Passeio", legenda: "Zuzuuus." },
    { src: "./Img19.jpg", titulo: "Amor 2", legenda: "Meu coração é seu, amor." },
    { src: "./Img20.jpg", titulo: "Mais Sorrisos", legenda: "Você me faz tão feliz." },
    { src: "./Img21.jpg", titulo: "Juntos Sempre", legenda: "Adoro essas fotos, deu pra perceber né." },
    { src: "./Img22.jpg", titulo: "Momentos Únicos", legenda: "Cada instante eu me sinto mais feliz ao seu lado." },
    { src: "./Img23.jpg", titulo: "Para Sempre", legenda: "Pra sempre iremos seguir juntos, amor." },
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
            <p className="gallery-description">
                Clique nas imagens para ver mais detalhes e relembrar momentos especiais que vivemos juntos. Cada foto conta uma parte da nossa história de amor!
                💖
            </p>
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