let indexImg = 0;
let showImages = true;

function upDate(previewPic) {
    let oldImage = document.getElementById("image");
    if (showImages) {
        oldImage.style.backgroundImage = "url('" + previewPic.src + "')";
        oldImage.innerHTML = previewPic.alt;
    } else {
        oldImage.style.backgroundImage = "none";
        oldImage.innerHTML = "Hover over an image below to display here.";
    }
}

function unDo() {
    let image = document.getElementById("image");
    image.style.backgroundImage = "none";
    image.innerHTML = "Hover over an image below to display here.";
}

function mostrarMensaje() {
    Swal.fire("Hover over an image below to display here.");
}

const previewsArray = document.getElementsByClassName("preview");

document.addEventListener("keydown", function (event) {
    if (event.key === "Tab") {
        event.preventDefault();
        indexImg = (indexImg + 1) % previewsArray.length;
        upDate(previewsArray[indexImg]);
        if (indexImg === 0) {
            showImages = !showImages; // Cambiar el estado al recorrer todo el array
            if (!showImages) {
                unDo();
                indexImg= 0;
            }
        }
    }
});
