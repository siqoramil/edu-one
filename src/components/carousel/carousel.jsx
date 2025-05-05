import React from 'react';
import { Carousel } from 'antd';
import './carousel.scss';

export const CarouselComp = () => {
    return (
        <Carousel
            arrows
            autoplay={{ dotDuration: true }}
            infinite
            className="carousel"
        >
            <div className='c_1'>
                <div className="desc">
                    1
                </div>
            </div>
            <div className='c_2'>
                <div className="desc">
                    2
                </div>
            </div>
        </Carousel>
    );
};
