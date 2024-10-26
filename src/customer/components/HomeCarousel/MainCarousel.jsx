import React from 'react';
import { mainCarouselData } from './MainCarouselData'; // Ensure this path is correct
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousel = () => {
    const items = mainCarouselData.map((item, index) => (
        <img 
            key={index} // Add a unique key for each item
            className='cursor-pointer' 
            role='presentation' 
            src={item.image} 
            alt="Image" 
            style={{ width: '100%', height: '500px', objectFit: 'cover' }} 
        />
    ));

    return (
        <AliceCarousel
            items={items}
            autoPlay
            autoPlayStrategy="none"
            autoPlayInterval={1000}
            animationDuration={1000}
            animationType="fadeout"
            infinite
            touchTracking={false}
            disableDotsControls
            disableButtonsControls
        />
    );
}

export default MainCarousel;
