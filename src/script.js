document.addEventListener('DOMContentLoaded', () => {
    
    let btnclick = document.querySelector('#btnclick');
    btnclick.addEventListener('click', (e) => {
      e.preventDefault();
      let textvalue = document.querySelector('#textint');
      let val = textvalue.value; //for the text input value
      let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`;
      let maincontain = document.querySelector('#cardcontainer');
  
      if (val) {
        fetch(url)
          .then(res => res.json())
          .then(data => {
            let rep = data.meals;
            let mealCards = ''; // Define mealCards variable to accumulate HTML
  
            rep.forEach((meal) => {
              const { strMeal, strInstructions, strMealThumb } = meal;
  
              mealCards += `<div class="card bg-base-100 shadow-xl">
                <figure><img class="h-40" src="${strMealThumb}"/></figure>
                <div class="card-body bg-gray-50">
                  <h1 class="card-title text-2xl font-black text-slate-950">${strMeal}</h1>
                  <p class="text-lg font-medium text-slate-500 line-clamp-6">${strInstructions}</p>
                  <div class="card-actions justify-end">
                    <button class="btn bg-yellow-500 text-slate-950 border-0">Full Recipe</button>
                  </div>
                </div>
              </div>`;
            });
  
            // Set the accumulated HTML for all meal cards
            maincontain.innerHTML = mealCards;
          })
          .catch(Error => {
            console.log('there is an error', Error);
          });
      }
    });
  });
  