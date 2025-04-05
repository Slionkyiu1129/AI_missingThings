import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p style={styles.text}>© 2023 Your Company. All rights reserved.</p>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: 'white',
        padding: '10px 20px',
        textAlign: 'center',
        borderTop: '1px solidrgb(255, 255, 255)',
    },
    text: {
        margin: 0,
        color: '#6c757d',
        fontSize: '14px',
    },
};

export default Footer;