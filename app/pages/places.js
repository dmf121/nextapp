import MainLayout from "./MainLayout"
import Image from "next/image"
import styles from './Places.module.css'

import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 

import {
    faUsers,
    faPaperPlane,
    faFlag,
    faTrophy
  } from "@fortawesome/free-solid-svg-icons";




export default function Places() {
    return (
        <>
            <MainLayout>
                <div className="title title-center">
                    <h1>Our Agency Provide Worldwide</h1>
                    <h2>Best Tourist Place</h2>
                    <p className="smallText places-title">
                        Pleasure and praising pain was born and I will give you a complete account of the system, human happiness no oncauwho do not know that.
                    </p>
                </div>

                <div className="container">
                    <div>
                        <div className={styles.placesCards}>

                            <div className={styles.placesCard}>
                                <div className={styles.placesCardImg}>
                                    <Image src="/europe.png" width={200} height={200} alt=""/>
                                </div>
                                <div>
                                    <h1 className={`titleItemDark ${styles.placesCardTitle}`}>Europe (12 Countries)</h1>
                                    <ul className={styles.placesCardList}>
                                        <li className="smallText">Belgium</li>
                                        <li className="smallText">Germany</li>
                                        <li className="smallText">Spain</li>
                                        <li className="smallText">Ireland</li>
                                        <li className="smallText">France</li>
                                        <li className="smallText">Iceland</li>
                                        <li className="smallText">Swaitzerland</li>
                                        <li className="smallText">Denamrk</li>
                                        <li className="smallText">Croatia</li>
                                        <li className="smallText">Italy</li>
                                        <li className="smallText">Netherlands</li>
                                        <li className="smallText">Latvia</li>
                                    </ul>
                                </div>
                            </div>

                            <div className={styles.placesCard}>
                                <div className={styles.placesCardImg}>
                                    <Image src="/asia.png" width={200} height={200} alt=""/>
                                </div>
                                <div>
                                    <h1 className={`titleItemDark ${styles.placesCardTitle}`}>Asia (10 Countries)</h1>
                                    <ul className={styles.placesCardList}>
                                        <li className="smallText">Bangladesh</li>
                                        <li className="smallText">India</li>
                                        <li className="smallText">Singapore</li>
                                        <li className="smallText">Nepal</li>
                                        <li className="smallText">Malaysia</li>
                                        <li className="smallText">Pakistan</li>
                                        <li className="smallText">Phillipines</li>
                                        <li className="smallText">Myanmar</li>
                                        <li className="smallText">Indonosia</li>
                                        <li className="smallText">United Arab Emirates</li>
                                    </ul>
                                </div>
                            </div>

                            <div className={styles.placesCard}>
                                <div className={styles.placesCardImg}>
                                    <Image src="/australia.png" width={200} height={200} alt=""/>
                                </div>
                                <div>
                                    <h1 className={`titleItemDark ${styles.placesCardTitle}`}>Australia (8 Countries)</h1>
                                    <ul className={styles.placesCardList}>
                                        <li className="smallText">Australia</li>
                                        <li className="smallText">Cook Islands</li>
                                        <li className="smallText">Fiji</li>
                                        <li className="smallText">American Samoa</li>
                                        <li className="smallText">Howland Island</li>
                                        <li className="smallText">Nauru</li>
                                        <li className="smallText">Norfolk Island</li>
                                        <li className="smallText">Northern Mariana Islands</li>
                                    </ul>
                                </div>
                            </div>

                            <div className={styles.placesCard}>
                                <div className={styles.placesCardImg}>
                                    <Image src="/africa.png" width={200} height={200} alt=""/>
                                </div>
                                <div>
                                    <h1 className={`titleItemDark ${styles.placesCardTitle}`}>Africa (12 Countries)</h1>
                                    <ul className={styles.placesCardList}>
                                        <li className="smallText">Tunisia</li>
                                        <li className="smallText">Ghana</li>
                                        <li className="smallText">Uganda</li>
                                        <li className="smallText">Ivory Coast</li>
                                        <li className="smallText">Botswana</li>
                                        <li className="smallText">Chad</li>
                                        <li className="smallText">Mauritius</li>
                                        <li className="smallText">Mauritainia</li>
                                        <li className="smallText">Swaziland</li>
                                        <li className="smallText">Gambia</li>
                                        <li className="smallText">Djibouty</li>
                                        <li className="smallText">Nigeria</li>
                                    </ul>
                                </div>
                            </div>

                            <div className={styles.placesCard}>
                                <div className={styles.placesCardImg}>
                                    <Image src="/n_america.png" width={200} height={200} alt=""/>
                                </div>
                                <div>
                                    <h1 className={`titleItemDark ${styles.placesCardTitle}`}>N. America (9 Countries)</h1>
                                    <ul className={styles.placesCardList}>
                                        <li className="smallText">United States</li>
                                        <li className="smallText">Canada</li>
                                        <li className="smallText">Mexico</li>
                                        <li className="smallText">Cuba</li>
                                        <li className="smallText">Panama</li>
                                        <li className="smallText">Nicaragua</li>
                                        <li className="smallText">The Bahamas</li>
                                        <li className="smallText">Belize</li>
                                        <li className="smallText">Antigua and Barbuda</li>
                                    </ul>
                                </div>
                            </div>

                            <div className={styles.placesCard}>
                                <div className={styles.placesCardImg}>
                                    <Image src="/s_america.png" width={200} height={200} alt=""/>
                                </div>
                                <div>
                                    <h1 className={`titleItemDark ${styles.placesCardTitle}`}>S. America (11 Countries)</h1>
                                    <ul className={styles.placesCardList}>
                                        <li className="smallText">Argentina</li>
                                        <li className="smallText">Chilie</li>
                                        <li className="smallText">Bolivia</li>
                                        <li className="smallText">Brazil</li>
                                        <li className="smallText">Colombia</li>
                                        <li className="smallText">Costa Rica</li>
                                        <li className="smallText">Guatemala</li>
                                        <li className="smallText">Peru</li>
                                        <li className="smallText">Venezuela</li>
                                        <li className="smallText">Paraguay</li>
                                        <li className="smallText">Uruguay</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.placesBottom}>
                    <div className={`container ${styles.placesContainer}`}>
                        <div className={styles.placesBottomContent}>
                            <div className={styles.placesBottomCard}>
                                <div className={styles.placesBottomCardImg}>
                                <FontAwesomeIcon
                                        icon={faUsers}
                                        style={{ fontSize: 50, color: "#ffc811" }}
                                    />
                                </div>
                                <div className={styles.placesBottomCardText}>
                                    <h1 className="title-item-dark places_bottom-h1">2580+</h1>
                                    <p className="smallText places_bottom-p">Happy Clients</p>
                                </div>
                            </div>
            
                            <div className={styles.placesBottomCard}>
                                <div className={styles.placesBottomCardImg}>
                                <FontAwesomeIcon
                                        icon={faPaperPlane}
                                        style={{ fontSize: 50, color: "#ffc811" }}
                                    />
                                </div>
                                <div className={styles.placesBottomCardText}>
                                    <h1 className="title-item-dark places_bottom-h1">1880+</h1>
                                    <p className="smallText places_bottom-p">Online Members</p>
                                </div>
                            </div>
            
                            <div className={styles.placesBottomCard}>
                                <div className={styles.placesBottomCardImg}>
                                <FontAwesomeIcon
                                        icon={faFlag}
                                        style={{ fontSize: 50, color: "#ffc811" }}
                                    />
                                </div>
                                <div className={styles.placesBottomCardText}>
                                    <h1 className="title-item-dark places_bottom-h1">2212+</h1>
                                    <p className="smallText places_bottom-p">Complete Tours</p>
                                </div>
                            </div>
            
                            <div className={styles.placesBottomCard}>
                                <div className={styles.placesBottomCardImg}>
                                <FontAwesomeIcon
                                        icon={faTrophy}
                                        style={{ fontSize: 50, color: "#ffc811" }}
                                    />
                                </div>
                                <div className={styles.placesBottomCardText}>
                                    <h1 className="title-item-dark places_bottom-h1">250+</h1>
                                    <p className="smallText places_bottom-p">Award Winning</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}