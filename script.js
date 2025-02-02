var nothingClicked = 0;

function PortfolioButton() {
    window.location.href = "portfolio";
}

function SusButton() {
    var Jumpscare = new Audio('penguinz0-jumpscare.mp3');
    Jumpscare.play();
}
function GamesButton() {
    window.location.href = "games";
}
function backButton() {
    window.location.href = "../";
}
function NothingButton() {
    nothingClicked++;
    if (nothingClicked ==10) {
        SusButton();
        document.getElementsByClassName("btn")[2].innerHTML = "Now you are sus";
    }
}