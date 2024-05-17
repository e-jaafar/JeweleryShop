import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useSelector } from 'react-redux';
import "./Carousel.css";
import { NavLink } from 'react-router-dom';

function shuffleArray(array) {
    const newArray = [...array]; // copier tablo base
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function CarouselComponent() {
    const jewelrySlice = useSelector((state) => state.jewelrySlice.data); // on récupère le state
    const shuffledJewelry = shuffleArray(jewelrySlice).slice(0, 4); // on prend les 4 premiers
    return (
        <div>
            <div className="carouselAll">
                <h1 className='h1Carousel'>Trending</h1>
                <Carousel
                    showStatus={false}
                    showThumbs={false}
                    showArrows={true}
                    showIndicators={true}
                    infiniteLoop={true}
                    centerMode={true}
                    emulateTouch={true}
                >
                    {shuffledJewelry.map((jewelryItem, index) => (
                        <div key={index} className='carouselAllImage'>
                            <NavLink to={`/productDetail/${jewelryItem.name}`}>
                                <img style={{ width: "50%" }} src={jewelryItem.image} alt={jewelryItem.name} />
                                <p className="legend">{jewelryItem.name}</p>
                            </NavLink>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default CarouselComponent;
