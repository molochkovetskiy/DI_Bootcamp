import { useState, useEffect } from 'react';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const Products = (props) => {

    const [products, setProducts] = useState();
    const [search, setSearch] = useState('');

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

    return (
        <>
            <h1>Shop</h1>
            <div>
                <input onChange={(e) => setSearch(e.target.value)} />
                <button onClick={handleSearch}>Search</button>
            </div>
            {
                products && products.map(item => {
                    return (
                        <div key={item.id} style={{
                            display: 'inline-block',
                            margin: '20px',
                            padding: '20px',
                            border: '1px solid #000'
                        }}>
                            <h4>{item.name}</h4>
                            <h4>{item.price}</h4>
                        </div>
                    )
                })
            }
        </>
    );
};

export default Products;