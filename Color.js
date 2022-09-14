
  let colors=["red","blue","yellow","green","orange","purple","pink","white","brown","gray"];

  let coders = ["Backend Coder", "Frontend Coder", "Fullstack Coder", "Backend And Frontend Coder"];


  function Rainbow(){
    document.getElementById("name").style.color = colors[Math.floor(Math.random()*10)];
  }


  function endCoder(){
    document.getElementById("maxing").innerHTML = coders[Math.floor(Math.random()*10)];
    code = code++%4;
  }
  