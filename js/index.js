/* ==============================
   IMPORTADOS PREMIUM - JS
   Funções:
   - Filtrar produtos por categoria
   - Buscar produtos pelo nome
   - Enviar produto para WhatsApp
   - Animação de entrada ao rolar a página
================================= */

const numeroWhatsApp = "5599999999999";

const produtos = document.querySelectorAll(".produto");
const buscaInput = document.getElementById("buscaInput");

/**
 * Filtra os produtos pela categoria escolhida.
 */
function filtrarCategoria(categoria) {
    buscaInput.value = "";

    produtos.forEach((produto) => {
        const categoriaProduto = produto.dataset.categoria;

        if (categoria === "todos" || categoriaProduto === categoria) {
            produto.style.display = "block";
        } else {
            produto.style.display = "none";
        }
    });
}

/**
 * Busca produtos pelo texto digitado.
 */
function buscarProduto() {
    const termoBusca = buscaInput.value.toLowerCase().trim();

    produtos.forEach((produto) => {
        const nomeProduto = produto.querySelector("h4").textContent.toLowerCase();

        if (nomeProduto.includes(termoBusca)) {
            produto.style.display = "block";
        } else {
            produto.style.display = "none";
        }
    });
}

/**
 * Abre o WhatsApp com mensagem pronta do produto.
 */
function enviarWhats(nomeProduto) {
    const mensagem = `Olá! Tenho interesse no produto: ${nomeProduto}. Gostaria de saber mais informações.`;
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
}

/**
 * Animação simples e leve ao rolar a página.
 */
const elementosAnimados = document.querySelectorAll(
    ".section-title, .card-produto, .categorias-grid button, .como-funciona .col-md-4, .cta-final h3"
);

const observer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("ativo");
        }
    });
}, {
    threshold: 0.15
});

elementosAnimados.forEach((elemento) => {
    elemento.classList.add("reveal");
    observer.observe(elemento);
});

/* MENU MOBILE */
const btnMenuMobile = document.getElementById("btnMenuMobile");
const btnFecharMenu = document.getElementById("btnFecharMenu");
const menuMobile = document.getElementById("menuMobile");
const mobileOverlay = document.getElementById("mobileOverlay");
const linksMenuMobile = document.querySelectorAll(".menu-mobile a");

function abrirMenuMobile() {
    menuMobile.classList.add("ativo");
    mobileOverlay.classList.add("ativo");
    document.body.style.overflow = "hidden";
}

function fecharMenuMobile() {
    menuMobile.classList.remove("ativo");
    mobileOverlay.classList.remove("ativo");
    document.body.style.overflow = "";
}

btnMenuMobile.addEventListener("click", abrirMenuMobile);
btnFecharMenu.addEventListener("click", fecharMenuMobile);
mobileOverlay.addEventListener("click", fecharMenuMobile);

linksMenuMobile.forEach((link) => {
    link.addEventListener("click", fecharMenuMobile);
});