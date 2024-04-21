
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Detail.css';

export default function Detail() {
    let { state } = useLocation();
    const itemInfo = state.state;
    const obj = itemInfo.imgArray[0]
    const [mainImage, setMainImage] = useState(obj[0]);
    

    function changeImage(event) {
        setMainImage(event.target.src);
    }

    return (
        <div>
            <div className='grid__container'>
                <div className='image__container'>
                    <img className='main__image' src={mainImage} alt='book'></img>
                    <div className="other__images">
                        {Object.keys(obj).map((key, index) => (
                            <div key={index} className='other__image-container'>
                                <img src={obj[key]} alt={`Image ${key}`} onClick={changeImage} className='other__image'/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='info__container'>
                    <h2>{itemInfo.name}</h2>
                    <p>{itemInfo.price}</p>
                    <p>{itemInfo.description}</p>
                </div>
            </div>
            
        </div>
    );
}