
import './Home.css';
export default function Home() {

    return (
        <div>
            <div className="banner__section">
                <img className="banner__image" src="src\imgs\promo.jpeg" alt="Banner"/>
            </div>
            <div className="speech-bubble__section">
                <div>
                    <img className="image__circle" src="src\imgs\cat1.jpeg" alt="Cat"/>
                </div>
                <div style={{paddingLeft: '20px'}}>
                    <p className="speech-bubble">
                        not the artist é uma loja de livros, quadrinhos e objetos de decoração do mundo geek.
                        10% de todo nosso lucro é doado para ONGS que cuidam de gatos abandonados. Assim, comprando na nossa 
                        loja você adquire produtos de qualidade e ajuda gatinhos em situação de rua.</p>
                </div>
            </div>
        </div>
    );
}
