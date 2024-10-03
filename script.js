i


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

function onInit(){
    ArrayPro.forEach((item,key) => {
        let div = document.createElement("div");
        div.classList.add("item");

        div.innerHTML = `<img src= " ${item.image}">
        <div class="name">${item.title}</div>
        <div class="price" >$ ${item.price}.00</div>
        <button class="btn"><i class="fa fa-cart-plus></i>"Add to Cart</button>`
        produts.appendChild(div);
    } )
}
onInit();
