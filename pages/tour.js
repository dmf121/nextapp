import MainLayout from "./MainLayout"
import styles from './Tour.module.css'
import Image from "next/image"
import { useEffect } from 'react'



export default function About() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '/aboutScript.js';
        document.body.appendChild(script);
        return () => {
          document.body.removeChild(script);
        };
      }, []);

    return (
        <>
    <div className={styles.tour}>
      <MainLayout>
        <div className={styles.tourContainer}>
            <div className='title title-center title-h2-white'>
                <h1>Provide Packege</h1>
                <h2>Convenience</h2>
            </div>

            <div className={styles.tourCards}>
                <button  className={`arrow ${styles.prev} prev`}>
                        <Image src="/left-arrow.svg" width={50} height={50} alt="left-arrow"/>
                </button>

                <div className={`${styles.outter} outter`}>

                    <div className={`${styles.inner} inner`}>
                        <div className={`${styles.tourCard} card`}>
                            <div className={styles.tourCardImg}>
                                <Image src="/kyiv.jpg" alt="" width={370} height={370} className="tour-card-image"/>
                            </div>
                            <div className={styles.tourCardDescription}>
                                <div className={styles.tourCardText}>
                                    <h1 className="titleItemDarkSmall tour-card-title">Kyiv, Ukraine</h1>
                                    <p className="smallText">Accusamus et iustoAccusamus et iusto odio bolo odio bolo
                                        digti odio ball atque.
                                        volup tatum delenite.</p>
                                </div>
                                <div className={styles.tourCardPrice}>
                                    <h1 className="titleItemBlue tour-price">$450</h1>
                                    <h2 className="titleItemDarkSmall">2 Days</h2>
                                    <h2 className="titleItemDarkSmall">3 Nights</h2>
                                </div>
                                
                            </div>
                            <div className={styles.cardBottom}>
                                    <div className="cardRatingDiv">
                                        <h2 className="smallText">Rating</h2>
                                        <div className="cardRating">
                                            ★★★★★
                                            <div className="ratingActive">★★★★★</div>
                                        </div>
                                    </div>
                                    
                                    <div className={styles.cardBottomBtn}>
                                        <button className={styles.bookingTrigger}>Book Now</button>
                                    </div>
                            </div>
                        </div>

                        <div className={`${styles.tourCard} card`}>
                            <div className={styles.tourCardImg}>
                                <Image src="/dubai.jpg" alt="" width={370} height={370} className="tour-card-image"/>
                            </div>
                            <div className={styles.tourCardDescription}>
                                <div className={styles.tourCardText}>
                                    <h1 className="titleItemDarkSmall tour-card-title">Dubai, UAE</h1>
                                    <p className="smallText">Accusamus et iustoAccusamus et iusto odio bolo odio bolo
                                        digti odio ball atque.
                                        volup tatum delenite.</p>
                                </div>
                                <div className={styles.tourCardPrice}>
                                    <h1 className="titleItemBlue tour-price">$510</h1>
                                    <h2 className="titleItemDarkSmall">2 Days</h2>
                                    <h2 className="titleItemDarkSmall">3 Nights</h2>
                                </div>
                                
                            </div>
                            <div className={styles.cardBottom}>
                                    <div className="cardRatingDiv">
                                        <h2 className="smallText">Rating</h2>
                                        <div className="cardRating">
                                            ★★★★★
                                            <div className="ratingActive">★★★★★</div>
                                        </div>
                                    </div>
                                    
                                    <div className={styles.agencyCardBottomBtn}>
                                        <button className={styles.bookingTrigger}>Book Now</button>
                                    </div>
                            </div>
                        </div>

                        <div className={`${styles.tourCard} card`}>
                            <div className={styles.tourCardImg}>
                                <Image src="/warsawa.jpg" alt="" width={370} height={370} className="tour-card-image"/>
                            </div>
                            <div className={styles.tourCardDescription}>
                                <div className={styles.tourCardText}>
                                    <h1 className="titleItemDarkSmall tour-card-title">Warsawa, Poland</h1>
                                    <p className="smallText">Accusamus et iustoAccusamus et iusto odio bolo odio bolo
                                        digti odio ball atque.
                                        volup tatum delenite.</p>
                                </div>
                                <div className={styles.tourCardPrice}>
                                    <h1 className="titleItemBlue tour-price">$350</h1>
                                    <h2 className="titleItemDarkSmall">2 Days</h2>
                                    <h2 className="titleItemDarkSmall">3 Nights</h2>
                                </div>
                                
                            </div>
                            <div className={styles.cardBottom}>
                                    <div className="cardRatingDiv">
                                        <h2 className="smallText">Rating</h2>
                                        <div className="cardRating">
                                            ★★★★★
                                            <div className="ratingActive">★★★★★</div>
                                        </div>
                                    </div>
                                    
                                    <div className={styles.agencyCardBottomBtn}>
                                        <button className={styles.bookingTrigger}>Book Now</button>
                                    </div>
                            </div>
                        </div>

                        <div className={`${styles.tourCard} card`}>
                            <div className={styles.tourCardImg}>
                                <Image src="/rome.jpg" alt="" width={370} height={370} className="tour-card-image"/>
                            </div>
                            <div className={styles.tourCardDescription}>
                                <div className={styles.tourCardText}>
                                    <h1 className="titleItemDarkSmall tour-card-title">Rome, Italy</h1>
                                    <p className="smallText">Accusamus et iustoAccusamus et iusto odio bolo odio bolo
                                        digti odio ball atque.
                                        volup tatum delenite.</p>
                                </div>
                                <div className={styles.tourCardPrice}>
                                    <h1 className="titleItemBlue tour-price">$515</h1>
                                    <h2 className="titleItemDarkSmall">2 Days</h2>
                                    <h2 className="titleItemDarkSmall">3 Nights</h2>
                                </div>
                                
                            </div>
                            <div className={styles.cardBottom}>
                                    <div className="cardRatingDiv">
                                        <h2 className="smallText">Rating</h2>
                                        <div className="cardRating">
                                            ★★★★★
                                            <div className="ratingActive">★★★★★</div>
                                        </div>
                                    </div>
                                    
                                    <div className={styles.agencyCardBottomBtn}>
                                        <button className={styles.bookingTrigger}>Book Now</button>
                                    </div>
                            </div>
                        </div>

                        <div className={`${styles.tourCard} card`}>
                            <div className={styles.tourCardImg}>
                                <Image src="/paris.jpg" alt="" width={370} height={370} className="tour-card-image"/>
                            </div>
                            <div className={styles.tourCardDescription}>
                                <div className={styles.tourCardText}>
                                    <h1 className="titleItemDarkSmall tour-card-title">Paris, France</h1>
                                    <p className="smallText">Accusamus et iustoAccusamus et iusto odio bolo odio bolo
                                        digti odio ball atque.
                                        volup tatum delenite.</p>
                                </div>
                                <div className={styles.tourCardPrice}>
                                    <h1 className="titleItemBlue tour-price">$475</h1>
                                    <h2 className="titleItemDarkSmall">2 Days</h2>
                                    <h2 className="titleItemDarkSmall">3 Nights</h2>
                                </div>
                                
                            </div>
                            <div className={styles.cardBottom}>
                                    <div className="cardRatingDiv">
                                        <h2 className="smallText">Rating</h2>
                                        <div className="cardRating">
                                            ★★★★★
                                            <div className="ratingActive">★★★★★</div>
                                        </div>
                                    </div>
                                    
                                    <div className={styles.agencyCardBottomBtn}>
                                        <button className={styles.bookingTrigger}>Book Now</button>
                                    </div>
                            </div>
                        </div>

                        <div className={`${styles.tourCard} card`}>
                            <div className={styles.tourCardImg}>
                                <Image src="/kyiv.jpg" alt="" width={370} height={370} className="tour-card-image"/>
                            </div>
                            <div className={styles.tourCardDescription}>
                                <div className={styles.tourCardText}>
                                    <h1 className="titleItemDarkSmall tour-card-title">Kyiv, Ukraine</h1>
                                    <p className="smallText">Accusamus et iustoAccusamus et iusto odio bolo odio bolo
                                        digti odio ball atque.
                                        volup tatum delenite.</p>
                                </div>
                                <div className={styles.tourCardPrice}>
                                    <h1 className="titleItemBlue tour-price">$470</h1>
                                    <h2 className="titleItemDarkSmall">2 Days</h2>
                                    <h2 className="titleItemDarkSmall">3 Nights</h2>
                                </div>
                                
                            </div>
                            <div className={styles.cardBottom}>
                                    <div className="cardRatingDiv">
                                        <h2 className="smallText">Rating</h2>
                                        <div className="cardRating">
                                            ★★★★★
                                            <div className="ratingActive">★★★★★</div>
                                        </div>
                                    </div>
                                    
                                    <div className={styles.agencyCardBottomBtn}>
                                        <button className={styles.bookingTrigger}>Book Now</button>
                                    </div>
                            </div>
                        </div>

                        <div className={`${styles.tourCard} card`}>
                            <div className={styles.tourCardImg}>
                                <Image src="/dubai.jpg" alt="" width={370} height={370} className="tour-card-image"/>
                            </div>
                            <div className={styles.tourCardDescription}>
                                <div className={styles.tourCardText}>
                                    <h1 className="titleItemDarkSmall tour-card-title">Dubai, UAE</h1>
                                    <p className="smallText">Accusamus et iustoAccusamus et iusto odio bolo odio bolo
                                        digti odio ball atque.
                                        volup tatum delenite.</p>
                                </div>
                                <div className={styles.tourCardPrice}>
                                    <h1 className="titleItemBlue tour-price">$510</h1>
                                    <h2 className="titleItemDarkSmall">2 Days</h2>
                                    <h2 className="titleItemDarkSmall">3 Nights</h2>
                                </div>
                                
                            </div>
                            <div className={styles.cardBottom}>
                                    <div className="cardRatingDiv">
                                        <h2 className="smallText">Rating</h2>
                                        <div className="cardRating">
                                            ★★★★★
                                            <div className="ratingActive">★★★★★</div>
                                        </div>
                                    </div>
                                    
                                    <div className={styles.agencyCardBottomBtn}>
                                        <button className={styles.bookingTrigger}>Book Now</button>
                                    </div>
                            </div>
                        </div>

                        <div className={`${styles.tourCard} card`}>
                            <div className={styles.tourCardImg}>
                                <Image src="/bern.jpg" alt="" width={370} height={370} className="tour-card-image"/>
                            </div>
                            <div className={styles.tourCardDescription}>
                                <div className={styles.tourCardText}>
                                    <h1 className="titleItemDarkSmall tour-card-title">Burn, Slovenia</h1>
                                    <p className="smallText">Accusamus et iustoAccusamus et iusto odio bolo odio bolo
                                        digti odio ball atque.
                                        volup tatum delenite.</p>
                                </div>
                                <div className={styles.tourCardPrice}>
                                    <h1 className="titleItemBlue tour-price">$350</h1>
                                    <h2 className="titleItemDarkSmall">2 Days</h2>
                                    <h2 className="titleItemDarkSmall">3 Nights</h2>
                                </div>
                                
                            </div>
                            <div className={styles.cardBottom}>
                                    <div className="cardRatingDiv">
                                        <h2 className="smallText">Rating</h2>
                                        <div className="cardRating">
                                            ★★★★★
                                            <div className="ratingActive">★★★★★</div>
                                        </div>
                                    </div>
                                    
                                    <div className={styles.agencyCardBottomBtn}>
                                        <button className={styles.bookingTrigger}>Book Now</button>
                                    </div>
                            </div>
                        </div>

                        <div className={`${styles.tourCard} card`}>
                            <div className={styles.tourCardImg} id="berlin">
                                <Image src="/berlin.jpg" alt="" width={370} height={370} className="tour-card-image"/>
                            </div>
                            <div className={styles.tourCardDescription}>
                                <div className={styles.tourCardText}>
                                    <h1 className="titleItemDarkSmall tour-card-title">Berlin, Germany</h1>
                                    <p className="smallText">Accusamus et iustoAccusamus et iusto odio bolo odio bolo
                                        digti odio ball atque.
                                        volup tatum delenite.</p>
                                </div>
                                <div className={styles.tourCardPrice}>
                                    <h1 className="titleItemBlue tour-price">$450</h1>
                                    <h2 className="titleItemDarkSmall">2 Days</h2>
                                    <h2 className="titleItemDarkSmall">3 Nights</h2>
                                </div>
                                
                            </div>
                            <div className={styles.cardBottom}>
                                    <div className="cardRatingDiv">
                                        <h2 className="smallText">Rating</h2>
                                        <div className="cardRating">
                                            ★★★★★
                                            <div className="ratingActive">★★★★★</div>
                                        </div>
                                    </div>
                                    
                                    <div className={styles.agencyCardBottomBtn}>
                                        <button className={styles.bookingTrigger}>Book Now</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button  className={`arrow ${styles.next} next`}>
                        <Image src="/right-arrow.svg" width={50} height={50} alt="right-arrow"/>
                </button>
            </div>

            <div className="title title-h2-white title-center">
                <h2>CUSTOM PACKAGE</h2>
            </div>


            <div className="container">
                <div className={styles.tourInputs}>
                    <div className={styles.tourInput}>
                        <input type="location" placeholder="Location" className="smallText"/>
                        <i className="fa fa-map-marker fa-lg"></i>
                    </div>

                    <div className={styles.tourInput}>
                        <input type="date" placeholder="Check In" className="smallText"/>    
                        <i className="fa fa-calendar fa-lg"></i>
                    </div>

                    <div className={styles.tourInput}>
                        <input type="date" placeholder="Check Out" value="Check Out" className="smallText"/>  
                        <i className="fa fa-calendar fa-lg"></i>  
                    </div>

                    <div className={styles.tourInput}>
                        <input type="number" name="people" min="1" id="" placeholder="People" className="smallText"/> 
                        <i className="fa fa-user fa-lg"></i>   
                    </div>

                    <div className={styles.tourInputBtn}>
                        <button className="btn">Book Now</button>
                    </div>

                    <div className={styles.tourInputsOverlay}></div>
                </div>
            </div>
            


        </div>
      </MainLayout>
      </div>

        </>
    )
}