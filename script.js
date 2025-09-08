const loadCategories = ()=>{
    fetch("https://openapi.programming-hero.com/api/categories")
    .then(res => res.json())
    .then(data=>{
        const categories = data.categories;
        showCategories(categories);
    })
    .catch((err)=>{
        alert('error happened in loading categories!')
    });
}
const showCategories =(categories)=>{
    const categoriesContainer = document.getElementById('categories-container');
    categories.forEach(category=>{
    categoriesContainer.innerHTML += `
    <button onclick="loadPlantsByCategory(${category.id})" class="btn btn-wide border-none bg-[#F0FDF4] 
         hover:bg-[#15803D] hover:text-white p-1 rounded-sm font-normal justify-start">${category.category_name}</button>`
    })
    
}
loadCategories();

const loadPlantsByCategory = (id)=>{
                fetch(`https://openapi.programming-hero.com/api/category/${id}`)
                .then(res => res.json())
                .then(data => showPlantsByCategory(data.plants) )
                .catch((err)=>{
                alert('error happened in loading plants by category!')
             }); 
                 
            }
const showPlantsByCategory = (plants)=>{
    const plantsContainer = document.getElementById('plants-container');
    plantsContainer.innerHTML = '';    
    plants.forEach(plant =>{
    //console.log(plant);
    
    plantsContainer.innerHTML +=`
                <div class="bg-white flex flex-col rounded-lg shadow-lg">
                    <div>
                         <img src="${plant.image}" class="w-full h-60 object-cover rounded-md">
                    </div>
                    <div class="space-y-2 p-3">
                    <h4 class="font-bold text-lg" onclick ="loadPlantDetails(${plant.id})">${plant.name}</h4>
                   <p class='text-justify text-gray-500 text-ellipsis line-clamp-2'>${plant.description}</p>
                    <div class="mb-6 flex justify-between items-center">
                        <div class="bg-[#DCFCE7] rounded-xl font-semibold text-[#15803D] p-2">${plant.category}</div>
                        <p class="font-bold"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${plant.price}</p>
                    </div>
                    <div class="flex justify-center">
                    <button class="btn btn-wide rounded-4xl bg-[#15803D]  hover:bg-[#15803D50]  text-white">Add To Cart
                    </button>
                    </div>
                    </div>
            
                </div>
    `
})
 
}
const loadAllPlants = ()=>{
    fetch("https://openapi.programming-hero.com/api/plants")
        .then(res => res.json())
        .then(data => showPlantsByCategory(data.plants))
        .catch((err)=>{
                alert('error happened in loading all plants!')
             }); 
    
}
loadAllPlants();


const loadPlantDetails = (id)=>{
            fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
            .then(res => res.json())
            .then(data => showPlantDetails(data.plants) )
            .catch((err)=>{
            alert('error happened in loading plant details!')
             }); 
                 
            }
const showPlantDetails = (plant)=>{
    document.getElementById('details_modal').showModal()
    document.getElementById('details_modal').innerHTML +=`
      <div class="modal-box w-11/12 max-w-auto  space-y-2">
      <h3 class="text-xl font-bold">${plant.name}</h3>
<img src=${plant.image} class="lg:h-72 max-lg:h-48 w-full object-cover rounded-xl">
<p><span class="font-bold">Category: </span>${plant.category}</p>
<p><span class="font-bold">Price: </span>৳${plant.price}</p>
<p><span class="font-bold">Description: </span>${plant.description}</p>
      <form method="dialog">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
    </div>
  </div>
    `
}            
 
                
            

        
