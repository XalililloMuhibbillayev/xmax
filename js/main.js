function toggleAnswer(id) {
    const answer = document.getElementById(id);
    const counter = document.getElementById(`counter-${id}`);
    answer.classList.add('shop-icon-deactive');
    counter.classList.add('counter-active');
    setTimeout(() => {
        answer.classList.remove('shop-icon-deactive');
        counter.classList.remove('counter-active');
    }, 10000);
}

function reduce(e) {
    if(e.nextElementSibling.innerHTML!=0)e.nextElementSibling.innerHTML-=1;
};

function decrement(e) {
    e.previousElementSibling.innerHTML=parseInt(e.previousElementSibling.innerHTML)+1;
};




// Initialize the map
let map = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer (you can use different tile providers)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker
let marker = L.marker([51.5, -0.09]).addTo(map);