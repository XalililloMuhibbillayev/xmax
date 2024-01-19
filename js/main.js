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