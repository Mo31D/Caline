// تحسين لاحقًا بإضافة وظائف التفاعل عند الطلب
console.log("Caline site loaded.");
let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => {
        const name = btn.getAttribute('data-name');
        const price = parseFloat(btn.getAttribute('data-price'));
        cart.push({ name, price });
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
        alert("تمت الإضافة إلى السلة!");
    });
});

function renderCart() {
    const list = document.getElementById('cart-items');
    const total = document.getElementById('total');
    list.innerHTML = '';
    let sum = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - AED ${item.price}`;
        list.appendChild(li);
        sum += item.price;
    });
    total.textContent = `الإجمالي: AED ${sum.toFixed(2)}`;
}

function checkout() {
    if (cart.length === 0) {
        alert("السلة فارغة.");
        return;
    }
    alert("شكراً لك! سنقوم بالتواصل معك لتأكيد الطلب.");
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

document.addEventListener("DOMContentLoaded", renderCart);

function checkout() {
    if (cart.length === 0) {
        alert("السلة فارغة.");
        return;
    }
    document.getElementById('checkout-form').style.display = 'flex';
}

function closeCheckout() {
    document.getElementById('checkout-form').style.display = 'none';
}

function submitOrder() {
    const name = document.getElementById('cust-name').value;
    const phone = document.getElementById('cust-phone').value;
    const address = document.getElementById('cust-address').value;

    if (!name || !phone || !address) {
        alert("يرجى تعبئة جميع البيانات.");
        return;
    }

    alert(`شكراً لك ${name}، تم استلام طلبك وسنتواصل معك قريباً.`);
    
    // تنظيف البيانات
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    closeCheckout();
}

