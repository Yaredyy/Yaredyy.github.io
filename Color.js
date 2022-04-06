
  let colors=["red","blue","yellow","green","orange","purple","pink","black","white","brown","gray"];

  function Rainbow(){
    document.getElementById("name1").style.color = colors[Math.floor(Math.random()*11)];
  }

  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  while(flag==1){
    sleep(500);
    Rainbow();
  }

