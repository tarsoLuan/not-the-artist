
import './Items.css';
import Item from "../components/item/Item";

export default function Decoracao() {
    const items = [
        {
            img: "src/imgs/aang.jpeg",
            title: "Funko Pop Aang",
            price: "R$ 189,00"
        },
        {
            img: "src/imgs/potter.jpeg",
            title: "Funco Pop Harry Potter",
            price: "R$ 124,90"
        },
        {
            img: "src/imgs/spiderman.jpeg",
            title: "Funko Pop Spiderman",
            price: "R$ 162,90"
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
