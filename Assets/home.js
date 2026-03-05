const images = [
  "Assets/Images/group-photo1.jpg",
  "Assets/Images/group-photo2.jpg",
  "Assets/Images/group-photo3.jpg"
];

let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  document.getElementById("slide").src = images[index];
}, 3000);



