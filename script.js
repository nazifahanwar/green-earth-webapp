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
    console.log(plant);

    plantsContainer.innerHTML +=`
                <div class="bg-white flex flex-col rounded-lg shadow-lg">
                    <div>
                         <img src="${plant.image}" class="w-full h-60 object-cover rounded-md">
                    </div>
                    <div class="space-y-2 p-3">
                    <h4 class="font-bold text-lg">${plant.name}</h4>
                   <p class='text-justify text-gray-500 text-ellipsis line-clamp-2'>${plant.description}</p>
                    <div class="mb-6 flex justify-between items-center">
                        <div class="bg-[#DCFCE7] rounded-xl font-semibold text-[#15803D] p-2">${plant.category}</div>
                        <p class="font-bold"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${plant.price}</p>
                    </div>
                    <button class="btn btn-wide rounded-4xl bg-[#15803D]  hover:bg-[#15803D50]  text-white">Add To Cart
                    </button>
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
//handle active button
 
                
            

        
