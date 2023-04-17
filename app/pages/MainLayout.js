import Link from "next/link"
import Image from "next/image"
import { useEffect } from 'react'
import styles from './Nav.module.css'


export default function MainLayout({ children }) {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '/navScript.js';
        document.body.appendChild(script);
        return () => {
          document.body.removeChild(script);
        };
      }, []);

    return (
    <>  
        <header className="container">
            <Link href="/">              
                <Image src="/logo.png" alt="logo" width={51} height={37}/>
            </Link>
            
            <nav className="visibleMenu">
                <Link href="/" legacyBehavior><a data-no-instant>Home</a></Link>
                <Link href="/about" legacyBehavior ><a data-no-instant>About</a></Link>
                <Link href={'/tour'} legacyBehavior><a>Tour</a></Link>
                <Link href={'/places'} legacyBehavior><a>Hotels</a></Link>
                <Link href={'/blog'} legacyBehavior><a>Blog</a></Link>
                <Link href={'/contact'} legacyBehavior><a>Contact</a></Link>
            </nav>

            <button className="burger-menu-btn">
                <Image src='/menu.svg' width={32} height={32} alt="menu" className="burger"/>
            </button>

            
        </header>
        
        <main>
            <ul className={`${styles.hiddenMenu} hidden hmenu`}>
                <li><Link href="/" legacyBehavior><a data-no-instant>Home</a></Link></li>
                <li><Link href="/about" legacyBehavior ><a data-no-instant>About</a></Link></li>
                <li><Link href={'/tour'} legacyBehavior><a>Tour</a></Link></li>
                <li><Link href={'/places'} legacyBehavior><a>Hotels</a></Link></li>
                <li><Link href={'/blog'} legacyBehavior><a>Blog</a></Link></li>
                <li><Link href={'/contact'} legacyBehavior><a>Contact</a></Link></li>
            </ul>
            {children}
        </main>
        
        <style jsx>{`
            header {
                height: 100px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            nav {
                display: flex;
                gap: 10px;

                font-family: Montserrat;
                font-size: 14px;
                line-height: 26px;
                font-weight: 600;
                text-transform: uppercase;
                color: var(--clr-black);
            } 

            nav > * {
                color: #222222;
                text-decoration: none;
            }

            .visibleMenu a {
                padding: 8px 22px;
                line-height: 30px;
            }
            
            .visibleMenu a:hover {
                color: #fff;
                background-color: #ef5b5b;
                border-radius: 5px;
                outline: 1px solid #ef5b5b;
            }


            .burger-menu-btn {
                display: none;
                border: none;
                background-color: transparent;
            }

            @media (max-width: 1000px) {
                .visibleMenu {
                    display: none;
                }
                .nav-reserve {
                    display: none;
                }
                .burger-menu-btn {
                    display: flex;
                }
            }
        `}

        </style>
    </> 
    )
}