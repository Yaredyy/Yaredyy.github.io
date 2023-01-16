  let names = ["Yared","Yared Yohannes", "Yared Yohannes Yehualashet", "Yared Yehualashet", "Yared Y.","Yared Y. Yehualashet","Yared Yohannes Y.", "Yared Y. Y."]
  
  let colors=["red","blue","yellow","green","orange","purple","pink","white","brown","gray"];

  let coders = ["Backend Coder", "Frontend Coder", "Fullstack Coder", "Backend And Frontend Coder","Programmer"];

  let fonts = ["Lobster Two","Lobster","Mukta","Quicksand","Abril Fatface","Indie Flower"];


  function RainbowName(){
    document.getElementById("name").style.color = colors[Math.floor(Math.random()*10)];
  }

  function NewName(){
    document.getElementById("name").innerHTML = names[Math.floor(Math.random()*8)];
  }

  function FontName(){
    document.getElementById("name").style.fontFamily = fonts[Math.floor(Math.random()*6)];
  }



  function RainbowCoder(){
    document.getElementById("maxing").style.color = colors[Math.floor(Math.random()*10)];
  }

  function NewCoder(){
    document.getElementById("maxing").innerHTML = coders[Math.floor(Math.random()*5)];
  }
  
  function FontCoder(){
    document.getElementById("maxing").style.fontFamily = fonts[Math.floor(Math.random()*6)];
  }