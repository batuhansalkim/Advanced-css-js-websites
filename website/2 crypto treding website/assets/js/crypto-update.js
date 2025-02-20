// CoinGecko API'den kripto verilerini çeken ve tabloyu güncelleyen script
async function updateCryptoData() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&sparkline=false');
        const data = await response.json();

        // Market tablosundaki satırları seç
        const tableRows = document.querySelectorAll('.market-table tbody tr');
        
        // Her bir satır için verileri güncelle
        tableRows.forEach((row, index) => {
            if (data[index]) {
                const coin = data[index];
                
                // Fiyat
                const priceCell = row.querySelector('.last-price');
                if (priceCell) {
                    priceCell.textContent = `$${coin.current_price.toLocaleString()}`;
                }
                
                // 24s değişim
                const changeCell = row.querySelector('.trend');
                if (changeCell) {
                    const changePercent = coin.price_change_percentage_24h;
                    const isPositive = changePercent >= 0;
                    changeCell.innerHTML = `
                        <ion-icon name="${isPositive ? 'trending-up' : 'trending-down'}" aria-hidden="true"></ion-icon>
                        <data value="${changePercent}">${Math.abs(changePercent).toFixed(2)}%</data>
                    `;
                    changeCell.classList.remove('red', 'green');
                    changeCell.classList.add(isPositive ? 'green' : 'red');
                }
                
                // Market Cap
                const capCell = row.querySelector('.market-cap');
                if (capCell) {
                    capCell.textContent = `$${formatMarketCap(coin.market_cap)}`;
                }
            }
        });
    } catch (error) {
        console.error('Veri güncelleme hatası:', error);
    }
}

// Market cap değerini formatlayan yardımcı fonksiyon
function formatMarketCap(value) {
    if (value >= 1e9) {
        return (value / 1e9).toFixed(2) + 'B';
    }
    if (value >= 1e6) {
        return (value / 1e6).toFixed(2) + 'M';
    }
    return value.toLocaleString();
}

// Sayfa yüklendiğinde ve her 1 dakikada bir verileri güncelle
document.addEventListener('DOMContentLoaded', () => {
    updateCryptoData();
    setInterval(updateCryptoData, 60000);
});
