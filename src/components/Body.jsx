import React from 'react';

const products = [
    { id: 1, name: 'Product 1', price: '$10', description: 'This is product 1' },
    { id: 2, name: 'Product 2', price: '$20', description: 'This is product 2' },
    { id: 3, name: 'Product 3', price: '$30', description: 'This is product 3' },
    { id: 4, name: 'Product 4', price: '$40', description: 'This is product 4' },
    { id: 5, name: 'Product 5', price: '$50', description: 'This is product 5' },
    { id: 6, name: 'Product 6', price: '$60', description: 'This is product 6' },
    { id: 7, name: 'Product 7', price: '$70', description: 'This is product 7' },
    { id: 8, name: 'Product 8', price: '$80', description: 'This is product 8' },
];

const Body = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: '20px', marginTop: '50px' }}>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: '20px' }}>
                <h3 style={{ color: 'black' }}>篩選條件</h3>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: '20px' }}>
                    <p style={{ color: 'black',marginRight:'30px' }}>篩選</p>
                    <button style={{ padding: '8px 16px', cursor: 'pointer' }}>最新上架</button>
                </div>

            </div>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div style={{ marginRight: '50px' }}>
                    <select style={{ padding: '8px', cursor: 'pointer' }}>
                        <option value="all">All</option>
                        <option value="category1">Category 1</option>
                        <option value="category2">Category 2</option>
                        <option value="category3">Category 3</option>
                    </select>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', width:'700px' }}>
                    {products.map((product) => (
                        <div
                            key={product.id}
                            style={{
                                border: '1px solid #ccc',
                                borderRadius: '8px',
                                padding: '16px',
                                width: '150px',
                            }}
                        >
                            <h2 style={{ color: 'black' }}>{product.name}</h2>
                            <p style={{ color: 'black' }}>{product.description}</p>
                            <p style={{ color: 'black' }}><strong>{product.price}</strong></p>
                            <button style={{ padding: '8px 16px', cursor: 'pointer' }}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Body;