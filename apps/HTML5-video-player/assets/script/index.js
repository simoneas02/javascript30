const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const iconPlay = toggle.querySelector('.play');
const iconPause = toggle.querySelector('.pause');
const skipButtons = [...player.querySelectorAll('[data-skip]')];
const playbackRate = player.querySelector('.playback__rate');
const volumeBar = player.querySelector('.volume__bar');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__bar');
const playerFullscreen = player.querySelector('.player__fullscreen');

const togglePlay = () => (video.paused ? video.play() : video.pause());

const videoPlay = () => (iconPause.classList.add('hide-button'), iconPlay.classList.remove('hide-button'));

const videoPause = () => (iconPause.classList.remove('hide-button'), iconPlay.classList.add('hide-button'));

const updateButton = () => (video.paused ? videoPlay() : videoPause());

const skip = event => {
	const currentTime = (video.currentTime += parseFloat(event.target.dataset.skip));
	video.currentTime = currentTime;
	playbackRate.value = currentTime;
	playbackRate.max = video.duration;
};

const seekBar = () => (video.currentTime = video.duration * (playbackRate.value / 100));

const changeVolumeBar = () => (video.volume = volumeBar.value);

const handleProgress = () => {
	const percent = video.currentTime / video.duration * 100;
	progressBar.style.width = `${percent}%`;
};

const scrub = event => {
	const scrubTime = event.offsetX / progress.offsetWidth * video.duration;
	video.currentTime = scrubTime;
};

const toggleFullScreen = () => {
	if (video.requestFullscreen) {
		video.requestFullscreen();
	}

	if (video.mozRequestFullScreen) {
		video.mozRequestFullScreen();
	}

	if (video.webkitRequestFullscreen) {
		video.webkitRequestFullscreen();
	}
};

video.addEventListener('click', togglePlay);
video.addEventListener('click', updateButton);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.map(button => button.addEventListener('click', skip));
playbackRate.addEventListener('change', seekBar);
volumeBar.addEventListener('change', changeVolumeBar);
progress.addEventListener('click', scrub);
playerFullscreen.addEventListener('click', toggleFullScreen);
