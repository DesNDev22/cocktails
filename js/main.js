//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
//const url='www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
//www.thecocktaildb.com/api/json/v1/1/list.php?c=list  *** Categories Filters
//fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
//www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic
//www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail
fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });


/*    .then(res = res.json())
    .then(data => {
        console.log(data) 
    })
    .catch(err => {
        console.log(`error ${err}`)
    })*/