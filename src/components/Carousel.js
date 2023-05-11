import React, {useState, useEffect, useRef} from 'react';
import './Carousel.css';
import {motion} from 'framer-motion';
import image1 from '../assets/russo-2032010636342-24.jpg'
import image2 from '../assets/russo-2032010636342-35.jpg'
import image3 from '../assets/russo-5558586822004.jpg'
import image4 from '../assets/russo-6766051011740-21.jpg'
import image5 from '../assets/russo-6766051011740-23.jpg'
import image6 from '../assets/russo-6813003337042-24.jpg'


const images = [image1, image2, image3, image4, image5, image6]

function Carousel() {
    const carousel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() => {
         setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    },[])
    
    return <div className='carousel-container' whiletop={{cursor: "auto"}}>
       <motion.div ref={carousel} className='carousel'>
          <motion.div className='inner'
                       drag="x"
                       dragConstraints={{right: 0, left: -width}}
                       initial={{x: 100}}
                       animate={{x: 0}}
                       transition={{duration: 0.8}}
                        >
               {images.map(image => (
                <motion.div className='item' key={image}>
                    <img src={image} alt="nuova collezione"/>
                </motion.div>
               ))}
          </motion.div>
       </motion.div>
    </div>
    
}

export default Carousel;