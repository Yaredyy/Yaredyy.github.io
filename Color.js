
  let colors=["red","blue","yellow","green","orange","purple","pink","white","brown","gray"];

  let coders = ["Backend Coder", "Frontend Coder", "Fullstack Coder", "Backend And Frontend Coder"];
  let code = 0;

  // function sleep(milliseconds) {
  //   const date = Date.now();
  //   let currentDate = null;
  //   do {
  //     currentDate = Date.now();
  //   } while (currentDate - date < milliseconds);
  // }

  function Rainbow(){
    document.getElementById("name").style.color = colors[Math.floor(Math.random()*10)];
  }


  function endCoder(){
    document.getElementById("maxing").innerHTML = coders[code];
    code++;
    if(code==4){
      code=0;
    }
  }
  

