import MainLayout from "./MainLayout"
import styles from './Blog.module.css'
import Image from "next/image"
import { useEffect } from 'react'



export default function Blog() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '/blogScript.js';
        document.body.appendChild(script);
        return () => {
          document.body.removeChild(script);
        };
      }, []);

    return (
        <>
        <div className={styles.blog}>
            <MainLayout>
                <div className="title title-center">
                    <h1>Our Agency</h1>
                    <h2>Latest Blog</h2>
                </div>

                <div className="container">
                    <div className={styles.blogContent}>
                        <div className={`cards ${styles.blogCards}`}>

                            <div className={styles.blogCard}>
                                <div className={styles.blogCardImg}>
                                    <Image src="/blog_1.jpg" width={200} height={220} alt=""/>
                                </div>
                                <div className={styles.blogCardContent}>
                                    <h1 className="titleItemDarkSmall">Lorem ipsum dolor sit amet</h1>
                                    <p className="smallText">Pleasure and praising pain was born will give you a complete account of the complete account of the .</p>
                                    <div className={styles.blogCardBottom}>
                                        <div className={`${styles.blogCardBottomDate} smallText`}>
                                            <i className="fa fa-calendar"></i>
                                            25 Dec 22
                                        </div>
                                        <div className={`${styles.blogCardBottomTime} smallText`}>
                                            <i className="fa fa-clock-o"></i>
                                            6:18 PM
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.blogCard}>
                                <div className={styles.blogCardImg}>
                                    <Image src="/blog_2.jpg" width={200} height={220} alt=""/>
                                </div>
                                <div className={styles.blogCardContent}>
                                    <h1 className="titleItemDarkSmall">Amet cursus sit amet</h1>
                                    <p className="smallText">Pleasure and praising pain was born will give you a complete account of the complete account of the .</p>
                                    <div className={styles.blogCardBottom}>
                                        <div className={`${styles.blogCardBottomDate} smallText`}>
                                            <i className="fa fa-calendar"></i>
                                            17 Jan 22
                                        </div>
                                        <div className={`${styles.blogCardBottomTime} smallText`}>
                                            <i className="fa fa-clock-o"></i>
                                            10:20 PM
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.blogCard}>
                                <div className={styles.blogCardImg}>
                                    <Image src="/blog_3.jpg" width={200} height={220} alt=""/>
                                </div>
                                <div className={styles.blogCardContent}>
                                    <h1 className="titleItemDarkSmall">Celerisque in dictum non consectetur</h1>
                                    <p className="smallText">Pleasure and praising pain was born will give you a complete account of the complete account of the .</p>
                                    <div className={styles.blogCardBottom}>
                                        <div className={`${styles.blogCardBottomDate} smallText`}>
                                            <i className="fa fa-calendar"></i>
                                            25 Dec 22
                                        </div>
                                        <div className={`${styles.blogCardBottomTime} smallText`}>
                                            <i className="fa fa-clock-o"></i>
                                            6:18 PM
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.blogCard}>
                                <div className={styles.blogCardImg}>
                                    <Image src="/blog_4.jpg" width={200} height={220} alt=""/>
                                </div>
                                <div className={styles.blogCardContent}>
                                    <h1 className="titleItemDarkSmall">Sed turpis tincidunt id aliquet</h1>
                                    <p className="smallText">Pleasure and praising pain was born will give you a complete account of the complete account of the .</p>
                                    <div className={styles.blogCardBottom}>
                                        <div className={`${styles.blogCardBottomDate} smallText`}>
                                            <i className="fa fa-calendar"></i>
                                            25 Dec 22
                                        </div>
                                        <div className={`${styles.blogCardBottomTime} smallText`}>
                                            <i className="fa fa-clock-o"></i>
                                            6:18 PM
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.blogCard}>
                                <div className={styles.blogCardImg}>
                                    <Image src="/blog_5.jpg" width={200} height={220} alt=""/>
                                </div>
                                <div className={styles.blogCardContent}>
                                    <h1 className="titleItemDarkSmall">Gravida cum sociis natoque penatibus</h1>
                                    <p className="smallText">Pleasure and praising pain was born will give you a complete account of the complete account of the .</p>
                                    <div className={styles.blogCardBottom}>
                                        <div className={`${styles.blogCardBottomDate} smallText`}>
                                            <i className="fa fa-calendar"></i>
                                            25 Dec 22
                                        </div>
                                        <div className={`${styles.blogCardBottomTime} smallText`}>
                                            <i className="fa fa-clock-o"></i>
                                            6:18 PM
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.blogCard}>
                                <div className={styles.blogCardImg}>
                                    <Image src="/blog_6.jpg" width={200} height={220} alt=""/>
                                </div>
                                <div className={styles.blogCardContent}>
                                    <h1 className="titleItemDarkSmall">Enim tortor at auctor urna</h1>
                                    <p className="smallText">Pleasure and praising pain was born will give you a complete account of the complete account of the .</p>
                                    <div className={styles.blogCardBottom}>
                                        <div className={`${styles.blogCardBottomDate} smallText`}>
                                            <i className="fa fa-calendar"></i>
                                            25 Dec 22
                                        </div>
                                        <div className={`${styles.blogCardBottomTime} smallText`}>
                                            <i className="fa fa-clock-o"></i>
                                            6:18 PM
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.blogCard}>
                                <div className={styles.blogCardImg}>
                                    <Image src="/blog_7.jpg" width={200} height={220} alt=""/>
                                </div>
                                <div className={styles.blogCardContent}>
                                    <h1 className="titleItemDarkSmall">Amet volutpat consequat mauris nunc</h1>
                                    <p className="smallText">Pleasure and praising pain was born will give you a complete account of the complete account of the .</p>
                                    <div className={styles.blogCardBottom}>
                                        <div className={`${styles.blogCardBottomDate} smallText`}>
                                            <i className="fa fa-calendar"></i>
                                            25 Dec 22
                                        </div>
                                        <div className={`${styles.blogCardBottomTime} smallText`}>
                                            <i className="fa fa-clock-o"></i>
                                            6:18 PM
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.blogCard}>
                                <div className={styles.blogCardImg}>
                                    <Image src="/blog_8.jpg" width={200} height={220} alt=""/>
                                </div>
                                <div className={styles.blogCardContent}>
                                    <h1 className="titleItemDarkSmall">Ipsum faucibus vitae aliquet nec</h1>
                                    <p className="smallText">Pleasure and praising pain was born will give you a complete account of the complete account of the .</p>
                                    <div className={styles.blogCardBottom}>
                                        <div className={`${styles.blogCardBottomDate} smallText`}>
                                            <i className="fa fa-calendar"></i>
                                            25 Dec 22
                                        </div>
                                        <div className={`${styles.blogCardBottomTime} smallText`}>
                                            <i className="fa fa-clock-o"></i>
                                            6:18 PM
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.blogCard}>
                                <div className={styles.blogCardImg}>
                                    <Image src="/blog_9.jpeg" width={200} height={220} alt=""/>
                                </div>
                                <div className={styles.blogCardContent}>
                                    <h1 className="titleItemDarkSmall">Lorem ipsum dolor sit amet</h1>
                                    <p className="smallText">Pleasure and praising pain was born will give you a complete account of the complete account of the .</p>
                                    <div className={styles.blogCardBottom}>
                                        <div className={`${styles.blogCardBottomDate} smallText`}>
                                            <i className="fa fa-calendar"></i>
                                            25 Dec 22
                                        </div>
                                        <div className={`${styles.blogCardBottomTime} smallText`}>
                                            <i className="fa fa-clock-o"></i>
                                            6:18 PM
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.blogCard}>
                                <div className={styles.blogCardImg}>
                                    <Image src="/blog_10.jpg" width={200} height={220} alt=""/>
                                </div>
                                <div className={styles.blogCardContent}>
                                    <h1 className="titleItemDarkSmall">Eu feugiat pretium nibh ipsumt</h1>
                                    <p className="smallText">Pleasure and praising pain was born will give you a complete account of the complete account of the .</p>
                                    <div className={styles.blogCardBottom}>
                                        <div className={`${styles.blogCardBottomDate} smallText`}>
                                            <i className="fa fa-calendar"></i>
                                            25 Dec 22
                                        </div>
                                        <div className={`${styles.blogCardBottomTime} smallText`}>
                                            <i className="fa fa-clock-o"></i>
                                            6:18 PM
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.blogContentBtn}>
                            <button className="btn expand">See All</button>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </div>
        </>
        )
}