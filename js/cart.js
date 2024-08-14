
function displayCartProducts() {

str=``
 if(localStorage.length==0){
  window.location.href="../pages/emptyCart.html"
 }
 else{
  for(i=0;i<localStorage.length;i++){
    const key=localStorage.key(i);
    // console.log(key);
    const product=JSON.parse(localStorage.getItem(key))
    str+=`<div class="e-card">
                   <div class="e-img">
                      <img src="${product.thumbnail}" alt="">
                      
                   </div>
                  <div class="e-doc">
                       <h6>${product.category.toUpperCase()}</h6>
                       <h4>${product.title}</h4>
                      <div style="margin-bottom: 8px;"><span><button class="pro-btn1">${product.rating}<span class="icon"><i class="fa-solid fa-star"></i></span></button></span></div>
                       <div class="prices"><span class="price" style="margin-top: 10px;">$${product.price} </span><span class="math">$${Math.ceil((product.price*100/product.discountPercentage))}</span><span class="discnt">${product.discountPercentage}% Off</span>\</div>
                     <div><button onclick="removeItem(${product.id})" class="btn">Remove</button></div>
                  </div>
                  
             </div>
             
             `



  }

  document.getElementById("cart-products").innerHTML=str;



 }


  
}



  displayCartProducts()

  function removeItem(id){
    localStorage.removeItem(id)

    displayCartProducts()
    priceDetails()
   

  }

  


// let count=1
// const valueDisplay = document.getElementById("total-item")
// console.log(valueDisplay);


  
//   function increment(){   
//     count++;
//     // console.log(count);
//     valueDisplay.innerText=count
//     console.log(count);
    

    
//   }
 
  
//   function decrement(){   
//     count--;
//     // console.log(count);
//     valueDisplay.innerText=count

    
//   }
let totalPrice=0
let price=0
let discount=0
  function priceDetails(){
   for(i=0;i<localStorage.length;++i){
    const key =localStorage.key(i)
    const product=JSON.parse(localStorage.getItem(key))
    price=price+(Math.ceil((product.price*100/product.discountPercentage)))
    totalPrice=totalPrice+product.price
    discount=price-totalPrice
    

    
    
   }
 
  //  console.log(price);
   document.getElementById("cart1").textContent=`$${price}`
  //  console.log(discount);
   document.getElementById("cart2").textContent=`- $${discount}`
    //  console.log(totalaPrice);
   document.getElementById("cart4").textContent=`$${totalPrice}`

    
  }

  priceDetails()
 