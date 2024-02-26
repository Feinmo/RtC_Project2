productsArray = [
    { name: "product 1", class: "staff", vendor: "vendor 1", price: 500, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, magnam?" },
    { name: "product 2", class: "electronics", vendor: "vendor 1", price: 1500, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, magnam?" },
    { name: "product 3", class: "random", vendor: "vendor 1", price: 800, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, magnam?" },
    { name: "product 4", class: "electronics", vendor: "vendor 1", price: 2500, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, magnam?" },
    { name: "product 5", class: "pets", vendor: "vendor 1", price: 25, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, magnam?" },
    { name: "product 6", class: "pets", vendor: "vendor 1", price: 350, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, magnam?" },
    { name: "product 6", class: "pets", vendor: "vendor 1", price: 350, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, magnam?" },
    { name: "product 6", class: "pets", vendor: "vendor 1", price: 350, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, magnam?" },
    { name: "product 6", class: "pets", vendor: "vendor 1", price: 350, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, magnam?" },
    { name: "product 6", class: "pets", vendor: "vendor 1", price: 350, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, magnam?" },
    { name: "product 6", class: "pets", vendor: "vendor 1", price: 350, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, magnam?" },
    { name: "product 6", class: "pets", vendor: "vendor 1", price: 350, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, magnam?" },
    { name: "product 6", class: "pets", vendor: "vendor 1", price: 350, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, magnam?" },
    { name: "product 6", class: "pets", vendor: "vendor 1", price: 350, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, magnam?" },
    { name: "product 6", class: "pets", vendor: "vendor 1", price: 350, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, magnam?" },
    { name: "product 6", class: "pets", vendor: "vendor 1", price: 350, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, magnam?" },
    { name: "product 6", class: "pets", vendor: "vendor 1", price: 350, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, magnam?" },
    { name: "product 6", class: "pets", vendor: "vendor 1", price: 350, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, magnam?" },
    { name: "product 6", class: "pets", vendor: "vendor 1", price: 350, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, magnam?" },
    { name: "product 6", class: "pets", vendor: "vendor 1", price: 350, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, magnam?" },
    
];

const articlesMain = document.querySelector(".articles-container");

populateArticle = (product) => {
    return `
    <h1>${product.name}</h1>
    <img src = "#" name =${product.name}/>
    <h4>${product.class}</h2>
    <p>${product.description}</p>
    <br><br>
    <h4>${product.vendor}</h4>
    <h3>${product.price}</h4>`;
}

const generateArticles = ((Array, targetElement) => {
    Array.map((product) => {
        const productElement = document.createElement("article");
        productElement.innerHTML += populateArticle(product);
        targetElement.append(productElement);
    });
});

generateArticles(productsArray, articlesMain);