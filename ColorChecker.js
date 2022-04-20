const ColorInputEl = document.getElementById('color');
ColorInputEl.addEventListener('input', event => {
    const color = event.target.value;
    const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    if(color.match(hexColorRegex)){
        ColorInputEl.style.borderColor = color;
    }else{
        ColorInputEl.style.borderColor = '#e2e2e2';
    }
});