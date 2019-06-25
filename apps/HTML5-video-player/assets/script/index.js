const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');

const togglePlay = () => (video.paused ? video.play() : video.pause());

video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
