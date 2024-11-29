let products = [
  {
    name: "Sofa",
    image:
      "https://media.istockphoto.com/id/2059474032/photo/blue-armchair.webp?a=1&b=1&s=612x612&w=0&k=20&c=VrlMXrtedIZUmQxmfFNgbuwWbBeLloZGpmkiF2ktGvA= ",
    headline: "Soft like Cloud",
    price: "25,000",
    height: 100,
    errorStatment: "Picture of Sofa",
  },
  {
    name: "White Chair",
    image:
      "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D ",
    headline: "Soft like Cloud",
    price: "16,000",
    height: 100,
    errorStatment: "Picture of White Soft Chair",
  },
  {
    name: "3",
    image:
      "https://images.unsplash.com/photo-1489269637500-aa0e75768394?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoYWlyfGVufDB8fDB8fHww ",
    headline: "Try the Newdesinge Chair",
    price: "20,000",
    height: 100,
  },
];
let populer = [
  {
    name: " Black Slimpe Chair",
    image:
      "https://images.unsplash.com/photo-1462212210333-335063b676bc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D ",
    headline: "Soft like Cloud",
    price: "25,000",
    height: 100,
  },
  {
    name: "5",
    image:
      "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D ",
    headline: "Soft like Cloud",
    price: "16,000",
    height: 100,
  },
  {
    name: "6",
    image:
      "https://images.unsplash.com/photo-1489269637500-aa0e75768394?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoYWlyfGVufDB8fDB8fHww ",
    headline: "Try the Newdesinge Chair",
    price: "20,000",
    height: 100,
  },
];
function showTheProducts() {
  let cullter = "";
  let addProducts = products.forEach(function (product, index) {
    cullter += ` <div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-md">
                <img src="${product.image}" height="${product.height}" alt=""/ >
                
                </div>
                
                <hr/>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none  tracking-tight">${product.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20"> ${product.headline}.</h3>
                            <h4 class="font-semibold mt-2">&#8377;${product.price}</h4>
                        </div>
                        <button  data-index="${index}" class="   additem w-10 h-10 rounded-full shader text-yellow-400"><i
                             data-index="${index}"   class=" additem ri-add-line"></i></button>
                    </div>
                </div>  
              </div> `;
  });
  document.querySelector(".products").innerHTML = cullter;
  console.log(addProducts);
}

function showpopulerProducts() {
  let cullter = "";
  let populerProducts = populer.forEach((popularProduct) => {
    cullter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white  overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${popularProduct.image}"
                            alt=""/>
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">Eyes Lounge</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${popularProduct.name}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500"> ${popularProduct.price}</h4>
                    </div>
                </div> `;
  });
  document.querySelector(".populars").innerHTML = cullter;
  console.log(populerProducts);
}

let cart = [];




function addCart() {
  let addcart = document.querySelector(".products");
  addcart.addEventListener("click", function (e) {
    if (e.target.classList.contains("additem")) {
      cart.push(products[e.target.dataset.index]);
      let Cullter = "";

cart.forEach((prod, index) => {
  Cullter += ` <div class="flex gap-2 bg-white p-2 rounded-lg"  > 
                  <div class="w-10 h-10 flex-shrink-0  rounded-lg  overflow-hidden">
                      <img  class="w-full h-full object-cover" src="${prod.image}"/>
                  </div>
                  <div>
                     <h3 class=""font-semibold>${prod.name} </h3>
                      <h5 class=""text-sm font-semibold opacity-80>${prod.price} </h5>
                  </div>
     
                </div> `;
});
document.querySelector('.cartexpnd')
.innerHTML=Cullter;
      console.log(cart);
    }
  });
}

function showCart() {
  const carticon = document.querySelector(".carticon");
  carticon.addEventListener("click", function () {
    document.querySelector(".cartexpnd").style.display = "block";



  });


   let hidecart=document.querySelector(".carticon");
   hidecart.addEventListener("dblclick", function () {
    let hideCart = document.querySelector(".cartexpnd");
    hideCart.style.display = "";
   
    alert("Are you Sure to Close Cart") 
  });
}


showCart();
showTheProducts();
showpopulerProducts();
addCart();
