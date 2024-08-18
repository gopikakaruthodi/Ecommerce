function buyItems(){
    // console.log("jhkd");
    str=`<div class="order-text">
                <h1>Thank You</h1>
                <p>Your Order Has Been Placed Successfully</p>

            </div>`

    setTimeout(()=>{
    document.getElementById("msg").innerHTML=str
   setTimeout(()=>{
     window.location.href='../index.html'
   },2000)
    },1000)

    
}

buyItems()


