// ACORDEÓN DE SERVICIOS
const servicios = document.querySelectorAll(".servicio");

servicios.forEach(servicio => {
    const titulo = servicio.querySelector("h3");

    titulo.addEventListener("click", () => {
        servicios.forEach(s => {
            if (s !== servicio) {
                s.classList.remove("activo");
            }
        });
        servicio.classList.toggle("activo");
    });
});

// ACORDEÓN DE PRODUCTOS
const productos = document.querySelectorAll(".producto");

productos.forEach(producto => {
    const titulo = producto.querySelector("h4");

    titulo.addEventListener("click", e => {
        e.stopPropagation();

        const productosDelServicio = producto
            .closest(".submenu")
            .querySelectorAll(".producto");

        productosDelServicio.forEach(p => {
            if (p !== producto) {
                p.classList.remove("activo");
            }
        });

        producto.classList.toggle("activo");
    });
});
