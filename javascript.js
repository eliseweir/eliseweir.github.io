var images = document.getElementsByClassName("image");
var descriptions = document.getElementsByClassName("description");

var myFunction = function() {
    var text = this.querySelector('.description');
    //text.style.opacity = "1";
    if (text.style.opacity == "1") {
      text.style.opacity = "0";
    }
    else {
      text.style.opacity = "1";
    }
};

Array.from(images).forEach(function(image) {
  image.addEventListener('click', myFunction);
});