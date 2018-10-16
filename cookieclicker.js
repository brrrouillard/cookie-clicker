let score = 0;
let multiplier = 1;
let multiplierPrice = 20;
let autoclickvalue = 0;

const clickerDiv = document.querySelector("#clic");
const scoreDiv = document.querySelector("#affichage");
const multiplierDiv = document.querySelector("#multiplier");
const multiplierScoreText = document.querySelector("#multiplier-text");
const multiplierPriceText = document.querySelector("#multiplier-price");

clickerDiv.addEventListener("click", incrementScore);
multiplierDiv.addEventListener("click", buyMultiplier);

function incrementScore(event) {
    score += multiplier;
    updateScoreUI();
}

function buyMultiplier(event) {
    console.log(event);
    if (score > multiplierPrice) {
        multiplier *= 2;
        score -= multiplierPrice;
        multiplierPrice *= 2;
    }
    updateMultiplierUI();
    updateScoreUI();
}

function autoClick(){
    if (score > 20){
        setInterval(function(){
            clickerDiv.click();
        }, 1000);
    }
}

function updateScoreUI() {
    scoreDiv.innerHTML = '<h1>Cookies : ' + score + '</h1>';
}

function updateMultiplierUI(){
    multiplierScoreText.innerHTML = 'Buy Multiplier x' + multiplier;
    multiplierPriceText.innerHTML = "Price : " + multiplierPrice;
}
setInterval(function(){
    clickerDiv.click();
}, 1000);


class Button {
    constructor(show, domElement){
        this.show = show; // BOOLEAN
        this.domElement = domElement;
    }

    changeText(text){
        this.domElement.innerHTML = text;
    }
}

let scoreButton = new Button(true, scoreDiv);
scoreButton.changeText("salut");