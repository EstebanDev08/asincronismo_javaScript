const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(url) {

    const response = await fetch(url);

    const data = (await response).json();

    return data;
}

const anotherFunction = async (url) => {

        try {
            const products = await fetchData(`${url}/products`);
            const product = await fetchData(`${url}/products/${products[0].id}`);
            const category = await fetchData(`${url}/categories/${product.category.id}`);

            console.log(products, product, category);
        } catch (error) {
            console.error(error);
        }
}

anotherFunction(API);