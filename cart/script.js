let products = [

{ name: "sofa", image: "https://media.istockphoto.com/id/2059474032/photo/blue-armchair.webp?a=1&b=1&s=612x612&w=0&k=20&c=VrlMXrtedIZUmQxmfFNgbuwWbBeLloZGpmkiF2ktGvA= ", headline : "Soft like Cloud", price:"25,000" ,height:100, errorStatment:"Picture of Sofa"},
{ name: "Chair", image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D ", headline : "Soft like Cloud", price: "16,000", height:100, errorStatment:"Picture of White Soft Chair"},
{ name: "sofa", image: "https://images.unsplash.com/photo-1489269637500-aa0e75768394?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoYWlyfGVufDB8fDB8fHww ", headline : "Try the Newdesinge Chair", price: "20,000", height:100, errorStatment:"Picture of White Soft Chair"},
];
let populer = [

  { name: "sofa", image: "https://images.unsplash.com/photo-1462212210333-335063b676bc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D ", headline : "Soft like Cloud", price:"25,000" ,height:100, errorStatment:"Picture of Sofa"},
  { name: "Chair", image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D ", headline : "Soft like Cloud", price: "16,000", height:100, errorStatment:"Picture of White Soft Chair"},
  { name: "sofa", image: "https://images.unsplash.com/photo-1489269637500-aa0e75768394?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoYWlyfGVufDB8fDB8fHww ", headline : "Try the Newdesinge Chair", price: "20,000", height:100, errorStatment:"Picture of White Soft Chair"},
  ]
function showTheProducts(){
  var cullter="";
  let addProducts = products.forEach(function(product){
     cullter+= ` <div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-md">
                <img src="${product.image}" height="${product.height}" alt=""/ >
                
                </div>
                <hr/>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20"> ${product.headline}.</h3>
                            <h4 class="font-semibold mt-2">&#8377;${product.price}</h4>
                        </div>
                        <button class="w-10 h-10 rounded-full shader text-yellow-400"><i
                                class="ri-add-line"></i></button>
                    </div>
                </div>  
              </div> `
  });
document.querySelector('.products')
.innerHTML=cullter;
  console.log(addProducts);
  
};

function showpopulerProducts(){
  var cullter ="";
  let populerProducts= populer.forEach((popularProduct)=>{
     cullter+= `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${popularProduct.image}"
                            alt=""/>
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">Eyes Lounge</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">Bisco Do Lobo</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">$12,000</h4>
                    </div>
                </div> `
  });
  document.querySelector('.populars').innerHTML=cullter;
};
let cart=[];
function addCart(){
  let addcart = document.querySelector('.products');
  addcart.addEventListener('click',function(){
    alert("Add to Cart");
    
  })
}
showTheProducts();
showpopulerProducts();
addCart();