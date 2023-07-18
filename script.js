//Hover effect for Title
const hoverEffect = document.getElementById("hover");

hoverEffect.addEventListener("mouseenter", function () {
  hoverEffect.style.fontSize = "1.5em";
});
hoverEffect.addEventListener("mouseleave", function () {
  hoverEffect.style.fontSize = "1em";
});


//Hover effect for Name
const effectHover = document.getElementById("sponge");

effectHover.addEventListener("mouseenter", function () {
  effectHover.style.fontSize = "3em";
});

effectHover.addEventListener("mouseleave", function () {
  effectHover.style.fontSize = "2.5em";
});


//Hover Effect for Tech Skills
const color = document.getElementById("techSkills");

color.addEventListener("mouseenter", function () {
  color.style.backgroundColor = "grey";
});

color.addEventListener("mouseleave", function () {
  color.style.backgroundColor = "white";
});


//Hover Effect for Soft Skills
const change = document.getElementById("softSkills");

change.addEventListener("mouseenter", function () {
  change.style.backgroundColor = "bisque";
});

change.addEventListener("mouseleave", function () {
  change.style.backgroundColor = "white";
});


//Hover Effect for Hobbies
const magic = document.getElementById("hobbies");

magic.addEventListener("mouseenter", function () {
  magic.style.backgroundColor = "darkolivegreen";
});

magic.addEventListener("mouseleave", function () {
  magic.style.backgroundColor = "white";
});


//Fetching Advice 
$.ajax("https://api.adviceslip.com/advice", {
  success: function (APIResponse) {
    
    let adviceApi = JSON.parse(APIResponse);

    let getAdvice = adviceApi.slip.advice;

    let advice = document.getElementById("advice");
    advice.textContent = getAdvice;
  },
});
