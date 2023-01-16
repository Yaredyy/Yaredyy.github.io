  let name = document.getElementById("name");

  var coder = document.getElementById("maxing");
  
  var names = ["Yared","Yared Yohannes", "Yared Yohannes Yehualashet", "Yared Yehualashet", "Yared Y.","Yared Y. Yehualashet","Yared Yohannes Y.", "Yared Y. Y."]
  
  let colors=["red","blue","yellow","green","orange","purple","pink","white","brown","gray"];

  let coders = ["Backend Coder", "Frontend Coder", "Fullstack Coder", "Backend And Frontend Coder","Programmer","Friendly Coder","Spider-Man"];

  let fonts = ["Lobster Two","Lobster","Mukta","Quicksand","Abril Fatface","Indie Flower"];




  function RainbowName(){
    name.style.color = colors[Math.floor(Math.random()*10)];
  }


  function NewName(){
    name.innerHTML = names[Math.floor(Math.random()*8)];
  }


  function FontName(){
    name.style.fontFamily = fonts[Math.floor(Math.random()*6)];
  }




  function RainbowCoder(){
    coder.style.color = colors[Math.floor(Math.random()*10)];
  }


  let num;

  function NewCoder(){
    num = Math.floor(Math.random()*7);
    if(num==7){
      num = num + Math.floor(Math.random()*4);
      if(num==7){
        coder.innerHTML = coders[num];
      }
      else{
        coder.innerHTML = coders[3];
      }

    }
    else{
      coder.innerHTML = coders[num];
    }
  }
  

  function FontCoder(){
    coder.style.fontFamily = fonts[Math.floor(Math.random()*6)];
  }