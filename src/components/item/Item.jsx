import './Item.css'
import {Link} from 'react-router-dom';

export default function Item({itemInfo}) {
    
    return (
        <div className='book__card'>
            <Link to={`/detalhes/${itemInfo.id}`} state={{state : itemInfo}}>
                <img className='book__image' src={itemInfo.imgArray[0][0]} alt='book'></img>
                <div className='book__card-info'>
                    <span>
                        <h3>{itemInfo.name}</h3>
                        <p>{itemInfo.price}</p>
                    </span>
                </div>
            </Link>
        </div>  
    )
}