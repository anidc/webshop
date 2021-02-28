var products = [
    {
        title: "iPhone 12 pro",
        img: "https://mobipro.ba/wp-content/uploads/2020/11/iphone-12-pro-max-gold-hero.png",
        price: "2 699",
        description: "Apple iPhone 12 Pro donosi ti trostruki sustav kamera, nevjerojatan odmak u trajanju baterije i zadivljujući čip koji pomiče granice mogućnosti mobilnih telefona."
    },
    {
        title: "iPhone 12 pro max",
        img: "https://i0.wp.com/mekline.ba/wp-content/uploads/2020/10/iphone-12-pro-silver-hero.png?fit=470%2C556&ssl=1",
        price: "2 699",
        description: "Apple iPhone 12 Pro donosi ti trostruki sustav kamera, nevjerojatan odmak u trajanju baterije i zadivljujući čip koji pomiče granice mogućnosti mobilnih telefona."
    },
    {
        title: "iPhone 12",
        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-blue-select-2020?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604343704000",
        price: "2 699",
        description: "Apple iPhone 12 Pro donosi ti trostruki sustav kamera, nevjerojatan odmak u trajanju baterije i zadivljujući čip koji pomiče granice mogućnosti mobilnih telefona."
    },
    {
        title: "iPhone 12",
        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-mini-blue-select-2020?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604343706000",
        price: "2 699",
        description: "Apple iPhone 12 Pro donosi ti trostruki sustav kamera, nevjerojatan odmak u trajanju baterije i zadivljujući čip koji pomiče granice mogućnosti mobilnih telefona."
    }
]

function displayProducts(p_products) {
    var main = document.getElementById("main")
    main.innerHTML = ""
    for (var i = 0; i < p_products.length; i++) {
        var element = p_products[i]
        var card = document.createElement("div")
        card.classList.add("card")
        var title = document.createElement("h2")
        title.innerHTML = element.title
        var img = document.createElement("img")
        img.src = element.img
        var price = document.createElement("h3")
        price.innerHTML = element.price + " KM"
        var description = document.createElement("p")
        description.innerHTML = element.description
        description.className = "none"

        // card.onmouseover = function showDetails() {
        //     description.classList.remove("none")
        // }
        card.addEventListener("mouseover", function hideDetails() {
            description.classList.remove("none")
        })
        card.addEventListener("mouseleave", function hideDetails() {
            description.classList.add("none")
        })
        // card.onmouseleave = function hideDetails() {
        //     description.classList.add("none")
        // }
        var buyBtn = document.createElement("button")
        buyBtn.innerHTML = "Buy"
        var detailsBtn = document.createElement("button")
        detailsBtn.innerHTML = "Details"
        card.appendChild(title)
        card.appendChild(img)
        card.appendChild(price)
        card.appendChild(buyBtn)
        card.appendChild(detailsBtn)
        main.appendChild(card)
    }
}

displayProducts(products)

searchProducts = (e) => {
    console.log(e.target.value);
    var filtered = []
    for (var prod of products) {
        if (prod.title.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1) {
            filtered.push(prod)
        }
    }
    displayProducts(filtered);
}


// showDetails = () => {
//     onmouseover(card) = description.classList.remove("none")
//     onmouseleave(card) = description.classList.add("none")
// }