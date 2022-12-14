

const API = 'https://api.escuelajs.co/api/v1';

function fetchData(url) {
  return fetch(url)

}

/** fetchData(`${API}/products`)
.then(response => response.json())
.then(products => {
    console.log(products);
})
.catch(error => {
    console.log(error);
}) */



fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {



        return fetchData(`${API}/products/${products[0].id}`)
    })
        .then(response => response.json())
        .then(product => {
          //  console.log(product);
           return fetchData(`${API}/categories/${product.category.id}`)
        })
            .then(response => response.json())
            .then(category => {
               // console.log(category);
                console.log('------------------------------');
            })
                .catch(error => {
                    console.log(error);
                })
                    .finally(() => {
                        console.log('Finally');
                    })




    fetchData(`${API}/products`)
        .then(response => response.json())
        .then(products => {

            return fetchData(`${API}/products/${products[0].id}`)
        })
        .then(response => response.json())
        .then(product => {

            console.log(product.title);

        })




