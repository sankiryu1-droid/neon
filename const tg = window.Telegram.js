const tg = window.Telegram.WebApp;
tg.expand();

function order(product) {
    fetch('https://ТВОЙ_BACKEND_URL/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            product,
            user: tg.initDataUnsafe.user
        })
    });

    tg.showAlert("🔥 Заявка отправлена!");
}