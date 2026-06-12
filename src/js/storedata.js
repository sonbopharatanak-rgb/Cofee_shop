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
        img: "https://i.pinimg.com/736x/70/8e/09/708e096c5f758bf6b2bc635ba0224aee.jpg",
        desc: "Fresh steamed milk with vanilla syrup, marked with espresso and caramel drizzle.",
        category: "coffee",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CaramelMacchiato-4.25"
    },
    {
        id: 5, 
        name: "Caramel Macchiato",
        price: 4.25,
        img: "https://i.pinimg.com/736x/06/76/f3/0676f3bae9184b54ddee40ae51208b7e.jpg",
        desc: "Fresh steamed milk with vanilla syrup, marked with espresso and caramel drizzle.",
        category: "coffee",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CaramelMacchiato-4.25"
    },
    {
        id: 6, 
        name: "Caramel Macchiato",
        price: 4.25,
        img: "https://i.pinimg.com/736x/f9/c7/7c/f9c77c3fef98a248b9e9b6a586dd222f.jpg",
        desc: "Fresh steamed milk with vanilla syrup, marked with espresso and caramel drizzle.",
        category: "coffee",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CaramelMacchiato-4.25"
    },
    {
        id: 7, 
        name: "Caramel Macchiato",
        price: 4.25,
        img: "https://i.pinimg.com/736x/6f/c1/de/6fc1dea44454180d50d12f2c96d1199e.jpg",
        desc: "Fresh steamed milk with vanilla syrup, marked with espresso and caramel drizzle.",
        category: "coffee",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CaramelMacchiato-4.25"
    },
    {
        id: 8, 
        name: "Caramel Macchiato",
        price: 4.25,
        img: "https://i.pinimg.com/736x/f6/c7/a9/f6c7a9c125ebcb1c0bda953eebdd65cf.jpg",
        desc: "Fresh steamed milk with vanilla syrup, marked with espresso and caramel drizzle.",
        category: "coffee",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CaramelMacchiato-4.25"
    },
    {
        id: 9, 
        name: "Caramel Macchiato",
        price: 4.25,
        img: "https://i.pinimg.com/736x/0b/42/d9/0b42d9eaa25db20cea1db083407257d1.jpg",
        desc: "Fresh steamed milk with vanilla syrup, marked with espresso and caramel drizzle.",
        category: "coffee",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CaramelMacchiato-4.25"
    },
    {
        id: 10, 
        name: "Caramel Macchiato",
        price: 4.25,
        img: "https://i.pinimg.com/736x/75/8a/39/758a39fd498791fbdf55573dc6109688.jpg",
        desc: "Fresh steamed milk with vanilla syrup, marked with espresso and caramel drizzle.",
        category: "coffee",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CaramelMacchiato-4.25"
    },
    {
        id: 11, 
        name: "Caramel Macchiato",
        price: 4.25,
        img: "https://i.pinimg.com/736x/6a/42/2f/6a422feadcef6a7746e19d3a24ea7229.jpg",
        desc: "Fresh steamed milk with vanilla syrup, marked with espresso and caramel drizzle.",
        category: "coffee",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CaramelMacchiato-4.25"
    },
    {
        id: 12, 
        name: "Caramel Macchiato",
        price: 4.25,
        img: "https://i.pinimg.com/736x/d5/57/50/d55750e906c5bb6ab553748193d21904.jpg",
        desc: "A white coffee cup with steam rising from it 53581270 royalty free PNG from Vecteezy for your project and explore over a million other illustrations, icons and clipart graphics!",
        category: "coffee",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CaramelMacchiato-4.25"
    },

    // --- ក្រុម៖ តែ និងភេសជ្ជៈផ្អែម (category: "tea") ---
    {
        id: 13, 
        name: "Matcha Cream Latte",
        price: 4.00,
        img: "https://i.pinimg.com/736x/ad/b5/fd/adb5fd7527fe71aa0dae6fe3c5ffe0d7.jpg",
        desc: "Premium Japanese matcha whisked smooth with fresh milk and sweet cream foam.",
        category: "tea",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=MatchaCream-4.00"
    },
    {
        id: 14, 
        name: "Iced Lemon Tea",
        price: 2.75,
        img: "https://i.pinimg.com/736x/1a/41/d5/1a41d587a8da2ffcf3e2122d3c621b37.jpg",
        desc: "Refreshing black tea brewed to perfection and infused with fresh lemon juice.",
        category: "tea",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=LemonTea-2.75"
    },
    {
        id: 15, 
        name: "Premium Chocolate",
        price: 3.80,
        img: "https://i.pinimg.com/736x/7e/64/98/7e64983f3c20ad346c9bc0fb58f12021.jpg",
        desc: "Rich, creamy Belgian chocolate mixed perfectly with fresh steamed milk.",
        category: "tea",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PremiumChocolate-3.80"
    },
    {
        id: 16, 
        name: "Cold Brew Berry",
        price: 4.50,
        img: "https://i.pinimg.com/236x/26/93/01/269301a77956324b3d5393c302ad64c8.jpg",
        desc: "Slow-steeped cold brew coffee paired beautifully with sweet wild berry notes.",
        category: "tea",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ColdBrewBerry-4.50"
    },
    {
        id: 17, 
        name: "Cold Brew Berry",
        price: 4.50,
        img: "https://i.pinimg.com/736x/58/3d/c5/583dc5363c0f915a8fe92ab34936a74d.jpg",
        desc: "Scooter's Coffee Iced Drink Menu. Made with 100% Arabica coffee beans. Iced Caramelicious, Cold Brew, Red Bull Infusions, featured iced drinks, and more.",
        category: "tea",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ColdBrewBerry-4.50"
    },
    {
        id: 18, 
        name: "Red Bull Infusion-Menu",
        price: 4.50,
        img: "https://i.pinimg.com/736x/0b/e4/a7/0be4a7176ec290abd120a73700f29ec1.jpg",
        desc: "Slow-steeped cold brew coffee paired beautifully with sweet wild berry notes.",
        category: "tea",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ColdBrewBerry-4.50"
    },
    {
        id: 19, 
        name: "Black street Matcha",
        price: 4.50,
        img: "https://i.pinimg.com/736x/5b/35/97/5b3597a68d48c8a2af01bfa7c35bffba.jpg",
        desc: "Oat milk Extra pump of vanilla Extra matcha shot Protin powder",
        category: "tea",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ColdBrewBerry-4.50"
    },
    {
        id: 20, 
        name: "Orero Matcha",
        price: 4.50,
        img: "https://i.pinimg.com/736x/8b/eb/02/8beb02d1531161790daa5cbed93bcd76.jpg",
        desc: "Order Oreo Matcha Latte online from Union City. Uji Japanese Matcha Cold Foam, Oreo Cookie Crumbs & A2 Organic Whole Milk",
        category: "tea",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ColdBrewBerry-4.50"
    },
    {
        id: 21, 
        name: "ogurte Com Frutas Stobory",
        price: 4.50,
        img: "https://i.pinimg.com/736x/31/8e/96/318e963cd44745f8cb6b15d62ac75429.jpg",
        desc: "Baixe esta imagem Iogurte Com Frutas Vermelhas PNG , Iogurte, Bagas, Sobremesa PNG gratuitamente. O Pngtree fornece milhões de png gratuitos, vetores e recursos gráficos psd para designers.",
        category: "tea",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ColdBrewBerry-4.50"
    },
    {
        id: 22, 
        name: "Avocado Smooth",
        price: 4.50,
        img: "https://i.pinimg.com/736x/ef/e8/aa/efe8aa59ea71bbc8fd8b57c01215fd31.jpg",
        desc: "Slow-steeped cold brew coffee paired beautifully with sweet wild berry notes.",
        category: "tea",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ColdBrewBerry-4.50"
    },
    {
        id: 23,
        name: "Mango Drink",
        price: 4.50,
        img: "https://i.pinimg.com/736x/53/e7/3a/53e73a9f3134e6667070a389f1983391.jpg",
        desc: "Slow-steeped cold brew coffee paired beautifully with sweet wild berry notes.",
        category: "tea",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ColdBrewBerry-4.50"
    },
    {
        id: 24, 
        name: "Kiwifruit Juice",
        price: 4.50,
        img: "https://i.pinimg.com/736x/67/23/d2/6723d2bc570a0d0a342300d310ae340e.jpg",
        desc: "Kiwifruit Juice PNG Photo Images (High-Quality) with transparent backgrounds. You can freely use these Kiwifruit Juice PNG images on your design projects.",
        category: "tea",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ColdBrewBerry-4.50"
    },

    // --- ក្រុម៖ នំ (category: "bakery") ---
    {
        id: 25, 
        name: "Breads Original",
        price: 2.00,
        img: "https://i.pinimg.com/736x/3b/95/54/3b95545c301c7ebc6dfd05cc39502869.jpg",
        desc: "Flaky, buttery classic French pastry baked fresh in our kitchen every single morning.",
        category: "bakery",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Croissant-2.00"
    },
    {
        id: 26, 
        name: "Choocolate Croissant",
        price: 3.00,
        img: "https://i.pinimg.com/736x/df/94/14/df94145e6fe7f93cee2e469c8a358b6b.jpg",
        desc: "Creamy, rich New York style cheesecake topped with a sweet strawberry glaze.",
        category: "bakery",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=StrawberryCheesecake-3.00"
    },
    {
        id: 27, 
        name: "freshly baked sweet croissant",
        price: 2.00,
        img: "https://i.pinimg.com/736x/c8/83/40/c883409163bb441326b46975b022497e.jpg",
        desc: "freshly baked sweet croissant by magone. freshly baked sweet croissant on white plate isolated on white background, top view",
        category: "bakery",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ChocolateCookie-2.00"
    },
    {
        id: 28, 
        name: "Breads Cook",
        price: 2.50,
        img: "https://i.pinimg.com/736x/33/36/de/3336deb7d2e64ff849d435ed548e3981.jpg",
        desc: "Rich, dense chocolate brownie slices finished with a beautifully crackly crust.",
        category: "bakery",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=BrownieBox-2.50"
    },
    {
        id: 29, 
        name: "Belgium waffles",
        price: 2.50,
        img: "https://i.pinimg.com/736x/c2/19/57/c2195736bb9b4cb7bdbf18ea9b1ea2e4.jpg",
        desc: "Rich, dense chocolate brownie slices finished with a beautifully crackly crust.",
        category: "bakery",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=BrownieBox-2.50"
    },
    {
        id: 30, 
        name: "croissant green tea ",
        price: 2.50,
        img: "https://i.pinimg.com/webp/736x/31/81/d8/3181d8955730777ae39448c53dceb8d6.webp",
        desc: "Rich, dense chocolate brownie slices finished with a beautifully crackly crust.",
        category: "bakery",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=BrownieBox-2.50"
    },
    {
        id: 31, 
        name: "Oreo Bleck",
        price: 2.50,
        img: "https://i.pinimg.com/736x/16/0f/0f/160f0f325417bebf49ed2765e20bf25e.jpg",
        desc: "Rich, dense chocolate brownie slices finished with a beautifully crackly crust.",
        category: "bakery",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=BrownieBox-2.50"
    },
    {
        id: 32, 
        name: " Donuts with Chocolate ",
        price: 2.50,
        img: "https://i.pinimg.com/webp/736x/f8/d1/3a/f8d13a40c97bfa0ece9cf95c3453dfb3.webp",
        desc: "Tasty Donuts with Chocolate on it on Transparent background",
        category: "bakery",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=BrownieBox-2.50"
    },
    {
        id: 33, 
        name: "Fudgy Brownie Box",
        price: 2.50,
        img: "https://i.pinimg.com/736x/9e/00/ba/9e00bae469d4b29d6cb8ac69efcec649.jpg",
        desc: "Rich, dense chocolate brownie slices finished with a beautifully crackly crust.",
        category: "bakery",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=BrownieBox-2.50"
    },
    {
        id: 34, 
        name: "Brownie Box",
        price: 2.50,
        img: "https://i.pinimg.com/736x/db/82/e2/db82e24a7f74017e3834c2b0255c42df.jpg",
        desc: "Rich, dense chocolate brownie slices finished with a beautifully crackly crust.",
        category: "bakery",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=BrownieBox-2.50"
    },
    {
        id: 35, 
        name: "Fudgy Brownie Box",
        price: 2.50,
        img: "https://i.pinimg.com/736x/25/fb/6e/25fb6e63b88e3ee90087fd5d75fbf88c.jpg",
        desc: "Rich, dense chocolate brownie slices finished with a beautifully crackly crust.",
        category: "bakery",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=BrownieBox-2.50"
    },
    {
        id: 36, 
        name: "",
        price: 2.50,
        img: "https://i.pinimg.com/736x/b2/cb/ee/b2cbee6cda13e81608f8499d37f88319.jpg",
        desc: "Rich, dense chocolate brownie slices finished with a beautifully crackly crust.",
        category: "bakery",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=BrownieBox-2.50"
    },
];