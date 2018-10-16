let score = 0;
let multiplier = 1;
let multiplierPrice = 20;

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

function updateScoreUI() {
    scoreDiv.innerHTML = '<h1>Cookies : ' + score + '</h1>';
}

function updateMultiplierUI(){
    multiplierScoreText.innerHTML = 'Buy Multiplier x' + multiplier;
    multiplierPriceText.innerHTML = "Price : " + multiplierPrice;
}



