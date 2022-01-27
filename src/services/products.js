import axios from 'axios';


const fetchProducts = async() => {
    const {data} = await axios.get('/products')
    return data;
}

const fetchProduct = async(id) => {
    const {data} = await axios.get(`/products/${id}`)
    return data;
}

export const ProductService = {
    fetchProducts,
    fetchProduct,
}
