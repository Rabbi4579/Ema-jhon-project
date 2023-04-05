import { getShoppingCart } from "../utilities/fakedb";


const cartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json')
    const products = await loadedProducts.json();

    const storedCart = getShoppingCart();
    const savedCart = [];
    console.log(storedCart)
    for (const id in storedCart) {
        const addededProduct = products.find(pd => pd.id === id)
        if (addededProduct) {
            const quantity = storedCart[id]
            addededProduct.quantity = quantity;
            savedCart.push(addededProduct)
        }
    }
    return savedCart;
}

export default cartProductsLoader;