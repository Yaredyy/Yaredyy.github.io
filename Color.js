
  let colors=["red","blue","yellow","green","orange","purple","pink","black","white","brown","gray"];

  const name1 = document.getElementById("name1");

  function Hovered(){
    name1.style.color = colors[Math.floor(Math.random * 11)];
  }

  function Unhovered(){
    name1.style.color = colors[Math.floor(Math.random * 11)];
  }