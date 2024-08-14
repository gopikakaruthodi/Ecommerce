function buyItems(){
    // console.log("jhkd");
    str=`<span > <i class="fa-regular fa-circle-check"></i></span>
Order Placed`

    setTimeout(()=>{
    document.getElementById("msg").innerHTML=str
   setTimeout(()=>{
     window.location.href='../index.html'
   },2000)
    },2000)

    
}

buyItems()

