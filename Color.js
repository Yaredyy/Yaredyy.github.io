
  let colors=["red","blue","yellow","green","orange","purple","pink","black","white","brown","gray"];

  const name1 = document.getElementById("name");

  name1.addEventListener('mouseover', function handleMouseOver() {
    name1.style.color = "red";
  });
  
  name1.addEventListener('mouseout', function handleMouseOut() {
    name1.style.color = "white";
  });