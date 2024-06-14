


var productNameInput =document.getElementById("productName");
var productPriceInput=document.getElementById("productPrice");
var  productCategoryInput=document.getElementById("productCategory");
var  ProductDiscriptionInput=document.getElementById("ProductDiscription");
var productIamgeInput=document.getElementById("productImage");
var searshInput=document.getElementById("searsh");
var addBtn=document.getElementById("addBtn");
var updateBtn=document.getElementById("updateBtn");
var proudectsList =[];
var updatedIndex;


if (localStorage.getItem("products")!==null) {

  proudectsList =JSON.parse(localStorage.getItem("products"))
  displayProudect()
  
}


function addProudect() {


  var proudect ={

    name:productNameInput.value,
    price:productPriceInput.value,
    category:productCategoryInput.value,
    discription:ProductDiscriptionInput.value,
    image:`imges/${productIamgeInput.files[0]?.name}`
    
  }
 
  proudectsList.push(proudect);
  localStorage.setItem ("products",JSON.stringify(proudectsList))
  Clear()
  displayProudect()
  
  
}

function Clear() {
  
  productNameInput.value=null;
  productPriceInput.value=null;
  productCategoryInput.value=null;
  ProductDiscriptionInput.value=null;
}

function displayProudect(){
  var  cartona =``;
  for (var i= 0; i < proudectsList.length; i++) {
    
    cartona+=`    <div class="col-md-2">
    <div class="item border px-1 pt-1">
      <img src="${proudectsList[i].image}" class="w-100" alt="team">
       <h5 class="mt-3 text-primary">name: <span class="h6 text-white">${proudectsList[i].name}</span></h5>
         <h5 class="text-primary" >Price: <span class="h6 text-white">${proudectsList[i].price}</span></h5>
         <h5 class="text-primary">Category: <span class="h6 text-white">${proudectsList[i].category}</span></h5>
       <p class="h5 text-primary">Discription: <span class="h6 text-white">${proudectsList[i].discription}</span></p>
        <button onclick="deleteProduct(${i})" class="btn btn-outline-danger btn-sm w-100 my-2">Delete <i class="faa fs-trash-alt"></i></button>
        <button onclick="setFormForUpdate(${i})" class="btn btn-outline-warning btn-sm w-100 my-2">UPdate </button>
     </div>
   </div>`;
    
  }


  document.getElementById("item").innerHTML = cartona;
}



function deleteProduct(deleteIndex) {

  proudectsList.splice(deleteIndex,1)
  localStorage.setItem ("products",JSON.stringify(proudectsList))
  displayProudect()
  
}


function searshProducts() {

 var term = searshInput.value;
  var cartona =``;
  for (var i=0; i < proudectsList.length; i++) {
  
    if (proudectsList[i].name.toLowerCase().includes(term.toLowerCase()) == true) {

      cartona+=`<div class="col-md-2">
      <div class="item border px-1 pt-1">
        <img src="${proudectsList[i].image}" class="w-100" alt="team">
         <h3 class="mt-3 text-primary">name: <span class="h6 text-white">${proudectsList[i].name}</span></h3>
           <h4 class="text-primary">Price: <span class="h6 text-white">${proudectsList[i].price}</span></h4>
           <h4 class="text-primary" >Category: <span class="h6 text-white">${proudectsList[i].category}</span></h4>
         <p class="h4 text-primary">Discription: <span class="h6 text-white">${proudectsList[i].discription}</span></p>
          <button onclick="deleteProduct(${i})" class="btn btn-outline-danger btn-sm w-100 my-2">Delete <i class="faa fs-trash-alt"></i></button>
          <button onclick="setFormForUpdate(${i})" class="btn btn-outline-warning btn-sm w-100 my-2">UPdate </button>
       </div>
     </div>`;

    }
    
  
  }

  document.getElementById("item").innerHTML = cartona;
  
}


function setFormForUpdate(i) {
  updatedIndex =i;
  addBtn.classList.add("d-none")
  updateBtn.classList.remove("d-none")
  productNameInput.value=proudectsList[i].name;
  productPriceInput.value=proudectsList[i].price;
  productCategoryInput.value=proudectsList[i].category;
  ProductDiscriptionInput.value=proudectsList[i].discription;
  
}

function updateProduct() {

 
  addBtn.classList.remove("d-none")
  updateBtn.classList.add("d-none")
  proudectsList[updatedIndex].name =productNameInput.value;
  proudectsList[updatedIndex].price=productPriceInput.value;
  proudectsList[updatedIndex].category=productCategoryInput.value;
  proudectsList[updatedIndex].discription=ProductDiscriptionInput.value;
  displayProudect()
  localStorage.setItem ("products",JSON.stringify(proudectsList))
  Clear()
  
}


function validteInputs(element) {


  
  var regex= {

    productName:/^[A-Z][a-z0-9]{3,10}$/,
    productPrice:/^[1-9][0-9][0-9]/,
    productCategory:/^(tv|Lape Top|Mobile|Pc|Watch)/i,
    ProductDiscription:/.{10}/,

  }

 if (regex[element.id ].test(element.value)==true) {
  element.classList.add("is-valid")
  element.classList.remove("is-invalid")
  element.nextElementSibling.classList.replace("d-block","d-none")
  return true
 } 
  else{
    element.classList.add("is-invalid")
    element.classList.remove("is-valid")
    element.nextElementSibling.classList.replace("d-none","d-block")
    return false
  }
  
}

