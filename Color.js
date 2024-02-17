  
  //Data initilazed
  const name = document.getElementById("name");

  const coder = document.getElementById("maxing");
  
  const names = ["Yared","Yared Yohannes", "Yared Yohannes Yehualashet", "Yared Yehualashet", "Yared Y.","Yared Y. Yehualashet","Yared Yohannes Y.", "Yared Y. Y."]
  
  const colors=["red","blue","yellow","green","orange","purple","pink","white","brown","gray"];

  const coders = ["Backend Coder", "Frontend Coder", "Fullstack Coder", "Backend And Frontend Coder","Programmer","Friendly Coder"];

  const fonts = ["Lobster Two","Lobster","Mukta","Quicksand","Abril Fatface","Indie Flower"];



  //functions set up for name div
  function RainbowName(){
    name.style.color = colors[Math.floor(Math.random()*10)];
  }


  function NewName(){
    name.innerHTML = names[Math.floor(Math.random()*8)];
  }


  function FontName(){
    name.style.fontFamily = fonts[Math.floor(Math.random()*6)];
  }



  //functions et up for coding div
  function RainbowCoder(){
    coder.style.color = colors[Math.floor(Math.random()*10)];
  }


  let num;

  function NewCoder(){
    num = Math.floor(Math.random()*6);
    if(num==6){
      num = num + Math.floor(Math.random()*4);
      if(num==6){
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