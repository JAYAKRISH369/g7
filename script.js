
const popupContainer = document.querySelector(".popup-container");
const closeBtn = document.querySelector(".close-btn");

document.addEventListener("DOMContentLoaded", function () {
openPopup();
closePopup();
changing();
setTimeout(openPopup, 500);
});
closeBtn.addEventListener("click", closePopup);
function openPopup() {
    popupContainer.classList.add("active");
    }
    function closePopup() {
        popupContainer.classList.remove("active");
        }

        const imageSources=[
            "g7images/akki2.jpg",
            "g7images/cham.jpg",
            "g7images/dileep.jpg",
            "g7images/ganesh.jpg",
            "g7images/laya.jpg",
            "g7images/jaya.jpg",
            "g7images/ram.jpg"
        ];
        const imageElement=document.getElementById("randomImage");

function changing(){
    var ch=Math.floor(Math.random()*imageSources.length);
    var randomsrc=imageSources[ch];
    imageElement.src=randomsrc;
}
const interval=setInterval(changing,500);
        