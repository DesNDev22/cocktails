const slider = document.querySelector(".slider");

window.addEventListener("load", getRandomCocktail());

function initializeSlider(drinksArray) {
    document.querySelector("#slider-section").style.display = "flex"
    const showCocktail = document.querySelector("#showCocktail")
    showCocktail.style.display = "none";
    let drink = '';
    for (let drinks in drinksArray) {
        drink += `<div class="slide">
                <img src="${drinksArray[drinks].strDrinkThumb}/preview" alt="drink image" onClick="getCocktailByID(${drinksArray[drinks].idDrink})">
                <div>
                    <h4>${drinksArray[drinks].strDrink}</h4>
                </div>
            </div>`
    }
    slider.innerHTML = drink;

    const tnslider = tns({
        container: ".slider",
        autoWidth: true,
        gutter: 10,
        slideBy: 1,
        nav: false,
        loop: false,
        speed: 400,
        controlsContainer: "#controls",
        prevButton: ".previous",
        nextButton: ".next"
    })
    
}

function displayCocktail(record) {
    const showCocktail = document.querySelector("#showCocktail")
    let ingredientKey = '';
    let meassureKey = '';
    let orederedList = '';
    let htmlCode = '';

    for (let i = 1; i < 16; i++) {
        ingredientKey = "strIngredient" + i
        meassureKey = "strMeasure" + i
        record[0][meassureKey] == null ? '' :
            orederedList += `<li>${record[0][meassureKey]} ${record[0][ingredientKey]}</li>`;
    }

    htmlCode = `<h2 id="cocktailName">${record[0].strDrink} </h2>
                <img src="${record[0].strDrinkThumb}/preview" alt="picture of ${record[0].strDrink}">
                <ul><h3 class="subtitle">Ingredients:</h3>
                ${orederedList}
                </ul>
                <h3 class="subtitle">Instructions:</h3>
                <p id="instructions">${record[0].strInstructions}</p>`

    showCocktail.innerHTML = htmlCode
    showCocktail.style.display = "block";
}

function getRandomCocktail() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(data => {
       displayCocktail(data.drinks)
})
    .catch(err => {
        console.log(`error ${err}`)
    });
}

function getCocktailByID(drinkID) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkID}`)
    .then(res => res.json())
    .then(data => {
       displayCocktail(data.drinks)
})
    .catch(err => {
        console.log(`error ${err}`)
    });
}

function getCocktailList() {
    const cocktailName = document.querySelector("#drink").value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        initializeSlider(data.drinks)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}