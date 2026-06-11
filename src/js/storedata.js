// ==========================================
// ផ្ទុកទិន្នន័យផលិតផលទាំងអស់ (All Menu - ១២ មុខ មានរូបភាពគ្រប់)
// ==========================================
const Coffee = [
    // --- ក្រុម៖ កាហ្វេ (category: "coffee") ---
    {
        id: 1, 
        name: "Coffee Espresso", 
        price: 2.50, 
        img: "https://i.pinimg.com/736x/06/76/f3/0676f3bae9184b54ddee40ae51208b7e.jpg",
        desc: "Strong and bold espresso shot, brewed from premium artisan roasted beans.",
        category: "coffee",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Espresso-2.50"
    },
    {
        id: 2, 
        name: "Latte Hot",
        price: 3.00,
        img: "https://i.pinimg.com/736x/cf/20/0f/cf200fcd889e35ea0911e3195c705f8f.jpg",
        desc: "A smooth blend of rich espresso and velvety steamed milk with a delicate foam.",
        category: "coffee",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=LatteHot-3.00"
    },
    {
        id: 3, 
        name: "Americano Socola",
        price: 3.50,
        img: "https://i.pinimg.com/736x/6f/c1/de/6fc1dea44454180d50d12f2c96d1199e.jpg",
        desc: "Bold espresso lengthened with hot water, combined with premium dark chocolate.",
        category: "coffee",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=AmericanoSocola-3.50"
    },
    {
        id: 4, 
        name: "Caramel Macchiato",
        price: 4.25,
        img: "https://i.pinimg.com/736x/84/ce/27/84ce272551a3a40498b8b0e774a38090.jpg",
        desc: "Fresh steamed milk with vanilla syrup, marked with espresso and caramel drizzle.",
        category: "coffee",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CaramelMacchiato-4.25"
    },

    // --- ក្រុម៖ តែ និងភេសជ្ជៈផ្អែម (category: "tea") ---
    {
        id: 5, 
        name: "Matcha Cream Latte",
        price: 4.00,
        img: "https://i.pinimg.com/736x/09/a3/93/09a393da35db15037d046f4817d4512e.jpg",
        desc: "Premium Japanese matcha whisked smooth with fresh milk and sweet cream foam.",
        category: "tea",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=MatchaCream-4.00"
    },
    {
        id: 6, 
        name: "Iced Lemon Tea",
        price: 2.75,
        img: "https://i.pinimg.com/736x/9d/b1/7d/9db17dc94371bfccb52be3596ec6f183.jpg",
        desc: "Refreshing black tea brewed to perfection and infused with fresh lemon juice.",
        category: "tea",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=LemonTea-2.75"
    },
    {
        id: 7, 
        name: "Premium Chocolate",
        price: 3.80,
        img: "https://i.pinimg.com/736x/13/21/53/132153549704e6be01bb74fcfcb01844.jpg",
        desc: "Rich, creamy Belgian chocolate mixed perfectly with fresh steamed milk.",
        category: "tea",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PremiumChocolate-3.80"
    },
    {
        id: 8, 
        name: "Cold Brew Berry",
        price: 4.50,
        img: "https://i.pinimg.com/736x/21/df/bf/21dfbfb0b533d3cbe76986616428cda4.jpg",
        desc: "Slow-steeped cold brew coffee paired beautifully with sweet wild berry notes.",
        category: "tea",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ColdBrewBerry-4.50"
    },

    // --- ក្រុម៖ នំ (category: "bakery") ---
    {
        id: 9, 
        name: "Croissant Original",
        price: 2.00,
        img: "https://i.pinimg.com/736x/e2/92/b3/e292b3808e02b4777042470e8a3220b0.jpg",
        desc: "Flaky, buttery classic French pastry baked fresh in our kitchen every single morning.",
        category: "bakery",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Croissant-2.00"
    },
    {
        id: 10, 
        name: "Strawberry Cheesecake",
        price: 3.00,
        img: "https://tim-corp.com.vn/wp-content/uploads/2025/12/bakery.jpg",
        desc: "Creamy, rich New York style cheesecake topped with a sweet strawberry glaze.",
        category: "bakery",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=StrawberryCheesecake-3.00"
    },
    {
        id: 11, 
        name: "Chocolate Chip Cookie",
        price: 2.00,
        img: "https://i.pinimg.com/736x/45/95/9b/45959b32943486be2e4df6ff211d7398.jpg",
        desc: "Soft-baked chocolate cookie packed tightly with premium melted chocolate chunks.",
        category: "bakery",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ChocolateCookie-2.00"
    },
    {
        id: 12, 
        name: "Fudgy Brownie Box",
        price: 2.50,
        img: "https://i.pinimg.com/736x/43/b0/20/43b0206198f1fbd3dd4bc710710bd5f4ba4.jpg",
        desc: "Rich, dense chocolate brownie slices finished with a beautifully crackly crust.",
        category: "bakery",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=BrownieBox-2.50"
    }
];