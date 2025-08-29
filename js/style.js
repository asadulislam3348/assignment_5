
let heartCount = 0;
let coins = 100;
let copyCount = 0;

const navHeart = document.getElementById('nav-love');
const navCoin = document.getElementById('nav-coin');
const navCopy = document.getElementById('nav-copy');
const historyEntries = document.querySelector('.history-entries');
const clearHistoryBtn = document.querySelector('.clear-history');

// Heart button
document.querySelectorAll('.love').forEach(btn => {
    btn.addEventListener('click', () => {
        heartCount++;
        navHeart.innerText = heartCount;
    });
});

// Copy button
document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.card');
        const number = card.querySelector('.hotline').innerText;
        navigator.clipboard.writeText(number);
        copyCount++;
        navCopy.innerText = copyCount + " Copy";
        alert(`Copied: ${number}`);
    });
});

// Call button
document.querySelectorAll('.call-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        if(coins < 20){
            alert("Not enough coins to make a call!");
            return;
        }

        const card = btn.closest('.card');
        const serviceName = card.querySelector('h2').innerText;
        const number = card.querySelector('.hotline').innerText;

        coins -= 20;
        navCoin.innerText = coins;
        alert(`Calling ${serviceName} at ${number}`);

        // Add to history
        const entry = document.createElement('p');
        entry.classList.add('border-b', 'py-1');
        const time = new Date().toLocaleTimeString();
        entry.innerText = `${serviceName} - ${number} at ${time}`;
        historyEntries.appendChild(entry);
    });
});

// Clear history
clearHistoryBtn.addEventListener('click', () => {
    historyEntries.innerHTML = '';
});
