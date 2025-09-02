 const shopIcon = document.getElementById("addtoCart");
          const addtocartDiv = document.getElementById("add_lis_div");
          const orderBtn = document.querySelectorAll(".addtocard");
           const cartConatiner = document.getElementById("add_lis_div");
          const cartItems =[];
          shopIcon.addEventListener("click", ()=>{
            if(cartConatiner.style.width === "0px"){
              cartConatiner.style.width = "250px";
            } else{
              cartConatiner.style.width = "0px"
            }
          })
          orderBtn.forEach(button =>{
            button.addEventListener("click", () =>{
              const itemName = button.getAttribute("data-name");
              const itemPrice = button.getAttribute("data-price");
            cartItems.push({name: itemName, price:itemPrice, quantity:1});
            updateCartUI();
            })
          })
          function updateCartUI() {
          cartConatiner.innerHTML = ''// clearing everything
          cartItems.forEach((item, index) =>{
          const itemDiv = document.createElement("div");
          itemDiv.className = "cart_item";
          itemDiv.innerHTML = `<p><strong>${item.name}</strong></p> 
          <p>Price: $${item.price}</p>
          <p>Quantity: ${item.quantity}</p>
          <hr>`;
          cartConatiner.appendChild(itemDiv);
          });
          }