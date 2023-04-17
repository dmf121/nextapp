
function Slider (outterDiv, innerDiv, card, next, prev) {


const outter = document.querySelector(outterDiv),
        Inner = document.querySelector(innerDiv),
        Cards = document.querySelectorAll(card),
        Card = document.querySelector(card),
        Gap = parseInt(getComputedStyle(Inner).getPropertyValue("gap"));
    
const Next = document.querySelector(next),
        Prev = document.querySelector(prev);

let Offset = 0,
    CardWidth,
    outterWidth,
    MaxOffset;

    outterSize();

function outterSize() {
    CardWidth = Math.ceil(parseFloat(getComputedStyle(Card).getPropertyValue("width")));
    if (window.innerWidth < 870) {
        outterWidth = CardWidth;
        MaxOffset = CardWidth*(Cards.length-1) + Gap*(Cards.length-1);
    } else if (window.innerWidth > 870 && window.innerWidth < 1225) {
        outterWidth = CardWidth*2 + Gap;
        MaxOffset = CardWidth*(Cards.length-2) + Gap*(Cards.length-2);
    }
    else {
        outterWidth = (CardWidth*3)+(Gap*2);
        MaxOffset = CardWidth*(Cards.length-3) + Gap*(Cards.length-3);
    }
    outter.style.width = outterWidth+'px';
}

Next.addEventListener('click', () => {
        if (Offset<MaxOffset) {
            Offset += CardWidth+Gap;
        } else {
            Offset = 0;
        }
        Inner.style.transform = `translateX(${-Offset}px)`;
    })
    
    Prev.addEventListener('click', () => {
        if (Offset === 0) {
            Offset = MaxOffset;
        } else {
            Offset -= CardWidth+Gap;
        }
        Inner.style.transform = `translateX(${-Offset}px)`;
    })


    window.addEventListener('resize', () => {
            outterSize();
        })


}

Slider('.outter', '.inner', '.card', '.next', '.prev');