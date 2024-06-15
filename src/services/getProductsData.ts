export const getProductsData = async () : Promise<any> => {
    const data = fetch('https://fake-store-api-2no73ornoa-uc.a.run.app/api/products/all')
        .then(res => res.json())
        .catch(err => console.log(err))
    return data
}