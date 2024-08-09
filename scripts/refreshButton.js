const reloads = [
  `M30.5 4L30.5 70M27 25.5L70 25.5M4 4H70V70H4V4Z`,
  `M30.5 24L30.5 70M4 25.5L70 25.5M4 4H70V70H4V4Z`,
  `M30.5 4L30.5 70M4 25.5L34 25.5M4 4H70V70H4V4Z`
]

let iconState = 1;
let iconRotate = 1;

export function refreshIcon() {
  const timeline = anime.timeline({
    duration: 500, //miliseconds
    easing: "easeOutExpo"
  });

  timeline.add({
    targets: '.reload-icon-state',
    d: [{
      value: reloads[iconState]
    }]
  });

  timeline.add({
    targets: '.reload-icon',
    rotate: 90 * iconRotate
  }, '-=300');

  iconRotate++;
  iconState++;
  if (iconState >= 3) {
    iconState = 0;
  }
};