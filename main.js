* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Roboto', sans-serif;
    background-color: #000;
    color: #fff;
    text-align: center;
    overflow: hidden; 
}

header {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 30px;
}

nav ul li {
    font-weight: 700;
    cursor: pointer;
}

main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
    z-index: 1;
}

main::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('https://site.erpsoft.com.br/wp-content/uploads/2020/08/2847446-1-scaled.jpg'), url('https://blog.megaoffice.net/wp-content/uploads/2019/10/293880-entenda-as-diferencas-da-contabilidade-fiscal-e-gerencial.jpg'); /* Replace with your actual image URLs */
    background-size: cover;
    background-position: center;
    background-blend-mode: lighten;
    animation: backgroundChange 10s infinite alternate;
    z-index: -1;
}

@keyframes backgroundChange {
    0% {
        background-image: url('https://site.erpsoft.com.br/wp-content/uploads/2020/08/2847446-1-scaled.jpg');
    }
    50% {
        background-image: url('https://site.erpsoft.com.br/wp-content/uploads/2020/08/2847446-1-scaled.jpg');
    }
    51% {
        background-image: url('https://blog.megaoffice.net/wp-content/uploads/2019/10/293880-entenda-as-diferencas-da-contabilidade-fiscal-e-gerencial.jpg');
    }
    100% {
        background-image: url('https://blog.megaoffice.net/wp-content/uploads/2019/10/293880-entenda-as-diferencas-da-contabilidade-fiscal-e-gerencial.jpg');
    }
}

.content {
    max-width: 1000px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 60px;
    border-radius: 25px;
}

h1 {
    font-size: 40px;
    margin-bottom: 20px;
}

h4 {
    justify-content: center;
    align-items: center;
}

button {
    background-color: transparent;
    color: #fff;
    border: 3px solid #fff;
    padding: 25px 20px;
    font-size: 20px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
}

button:hover {
    background-color: #fff;
    color: #000;
}

.info {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

.info-item {
    font-size: 14px;
    max-width: 30%;
}

footer {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
    color: #fff; /* Alterar a cor do texto para branco */
    bottom: 0;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
    font-size: 13px;
    padding: 6px; /* Adicione preenchimento para melhor legibilidade */
    z-index: 2; /* 
    Certifique-se de que esteja acima das imagens de fundo */
}

@media (max-width: 768px) {
    .info {
        flex-direction: column;
        align-items: center;
    }

    .info-item {
        max-width: 100%;
    }
}
