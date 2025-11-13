// Simple click sound effect when photo is clicked
const photos = document.querySelectorAll('.photo img');
const clickSound = new Audio('click.mp3'); // optional sound file

photos.forEach(photo => {
  photo.addEventListener('click', () => {
    clickSound.play();
    alert("Beautiful photo, my friend!");
  });
});