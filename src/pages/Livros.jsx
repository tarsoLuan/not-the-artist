import { useEffect, useState } from 'react';
import './Items.css';
import Item from "../components/item/Item";
import { getBooks } from '../infra/getData';

export default function Livros() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const books = await getBooks();
            setItems(books);
        }
        fetchData();
    }, []);

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