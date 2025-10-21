# 🌸 Marquiza Crochê

Um site desenvolvido para apresentar os produtos e serviços da marca **Marquiza Crochê**, com design responsivo, interface elegante e modo claro/escuro. O projeto foi construído utilizando **HTML, CSS e JavaScript puro**, focando em estética, acessibilidade e boa experiência de navegação.

---

## 🧶 Visão Geral

O site tem como objetivo divulgar os produtos feitos à mão da Marquiza Crochê, destacando:
- Catálogo de produtos (tops, saias, ecobags, etc.);
- Linhas e cores disponíveis;
- Tabela de medidas personalizada;
- Feedbacks de clientes;
- Política de devolução e cuidados com as peças;
- Meios de contato com a marca.

Além disso, o site conta com:
- **Tema claro e escuro** com persistência via *cookies*;
- **Menu responsivo** para dispositivos móveis;
- **Layout organizado em seções**, com design limpo e moderno.

---

## 🖥️ Tecnologias Utilizadas

- **HTML5** — estrutura semântica e acessível;
- **CSS3** — estilização com variáveis, flexbox e responsividade;
- **JavaScript (ES6)** — controle de tema, cookies e menu mobile;
- **Font Awesome** — ícones vetoriais;
- **Google Fonts (Urbanist e Shrikhand)** — tipografia personalizada.

---

## 🌗 Funcionalidades

### 🌞 Alternância de Tema
O usuário pode escolher entre **modo claro** e **modo escuro**.  
A preferência é salva em *cookies*, garantindo que o tema escolhido seja mantido nas próximas visitas.

### 📱 Navegação Responsiva
O menu adapta-se automaticamente para telas menores, utilizando um botão “hambúrguer”.

### 💬 Seções do Site
- **Bem-vindo** — introdução à marca;
- **Produtos** — catálogo com imagens e descrições;
- **Linhas** — cores e tipos de fios disponíveis;
- **Medidas** — tabela de tamanhos padrão;
- **Feedbacks** — opiniões de clientes com fotos e avaliações;
- **Política de Devolução** — termos da loja e cuidados com as peças;
- **Contato** — links diretos para Instagram e WhatsApp.

---

## 🧩 Estrutura de Pastas

```
/
├── index.html        # Página principal
├── style.css         # Estilos e temas
├── script.js         # Funcionalidades JS
└── img/              # Imagens da marca, produtos e ícones
    ├── logo/
    ├── produtos/
    ├── linhas/
    └── perfil/
```

---

## 💡 Destaques de Código

### Modo Escuro e Claro
```js
darkBtn.addEventListener('click', function () {
  applyDarkMode();
  setCookie('theme', 'dark', 30);
});

lightBtn.addEventListener('click', function () {
  applyLightMode();
  setCookie('theme', 'light', 30);
});
```

### Menu Responsivo
```js
function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
```


