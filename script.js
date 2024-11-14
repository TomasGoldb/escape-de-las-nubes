// Función para simular el acceso a la primera sala
function enterRoom() {
   location.href="sala1.html"
}

// Función para crear círculos de colores aleatorios
function createMovingCircles() {
    const circlesContainer = document.getElementById("circles-container");

    // Generar 10 círculos
    for (let i = 0; i < 10; i++) {
        const circle = document.createElement("div");
        circle.classList.add("circle");

        // Establecer un tamaño aleatorio para cada círculo
        const size = Math.random() * 50 + 30; // Tamaño entre 30px y 80px
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;

        // Establecer un color aleatorio
        const randomColor = getRandomColor();
        circle.style.backgroundColor = randomColor;

        // Posicionar el círculo en una posición aleatoria inicial
        circle.style.top = `${Math.random() * 100}vh`;
        circle.style.left = `${Math.random() * 100}vw`;

        // Agregar el círculo al contenedor
        circlesContainer.appendChild(circle);

        // Llamar a la función para mover el círculo aleatoriamente
        moveCircleRandomly(circle);
    }
}

// Función para generar un color aleatorio en formato HEX
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Función para mover el círculo aleatoriamente por la pantalla
function moveCircleRandomly(circle) {
    const moveInterval = setInterval(() => {
        // Generar nuevas posiciones aleatorias
        const newTop = Math.random() * 100; // 0 - 100vh
        const newLeft = Math.random() * 100; // 0 - 100vw

        // Asignar la nueva posición con transición
        circle.style.top = `${newTop}vh`;
        circle.style.left = `${newLeft}vw`;

        // Cambiar el color de forma aleatoria para hacerlo más dinámico
        circle.style.backgroundColor = getRandomColor();
    }, Math.random() * 2000 + 1000); // Cambia la posición cada 1-3 segundos
}

// Llamada a la función para generar los círculos al cargar la página
window.onload = createMovingCircles;



//---------------------------------------------


// Array de códigos válidos
const validCodes = ['4785', '8329', '6412'];

// Función que se ejecuta al hacer clic en el botón
function comprobarCodigo(num) {
    event.preventDefault();
    // Obtener el valor del input
    const inputCode = document.getElementById('input-code').value.trim();
    const messageElement = document.getElementById('message');

    // Limpiar cualquier mensaje anterior
    messageElement.textContent = '';

    // Verificar si el código está en el array de códigos válidos
    if (validCodes[num-1]===inputCode) {
        messageElement.innerHTML = `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>¡Código correcto!</strong> Acceso concedido.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
        if(num==3){
            location.href="victoria.html";
        }else{
        let proxSala= parseInt(num)+1;
        location.href="sala"+proxSala+".html";
        }
    } else {
        // Código incorrecto
        messageElement.innerHTML = `
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Código incorrecto!</strong> Intenta de nuevo.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
    }

    // Limpiar el input después de comprobar
    document.getElementById('input-code').value = '';
}

