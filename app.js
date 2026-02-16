
document.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splash');
  const video = document.getElementById('splash-video');

  // Ensure video starts from the beginning
  video.currentTime = 0;
  video.play();

  setTimeout(() => {
    splash.style.opacity = '0';

    splash.addEventListener('transitionend', () => {
      splash.remove();
    }, { once: true });
  }, 2500);


});

document.addEventListener('DOMContentLoaded', () => {
  let lastScrollTop = 0;
  const header = document.querySelector('.site-footer');

  window.addEventListener('scroll', function () {
    let scrollTop = window.pageY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 60) {
      
      header.classList.add('site-footer-hidden');
    } else {
      header.classList.remove('site-footer-hidden');
      console.log("scrolling");
    }

    lastScrollTop = scrollTop;
  });




});

