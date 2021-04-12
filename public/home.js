const Start_Button = document.getElementById("Start_Button");
const Stop_Button = document.getElementById("Stop_Button");
const player = document.getElementById('player');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const captureButton = document.getElementById('capture');


const constraints = {
  video: true,
};


Start_Button.addEventListener("click", function () {
  navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
      player.srcObject = stream;
    });
});
Stop_Button.addEventListener("click", function () {
  player.srcObject.getVideoTracks().forEach(track => track.stop());
});



captureButton.addEventListener('click', () => {
  // Draw the video frame to the canvas.
  context.drawImage(player, 0, 0, canvas.width, canvas.height);

  //The HTMLCanvasElement.toDataURL() method returns a data URI containing a representation
  //of the image in the format specified by the type parameter (defaults to PNG).
  var dataURL = canvas.toDataURL("image/jpeg", 1.0);

  downloadImage(dataURL, 'my-canvas.jpeg');
  
});

// Save | Download image
function downloadImage(data, filename = 'untitled.jpeg') {
  var a = document.createElement('a');
  a.href = data;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
}