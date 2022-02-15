function init() {
    const pages = document.querySelectorAll('.page');
    const slides = document.querySelectorAll(".slide");
    const background = [`radial-gradient(#2B3760,#0B1023)`, `radial-gradient(#4E3022,#161616)`, `radial-gradient(#4E4342,#161616)`];
//tracker
   let current = 0;

    slides.forEach((slide, index) => {
        slide.addEventListener('click', function(){
            changeDot(this);
            nextSlide(index);
        });
    });

    function changeDot(dot) {
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        dot.classList.add('active');
    }
    function nextSlide(pageNumber) {
        const nextPage = pages[pageNumber];
        const currentPage = pages[current];
        const currentLeft = currentPage.querySelector(".hero .model-left");
        const currentRight = currentPage.querySelector(".hero .model-right");
        const nextLeft = nextPage.querySelector(".hero .model-left");
        const nextRight = nextPage.querySelector(".hero .model-right");
        const portfolio = document.querySelector(".portfolio");
        const nextText = nextPage.querySelector(".details");

        const tl = new TimelineMax();

        tl.fromTo(currentLeft, 0.3, { y: '-5%' }, { y: '-100%' })
            .fromTo(currentRight, 0.3, { y: '5%' }, { y: '-100%' }, "-=0.2")
            .to(portfolio, 0.3, { backgroundImage: background[pageNumber] })
            .fromTo(currentPage, 0.3, { opacity: 1, pointerEvents: 'all' }, { opacity: 0, pointerEvents: "none" })
            .fromTo(nextPage, 0.3, { opacity: 0, pointerEvents: "none" }, { opacity: 1, pointerEvents: 'all' }, "-=0.6")
            .fromTo(nextLeft, 0.3, { y: "-100%" }, { y: "-5%" })
            .fromTo(nextRight, 0.3, { y: "-100%" }, { y: "5%" })
            .fromTo(nextText, 0.3, { opacity: 0, x: 30 }, { opacity: 1, x: 0 })
            .set(nextLeft, { clearProps: "all" })
            .set(nextRight, { clearProps: "all" });
        current = pageNumber;
    }

    
}

init();