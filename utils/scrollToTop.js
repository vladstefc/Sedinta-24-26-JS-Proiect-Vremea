const scrollToTop = document.getElementById('scroll-to-top');

document.addEventListener('scroll', function() {
    const scrollValue = window.scrollY;
    
    if (scrollValue > (window.innerHeight / 2)) {
        scrollToTop.style.display = 'block';
    } else {
        scrollToTop.style.display = 'none'
    }
});

scrollToTop.addEventListener('click', function() {
    window.scrollTo( {top: 0, behavior: 'smooth'})
})