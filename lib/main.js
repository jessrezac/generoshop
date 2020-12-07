let productsData
let shoppingCart = []
let cartSubtotal = 0
let cartPanel = document.getElementById("shopping-cart")

document.addEventListener("DOMContentLoaded", () => {
	createProducts(productsData.products)
})

function createProducts(products) {
	let productsContainer = document.getElementById("products-container")
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
                    <p class="product-price">\$${product.price}.00</p>
                </div>`
}

function addToCart(productId) {
	shoppingCart.push(productId)
	addToCartProductList(productsData.products[productId])
	increaseCartSubtotal(productsData.products[productId].price)
	updateCartCount()
	showCart()
	window.scrollTo(0, 0)
}

function showCart() {
	cartPanel.style.visibility = "visible"
}

function hideCart() {
	cartPanel.style.visibility = "hidden"
}

function addToCartProductList(product) {
	let cartList = document.getElementById("cart-product-list")
	let cartProduct = createCartProduct(product)
	cartList.appendChild(cartProduct)
}

function createCartProduct(product) {
	let cartItem = document.createElement("li")
	cartItem.class = "cart-product"
	cartItem.innerHTML = `<div class="cart-product">
        <img class="cart-product-image" src="${product.imgSrc}">
        <strong class="cart-product-title">
            ${product.name}
        </strong><br />
        1 x \$${product.price}.00
        </div>`

	return cartItem
}

function increaseCartSubtotal(amount) {
	cartSubtotal = cartSubtotal + amount

	let subtotalSpan = document.getElementById("cart-subtotal")
	subtotalSpan.innerText = `\$${cartSubtotal}.00`
}

function updateCartCount() {
	let cartCountBadge = document.getElementById("cart-count")
	cartCountBadge.innerText = shoppingCart.length
}

productsData = {
	products: {
		"0": {
			id: 0,
			category: "Accessories",
			name: "Leather Satchel",
			price: 250.0,
			imgSrc: "assets/testpg-product-img-satchel.jpg",
		},
		"1": {
			id: 1,
			category: "Accessories",
			name: "Sunglasses",
			price: 145.0,
			imgSrc: "assets/testpg-product-img-sunglasses.jpg",
		},
		"2": {
			id: 2,
			category: "Apparel",
			name: "Women's Heels",
			price: 225.0,
			imgSrc: "assets/testpg-product-img-heels.jpg",
		},
		"3": {
			id: 3,
			category: "Apparel",
			name: "Cocktail Dress",
			price: 250.0,
			imgSrc: "assets/testpg-product-img-dress.jpg",
		},
		"4": {
			id: 4,
			category: "Accessories",
			name: "Classic Watch",
			price: 450.0,
			imgSrc: "assets/testpg-product-img-watch.jpg",
		},
		"5": {
			id: 5,
			category: "Electronics",
			name: "Macbook",
			price: 1550.0,
			imgSrc: "assets/testpg-product-img-macbook.jpg",
		},
	},
}
