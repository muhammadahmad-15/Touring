// Getting apparel image & displaying it on the screen
var currentImg = sessionStorage.getItem('currentImage');
var img = document.createElement("img");
img.setAttribute('src','/final images/'+`${currentImg}`+'.png');
img.setAttribute('width','40%');
console.log(img);

// Getting map image & displaying it on the apparel
document.getElementById('result').appendChild(img);
var i = sessionStorage.getItem('mapImg');
console.log(i);
var resultImg = sessionStorage.getItem('recent-image');
document.getElementById('pic').setAttribute('src',resultImg);

// Getting tagline value & displaying it on the apparel
var currentTag = sessionStorage.getItem('currentTag');
console.log('Current Tag: '+currentTag);
var tagL = document.getElementById('tagline');
tagL.innerHTML = currentTag;
tagL.style.fontSize = '2vh';