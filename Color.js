
  let colors=["red","blue","yellow","green","orange","purple","pink","black","white","brown","gray"];
  let flag = True;

  function Rainbow(){
    document.getElementById("name1").style.color = colors[Math.floor(Math.random()*11)];
  }

  while(flag==True){
    setTimeout(Rainbow, 500);
  }

