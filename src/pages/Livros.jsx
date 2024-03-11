import './Items.css';
import Item from "../components/item/Item";

export default function Livros() {
    const items = [
        {
            img: "src/imgs/coraline.jpeg",
            title: "Coraline",
            price: "R$ 39,90"
        },
        {
            img: "src/imgs/messias.jpeg",
            title: "Messias de Duna - Capa Dura",
            price: "R$ 84,90"
        },
        {
            img: "src/imgs/fronteira.jpeg",
            title: "Sul da Fronteira, Oeste do Sol",
            price: "R$ 29,90"
        }
        ,
        {
            img: "src/imgs/sapiens.jpeg",
            title: "Sapiens: O Nascimento da Humanidade",
            price: "R$ 26,90"
        }
        ,
        {
            img: "src/imgs/it.jpg",
            title: "It: A Coisa",
            price: "R$ 52,63"
        }
        ,
        {
            img: "src/imgs/shining.jpg",
            title: "O Iluminado",
            price: "R$ 24,90"
        }
    ];

    return (
        <div style={{paddingTop: '40px'}}>
            <div className="items__section">
                {items.map((item, index) => {
                    return (
                        <Item key={index} itemInfo={item}/>
                    )
                })} 
            </div>
        </div>
    );

}