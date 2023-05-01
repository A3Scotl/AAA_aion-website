const products= [
    {   ma:"SP01",
        describe:"The original and ultimate in personalised sound, with extra bass speakers for an incredible immersive listening experience.",
        img:["aaaphone.jpg","aaaphone1.jpg","aaaphone2.jpeg","aaaphone3.jpeg"],
        bigImg:["trangAAAphone_img1.jpeg","trangAAAphone_img2.jpeg","trangAAAphone_img3.jpeg","trangAAAphone_img4.jpeg"],
        name:"AAAPhone",
        techSpec:"tech-specs.svg",
        box:"trangAAAphone_img-inthebox.jpeg",
        price:399000},
    {   ma:"SP02",
        describe:"Personalised sound on the go, with 16-hour battery life and analog cable support.",
        img:["aaaLoop1.jpg","aaaLoop2.jpg","aaaLoop3.jpg","aaaLoop4.jpg"],
        bigImg:["trangAAAloop_img1.jpeg","trangAAAloop_img2.jpeg","trangAAAloop_img3.jpeg","trangAAAloop_img4.jpeg"],
        name:"AAALoop",
        techSpec:"tech-specs_loop.svg",
        box:"trangAAAloop_img-inthebox.jpeg",
        price:179000},
    {   ma:"SP03",
        describe:"Premium wireless earbuds with our award-winning personalised sound.",
        img:["aaaTrue1.jpg","aaaTrue2.jpg","aaaTrue3.jpg","aaaTrue4.jpg"],
        name:"AAATrue",
        bigImg:["trangAAAphone_img1.jpeg","trangAAAphone_img2.jpeg","trangAAAphone_img3.jpeg","trangAAAphone_img4.jpeg"],
        techSpec:"tech-specs_true.svg",
        box:"trangAAATrue_img-inthebox.jpeg",
        price:199990},
    {   ma:"SP04",
        describe:"Upgrade your Bluetooth experience with high-quality Bluetooth audio and voice calls.",
        img:["aaaBluetooth.jpg","aaaBluetooth1.jpg","aaaBluetooth2.jpg","aaaBluetooth3.jpg"],
        name:"AAA Bluetooth® 5.3",
        techSpec:"tech-specs_true.svg",
        bigImg:["trangAAAphone_img1.jpeg","trangAAAphone_img2.jpeg","trangAAAphone_img3.jpeg","trangAAAphone_img4.jpeg"],
        box:"trangAAATrue_img-inthebox.jpeg",
        price:59000},
    {   ma:"SP05",
        describe:"Our smallest and most affordable earbuds, with the ability to import a hearing profile for personalised sound.",
        img:["aaaBuds.jpg","aaaBuds1.jpeg","aaaBuds2.jpg","aaaBuds3.jpg"],
        name:"AAABuds 2",
        bigImg:["trangAAAphone_img1.jpeg","trangAAAphone_img2.jpeg","trangAAAphone_img3.jpeg","trangAAAphone_img4.jpeg"],
        techSpec:"tech-specs_true.svg",
        box:"trangAAATrue_img-inthebox.jpeg",
        price:119000}
];
let Shopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.close');
let body = document.querySelector('body')
Shopping.addEventListener('click',()=>{
   body.classList.add('open');
})
closeShopping.addEventListener('click',()=>{
   body.classList.remove('open');
})
var listCards = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML =  ` <div class="product_card">
        <div class="product_card-img">
            <img src="/img/${value.img[0]}" alt="" class="pd_img">
        </div>
        <div class="product_card-name">${value.name}</div>
        <div class="product_card-detail">
         ${value.describe}
        </div>
        <div class="product_card-price">${value.price.toLocaleString()}</div>
         <button class="product_card-btn_detail" onclick="showDetails(${key})">
                LEARN MORE
                <img src="/img/muiTen.svg" alt="">
         </button>
         <button class="product_card-btn_add" onclick="addToCard(${key})">
            ADD CART
         <img src="/img/muiTen.svg" alt="">
     </button>
     </div>`;
     document.querySelector(".ctn_r2_allProducts").appendChild(newDiv);
    })
}
initApp()
let quantity = document.querySelector('.totalQty');
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
       
    }
    else{
        alert("Sản phẩm đã có trong giỏ hàng")
    }
    reloadCard()
   
}

let listCard = document.querySelector(".list");
let total = document.querySelector(".checkout_Subtotal");
function reloadCard(){
    let count = 0;
    let totalPrice = 0;
    let x = localStorage.getItem("myCart")
    listCard.innerHTML = "";
    listCards.forEach((value, key)=>{
        totalPrice += value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('tr');
            newDiv.innerHTML = ` <div><img src="/img/${value.img[0]}"/></div>
            <div>${value.name}</div>
            <div>${value.price.toLocaleString()}</div>
         <div>
            <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
            <div class="count">${value.quantity}</div>
            <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
        </div>`;
                listCard.appendChild(newDiv);
                
        }
       
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
    localStorage.setItem("myCart",JSON.stringify(listCards));
    localStorage.setItem("totalQty",JSON.stringify(quantity));
    showDetails()

}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
function showDetails(key){
    listCard[key] = JSON.parse(JSON.stringify(products[key]));
    let sp = listCard[key]
    console.log(sp);
    localStorage.setItem("sanpham",JSON.stringify(sp))
    window.location.href = "/html/detail.html"
}
// document.querySelector(".ctn_r2_allProducts").innerHTML=data;
// const btnAdd =document.querySelectorAll(".product_card-btn_add");
// let soLuong = 0;
// btnAdd.forEach(function(button){
//    button.addEventListener("click",function(even){
//     var btnItem = even.target;
//     var product = btnItem.parentElement;
//     var pdImg = product.querySelector(".pd_img").src
//     var pdName =product.querySelector(".product_card-name").innerText
//     var pdPrice =product.querySelector(".product_card-price").innerText
   
//     addCart(pdImg,pdName,pdPrice)
//    })
// })

// function addCart(pdImg,pdName,pdPrice){
//     var addtr = document.createElement("tr")
//     var cartItem  = document.querySelectorAll(".list tr")
    
   
//     for(var i=0;i<cartItem.length;i++){
//         var productT =document.querySelectorAll(".product_card-name")
//         if(productT[i].innerHTML==pdName){
//             alert("Sản phẩm của bạn đã có trong giỏ hàng");
//             return;
//         }
       
//     }
//     var str = `<div class="cart_item">
//         <div class="product">
//             <div class="product_img">
//               <img src="`+pdImg+`" alt="">
//          </div>
//             <div class="product_name">
//                  `+pdName+`
//                  <div class="product_quantity">
//                  <input type="number" value="1" min="1" class="pd_qty">
//                  </div>
//              </div>
//          </div>
//          <div class="price">
//          `+pdPrice+`
//          </div>
//          <div class="remove">X</div>
//      </div>`
    
//     addtr.innerHTML = str;
//     var listCart = document.querySelector(".list")
//    listCart.append(addtr);
//    carttotal()
//    deletecart()
   
    
// }
// function carttotal(){
//     var cartItem  = document.querySelectorAll(".list tr")
//     // console.log(cartItem.length)
//     var totalC = 0;
//     for(var i=0;i<cartItem.length;i++){
//         var inputValue = cartItem[i].querySelector(".pd_qty").value
//         var pdPrice = cartItem[i].querySelector(".price").innerText
       
//         totalA = inputValue * pdPrice*1000;
//         totalC += totalA;
//         totalB = totalC.toLocaleString('de-DE')
//         console.log(totalC);

//     }
//     var cartToTal = document.querySelector(".checkout_Subtotal")
//     cartToTal.innerHTML = totalB
// }
// function deletecart(){
//     var cartItem  = document.querySelectorAll(".list tr")
//     soLuong--;
//     for(var i = 0;i<cartItem.length;i++){
//         var productT  = document.querySelector(".remove");
//         productT.addEventListener("click",function(event){
//             var cartRm = event.target
//             var cartItemRm = cartRm.parentElement.parentElement
//             cartItemRm.remove();
//             carttotal();
//         })
//     }
    
// }

// // /*xóa item trong shopping cart*/
// // var $removeItem = $('.remove');
// // $removeItem.on('click',function(){
// //    var $item = $(this).parents('.cart_item');
// //    $item.remove();
// //    alert('Bạn đã xóa thành công sản phẩm.');
// // })

// // let soLuong = 0;
// // const arrCart=[];
// // function addCart(maSP){
// //     var item;
// //     var qtyItem =0;
// //     var flag = false;
// //     for(let i =0 ; i<arrSP.length;i++){
// //         if(arrSP[i].ma == maSP){
// //             item = arrSP[i];
// //             qtyItem = 1;
// //             break;
// //         }
// //     }  
// //     for(let i =0 ; i<arrCart.length;i++){
// //         if(arrCart[i].sp.ma == maSP){
// //             arrCart[i].qty ++;
// //             flag = true;
// //             break;
// //         }
// //     } 
// //     if(flag==false){
// //         let cartItem = {sp:item, qty:qtyItem};
// //         arrCart.push(cartItem);
// //     }
// //     soLuong++;
   
// //     var cartList = JSON.stringify(arrCart);
// //     localStorage.setItem("myCart", cartList)
// //     localStorage.setItem("totalQty",soLuong);
// //      document.querySelector('#soLuong').innerText =soLuong;
   
// // }
