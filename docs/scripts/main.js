document.onload = function () {
    hookSpoilersToggleOnClick([].slice.call(document.getElementsByClassName('spoiler')));
    console.log(44)
}();

function hookSpoilersToggleOnClick(spoilersSelector) {
    let spoilers = spoilersSelector;
    spoilers.forEach(spoiler => spoiler.children[0].addEventListener('click', toggleSpoiler));
    console.log(55)
}

function toggleSpoiler() {
    let spoilerBody = this.parentNode.getElementsByClassName("spoiler-body")[0];
    if (spoilerBody.classList.contains('active')) {
        spoilerBody.classList.remove('active');
        spoilerBody.parentNode.classList.remove('active');
    }
    else {
        spoilerBody.classList.add('active');
        spoilerBody.parentNode.classList.add('active');
    }
    console.log(66)
}