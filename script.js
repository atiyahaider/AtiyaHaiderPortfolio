$(document).ready(() => {
    $(window).scroll(() => {
        // Fixed navbar on scroll down
        if(this.scrollY > 20){
            $('#navbar').addClass("fixed");
        }else{
            $('#navbar').removeClass("fixed");
        }
    })

    // toggle navbar/menu
    $('.menu-button').click(() => {
        $('#ul-menu').toggleClass("show-menu");
        $('.menu-button .bar').toggleClass("show-menu");
    });

    animateElements();
})

animateElements = () => {
    const scroll = window.requestAnimationFrame;
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    
    animateOnScroll = () => {
        elementsToAnimate.forEach( element => {
          if (isElementInViewport(element)) 
            element.classList.add('is-visible');
          // else 
          //   element.classList.remove('is-visible');
        });
      
        scroll(animateOnScroll);
    }

    animateOnScroll();
}

isElementInViewport = el => {
    let rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}