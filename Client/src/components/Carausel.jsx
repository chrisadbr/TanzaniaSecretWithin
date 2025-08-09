/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
// import { HiOutlineChevronLeft , HiOutlineChevronRight} from "react-icons/hi2";
import {ChevronLeft, ChevronRight} from 'react-feather';
import './Caraousel.css'
// 
export default function Carousel({slides, autoslides=false, interval=3000 }){
    const [curr, setCurr] = useState(0);
    const prev = () => setCurr(curr => curr === 0 ? slides.length - 1 : curr - 1)
    const next = () => setCurr(curr => curr === slides.length - 1 ?  0 : curr + 1)

    useEffect(() => {
        if (!autoslides) return;
        const slideInterval = setInterval(next, interval);

        // 
        return clearInterval(interval)
    }, [])
    return (
        <div className="carousel__container">
            <div className='slides__container' style={{transform: `translateX(-${curr * 100}%)`}}>
            {Object.values(slides).map((img) => (
                <img src={img.path} alt={img.path} />
             ))}
            </div>
            <div className="slides-btn__container">
                <button onClick={prev} className='carousel__btn'>
                   <ChevronLeft size={30} />
                </button>
                <button onClick={next} className='carousel__btn'>
                    <ChevronRight size={30}/>
                </button>
            </div>
            <div className="carousel__dots_container">
                <div className="carousel__dots">
                {slides.map((_, i) => (
                    <div className={`${curr === i ? 'dots_curr':'dots'}`} />
                ))}</div>
            </div>
        </div>
    )
}