var states = document.getElementsByName('states'); // getting all the states
var stateVal = false; // states logic
var taglines = document.getElementsByName('exampleRadios'); // getting all the taglines
var tagVal = false // taglines logic
var currentTag;
// states validation
document.getElementById('tag').addEventListener('click',() =>  {
    for(var i=0;i<states.length;i++) {
        if (states[i].checked == true) {
            stateVal = true;
            location.href = '../tagline.html';
        }         
    }
    if(!stateVal) {
        document.getElementById('tag-msg').innerHTML = "Please choose some state first!";
        document.getElementById('tag-msg').style.color = 'red';
    }
});

function handleTagline() {
    for(var i=0;i<taglines.length;i++) {
        if(taglines[i].checked == true) {
            tagVal = true;
            currentTag = taglines[i].value;
            location.href = '../result.html';
        }
    }
    if(!tagVal) {
        console.log('Please choose a tagline first!');
        return false;
    }
    sessionStorage.setItem('currentTag',currentTag);
}