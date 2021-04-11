var a = 6;
console.log(a);
var Start_Button = document.getElementById("Start_Button");
var Stop_Button = document.getElementById("Stop_Button");
const player = document.getElementById('player');
Start_Button.addEventListener("click", function () {
  const constraints = {
    video: true,
  };

  navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
      player.srcObject = stream;
    });
});
Stop_Button.addEventListener("click", function () {
  player.srcObject.getVideoTracks().forEach(track => track.stop());
});
