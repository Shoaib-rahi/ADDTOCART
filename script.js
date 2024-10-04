


let ArrayPro = [
 
    {
        id:1,
        title:"wireless headphone",
        image:"images/head.png",
        price : 200,
        rating:5
    },
    {
        id:2,
        title:"wireless headphone",
        image:"images/head1.png",
        price:150,
        rating:3
    },
    {
        id:3,
        title:"wireless headphone",
        image:"images/head2.jpeg",
        price:300,
        rating:4
    },
    {
        id:4,
        title:"wireless headphone",
        image:"images/head3.webp",
        price:300,
        rating:2
    },


]

const body = document.querySelector("body");
let produts = document.querySelector(".products");
let shoppingbasket = document.querySelector(".shopping-basket");
let closebtn =  document.querySelector(".close");
let productlist = document.querySelector(".product-list");
let quantity = document.querySelector(".quantity");
let pmcounter  = document.querySelector(".pmcount");
let total = document.querySelector(".total");


closebtn.onclick = () => {
    body.classList.remove("active");
}


let checkOutList = [];



shoppingbasket.onclick = () => {
body.classList.add("active");
}





function onINIt(){
    ArrayPro.forEach((item,key) => {
        let Div = document.createElement("div");
        Div.classList.add("item");

        let star = "";
        for(let i = 1;i<item.rating;i++){
           star += `<i class="fa fa-star"></i>`
        }



        Div.innerHTML = `
        <img src="${item.image}"/>
        <div class="name">${item.title}</div>
        <div>${star}</div>
        <div class = "price">${item.price}</div>
        <button onclick="addToCart(${key})" class="btn"<i class="fa fa-cart-plus"></i>+Add To Cart</button>
        `;
        produts.appendChild(Div);
    })
  
}
onINIt();
function  addToCart(id){
     console.log(ArrayPro[id]);
     if(checkOutList[id] == null){
        checkOutList[id] = ArrayPro[id]
        checkOutList[id].quantity = 1
     }else{
        checkOutList[id].quantity += 1
     }
     reloadcart()
}


function reloadcart(){
    productlist.innerHTML = "";


    let count =0;
    let totalcount=0;
    checkOutList.forEach((item,key) => {
    totalcount += parseInt(item.price*item.quantity)
        count += item.quantity
        let listcounter = document.createElement("li");
        listcounter.innerHTML = `
        <img src="${item.image}"/>
        <div>${item.title}</div>
       <div class="count">${item.price}</div>
       <div>
       <button onclick=minus(${key},${item.quantity+1})>+</button>
       <div class="count1" id="pmcount" >${item.quantity}</div>
       <button onclick=minus(${key},${item.quantity-1})>-</button>
       </div>
        `;
        productlist.appendChild(listcounter);
    })
    total.innerHTML = ` <small>subtotal (${count} item)</small>${totalcount}`
    quantity.innerHTML=count;
}
addToCart();

function minus(key,quantity){
if(quantity==0){
    delete checkOutList[key]
}else{
    checkOutList[key].quantity = quantity;
}
reloadcart()
}