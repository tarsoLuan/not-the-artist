import './Item.css'

export default function Item({itemInfo}) {
    return (
        <div className='book__card'>
            <img className='book__image' src={itemInfo.img} alt='book'></img>
            <div className='book__card-info'>
                <span>
                    <h3>{itemInfo.title}</h3>
                    <p>{itemInfo.price}</p>
                </span>
            </div>
        </div>  
    )
}