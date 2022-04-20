function changeColor(){
    let color = "#";
    color += Math.random().toString(16).slice(2,8);
    document.body.style.background = color;
  }