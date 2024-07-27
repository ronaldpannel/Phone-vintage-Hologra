
const rosieImage = document.getElementById('rosieImg')
const ralphImage = document.getElementById('ralphImg')

window.addEventListener("deviceorientation", (evt) => {
  const angle = evt.beta;
  const opacity = Math.min(1, Math.max(0, invLerp(50, 70, angle)));
  ralphImage.style.opacity = opacity
  rosieImage.style.opacity = 1 - opacity

  
});
