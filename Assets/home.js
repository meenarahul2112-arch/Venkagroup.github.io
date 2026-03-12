const groupImages = [
  "Assets/Images/group-photo1.jpg",
  "Assets/Images/group-photo3.jpg",
  "Assets/Images/group-photo5.jpg",
  "Assets/Images/group-photo6.jpg",
  "Assets/Images/group-photo7.jpg",
  "Assets/Images/group-photo8.jpg",
 ];

let groupIndex = 0;

setInterval(() => {
  groupIndex = (groupIndex + 1) % groupImages.length;
  document.getElementById("slide-group").src = groupImages[groupIndex];
}, 3000);




const pubImages = [
  "Assets/Images/TOC_pub1.png",
  "Assets/Images/TOC_pub2.png",
  "Assets/Images/TOC_pub3.png",
  "Assets/Images/TOC_pub4.png",
  "Assets/Images/TOC_pub5.png",
  "Assets/Images/TOC_pub6.png",
  "Assets/Images/TOC_pub7.png",
  "Assets/Images/TOC_pub8.png",
  "Assets/Images/TOC_pub9.png",
  "Assets/Images/TOC_pub10.png",
  "Assets/Images/TOC_pub11.png",
  "Assets/Images/TOC_pub12.png"
];

let pubIndex = 0;

setInterval(() => {
  pubIndex = (pubIndex + 1) % pubImages.length;
  document.getElementById("slide-pub").src = pubImages[pubIndex];
}, 3000);











