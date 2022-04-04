
  let colors=["Red","Blue","Yellow","Green","Orange","Purple","Pink","Black","White","Brown","Gray"];

  const name = document.getElementById("name");

  name.addEventListener('mouseover', function handleMouseOver() {
    name.style.color = "red";
  });
  
  name.addEventListener('mouseout', function handleMouseOut() {
    name.style.color = colors[Math.floor(Math.random()*11)];
  });