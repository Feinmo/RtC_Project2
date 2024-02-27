productsArray = [
    {
        name: 'HP Essentials 255 G8 AMD', vendor: "PcComponents", price: 399, img: 'https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, magnam?", stars: 4, reviews: 250,
    },
    {
        name: 'LENOVO IdeaPad 3i 15.6" Laptop - Intel® Core™ i3, 128 GB SSD, Blue', vendor: "TonyJimmy", price: 229, img: 'https://media.currys.biz/i/currysprod/10250688?$g-small$&fmt=auto', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, magnam?", stars: 4.3, reviews: 46,
    },
    {
        name: 'ASUS Zenbook 14 UX3402ZA 14" Laptop – Intel® Core™ i5, 512 GB SSD, Blue', vendor: "PcComponents", price: 599, img: 'https://media.currys.biz/i/currysprod/10254681?$g-small$&fmt=auto', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, magnam?", stars: 4.2, reviews: 4,
    },
    {
        name: 'ACER Swift Go 14" Laptop - AMD Ryzen 7, 512 GB SSD, Silver', vendor: "PcComponents", price: 799, img: 'https://media.currys.biz/i/currysprod/10250728?$g-small$&fmt=auto', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, magnam?", stars: 4.4, reviews: 944,
    },
    {
        name: 'HP ENVY x360 15.6" 2 in 1 Laptop - AMD Ryzen 5, 512 GB SSD, Black', vendor: "TonyJimmy", price: 799, img: 'https://media.currys.biz/i/currysprod/10250733?$g-small$&fmt=auto', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, magnam?", stars: 4.3, reviews: 13,
    },
    {
        name: 'LG gram 17 17Z90R-K.AA79A1 17" Laptop - Intel® Core™ i7, 1 TB SSD, Dark Grey', vendor: "Ricky", price: 1299, img: 'https://media.currys.biz/i/currysprod/10251820?$g-small$&fmt=auto', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, magnam?", stars: 4.8, reviews: 4,
    },
    {
        name: 'HP 15s-fq0501sa 15.6" Laptop - Intel® Pentium® Silver, 128 GB SSD, Black', vendor: "PcComponents", price: 229, img: 'https://media.currys.biz/i/currysprod/10250266?$g-small$&fmt=auto', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, magnam?", stars: 3.5, reviews: 26,
    },
    {
        name: 'ASUS Vivobook 16 X1605EA 16" Laptop - Intel® Core™ i3, 256 GB SSD, Silver', vendor: "Bob's shop", price: 349, img: 'https://media.currys.biz/i/currysprod/10251620?$g-small$&fmt=auto', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, magnam?", stars: 4.1, reviews: 21,
    },
    {
        name: 'HP Pavilion 15-eh1508sa 15.6" Laptop - AMD Ryzen 7, 512 GB SSD, Natural Silver', vendor: "Ricky", price: 729, img: 'https://media.currys.biz/i/currysprod/10251007?$g-small$&fmt=auto', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, magnam?", stars: 4.3, reviews: 34,
    },
    {
        name: 'HP 14s-dq0518sa 14" Laptop - Intel® Celeron®, 128 GB eMMC, Black', vendor: "Bob's shop", price: 199, img: 'https://media.currys.biz/i/currysprod/10250727?$g-small$&fmt=auto', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, magnam?", stars: 4.3, reviews: 85,
    },
]

// CONTAINERS
const articlesMain = document.querySelector(".products");
const vendorsContainer = document.getElementById("vendors");
const priceSliderBar = document.getElementById("price-slider");
const priceValue = document.querySelector("#price-value");
// END CONTAINERS
// Special vars



populateArticle = (product) => {
    return `
    <div class = "prod-img">
    <img src = ${product.img} name =${product.name}/>
    </div>
    <div class = "prod-details">
    <h1>${product.name}</h1>
    <h4>seller: ${product.vendor}</h4>
    <p>Description: ${product.description}</p>
    <br><br>
    <p>stars: ${product.stars} (reviews: ${product.reviews})</p>
    <h3>price: ${product.price}</h4>
    </div>`;
}

// FILTERS

const populateVendors = (ObjectsArray) => {
    const vendorsList = [];
    ObjectsArray.map((product) => {
        if (vendorsList.includes(product.vendor) == false) {
            vendorsList.push(product.vendor)
        };
    });
    return vendorsList;
};

const vendorsList = populateVendors(productsArray);

const generateVendorCheckboxes = () => {
    
    vendorsList.forEach((position) => {
        const checkboxVendor = document.createElement("INPUT");
        checkboxVendor.setAttribute("type", "checkbox");
        checkboxVendor.id = position;
        const vendorName = (document.createElement("label"))
        vendorName.setAttribute("for", position);
        vendorName.textContent = position;
        const vendorPosition = document.createElement("div");

        vendorPosition.append(checkboxVendor);
        vendorPosition.append(vendorName);

        vendorsContainer.append(vendorPosition);

    })
}

const generatePriceSlider = () => {
    const pricesArray = [];
    productsArray.map((product) => {
        pricesArray.push(product.price);
    });
    const minValue = Math.min(...pricesArray);
    const maxValue = Math.max(...pricesArray)

    priceSliderBar.min = minValue;
    priceSliderBar.max = maxValue;

    priceValue.textContent = priceSliderBar.value;

}


// END FILTERS

//GENERATE PRODUCTS
const generateArticles = ((Array, targetElement) => {
    Array.forEach((product) => {
        const productElement = document.createElement("article");
        productElement.innerHTML += populateArticle(product);
        targetElement.append(productElement);
    });
});

generateArticles(productsArray, articlesMain);
generateVendorCheckboxes();
generatePriceSlider();

priceSliderBar.addEventListener("input", (event) => {
    priceValue.textContent = event.target.value;
});
