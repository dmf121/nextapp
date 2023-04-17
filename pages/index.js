// import {MainLayout} from "./MainLayout"
import { useRouter } from "next/router"
import styles from './Home.module.css'
import Image from "next/image"
import { useEffect } from 'react'
import MainLayout from "./MainLayout"

export default function Home() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/homeScript.js';
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className={styles.home}>
      <MainLayout>
          <div className='container'>
            <div className='title'>
              <h1>World Best Travell Agency</h1>
              <h2>Save Upto 40% For Upcoming Summer</h2>
              <h3>Starts From $250 Only   (2 Days, 3 Nights)</h3>
              <button className='btn'><a>EXPLORE NOW</a></button>
            </div>
          </div>
      </MainLayout>
      </div>

      <div className='container'>
                <div className={styles.agencyContent}>
                    <div className={styles.agencyText}>
                      <div className="title">
                          <h1>Our Agency</h1>
                          <h2>Feature Trip</h2>
                      </div>
                      <p className='smallText'>Accusamus et iusto odio bolo
                          dignissimos ducimus qui lawer blandits praesentium Accus amus et iusto odio bolo atque
                          volup tatum delenite.</p>
                      <div>
                          <button className='btn'><a>BOOK NOW</a></button>
                      </div>
                    </div>
                  

                  <div className={styles.featureCards}>
                    <button  className='arrow prev'>
                      <Image src="/left-arrow.svg" width={50} height={50} alt="left-arrow"/>
                    </button>

                    <div className={`${styles.agencyCard} card`}>
                            <div className={styles.agencyCardImg}>
                                <Image src="/dubai.jpg" alt="" width={370} height={390}/>
                            </div>
                            <h1 className={`titleItemDarkSmall ${styles.agencyCardText}`}>Dubai, UAE</h1>
                            <div className={styles.agencyCardBottom}>
                                <div className='cardRatingDiv'>
                                    <h2 className="smallText">Rating</h2>
                                    <div className='cardRating'>
                                        ★★★★★
                                        <div className='ratingActive'>★★★★★</div>
                                    </div>
                                </div>
                                
                                <div className={styles.agencyCardBottomBtn}>
                                    <button className={styles.agencyCardBottomBtn}><a>Discover</a></button>
                                </div>
                            </div>
                     </div>

                     <div className={`${styles.agencyCard} card`}>
                            <div className={styles.agencyCardImg}>
                                <Image src="/london.jpg" alt="" width={370} height={390}/>
                            </div>
                            <h1 className={`titleItemDarkSmall ${styles.agencyCardText}`}>London, UK</h1>
                            <div className={styles.agencyCardBottom}>
                                <div className='cardRatingDiv'>
                                    <h2 className="smallText">Rating</h2>
                                    <div className='cardRating'>
                                        ★★★★★
                                        <div className='ratingActive'>★★★★★</div>
                                    </div>
                                </div>
                                
                                <div className={styles.agencyCardBottomBtn}>
                                    <button className={styles.agencyCardBottomBtn}><a>Discover</a></button>
                                </div>
                            </div>
                     </div>

                     <div className={`${styles.agencyCard} card`}>
                            <div className={styles.agencyCardImg}>
                                <Image src="/bern.jpg" alt="" width={370} height={390}/>
                            </div>
                            <h1 className={`titleItemDarkSmall ${styles.agencyCardText}`}>Bern, Switzerand</h1>
                            <div className={styles.agencyCardBottom}>
                                <div className='cardRatingDiv'>
                                    <h2 className="smallText">Rating</h2>
                                    <div className='cardRating'>
                                        ★★★★★
                                        <div className='ratingActive'>★★★★★</div>
                                    </div>
                                </div>
                                
                                <div className={styles.agencyCardBottomBtn}>
                                    <button className={styles.agencyCardBottomBtn}><a>Discover</a></button>
                                </div>
                            </div>
                     </div>

                    <button  className='arrow next'>
                      <Image src="/right-arrow.svg" width={50} height={50} alt="right-arrow"/>
                    </button>
                  </div>
                </div>
      </div>
    </>
    
  )
}






