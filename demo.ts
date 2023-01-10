var container = document.createElement("div");

// container.style.backgroundColor = '';

container.style.width = '200px';
container.style.height = '360px';
container.style.position = 'absolute';
container.style.bottom = '50px';
container.style.right = '50px';
container.style.borderRadius = '12px';
container.style.overflow = 'hidden';
container.style.boxShadow = '0px 0px 38px -11px rgba(255,255,255,0.35)';

const video = document.createElement('video');
video.src =
  'https://audios.podio.xyz/audio-1661891864386-2932.mp4';

video.autoplay = true;
video.controls = true;
video.muted = false;
video.height = 360;
video.width = 200;
container.appendChild(video)

var element = document.getElementsByTagName("BODY")[0];
element.style.position = 'relative';
setTimeout(() => {
  element.appendChild(container)
}, (50));