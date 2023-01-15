const productsArray = [
    {
        id: "1",
        title: "Starter Service",
        price: 9.99
    },
    {
        id: "2",
        title: "Premium Service",
        price: 19.99
    },
    {
        id: "3",
        title: "Exclusive Service",
        price: 29.99
    }
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };