const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const iconPlay = toggle.querySelector('.play');
const iconPause = toggle.querySelector('.pause');

const togglePlay = () => (video.paused ? video.play() : video.pause());

const videoPlay = () => (
  iconPause.classList.add('hide-button'),
  iconPlay.classList.remove('hide-button')
);

const videoPause = () => (
  iconPause.classList.remove('hide-button'),
  iconPlay.classList.add('hide-button')
);

const updateButton = () => (video.paused ? videoPlay() : videoPause());

video.addEventListener('click', togglePlay);
video.addEventListener('click', updateButton);
toggle.addEventListener('click', togglePlay);
