async function getProducts(){
   try {
    const res=await fetch("https://dummyjson.com/products")
    const data= await res.json()
    // console.log(data); 
      str=``
    data.products.map((item)=>{
        str+=`<a class="a-tag" href="./pages/product.html?id=${item.id}"><div class="e-card">
                <div class="e-img">
                    <img src="${item.thumbnail}" alt="">
                </div>
                <div class="e-doc">
                    <h6>${item.category.toUpperCase()}</h6>
                    <h4>${item.title.length>=20?`${item.title.substring(0,20)}...`:item.title}</h4>
                    <div style="margin-bottom: 8px;"><span><button class="pro-btn1">${item.rating}<span class="icon"><i class="fa-solid fa-star"></i></span></button></span></div>
                    <div class="prices"><span class="price" style="margin-top: 10px;">$${item.price} </span><span class="math">$${Math.ceil((item.price*100/item.discountPercentage))}</span><span class="discnt">${item.discountPercentage}% Off</span>\</div>
                </div>
                
            </div></a>`

    })
    document.getElementById("products").innerHTML=str
    



   } catch (error) {
    console.log("error");
    
   }
}

getProducts()




// search code

document.getElementById("search").addEventListener("keyup",async(e)=>{
    console.log(e.target.value);
    try {
        const res=await fetch("https://dummyjson.com/products")
        const data= await res.json()
        const asd=data.products.filter((item)=>item.title.toLowerCase().includes(e.target.value.toLowerCase()));
        // console.log(data); 
          str=``
        asd.map((item)=>{
            str+=`<a class="a-tag" href="./pages/product.html?id=${item.id}"><div class="e-card">
                <div class="e-img">
                    <img src="${item.thumbnail}" alt="">
                </div>
                <div class="e-doc">
                    <h6>${item.category.toUpperCase()}</h6>
                    <h4>${item.title.length>=20?`${item.title.substring(0,20)}...`:item.title}</h4>
                    <div style="margin-bottom: 8px;"><span><button class="pro-btn1">${item.rating}<span class="icon"><i class="fa-solid fa-star"></i></span></button></span></div>
                    <div class="prices"><span class="price" style="margin-top: 10px;">$${item.price} </span><span class="math">$${Math.ceil((item.price*100/item.discountPercentage))}</span><span class="discnt">${item.discountPercentage}% Off</span>\</div>
                
            </div>
            </div></a>`
    
        })
        document.getElementById("products").innerHTML=str
    
    
    
       } catch (error) {
        console.log("error");
        
       }

})


function checkEmpty(){
    if(localStorage.length==0){
        window.location.href="../pages/emptyCart.html"
    }
    else{
        window.location.href="../pages/cart.html"

    }
}


