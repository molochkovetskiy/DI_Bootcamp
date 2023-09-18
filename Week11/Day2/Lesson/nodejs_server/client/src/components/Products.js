import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const Products = (props) => {

    const [products, setProducts] = useState();
    const [search, setSearch] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    useEffect(() => {
        allProducts();
    }, []);

    const allProducts = async () => {
        try {
            const res = await fetch(`${BASE_URL}/api/products`);
            const data = await res.json();
            setProducts(data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleSearch = async () => {
        try {
            const res = await fetch(`${BASE_URL}/api/products/search?name=${search}`);
            const data = await res.json();
            data && setProducts(data);
        } catch (err) {
            console.log(err);
        }
    };

    const addProduct = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${BASE_URL}/api/products`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({ name, price })
            });
            const data = await res.json();
            console.log(data);
            // allProducts();
            setProducts(data);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <h1>Shop</h1>
            <div>
                <input onChange={(e) => setSearch(e.target.value)} />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div>
                <form onSubmit={addProduct}>
                    Name:
                    <input onChange={(e) => setName(e.target.value)} />
                    Price:
                    <input onChange={(e) => setPrice(e.target.value)} />
                    <input type='submit' value='add product' />
                </form>
            </div>
            {
                products && products.map(item => {
                    return (
                        <div
                            key={item.id}
                            style={{
                                display: 'inline-block',
                                margin: '20px',
                                padding: '20px',
                                border: '1px solid #000'
                            }}>
                            <h4>{item.name}</h4>
                            <p>{item.price}</p>
                            <Link to={`/${item.id}`}>Buy Now</Link>
                        </div>
                    )
                })
            }
        </>
    );
};

export default Products;