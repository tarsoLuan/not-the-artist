
import './Items.css';
import Item from "../components/item/Item";

export default function Quadrinhos() {
    const items = [
        {
            img: "src/imgs/maus.jpeg",
            title: "Maus",
            price: "R$ 39,90"
        },
        {
            img: "src/imgs/watchmen.jpg",
            title: "Watchmen (Edicao Definitiva)",
            price: "R$ 439,78"
        },
        {
            img: "src/imgs/yourname.jpeg",
            title: "Your Name",
            price: "R$ 29,90"
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
