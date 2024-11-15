/* #### LOADER #### */

document.addEventListener("DOMContentLoaded", function(){ 
    setTimeout(function() {
        const contenedorLoader = document.getElementById("contenedorLoader");
        const mainContent = document.getElementById("main-content");

        contenedorLoader.style.opacity = "0";
        mainContent.style.opacity = "1";

        setTimeout(function() {
            contenedorLoader.style.display = "none";
            mainContent.classList.remove("hidden");
        }, 1000)
    }, 2000)
})

document.addEventListener("DOMContentLoaded", function(){ 
    setTimeout(function() {
        const contenedorLoader = document.getElementById("contenedorLoader");
        const main = document.getElementById("main");

        contenedorLoader.style.opacity = "0";
        main.style.opacity = "1";

        setTimeout(function() {
            contenedorLoader.style.display = "none";
            main.classList.remove("hidden");
        }, 1000)
    }, 2000)
})

document.addEventListener("DOMContentLoaded", function(){ 
    setTimeout(function() {
        const contenedorLoader = document.getElementById("contenedorLoader");
        const main = document.getElementById("footer");

        contenedorLoader.style.opacity = "0";
        main.style.opacity = "1";

        setTimeout(function() {
            contenedorLoader.style.display = "none";
            main.classList.remove("hidden");
        }, 1000)
    }, 2000)
})

/* #### CARRITO DE COMPRAS #### */

//  AL HACER CLICK EN EL ICON CLOSE SE CIERRE EL CARRITO

document.addEventListener("DOMContentLoaded", function() {
    const closeIcon = document.querySelector(".close");
    const cart = document.querySelector(".cart");

    closeIcon.addEventListener("click", function(event) {
        event.preventDefault(); // Evita que el enlace recargue la página
        cart.classList.add("hidden"); // Agrega la clase 'hidden' para ocultar el carrito
    });
});

const cart = [];

function addToCart(product) {
    cart.push(product);
    updateCartDisplay();

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Se agregó al carrito",
        showConfirmButton: false,
        timer: 1500
    });
}

function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        cart.splice(index, 1);
        updateCartDisplay();

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Producto eliminado del carrito",
            showConfirmButton: false,
            timer: 1500,
        });
    }
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    const cartCountElement = document.getElementById("cart-count");
    cartItemsContainer.innerHTML = '';

    let total = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        
        total += item.price; // Sumar el precio de cada producto al total

        // Botón de eliminar
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.className = "remove-button";
        deleteButton.style.marginLeft = "10px";
        deleteButton.onclick = () => removeFromCart(item.id);

        li.appendChild(deleteButton);
        cartItemsContainer.appendChild(li);
    });

    // Actualizar el total en el HTML
    totalPriceElement.textContent = total.toFixed(2);

    // Actualizar el contador de productos
    cartCountElement.textContent = cart.length;
}

// Función para mostrar u ocultar el carrito
function toggleCart() {
    const cartElement = document.getElementById('cart');
    cartElement.classList.toggle('hidden');
}

/* #### METODOS DE PAGO #### */ 

document.addEventListener("DOMContentLoaded", function() {
    const checkoutButton = document.getElementById("checkout-button");
    const contenedorMetodoPago = document.querySelector(".contenedorMetodoPago");
    const closeButton = document.querySelector(".metodoPagoCerrar");
    const mainContent = document.querySelector("#main"); // Selecciona el contenedor del contenido principal
    const header = document.querySelector("header"); // Selecciona el header si existe en tu HTML

    // Al hacer clic en el botón "Finalizar Compra"
    checkoutButton.addEventListener("click", function(event) {
        event.preventDefault(); // Previene la acción predeterminada del botón

        // Muestra solo el header y el contenedor de método de pago
        contenedorMetodoPago.style.display = "flex"; // Muestra el contenedor de pago
        mainContent.style.display = "none"; // Oculta el contenido principal
        if (header) header.style.display = "block"; // Asegúrate de que el header esté visible
    });

    // Al hacer clic en el icono de cerrar en el contenedor de método de pago
    closeButton.addEventListener("click", function() {
        contenedorMetodoPago.style.display = "none"; // Oculta el contenedor de pago
        mainContent.style.display = "block"; // Vuelve a mostrar el contenido principal
    });
});

/* #### SWIPER CARD #### */

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
        depth:500,
        modifer:1,
        slidesShadows:true
    }
})