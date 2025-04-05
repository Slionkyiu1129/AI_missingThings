import React from 'react';

const Header = () => {
    return (
        <>
            <header style={styles.header}>
                <h1 style={styles.title}>AI遺失物協尋平台</h1>
                <div style={styles.imageContainer}>
                    <img src="./image/search.png" alt="Image 1" style={styles.image} />
                    <img src="./image/account_circle.png" alt="Image 2" style={styles.image} />
                    <img src="./image/Shopping cart.png" alt="Image 3" style={styles.image} />
                </div>
            </header>
        </>
    );
};

const styles = {
    header: {
        padding: '20px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        color: 'black',
        fontSize: '24px',
        margin: 0,
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'end',
        marginTop: '20px',
    },
    image: {
        width: '25px',
        height: '25px',
        margin: '0 10px',
    },
};

export default Header;