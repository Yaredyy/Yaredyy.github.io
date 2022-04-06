
  let colors=["red","blue","yellow","green","orange","purple","pink","black","white","brown","gray"];

  let coders = ["Backend Coder", "Frontend Coder", "Fullstack Coder", "Backend And Frontend Coder"];
  let code = 0;

  let name1 = document.getElementById("name1");

  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
  function Rainbow(){
    document.getElementById("name1").style.color = colors[Math.floor(Math.random()*11)];
  }
  
  name1.addEventListener()

  function endCoder(){
    document.getElementById("maxing").innerHTML = coders[code];
    code++;
    if(code==4){
      code=0;
    }
  }
  

