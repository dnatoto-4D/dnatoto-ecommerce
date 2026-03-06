const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    // Data produk simulasi
    const products = [
        { id: 1, name: "DNA Chrono Master", price: "2.850.000", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30", tag: "Premium" },
        { id: 2, name: "Tech Armor Backpack", price: "950.000", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62", tag: "New" },
        { id: 3, name: "Sonic Buds DNA-7", price: "1.450.000", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e", tag: "Top Rated" },
        { id: 4, name: "Vision DNA Pro", price: "4.200.000", img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f", tag: "Limited" }
    ];

    res.render('index', { 
        brandName: 'Dnatoto',
        products: products,
        loginUrl: 'https://dnatoto-seru.com/', // Ganti dengan link Anda
        registerUrl: 'https://dnatoto-seru.com/register' // Ganti dengan link Anda
    });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Dnatoto Live at http://localhost:${PORT}`));