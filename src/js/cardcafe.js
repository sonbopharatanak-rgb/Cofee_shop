// ទាញយកទិន្នន័យកន្ត្រកចេញពី LocalStorage មកប្រើ
let cart = JSON.parse(localStorage.getItem('coffee_cart')) || [];

// ==========================================
// ១. មុខងារបង្ហាញកាតផលិតផល (Display Products with Image)
// ==========================================
function displayProducts(productsToDisplay = Coffee) {
    const container = document.getElementById('coffee-container');
    if (!container) return;

    if (productsToDisplay.length === 0) {
        container.innerHTML = `<p class="text-center text-muted w-100 my-5">No products found in this category.</p>`;
        return;
    }

    // ហៅទិន្នន័យផលិតផលមកបង្កើតជា HTML Cards ដោយមានរូបភាព `${product.img}` គ្រប់កាត
    container.innerHTML = productsToDisplay.map(product => `
        <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="card h-100 shadow-sm border-0 rounded-3 overflow-hidden" style="cursor: pointer;" onclick="viewProductDetails(${product.id})">
                <div style="position: relative; overflow: hidden;">
                    <img src="${product.img}" class="card-img-top" alt="${product.name}" style="height: 220px; object-fit: cover; transition: transform 0.3s;">
                </div>
                <div class="card-body d-flex flex-column justify-content-between">
                    <div>
                        <h6 class="card-title fw-bold text-dark mb-1 text-truncate">${product.name}</h6>
                        <p class="card-text text-success fw-semibold mb-0">$${product.price.toFixed(2)}</p>
                    </div>
                    <button class="btn btn-warning w-100 mt-3 fw-bold text-white btn-sm" onclick="addToCart(event, ${product.id})">
                        <i class="fa-solid fa-cart-plus me-2"></i>Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// ==========================================
// ២. មុខងារបើកផ្ទាំង Modal បង្ហាញរូបភាពលម្អិត + QR Code
// ==========================================
function viewProductDetails(productId) {
    const product = Coffee.find(p => p.id === productId);
    if (!product) return;

    // ១. បញ្ចូលទិន្នន័យទៅក្នុង Modal ទី១ (Product Card)
    document.getElementById('modalProductImg').src = product.img;
    document.getElementById('modalProductName').innerText = product.name;
    document.getElementById('modalProductPrice').innerText = `$${product.price.toFixed(2)}`;
    document.getElementById('modalProductDesc').innerText = product.desc || '';
    
    const qtyInput = document.getElementById('productQty');
    if (qtyInput) qtyInput.value = 1;

    // ២. នៅពេលចុចប៊ូតុង Buy Now
    document.getElementById('modalBuyNowBtn').onclick = function(event) {
        if (event) event.stopPropagation();

        const quantity = qtyInput ? parseInt(qtyInput.value) : 1;
        const totalAmount = product.price * quantity;

        // បិទ Modal ទី១ (Product Card)
        const productModal = bootstrap.Modal.getInstance(document.getElementById('productCardModal'));
        if (productModal) productModal.hide();

        // ៣. បញ្ចូលរូបភាព QR Code និងតម្លៃសរុបទៅក្នុង Modal ទី២
        document.getElementById('modalPaymentQR').src = product.qrCode || 'ទម្រង់_URL_QR_Code_ទូទៅ';
        document.getElementById('paymentTotalAmount').innerText = `$${totalAmount.toFixed(2)}`;

        // កំណត់ឱ្យបង្ហាញផ្នែក QR និងលាក់ Success ជាមុនសិន
        document.getElementById('qrPaymentSection').classList.remove('d-none');
        document.getElementById('successSection').classList.add('d-none');
        document.getElementById('btnClosePayment').classList.remove('d-none'); 

        // បើក Modal ទី២ (Payment Modal)
        const paymentModal = new bootstrap.Modal(document.getElementById('paymentModal'));
        paymentModal.show();

        // ៤. នៅពេលអ្នកទិញចុចប៊ូតុង Verify Payment
        document.getElementById('modalVerifyBtn').onclick = function(e) {
            // លាក់ផ្នែក QR និងប៊ូតុងខ្វែងបិទផ្ទាំង
            document.getElementById('qrPaymentSection').classList.add('d-none');
            document.getElementById('btnClosePayment').classList.add('d-none'); 
            
            // បង្ហាញផ្នែក Success 
            document.getElementById('successSection').classList.remove('d-none');

            // ៥. នាំយកផលិតផលទៅដាក់ក្នុង basket ទៅតាមចំនួនដែលបានជ្រើសរើស
            addToCartWithQty(product.id, quantity);
        };
    };

    // បើក Modal ទី១
    const myModal = bootstrap.Modal.getInstance(document.getElementById('productCardModal')) || new bootstrap.Modal(document.getElementById('productCardModal'));
    myModal.show();
}
    // 4. Open the modal using the correct ID
  
document.addEventListener("DOMContentLoaded", function () {
    const btnPlus = document.getElementById('btnPlus');
    const btnMinus = document.getElementById('btnMinus');
    const qtyInput = document.getElementById('productQty');

    if (btnPlus && btnMinus && qtyInput) {
        btnPlus.onclick = function() {
            let currentQty = parseInt(qtyInput.value) || 1;
            qtyInput.value = currentQty + 1;
        };

        btnMinus.onclick = function() {
            let currentQty = parseInt(qtyInput.value) || 1;
            if (currentQty > 1) {
                qtyInput.value = currentQty - 1;
            }
        };
    }
});
// ==========================================
// ៣. មុខងារគ្រប់គ្រងកន្ត្រកទំនិញ (Cart Logic)
// ==========================================
function addToCartWithQty(productId, quantity) {
    const product = Coffee.find(p => p.id === productId);
    if (!product) return;

    // ស្វែងរកមើលថាតើមានផលិតផលនេះក្នុងកន្ត្រករួចហើយឬនៅ
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        // បើមានហើយ គឺបូកបន្ថែមចំនួនថ្មីចូល
        existingItem.quantity += quantity;
    } else {
        // បើមិនទាន់មាន គឺរុញចូលទៅក្នុង Array ជាមួយចំនួនដែលបានរើស
        cart.push({ ...product, quantity: quantity });
    }

    // រក្សាទុកក្នុង LocalStorage និង Update UI កន្ត្រកអីវ៉ាន់
    localStorage.setItem('coffee_cart', JSON.stringify(cart));
    updateBasketUI();
}

function removeFromCart(productId) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    
    if (itemIndex > -1) {
        if (cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity -= 1;
        } else {
            cart.splice(itemIndex, 1);
        }
    }

    localStorage.setItem('coffee_cart', JSON.stringify(cart));
    updateBasketUI();
}

function updateBasketUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const basketCountEl = document.getElementById('basket-count');
    if (basketCountEl) basketCountEl.innerText = totalItems;

    const basketContainer = document.getElementById('basket-items-container');
    if (!basketContainer) return;

    if (cart.length === 0) {
        basketContainer.innerHTML = `<p class="text-muted text-center my-3 py-2">No items in basket</p>`;
        return;
    }

    basketContainer.innerHTML = cart.map(item => `
        <div class="d-flex align-items-center justify-content-between py-2 px-2 border-bottom">
            <div class="d-flex align-items-center gap-2">
                <img src="${item.img}" alt="${item.name}" style="width: 40px; height: 40px; object-fit: cover;" class="rounded">
                <div>
                    <h6 class="mb-0 small fw-bold text-dark text-truncate" style="max-width: 120px;">${item.name}</h6>
                    <span class="text-muted small">Qty: ${item.quantity}</span>
                    <span class="text-success small ms-2 fw-semibold">$${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            </div>
            <button class="btn btn-sm text-danger border-0" onclick="removeFromCart(${item.id})">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>
    `).join('');
}

// ==========================================
// ៤. មុខងារ Filter តាមប្រភេទ Menu + ប្តូរពណ៌ប៊ូតុង Active
// ==========================================
function filterMenu(category, event) {
    if (category === 'all') {
        displayProducts(Coffee);
    } else {
        const filtered = Coffee.filter(p => p.category === category);
        displayProducts(filtered);
    }

    // ដក Class active ពីប៊ូតុងចាស់ និងថែមទៅប៊ូតុងថ្មីដែលទើបចុច
    const buttons = document.querySelectorAll('.d-flex.justify-content-center.gap-2 button');
    buttons.forEach(btn => btn.classList.remove('active'));

    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}

// ដំណើរការដំបូងពេលបើក Web ទំព័រដំបូង
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    updateBasketUI();
});