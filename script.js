const skaterGirlSprite = document.querySelector('.skater-girl__sprite');

const skaterGirlKeyframes = [
  { transform: 'translateX(0px)' },
  { transform: 'translateX(-2000px)'}
];

const skaterGirlTiming = {
  duration: 1250,
  iterations: Infinity,
  easing: 'steps(9, end)'
}

skaterGirlSprite.animate(skaterGirlKeyframes, skaterGirlTiming);
