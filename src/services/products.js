import axios from 'axios';


const fetchProducts = async() => {
    const {data} = await axios.get('/products')
    console.log('data:', data)
    return data;
}

export default fetchProducts;

