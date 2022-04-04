
  let colors=["red","blue","yellow","green","orange","purple","pink","black","white","brown","gray"];

  const name = document.getElementById("name");

  name.addEventListener('mouseover', function handleMouseOver() {
    name.style.color = colors[Math.floor(Math.random()*11)];
  });
  
  name.addEventListener('mouseout', function handleMouseOut() {
    name.style.color = colors[Math.floor(Math.random()*11)];
  });