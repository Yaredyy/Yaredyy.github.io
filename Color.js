
  let colors=["red","blue","yellow","green","orange","purple","pink","black","white","brown","gray"];

  function Hovered(){
    document.getElementById("name1").style.color = colors[Math.floor(Math.random()*11)];
  }

  function Unhovered(){
    document.getElementById("name1").style.color = colors[Math.floor(Math.random()*11)];
  }