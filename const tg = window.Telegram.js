const tg = window.Telegram.WebApp;
tg.expand();

function order(product) {
    fetch('https://neon1-inky.vercel.app/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            product,
            user: tg.initDataUnsafe.user
        })
    });

    tg.showAlert("🔥 Заявка отправлена!");

}
