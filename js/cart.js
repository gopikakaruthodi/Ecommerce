
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

    priceDetails()
    displayCartProducts()
   

  }

  
  function priceDetails(){
    let originalPrice=0
    let discount =0
    let discountPrice=0
   for(i=0;i<localStorage.length;++i){
    const key =localStorage.key(i)
    const product=JSON.parse(localStorage.getItem(key))
    originalPrice=originalPrice + Math.ceil((product.price*100/product.discountPercentage))
    // console.log(originalPrice);
    
    discount=Math.ceil(discount+(originalPrice-product.price))
    // console.log(discount);
    
    discountPrice=Math.ceil(discountPrice+product.price)

  
   }
    
 
  //  console.log(price);
   document.getElementById("cart1").textContent=`$${originalPrice}`
  //  console.log(discount);
   document.getElementById("cart2").textContent=`-$${discount}`
    //  console.log(totalaPrice);
   document.getElementById("cart4").textContent=`$${discountPrice}`
   document.getElementById("save").innerHTML=`<p class="save">You will save $${discount} on this order</p>`

    
  }
  priceDetails()

