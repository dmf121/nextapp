export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          padding: 0px;
          margin: 0px;
          border: none;
        }

        .container {
          max-width: 1170px;
          margin: auto;
          padding: 0 20px;
        }

        .arrow {
          border: none;
          background-color: transparent;
          display: inline-block;
      }

        .btn {
          height: 50px;
          width: 200px;
          background-color: #ef5b5b;
          border-radius: 5px;
          border: 1px solid #ef5b5b;
          display: grid;
          place-items: center;
          white-space: nowrap;
      
          color: #fff;
          font-family: Montserrat;
          font-size: calc(min(3vw, 14px));
          line-height: 26px;
          font-weight: 700;
      }
      
          .btn:hover {
              background-color: #fff;
              color: #ef5b5b;
          }
          
          .title-center {
            margin: auto;
            text-align: center;
          }
          
          .title h1 {
              padding-top: 150px;
              font-family: 'Segoe Script';
              font-size: calc(min(5.5vw, 24px));
              line-height: 26px;
              font-weight: 400;
              color: #ef5b5b;
          }
          
          .title h2 {
              font-family: Montserrat;
              font-size: calc(min(6vw, 24px));
              line-height: 26px;
              font-weight: 600;
              color: var(--clr-black);
          }
          
          .title h3 {
              padding: 25px 0 0;
              font-family: Montserrat;
              font-size: 24px;
              line-height: 26px;
              font-weight: 400;
              color: var(--clr-black);
          }

          .title-h2-white h2 {
            color: #fff;
        }
          
          .smallText {
              font-family: Poppins;
              font-size: calc(min(4vw, 16px));
              line-height: 28px;
              font-weight: 400;
              color: #808080;
          }

          .titleItemDark {
            font-family: Montserrat;
            font-size: calc(min(4vw, 24px));
            line-height: 26px;
            font-weight: 600;
            color: var(--clr-black);
            white-space: nowrap;
        }
        
        .titleItemDarkSmall {
            font-family: Montserrat;
            font-size: calc(min(4vw, 20px));
            line-height: 28px;
            font-weight: 500;
            color: var(--clr-black);
        }

        .titleItemBlue {
          font-family: Montserrat;
          font-size: calc(min(5vw, 24px));
          line-height: 26px;
          font-weight: 600;
          color: #00b1ff;
          margin-bottom: 20px;
      }


      .places_bottom-h1, .places_bottom-p {
        color: #fff;
        margin-block-start: 0;
        margin-block-end: 0;
      }


      .cardRatingDiv, .cardRating {
        display: flex;
        align-items: center;
    }
    
    .cardRating {
        margin: 0 15px;
        color: #808080;
        display: flex;
        font-size: 18px;
        position: relative;
        width: 75px;
    }
    
    
    .ratingActive {
        font-size: 18px;
        color: #ef5b5b;
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
        max-width: 75px;
        width: 80%;
    }

        .hidden {
            display: none;
        }





        .expanded {
          height: auto;
        }

      `}

      </style>
    </>
  )
  

}