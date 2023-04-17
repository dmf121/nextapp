import MainLayout from "./MainLayout"
import styles from './About.module.css'
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
    <div className={styles.about}>
      <MainLayout>
        <div className={styles.provideContainer}>
            <div className='title title-center'>
                <h1>Provide Packege</h1>
                <h2>Convenience</h2>
            </div>

            <div className={styles.provideContent}>
                <div className={`${styles.provideCards} cards`}>
                    <button  className='arrow prev'>
                      <Image src="/left-arrow.svg" width={50} height={50} alt="left-arrow"/>
                    </button>

                    <div className={`${styles.provideCardsOutter} outter`}>
                        <div className={`${styles.provideCardsInner} inner`}>

                            <div className={`${styles.provideCard} card`}>
                                <div className={styles.provideCardImg}>
                                    <Image src="/palm.svg" width={60} height={60} alt="palm"/>
                                </div>
                                <h1 className="titleItemDark">Spend Your Holidays</h1>
                                <p className="smallText">you are going to use a passage of Lorem Ipsum, you need to be there isnt anything embarrassing in the middle of text avaible,</p>
                            </div>

                            <div className={`${styles.provideCard} card`}>
                                <div className={styles.provideCardImg}>
                                    <Image src="/hotel.svg" width={60} height={60} alt="palm"/>
                                </div>
                                <h1 className="titleItemDark">Hotel Facilitie</h1>
                                <p className="smallText">you are going to use a passage of Lorem Ipsum, you need to be there isnt anything embarrassing in the middle of text avaible,</p>
                            </div>

                            <div className={`${styles.provideCard} card`}>
                                <div className={styles.provideCardImg}>
                                    <Image src="/bag.svg" width={60} height={60} alt="palm"/>
                                </div>
                                <h1 className="titleItemDark">Travel With Comfort</h1>
                                <p className="smallText">you are going to use a passage of Lorem Ipsum, you need to be there isnt anything embarrassing in the middle of text avaible,</p>
                            </div>

                            <div className={`${styles.provideCard} card`}>
                                <div className={styles.provideCardImg}>
                                    <Image src="/pool.svg" width={60} height={60} alt="palm"/>
                                </div>
                                <h1 className="titleItemDark">Entertainment</h1>
                                <p className="smallText">you are going to use a passage of Lorem Ipsum, you need to be there isnt anything embarrassing in the middle of text avaible,</p>
                            </div>

                        </div>
                    </div>

                    <button  className='arrow next'>
                      <Image src="/right-arrow.svg" width={50} height={50} alt="right-arrow"/>
                    </button>
                </div>
            </div>

            <div className="title title-center">
                <h1>We Take Best Care</h1>
                <h2>Why Choose Us?</h2>
            </div>

            <div className="container">
                <div className="choose_content">
                    <div className={styles.chooseCards}>
                        <div className={styles.chooseCard}>
                            <h1 className="titleItemBlue">Unlimited Room Available.</h1>
                            <p className="smallText">Accusamus et iusto odio bolo dignissimos  ducimus qui lawer blandits praesentium Accus amus et iusto odio bol Accus amus et iusto odio bol .</p>
                        </div>

                        <div className={styles.chooseCard}>
                            <h1 className="titleItemBlue">Air / Bus Ticket Provide By Us.</h1>
                            <p className="smallText">Accusamus et iusto odio bolo dignissimos  ducimus qui lawer blandits praesentium Accus amus et iusto odio bol Accus amus et iusto odio bol .</p>
                        </div>

                        <div className={styles.chooseCard}>
                            <h1 className="titleItemBlue">Custome Packege Available.</h1>
                            <p className="smallText">Accusamus et iusto odio bolo dignissimos  ducimus qui lawer blandits praesentium Accus amus et iusto odio bol Accus amus et iusto odio bol .</p>
                        </div>

                        <div className={styles.chooseCard}>
                            <h1 className="titleItemBlue">100% Safe and Luxury Journey.</h1>
                            <p className="smallText">Accusamus et iusto odio bolo dignissimos  ducimus qui lawer blandits praesentium Accus amus et iusto odio bol Accus amus et iusto odio bol .</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
      </MainLayout>
      </div>

        </>
    )
}