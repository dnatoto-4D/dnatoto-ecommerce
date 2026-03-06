const express = require('express');
const path = require('path');
const app = express(); // <--- BARIS INI WAJIB ADA

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    const products = [
        { id: 1, name: "Dna Precision Watch", price: "3.250.000", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30", tag: "Premium" },
        { id: 2, name: "Dna Tech Backpack", price: "1.150.000", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62", tag: "New" },
        { id: 3, name: "Sonic Wireless Gen 3", price: "1.899.000", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e", tag: "Best Seller" },
        { id: 4, name: "Dna Smart Glasses", price: "4.500.000", img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f", tag: "Limited" }
    ];

    res.render('index', { 
        brandName: 'DNATOTO', 
        products: products, 
        loginUrl: 'https://dnatoto-seru.com/',    // Ganti dengan link login luar Anda
        registerUrl: 'https://dnatoto-seru.com/register' // Ganti dengan link daftar luar Anda
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 DNATOTO Aktif di http://localhost:${PORT}`);
});