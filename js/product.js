//  print the search

// console.log(window.location.search);

// const urlParam=new URLSearchParams(window.location.search)
// // console.log(urlParam);
// const id=urlParam.get("id")
// // console.log(id);
let product;
async function  fetchProduct(){
    const urlParam=new URLSearchParams(window.location.search)
    const id=urlParam.get("id")
    const res=await fetch(`https://dummyjson.com/products/${id}`)
    // console.log(res);
    product=await res.json()
    // console.log(product);

    document.getElementById("img").src=product.thumbnail
    str=``
    product.images.map((image)=>{
        str+=`<div class="pro-card">
               <img onmouseover="changeImg('${image}')" src=${image} alt="" id="images">
            </div>`

    })

    document.getElementById("card").innerHTML=str

    document.getElementById("category").textContent=`${product.category.toUpperCase()}`
    document.getElementById("name").textContent=`${product.title}`
    document.getElementById("description").textContent=`${product.description}`
    document.getElementById("price-details").innerHTML=` <span id="disc-price" style="font-weight: bold;font-size: 25px;">$${product.price}</span>
            <span id="org-price" style="text-decoration: line-through;color: gray;">$${Math.ceil(product.price*100/product.discountPercentage)}</span>
            <span id="discount" style="color: rgb(35, 162, 35); letter-spacing: 2px;">${product.discountPercentage}%Off</span>`

    document.getElementById("ratings").innerHTML=` <span><button class="pro-btn">${product.rating} <span><i class="fa-solid fa-star"></i></span></button></span>
            <span style="color: rgb(140, 138, 138);margin-left: 10px;font-weight: 560;">${product.rating} Ratings and ${product.reviews.length} Reviews</span>`


    document.getElementById("details").innerHTML=`
                                        <p style="margin-bottom:10px;"><b>Warranty Information: </b>${product.warrantyInformation}</p>
                                        <p style="margin-bottom:10px;"><b>Shipping Information: </b>${product.shippingInformation}</p>`

                                      


if(localStorage.getItem(id)){
    document.getElementById("cart-btn").innerHTML=`<button onclick="goToCart()"  class="last-btn1">GO TO CART</button>`

}
else{
    document.getElementById("cart-btn").innerHTML=`<button onclick="addToCart()"  class="last-btn1">ADD TO CART</button>`


}

  



}

function changeImg(img){
    document.getElementById("img").src=img

}



fetchProduct()



let items = localStorage.length
console.log(items);
document.getElementById("no-Item").innerHTML=items

async function addToCart(){
    localStorage.setItem(product.id,JSON.stringify(product))
    window.location.href='../pages/cart.html'
}

function goToCart(){
    window.location.href='../pages/cart.html'
}

function checkEmpty(){
    if(localStorage.length==0){
        window.location.href="./emptyCart.html"
    }
    else{
        window.location.href="./cart.html"

    }
}