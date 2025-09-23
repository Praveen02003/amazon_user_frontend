import React, { useContext, useEffect } from 'react'
import images from '../slideshowimages/Slideshowimages'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from 'react-router-dom';
import laptopimage from '../assets/laptop.jpg'
import mobileimage from '../assets/mobile.jpg'
import mouseimage from '../assets/mouse.jpg'
import tvimage from '../assets/tv.jpg'
import earpods from '../assets/earpods.jpg'
import chargerimage from '../assets/chargers.jpg'
import keyboardimage from '../assets/keyboard.jpg'
import hometheatreimage from '../assets/hometheatre.jpg'
import '../Home/Home.css'
import { Mycontext } from '../App';
import { getloginuserdetails } from '../Functions/Getlloginuserdetails';
export const Home = () => {
    const {
        count,
        setCount,
      } = useContext(Mycontext)
    const navigate = useNavigate()
    useEffect(()=>{
        //getloginuserdetails(count,setCount,navigate)
    },[count])
    return (
        <div className='home'>
            {/* Hero Slideshow */}
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 2500 }}
                loop
                className="slideshow-container"
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img src={img.image} alt='img' className='slideshow' />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Categories Section */}
            <section className="categories-section">
                <h1 className="categories-title">Shop by Categories</h1>
                <div className='categories-grid'>
                    <div className='category-card' onClick={() => navigate('/laptops')}>
                        <img src={laptopimage} alt="Laptops" />
                        <h2>Laptops</h2>
                    </div>
                    <div className='category-card' onClick={() => navigate('/mobiles')}>
                        <img src={mobileimage} alt="Mobiles" />
                        <h2>Mobiles</h2>
                    </div>
                    <div className='category-card' onClick={() => navigate('/earpods')}>
                        <img src={earpods} alt="Earpods" />
                        <h2>Earpods</h2>
                    </div>
                    <div className='category-card' onClick={() => navigate('/tvs')}>
                        <img src={tvimage} alt="TV" />
                        <h2>TV</h2>
                    </div>
                    <div className='category-card' onClick={() => navigate('/hometheatres')}>
                        <img src={hometheatreimage} alt="Hometheatres" />
                        <h2>Hometheatres</h2>
                    </div>
                    <div className='category-card' onClick={() => navigate('/keyboards')}>
                        <img src={keyboardimage} alt="Keyboards" />
                        <h2>Keyboards</h2>
                    </div>
                    <div className='category-card' onClick={() => navigate('/mouses')}>
                        <img src={mouseimage} alt="Mouse" />
                        <h2>Mouse</h2>
                    </div>
                    <div className='category-card' onClick={() => navigate('/chargers')}>
                        <img src={chargerimage} alt="Chargers" />
                        <h2>Chargers</h2>
                    </div>
                </div>
            </section>
        </div>

    )
}
