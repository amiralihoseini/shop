const searchInput = document.getElementById("search-input");
const products = document.querySelectorAll(".products-item");
const buttoms = document.querySelectorAll(".filter");
const searchPriceInput = document
	.getElementById("search-price")
	.querySelector("input");
const buttomPrice = document
	.getElementById("search-price")
	.querySelector("button");

    const chageClass = filter => {
        console.log("🚀 ~ chageClass ~ filter:", filter)
        buttoms.forEach (product => {
            const buttonData = product.dataset.filter;
            console.log("🚀 ~ chageClass ~ buttonData:", buttonData)
            if(filter === buttonData){
                product.classList.add ("selected");
            }else{
                product.classList.remove ("selected")
            }
            

        })
    }



const searchNameHandeler = event => {
	const searchProduct = event.target.value.toLowerCase().trim();
	// console.log("🚀 ~ searchNameHandeler ~ searchProduct:", searchProduct)

	products.forEach(product => {
		const productName = product.children[1].innerText.toLowerCase();
		// console.log("🚀 ~ searchNameHandeler ~ productName:", productName)

		if (!searchInput) {
			product.style.display = "block";
		} else {
			productName.includes(searchProduct)
				? (product.style.display = "block")
				: (product.style.display = "none");
		}
	});
};

const sortByType = event => {
	const typeOfButtom = event.target.dataset.filter;
    chageClass (typeOfButtom);
	products.forEach(product => {
		const typeOfProducts = product.dataset.category;

		if (typeOfButtom === "all") {
			product.style.display = "block";
		} else {
			typeOfButtom === typeOfProducts
				? (product.style.display = "block")
				: (product.style.display = "none");
		}
	});
};

const searchByPrice = event => {
	const inputValue = +searchPriceInput.value;
	products.forEach(product => {
		const productPrice = product.children[2].innerText;
		const finalPrice = +productPrice.split(" ")[1];

		if (!inputValue) {
			product.style.display = "block";
		} else {
			inputValue === finalPrice
				? (product.style.display = "block")
				: (product.style.display = "none");
		}
	});
};

const start = () => {

    buttoms.forEach(item => {
        item.addEventListener("click", sortByType);
    });
    searchInput.addEventListener("keyup", searchNameHandeler);
    buttomPrice.addEventListener("click", searchByPrice);
    
}


window.addEventListener ("load" , start);