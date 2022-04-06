
  let colors=["red","blue","yellow","green","orange","purple","pink","black","white","brown","gray"];
  var flag = 1;

  function Rainbow(){
    document.getElementById("name1").style.color = colors[Math.floor(Math.random()*11)];
  }

  while(flag==1){
    setTimeout(Rainbow(), 500);
  }

