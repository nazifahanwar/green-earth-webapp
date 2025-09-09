    const categoriesContainer = document.getElementById('categories-container');
    const plantsContainer = document.getElementById('plants-container');
    const cartContainer = document.getElementById("cart-container");
    let carts = [];
    let totalPrice = 0;

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
    categories.forEach(category=>{
    categoriesContainer.innerHTML += `
    <button id="id-${category.id}" onclick="loadPlantsByCategory(${category.id})" class="category-btn btn btn-wide border-none bg-[#F0FDF4] font-normal hover:bg-[#15803D] hover:text-white p-1 rounded-sm justify-start">${category.category_name}</button>`
    })
    
}
loadCategories();

const loadPlantsByCategory = (id)=>{
    manageSpinner(true);
    fetch(`https://openapi.programming-hero.com/api/category/${id}`)      
    .then(res => res.json())
   .then(data =>{
   document.getElementById('id-0')
   .classList.remove('bg-[#15803D]','text-white');
   document.getElementById('id-0')
   .classList.add('bg-[#F0FDF4]')
   document.getElementById('id-0')
   .addEventListener('click',()=>{
    document.getElementById('id-0').classList.add('bg-[#15803D]','text-white');
    document.getElementById('id-0').classList.remove('bg-[#F0FDF4]');
    const clickBtn = document.getElementById(`id-${id}`)
clickBtn.classList.remove('active')
   })

const categoryBtns = document.querySelectorAll('.category-btn');
categoryBtns.forEach(btn => btn.classList.remove('active'));
console.log(categoryBtns); 

const clickBtn = document.getElementById(`id-${id}`)
clickBtn.classList.add('active')
            showPlantsByCategory(data.plants)
                      
            })

                .catch((err)=>{
                 console.log('error happened in loading plants by category!')
             }); 

            }
const showPlantsByCategory = (plants)=>{
    plantsContainer.innerHTML = '';    
    plants.forEach(plant =>{
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
                    <button class="btn btn-wide rounded-4xl bg-[#15803D] hover:bg-[#15803D50] text-white">Add To Cart
                    </button>
                    </div>
                    </div>
                </div>
    `
})
 manageSpinner(false);
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

//modal handle
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
<img src=${plant.image} class="lg:h-80 max-lg:h-48 w-full object-cover rounded-xl">
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
//cart handle
function showCarts() {
    cartContainer.innerHTML = '';
    carts.forEach(cart => {
        cartContainer.innerHTML += `
            <div class="bg-[#F0FDF4] p-3 mb-2 rounded-lg flex justify-between items-center">
                <div class="flex flex-col">
                    <p class="font-semibold text-md">${cart.name}</p>
                    <p class="text-gray-500">
                    <i class="fa-solid fa-bangladeshi-taka-sign text-sm">
                    </i>${cart.price} x 1</p>
                </div>
                <div>
                    <i onclick="deleteCart('${cart.name}')" class="text-gray-500 fa-solid fa-xmark"></i>
                </div>
            </div>

            `;
    });
}
function deleteCart(cartName) {
    const cartToDelete = carts.find(cart => cart.name === cartName); 
    if (!cartToDelete) return; 

    totalPrice -= cartToDelete.price;
    document.getElementById('total-price').innerText = totalPrice;

    carts = carts.filter(cart => cart.name !== cartName); 
    showCarts(); 
}

function handleCarts(e) {
    const plant_name = e.target.parentNode.parentNode.children[0].innerText;
    const price = e.target.parentNode.parentNode.children[2].children[1].innerText;
    alert(`${plant_name} has been added to the cart.`);
    carts.push({
        name: plant_name,
        price: Number(price)
    });
    totalPrice = Number(price) + Number(totalPrice) ;
    document.getElementById('total-price').innerText = totalPrice ;
    showCarts();
}

plantsContainer.addEventListener('click', (e) => {
    if (e.target.innerText === 'Add To Cart') {
        handleCarts(e);
        const totalPriceElement = e.target.closest('.mx-auto').querySelector('.hidden') ;
        if(totalPriceElement !== null) {
            totalPriceElement.classList.remove('hidden')
        }
        
    }
});

//spinner
const manageSpinner = (status) => {
  if (status == true) {
    document.getElementById("spinner").classList.remove("hidden");
    document.getElementById("plants-container").classList.add("hidden");
    document.getElementById("cart-section").classList.add("hidden");

  } else {
    document.getElementById("plants-container").classList.remove("hidden");
    document.getElementById("cart-section").classList.remove("hidden");
    document.getElementById("spinner").classList.add("hidden");
  }
};




