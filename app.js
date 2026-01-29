
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