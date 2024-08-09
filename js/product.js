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


}

function changeImg(img){
    document.getElementById("img").src=img

}



fetchProduct()


async function addToCart(){
    localStorage.setItem(product.id,JSON.stringify(product))
    window.location.href='../pages/cart.html'
}