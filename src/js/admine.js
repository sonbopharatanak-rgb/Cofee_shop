const Coffee = [
    { id: 1, name: "Espresso", price: 2.50, img: "https://i.pinimg.com/736x/d1/97/3e/d1973eff377fb3477c8be70b5151f87b.jpg", desc: "The foundation of most coffee drinks. It is a concentrated shot of coffee brewed by forcing hot water through finely-ground coffee beans under high pressure.", category: "coffee", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Espresso-2.50" },
    { id: 2, name: "Americano", price: 3.00, img: "https://i.pinimg.com/736x/70/8e/09/708e096c5f758bf6b2bc635ba0224aee.jpg", desc: "A smooth, diluted coffee drink made by pouring hot water over a fresh shot of espresso. It tastes similar to regular brewed black coffee but carries a different aroma.", category: "coffee", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=LatteHot-3.00" },
    { id: 3, name: "Cappuccino", price: 3.50, img: "https://i.pinimg.com/736x/20/72/91/207291accd4af08d31fbe52ae408f504.jpg", desc: "A classic Italian favorite made with equal parts of espresso, steamed milk, and a thick layer of velvety milk foam on top", category: "coffee", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=AmericanoSocola-3.50" },
    { id: 4, name: "Latte (Café Latte)", price: 4.25, img: "https://i.pinimg.com/736x/be/be/17/bebe178990ffe79696a4b5d4ae45e793.jpg", desc: "A creamier and milder option compared to a cappuccino. It consists of one or two shots of espresso mixed with a generous amount of steamed milk, finished with a very thin layer of foam.", category: "coffee", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CaramelMacchiato-4.25" },
    { id: 5, name: "Macchiato", price: 3.25, img: "https://i.pinimg.com/736x/a2/b6/4d/a2b64d0fdf45c2230f266d214ccbb8f4.jpg", desc: "Fresh steamed milk with vanilla syrup, marked with espresso and caramel drizzle.", category: "coffee", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CaramelMacchiato-4.25" },
    { id: 6, name: "Mocha (Café Mocha)", price: 3.65, img: "https://i.pinimg.com/736x/24/3e/12/243e12ced1cdd80c5895b52eef32ddbb.jpg", desc: "Fresh steamed milk with vanilla syrup, marked with espresso and caramel drizzle.", category: "coffee", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CaramelMacchiato-4.25" },
    { id: 7, name: "Flat White", price: 4.25, img: "https://i.pinimg.com/736x/3a/df/d7/3adfd73bb92ffa2daaad008c1a2743da.jpg", desc: "Originating from Australia and New Zealand, this drink is created by pouring a velvety layer of (steamed milk with tiny bubbles) over a shot of espresso or ristretto. It has a higher coffee-to-milk ratio than a latte.", category: "coffee", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CaramelMacchiato-4.25" },
    { id: 8, name: "Cortado", price: 2.95, img: "https://i.pinimg.com/736x/b9/80/7c/b9807c89943277f245a3bed85c52979b.jpg", desc: "A perfectly balanced drink consisting of equal parts espresso and warm, steamed milk. The milk reduces the acidity of the espresso without masking its strong flavor.", category: "coffee", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CaramelMacchiato-4.25" },
    { id: 9, name: "Affogato", price: 3.45, img: "https://i.pinimg.com/webp/236x/2d/b7/45/2db74559ab03684d140535007c8a7c7d.webp", desc: "Part beverage, part dessert. An affogato features a scoop of vanilla bean gelato or ice cream in a hot, freshly pulled shot of espresso.", category: "coffee", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CaramelMacchiato-4.25" },
    { id: 10, name: "Cold Brew", price: 3.50, img: "https://i.pinimg.com/736x/06/76/f3/0676f3bae9184b54ddee40ae51208b7e.jpg", desc: "Unlike iced coffee (which is hot coffee cooled down), cold brew is made by steeping coarse coffee grounds in room temperature or cold water for 12 to 24 hours, resulting in a smooth, less acidic flavor profile.", category: "coffee", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CaramelMacchiato-4.25" },
    { id: 11, name: "Irish Coffee", price: 2.25, img: "https://i.pinimg.com/736x/85/98/ca/8598cadc67216b0fc793f1e2ed5a5a05.jpg", desc: "Fresh steamed milk with vanilla syrup, marked with espresso and caramel drizzle.", category: "coffee", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CaramelMacchiato-4.25" },
    { id: 13, name: "Starbucks Iced Coffee ", price: 2.80, img: "https://i.pinimg.com/736x/58/78/a2/5878a29b9697e87f306f4c3e5fbb20d6.jpg", desc: "Unlike the glass Frappuccinos, Starbucks sells a larger line of sweetened and unsweetened iced coffees (like Medium Roast or Subtly Sweet) in lightweight plastic bottles designed for standard cup holders.", category: "coffee", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CaramelMacchiato-4.25" },
    { id: 14, name: "STōK Cold Brew Coffee", price: 5.99, img: "https://i.pinimg.com/736x/4d/fc/95/4dfc95fb52a161498debed5f295fec16.jpg", desc: "A highly popular brand recognized by its distinct bold, geometric plastic bottle profile. Known for a smooth, low-acid cold brew flavor, offering varieties like Unsweetened, Not Too Sweet, and Vanilla.", category: "coffee", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CaramelMacchiato-4.25" },
    { id: 15, name: "Califia Farms Cold Brew", price: 6.49, img: "https://i.pinimg.com/736x/42/f6/c4/42f6c49ebcbade366921d373ff252f71.jpg", desc: "Packaged in iconic, elegant curved plastic carafes. Califia Farms specializes in dairy-free cold brew blends mixed with almond milk or oat milk, alongside pure black blonde and dark roasts.", category: "coffee", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CaramelMacchiato-4.25" },
    { id: 16, name: "International Delight Iced Coffee", price: 4.70, img: "https://i.pinimg.com/736x/d4/fe/88/d4fe88e4ee264722471a7049bc641f3c.jpg", desc: "Perfect for those who love their coffee sweet and very creamy. Sold in bright, opaque plastic cartons/bottles in the refrigerated section with flavors like Caramel Macchiato and Hershey’s Chocolate Mocha.", category: "coffee", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CaramelMacchiato-4.25" },
    { id: 17, name: "Dunkin' Donuts Iced Coffee (Bottled)", price: 2.70, img: "https://i.pinimg.com/736x/b2/a9/f6/b2a9f654bb07b9e833a135770db56635.jpg", desc: "Dunkin’ offers its retail grab-and-go lineup in clear plastic bottles. They are heavily pre-milked and sweetened, imitating their classic drive-thru flavors like Original, French Vanilla, and Girl Scout Cookie inspirations.", category: "coffee", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CaramelMacchiato-4.25" },
    { id: 18, name: "Boss Coffee (Suntory)", price: 3.25, img: "https://i.pinimg.com/236x/61/5d/79/615d7912c5ef97fd897b2bd2e8498bb5.jpg", desc: "While famous in Japan for its small aluminum flash-brew cans, Boss Coffee manufactures larger versions of its popular Café Au Lait and Black Coffee explicitly in clear plastic bottles for international grocery markets.", category: "coffee", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CaramelMacchiato-4.25" },
    { id: 19, name: "Coffee Matcha", price: 3.25, img: "https://i.pinimg.com/736x/8b/eb/02/8beb02d1531161790daa5cbed93bcd76.jpg", desc: "A white coffee cup with steam rising from it 53581270 royalty free PNG from Vecteezy for your project and explore over a million other illustrations, icons and clipart graphics!", category: "coffee", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CaramelMacchiato-4.25" },
    { id: 20, name: "Coffee Caramel", price: 4.25, img: "https://i.pinimg.com/736x/a2/43/51/a24351d202d0399d666b77f8528e4009.jpg", desc: "A white coffee cup with steam rising from it 53581270 royalty free PNG from Vecteezy for your project and explore over a million other illustrations, icons and clipart graphics!", category: "coffee", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CaramelMacchiato-4.25" },
    { id: 21, name: "Matcha Latte", price: 6.25, img: "https://i.pinimg.com/736x/29/be/70/29be706fc60b2cbcc9de2b59bef778f5.jpg", desc: "A white coffee cup with steam rising from it 53581270 royalty free PNG from Vecteezy for your project and explore over a million other illustrations, icons and clipart graphics!", category: "coffee", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CaramelMacchiato-4.25" },
    { id: 22, name: "Matcha Cream Latte", price: 4.00, img: "https://i.pinimg.com/736x/ad/b5/fd/adb5fd7527fe71aa0dae6fe3c5ffe0d7.jpg", desc: "Premium Japanese matcha whisked smooth with fresh milk and sweet cream foam.", category: "tea", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=MatchaCream-4.00" },
    { id: 23, name: "Iced Lemon Tea", price: 2.75, img: "https://i.pinimg.com/736x/1a/41/d5/1a41d587a8da2ffcf3e2122d3c621b37.jpg", desc: "Refreshing black tea brewed to perfection and infused with fresh lemon juice.", category: "tea", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=LemonTea-2.75" },
    { id: 24, name: "Premium Chocolate", price: 3.80, img: "https://i.pinimg.com/736x/7e/64/98/7e64983f3c20ad346c9bc0fb58f12021.jpg", desc: "Rich, creamy Belgian chocolate mixed perfectly with fresh steamed milk.", category: "tea", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PremiumChocolate-3.80" },
    { id: 25, name: "Cold Brew Berry", price: 4.20, img: "https://i.pinimg.com/236x/26/93/01/269301a77956324b3d5393c302ad64c8.jpg", desc: "Slow-steeped cold brew coffee paired beautifully with sweet wild berry notes.", category: "tea", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ColdBrewBerry-4.50" },
    { id: 26, name: "Cold Brew Berry", price: 4.70, img: "https://i.pinimg.com/736x/58/3d/c5/583dc5363c0f915a8fe92ab34936a74d.jpg", desc: "Scooter's Coffee Iced Drink Menu. Made with 100% Arabica coffee beans. Iced Caramelicious, Cold Brew, Red Bull Infusions, featured iced drinks, and more.", category: "tea", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ColdBrewBerry-4.50" },
    { id: 27, name: "Red Bull Infusion-Menu", price: 5.10, img: "https://i.pinimg.com/736x/0b/e4/a7/0be4a7176ec290abd120a73700f29ec1.jpg", desc: "Slow-steeped cold brew coffee paired beautifully with sweet wild berry notes.", category: "tea", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ColdBrewBerry-4.50" },
    { id: 28, name: "Black street Matcha", price: 2.50, img: "https://i.pinimg.com/736x/5b/35/97/5b3597a68d48c8a2af01bfa7c35bffba.jpg", desc: "Oat milk Extra pump of vanilla Extra matcha shot Protin powder", category: "tea", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ColdBrewBerry-4.50" },
    { id: 29, name: "Orero Matcha", price: 3.70, img: "https://i.pinimg.com/736x/8b/eb/02/8beb02d1531161790daa5cbed93bcd76.jpg", desc: "Order Oreo Matcha Latte online from Union City. Uji Japanese Matcha Cold Foam, Oreo Cookie Crumbs & A2 Organic Whole Milk", category: "tea", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ColdBrewBerry-4.50" },
    { id: 30, name: "ogurte Com Frutas Stobory", price: 2.90, img: "https://i.pinimg.com/736x/31/8e/96/318e963cd44745f8cb6b15d62ac75429.jpg", desc: "Baixe esta imagem Iogurte Com Frutas Vermelhas PNG , Iogurte, Bagas, Sobremesa PNG gratuitamente. O Pngtree fornece milhões de png gratuitos, vetores e recursos gráficos psd para designers.", category: "tea", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ColdBrewBerry-4.50" },
    { id: 31, name: "Avocado Smooth", price: 6.50, img: "https://i.pinimg.com/736x/ef/e8/aa/efe8aa59ea71bbc8fd8b57c01215fd31.jpg", desc: "Slow-steeped cold brew coffee paired beautifully with sweet wild berry notes.", category: "tea", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ColdBrewBerry-4.50" },
    { id: 32, name: "Mango Drink", price: 3.80, img: "https://i.pinimg.com/736x/53/e7/3a/53e73a9f3134e6667070a389f1983391.jpg", desc: "Slow-steeped cold brew coffee paired beautifully with sweet wild berry notes.", category: "tea", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ColdBrewBerry-4.50" },
    { id: 33, name: "Kiwifruit Juice", price: 3.45, img: "https://i.pinimg.com/736x/67/23/d2/6723d2bc570a0d0a342300d310ae340e.jpg", desc: "Kiwifruit Juice PNG Photo Images (High-Quality) with transparent backgrounds. You can freely use these Kiwifruit Juice PNG images on your design projects.", category: "tea", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ColdBrewBerry-4.50" },
    { id: 34, name: "Breads Original", price: 2.00, img: "https://i.pinimg.com/736x/3b/95/54/3b95545c301c7ebc6dfd05cc39502869.jpg", desc: "Flaky, buttery classic French pastry baked fresh in our kitchen every single morning.", category: "bakery", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Croissant-2.00" },
    { id: 35, name: "Choocolate Croissant", price: 3.00, img: "https://i.pinimg.com/736x/df/94/14/df94145e6fe7f93cee2e469c8a358b6b.jpg", desc: "Creamy, rich New York style cheesecake topped with a sweet strawberry glaze.", category: "bakery", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=StrawberryCheesecake-3.00" },
    { id: 36, name: "freshly baked sweet croissant", price: 2.00, img: "https://i.pinimg.com/736x/c8/83/40/c883409163bb441326b46975b022497e.jpg", desc: "freshly baked sweet croissant by magone. freshly baked sweet croissant on white plate isolated on white background, top view", category: "bakery", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ChocolateCookie-2.00" },
    { id: 37, name: "Breads Cook", price: 2.50, img: "https://i.pinimg.com/736x/33/36/de/3336deb7d2e64ff849d435ed548e3981.jpg", desc: "Rich, dense chocolate brownie slices finished with a beautifully crackly crust.", category: "bakery", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=BrownieBox-2.50" },
    { id: 38, name: "Belgium waffles", price: 2.50, img: "https://i.pinimg.com/736x/c2/19/57/c2195736bb9b4cb7bdbf18ea9b1ea2e4.jpg", desc: "Rich, dense chocolate brownie slices finished with a beautifully crackly crust.", category: "bakery", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=BrownieBox-2.50" },
    { id: 39, name: "croissant green tea ", price: 2.50, img: "https://i.pinimg.com/webp/736x/31/81/d8/3181d8955730777ae39448c53dceb8d6.webp", desc: "Rich, dense chocolate brownie slices finished with a beautifully crackly crust.", category: "bakery", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=BrownieBox-2.50" },
    { id: 40, name: "Oreo Bleck", price: 2.50, img: "https://i.pinimg.com/736x/16/0f/0f/160f0f325417bebf49ed2765e20bf25e.jpg", desc: "Rich, dense chocolate brownie slices finished with a beautifully crackly crust.", category: "bakery", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=BrownieBox-2.50" },
    { id: 41, name: " Donuts with Chocolate ", price: 2.50, img: "https://i.pinimg.com/webp/736x/f8/d1/3a/f8d13a40c97bfa0ece9cf95c3453dfb3.webp", desc: "Tasty Donuts with Chocolate on it on Transparent background", category: "bakery", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=BrownieBox-2.50" },
    { id: 42, name: "Fudgy Brownie Box", price: 2.50, img: "https://i.pinimg.com/736x/9e/00/ba/9e00bae469d4b29d6cb8ac69efcec649.jpg", desc: "Rich, dense chocolate brownie slices finished with a beautifully crackly crust.", category: "bakery", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=BrownieBox-2.50" },
    { id: 43, name: "Brownie Box", price: 2.50, img: "https://i.pinimg.com/736x/db/82/e2/db82e24a7f74017e3834c2b0255c42df.jpg", desc: "Rich, dense chocolate brownie slices finished with a beautifully crackly crust.", category: "bakery", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=BrownieBox-2.50" },
    { id: 44, name: "Breads Brownie Box", price: 2.50, img: "https://i.pinimg.com/736x/25/fb/6e/25fb6e63b88e3ee90087fd5d75fbf88c.jpg", desc: "Rich, dense chocolate brownie slices finished with a beautifully crackly crust.", category: "bakery", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=BrownieBox-2.50" },
    { id: 45, name: "Breads Fruit Cook", price: 2.50, img: "https://i.pinimg.com/736x/b2/cb/ee/b2cbee6cda13e81608f8499d37f88319.jpg", desc: "Rich, dense chocolate brownie slices finished with a beautifully crackly crust.", category: "bakery", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=BrownieBox-2.50" }
];

let targetFilterCategory = 'all';

// Core Render Orchestrator
function initDashboard() {
    document.getElementById('count-all').innerText = Coffee.length;
    document.getElementById('storage-total-skus').innerText = `${Coffee.length} Items`;
    renderAllProducts();
    renderProductStorage();
    renderOlderProducts();
}

// Section 1 Renderer: All Menu Items
function renderAllProducts() {
    const container = document.getElementById('product-list-body');
    container.innerHTML = '';

    Coffee.forEach(item => {

        if (targetFilterCategory !== 'all' && item.category !== targetFilterCategory) return;

        const tr = document.createElement('tr');
        tr.setAttribute('data-name', item.name.toLowerCase());
        tr.innerHTML = `
                    <td><strong>#${String(item.id).padStart(3, '0')}</strong></td>
                    <td>
                        <img src="${item.img}" class="product-img shadow-sm border" onerror="this.src='https://placehold.co/50x50?text=Drink'" onclick="triggerPreview('${item.img}')" title="Click to Expand">
                    </td>
                    <td>
                        <div class="fw-bold">${item.name}</div>
                        <div class="text-muted small text-truncate" style="max-width: 320px;">${item.desc}</div>
                    </td>
                    <td><span class="badge bg-secondary text-capitalize">${item.category}</span></td>
                    <td class="fw-bold text-success">$${item.price.toFixed(2)}</td>
                    <td>
                        <img src="${item.qrCode}" class="qr-img border rounded bg-light" onclick="triggerPreview('${item.qrCode}')" title="View Transaction QR">
                    </td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-outline-primary" onclick="alert('Editing: ${item.name}')"><i class="bi bi-pencil-square"></i></button>
                            <button class="btn btn-outline-danger" onclick="deleteItemHandler(${item.id}, this)"><i class="bi bi-trash3-fill"></i></button>
                        </div>
                    </td>
                `;
        container.appendChild(tr);
    });
}
// greate newproducts
function addNewProduct() {
    // 1. Grab values from the modal form inputs
    const imgValue = document.getElementById('prodImg').value;
    const nameValue = document.getElementById('prodName').value;
    const categoryValue = document.getElementById('prodCategory').value;
    const priceValue = parseFloat(document.getElementById('prodPrice').value);

    // Simple validation rule: basic fields shouldn't be empty
    if (!nameValue || !priceValue) {
        alert("Please enter a valid product name and price.");
        return;
    }

    // 2. Generate a new unique ID (finds max ID in array and adds 1)
    const nextId = Coffee.length > 0 ? Math.max(...Coffee.map(item => item.id)) + 1 : 1;

    // 3. Create the new item object structure matches your rendering pattern
    const newProduct = {
        id: nextId,
        img: imgValue || 'https://placehold.co/50x50?text=Drink', // fallback if empty
        name: nameValue,
        desc: "Freshly added item", // placeholder description
        category: categoryValue,
        price: priceValue,
        qrCode: 'https://placehold.co/50x50?text=QR' // placeholder QR code
    };

    // 4. Push into your main data array
    Coffee.push(newProduct);

    // 5. Instantly refresh the UI using your existing function
    renderAllProducts();

    // 6. Reset form fields and close Bootstrap modal cleanly
    document.getElementById('newProductForm').reset();

    const modalElement = document.getElementById('addProductModal');
    const modalInstance = bootstrap.Modal.getInstance(modalElement);
    if (modalInstance) {
        modalInstance.hide();
    }
}

// Section 2 Renderer: Storage Layout (Calculated Stock Assignments)
function renderProductStorage() {
    const container = document.getElementById('storage-list-body');
    container.innerHTML = '';

    Coffee.forEach((item, index) => {
        // Simulating warehouse assignment metrics safely via indices
        const binSlot = `Zone-${item.category.slice(0, 1).toUpperCase()}_Row${(index % 4) + 1}`;
        const stockCount = (item.id * 7 + 13) % 120;
        const isLow = stockCount < 25;

        const tr = document.createElement('tr');
        tr.innerHTML = `
                    <td>#SKU-${item.id}</td>
                    <td><strong>${item.name}</strong></td>
                    <td class="text-capitalize">${item.category}</td>
                    <td><code>${binSlot}</code></td>
                    <td class="fw-bold ${isLow ? 'text-danger' : 'text-dark'}">${stockCount} Units</td>
                    <td>
                        ${isLow ?
                `<span class="badge bg-danger"><i class="bi bi-exclamation-triangle"></i> Low Level</span>` :
                `<span class="badge bg-success"><i class="bi bi-check-all"></i> Stable</span>`
            }
                    </td>
                `;
        container.appendChild(tr);
    });
}

// Section 3 Renderer: Older Products (Mock Log Timestamps for completeness)
function renderOlderProducts() {
    const container = document.getElementById('older-list-body');
    container.innerHTML = '';

    // Render select sample entries from the bottom of your input array to represent older listings
    const olderItems = Coffee.slice(0, 8);
    olderItems.forEach((item, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
                    <td><span class="text-muted">#ARC-${900 + item.id}</span></td>
                    <td><strong>${item.name} (Legacy Node)</strong></td>
                    <td>$${item.price.toFixed(2)}</td>
                    <td>February 1${index}, 2025</td>
                    <td><span class="badge bg-light text-dark border">DEP-0${index}</span></td>
                `;
        container.appendChild(tr);
    });
}

// Realtime Table Search Filter Logic
function filterProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const rows = document.querySelectorAll('#product-list-body tr');

    rows.forEach(row => {
        const nameAttr = row.getAttribute('data-name') || '';
        if (nameAttr.includes(query)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Tab category filtering controls
function filterCategory(category, buttonInstance) {
    targetFilterCategory = category;

    // Manage clean UI active states on selection wrappers
    const filterButtons = buttonInstance.parentElement.querySelectorAll('button');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    buttonInstance.classList.add('active');

    renderAllProducts();
}

// Image zoom modal utility
function triggerPreview(sourceUrl) {
    document.getElementById('modalPreviewImg').src = sourceUrl;
    const previewModal = new bootstrap.Modal(document.getElementById('imagePreviewModal'));
    previewModal.show();
}

// Action Item: Delete Handler Interface
function deleteItemHandler(id, element) {
    if (confirm("Are you sure you want to remove this item from the active database catalog?")) {
        const rowIndex = Coffee.findIndex(c => c.id === id);
        if (rowIndex > -1) {
            Coffee.splice(rowIndex, 1);
            initDashboard(); // Re-index counts across display tables natively
        }
    }
}

// Bootstrap Entry Lifecycle Call
window.addEventListener('DOMContentLoaded', initDashboard);

