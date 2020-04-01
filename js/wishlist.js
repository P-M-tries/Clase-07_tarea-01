function addGiftToWishlist () {
    let $regalo = JSON.parse(localStorage.getItem("regalo"));
    const giftlist = document.querySelector('#giftlist');
    giftlist.appendChild(createGiftItem($regalo));
}

function createGiftItem(regalo) {
    const li = document.createElement('li');
    li.innerHTML = regalo;
    return li;
};

window.onload = addGiftToWishlist();