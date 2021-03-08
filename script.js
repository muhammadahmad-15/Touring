var apparel = document.getElementsByName('apparels');
// console.log(apparel);
var appValue = false;
var currentApp;
// function handleApparel() {
//     for(var i=0;i<apparel.length;i++) {
//         if(apparel[i].checked == true) {
//             appValue = true;
//             location.href = '/states.html';
//             currentApp = apparel[i].value;
//         }
//     }
//     console.log('Apparel Name: '+currentApp);
//     if(!appValue) {
//         document.getElementById('apparelwarning').style.display = 'block';
//         return false;
//     }
// }
document.getElementById('graphic').addEventListener('click',() => {
    for(var i=0;i<apparel.length;i++) {
        if(apparel[i].checked == true) {
            appValue = true;
            location.href = '/states.html';
            currentApp = apparel[i].value;
        }
    }
    console.log('Apparel Name: '+currentApp);
    sessionStorage.setItem("currentImage",currentApp);
    if(!appValue) {
        document.getElementById('apparelwarning').style.display = 'block';
        return false;
    }
    // var img = document.createElement("img");
    // img.setAttribute('src','/images/'+`${currentApp}`+'.jpg');
    // console.log(img);
    // localStorage.setItem("image",currentApp);
    // document.getElementById('newImg').appendChild(img);
});
