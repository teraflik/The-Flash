//to toggle images on click for all characters page

function toggleImg1(charName) {
    document.getElementById(charName).getElementsByTagName('img')[0].src = "media/"+charName+"1.jpg"
    document.getElementById(charName).getElementsByTagName('a')[0].disabled = true;
    document.getElementById(charName).getElementsByTagName('a')[1].disabled = false;
}

function toggleImg0(charName) {
    document.getElementById(charName).getElementsByTagName('img')[0].src = "media/"+charName+"0.jpg"
    document.getElementById(charName).getElementsByTagName('a')[1].disabled = true;
    document.getElementById(charName).getElementsByTagName('a')[0].disabled = false;
}