import React from 'react';
import AliceCarousel from 'react-alice-carousel';

import styles from '/styles/Carousel.module.css';
import "react-alice-carousel/lib/alice-carousel.css";

import Image from 'next/image';

import image1 from '/public/img/produits/hamsterFood1.png';
import image2 from '/public/img/produits/catfishtoy.png';
import image3 from '/public/img/produits/birdHouse.png';
import image4 from '/public/img/produits/aquarium1.png';
import image5 from '/public/img/produits/AquariumCoralFishTank.png';
import image6 from '/public/img/produits/catlLitter.png';
import image7 from '/public/img/produits/catScratchToy.png';
import image8 from '/public/img/produits/hansterCage.jpg';
import image9 from '/public/img/produits/harnaiChien.png';
import image10 from '/public/img/produits/ReptileAutomaticMisterSystem.jpg';
import image11 from '/public/img/produits/nerfDog.png';

const items = [
    <Image src={image1} alt={'Hamster food' || 'Default Image'} className={styles.sliderimg} priority={true}/>,
    <Image src={image2} alt={'catfishtoy' || 'Default Image'} className={styles.sliderimg} priority={true}/>,
    <Image src={image3} alt={'birdHouse' || 'Default Image'} className={styles.sliderimg} priority={true}/>,
    <Image src={image4} alt={'aquarium1' || 'Default Image'} className={styles.sliderimg} priority={true}/>,
    <Image src={image5} alt={'AquariumCoralFishTank' || 'Default Image'} className={styles.sliderimg} priority={true}/>,
    <Image src={image6} alt={'catlLitter' || 'Default Image'} className={styles.sliderimg} priority={true}/>,
    <Image src={image7} alt={'catScratchToy' || 'Default Image'} className={styles.sliderimg} priority={true}/>,
    <Image src={image8} alt={'hansterCage' || 'Default Image'} className={styles.sliderimg} priority={true}/>,
    <Image src={image9} alt={'harnaiChien' || 'Default Image'} className={styles.sliderimg} priority={true}/>,
    <Image src={image10} alt={'ReptileAutomaticMisterSystem' || 'Default Image'} className={styles.sliderimg} priority={true}/>,
    <Image src={image11} alt={'nerfDog' || 'Default Image'} className={styles.sliderimg} priority={true}/>

]

function Carousel() {
    return (
        <div className={styles.carouselImg}>
            <AliceCarousel mouseTracking autoWidth autoPlay infinite autoPlayInterval="4000" items={items}/>
        </div>
    )
}


export default Carousel;