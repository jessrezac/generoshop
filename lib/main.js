let productsData
let shoppingCart = []

document.addEventListener("DOMContentLoaded", () => {
	createProducts(productsData.products)
})

function createProducts(products) {
	let productsContainer = document.getElementById("products-container")
	console.log(products)
	Object.keys(products).forEach((productId) => {
		let productDiv = document.createElement("div")
		productDiv.innerHTML = renderProduct(products[productId])

		productsContainer.appendChild(productDiv)
	})
}

function renderProduct(product) {
	return `<div class="product" id="product-${product.id}" onClick="addToCart(${product.id})">
                    <div class="product-image">
                        <img src="${product.imgSrc}">
                        <div class="add-to-cart">
                            Add To Cart
                        </div>
                    </div>
                    <p class="product-category">${product.category}</p>
                    <p class="product-name">${product.name}</p>
                    <p class="product-price">${product.price}</p>
                </div>`
}

// function addToCart(productId) {
// 	shoppingCart.push(productId)
// }

productsData = {
	products: {
		"0": {
			id: 0,
			category: "Accessories",
			name: "Leather Satchel",
			price: "$250.00",
			imgSrc: "assets/testpg-product-img-satchel.jpg",
		},
		"1": {
			id: 1,
			category: "Accessories",
			name: "Sunglasses",
			price: "$145.00",
			imgSrc: "assets/testpg-product-img-sunglasses.jpg",
		},
		"2": {
			id: 2,
			category: "Apparel",
			name: "Women's Heels",
			price: "$225.00",
			imgSrc: "assets/testpg-product-img-heels.jpg",
		},
		"3": {
			id: 3,
			category: "Apparel",
			name: "Cocktail Dress",
			price: "$250.00",
			imgSrc: "assets/testpg-product-img-dress.jpg",
		},
		"4": {
			id: 4,
			category: "Accessories",
			name: "Classic Watch",
			price: "$450.00",
			imgSrc: "assets/testpg-product-img-watch.jpg",
		},
		"5": {
			id: 5,
			category: "Electronics",
			name: "Macbook",
			price: "$1,550.00",
			imgSrc: "assets/testpg-product-img-macbook.jpg",
		},
	},
}
