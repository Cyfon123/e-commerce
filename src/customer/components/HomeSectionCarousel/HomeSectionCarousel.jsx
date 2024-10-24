import React, { useRef } from 'react';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const HomeSectionCarousel = ({data,sectionName}) => {
    const carouselRef = useRef(null); // Create a ref for the carousel
    const responsive = {
        0: { items: 1 },
        540: { items: 2 },
        720: { items: 3 },
        1024: { items: 4 },
    };      

    const items = data.map((item, index) => <HomeSectionCard product={item} key={index} />);

    const handlePrev = () => {
        carouselRef.current.slidePrev(); // Slide to the previous item
    };

    const handleNext = () => {
        carouselRef.current.slideNext(); // Slide to the next item
    };

    return (
        <div  className='relative px-4 lg:px-8 border border-black'> 
        <h2>{sectionName}</h2>
            <div className='relative p-5 '>
                <AliceCarousel
                    ref={carouselRef} // Attach the ref to the carousel
                    items={items}
                    disableButtonsControls
                    infinite
                    responsive={responsive}
                    disableDotsControls
                />
            </div>
            <button
                variant="contained"
                className='z-50'
                style={{ position: 'absolute', top: '8rem', right: '0rem'}}
                aria-label='next'
                onClick={handleNext} // Call handleNext on click
            >
                <KeyboardArrowRightIcon sx={{color:'white', bgcolor:'grey'}}/>
            </button>
            <button
                variant="contained"
                className='z-50'
                style={{ position: 'absolute', top: '8rem', left: '0rem' }}
                aria-label='previous'
                onClick={handlePrev} // Call handlePrev on click
            >
                <KeyboardArrowLeftIcon sx={{color:'white', bgcolor:'grey'}}/>
            </button>
        </div>
    );
}

export default HomeSectionCarousel;
