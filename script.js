// script.js
// Selecciona todos los botones de "Añadir al carrito"
const botones = document.querySelectorAll('.add-to-cart');

// Selecciona el carrito donde se mostrarán los libros
const carrito = document.getElementById('carrito');

// Almacena los libros en el navegador
let librosEnCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Muestra los libros guardados al cargar la página
actualizarCarrito();

// Añade evento a cada botón
botones.forEach(boton => {
  boton.addEventListener('click', () => {
    const libro = boton.getAttribute('data-libro');
    if (!librosEnCarrito.includes(libro)) {
      librosEnCarrito.push(libro);
      localStorage.setItem('carrito', JSON.stringify(librosEnCarrito));
      actualizarCarrito();
    } else {
      alert('El libro ya está en el carrito.');
    }
  });
});

// Función para actualizar el carrito en la página
function actualizarCarrito() {
  carrito.innerHTML = ''; // Limpia el carrito
  librosEnCarrito.forEach(libro => {
    const li = document.createElement('li');
    li.textContent = libro;
    carrito.appendChild(li);
  });
}
