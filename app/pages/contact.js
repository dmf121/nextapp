import MainLayout from "./MainLayout"
import Image from "next/image"
import styles from './Contact.module.css'

import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 

import {
    faPaperPlane,
    faPhoneSquare,
    faMapMarker,
    faPhone
  } from "@fortawesome/free-solid-svg-icons";







export default function Contact() {
    return (
        <>
            <MainLayout>
                <div className="title title-center">
                    <h1>We are ready to help you</h1>
                    <h2>Your Message</h2>
                </div>

                <div className="container">
                    <div className={styles.contactContent}>
                        <div className={styles.contactInput}>
                            <input className="smallText" type="text" placeholder="Your Full Name"/>
                            <input className="smallText" type="text" placeholder="Address"/>
                            <input className="smallText" type="text" placeholder="Email/Phone Number"/>
                        </div>

                        <div className={styles.contactMessage}>
                            <textarea className={`smallText ${styles.contactTextarea}`} name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                            <div className={styles.contactBtn}>
                                <button className="btn">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.subscribe}>
                    <div className="container">
                        <div className={styles.subscribeContent}>
                            <div className={`${styles.subscribeText} title`}>
                                <h2>Subscribe Our NewsLetter</h2>
                                <p className="smallText">Pleasure and praising pain was born and I will give you a complete account of the system, human happiness Pleasure and praising pain was born and I will give you an account know that.</p>
                            </div>

                            <div className={styles.subscribeForm}>
                                <div className={styles.subscribeInput}>
                                    <input type="email" placeholder="Enter Email Address" className="smallText"/>
                                    <button className={styles.subscribeSubmit}>
                                    <FontAwesomeIcon
                                        icon={faPaperPlane}
                                        style={{ fontSize: 36, color: "#fff" }}
                                    />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer class={styles.footer}>
                    <div class="container">
                        <div class={styles.footerContent}>
                            <div class={styles.footerLink}>
                
                                <div class={styles.footerSocial}>
                                    <h1 class="titleItemDarkSmall">Follow Us</h1>
                                    <ul class={styles.footerSocials}>
                                        <li class="smallText"><a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook-square"></i>Facebook</a></li>
                                        <li class="smallText"><a href="https://twitter.com/" target="_blank"><i class="fa fa-twitter-square"></i>Twitter</a></li>
                                        <li class="smallText"><a href="https://www.instagram.com/" target="_blank"><i class="fa fa-instagram"></i>Instagram</a></li>
                                        <li class="smallText"><a href="https://linkedin.com/" target="_blank"><i class="fa fa-linkedin-square"></i>Linkedin</a></li>
                                        <li class="smallText"><a href="https://www.youtube.com/" target="_blank"><i class="fa fa-youtube-square"></i>YouTube</a></li>
                                        <li class="smallText"><a href="https://pinterest.com/" target="_blank"><i class="fa fa-pinterest-square"></i>Pinterest</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class={styles.footerInfo}>
                                    <div class={styles.logo}>
                                        <Image src="/logo.png" width={51} height={37} alt="logo"/>
                                        <div class={styles.logoText}>
                                            <h1>Mocco Group</h1>
                                            <h2>Travell Agency</h2>
                                        </div>
                                    </div>

                                <p class="smallText">Pleasure and praising pain was born and I will give you a complete account of the system, human happiness Pleasure and praising pain was born and I will give you an account know that.</p>

                                <p class={`smallText ${styles.footerContact}`}><FontAwesomeIcon
                                        icon={faPhoneSquare}
                                        style={{ fontSize: 16, color: "#000" }}
                                    />+9885-758-4157-60</p>
                                <p class={`smallText ${styles.footerContact}`}><FontAwesomeIcon
                                        icon={faMapMarker}
                                        style={{ fontSize: 16, color: "#000" }}
                                    />4197 Sumner Street Los Angeles, CA 90017</p>
                            </div>
                            
                        </div>
                    </div>
                </footer>
            </MainLayout>
        </>



    )
}