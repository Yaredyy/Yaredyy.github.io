class index {
  let colors=["Red","Blue","Yellow","Green","Orange","Purple","Pink","Black","White","Brown","Gray"];
  let flag = True;

  constructor(){}

  random(){
    while(flag==True){
      let num = Math.floor(Math.random() * 11);
      Document.getElementByID("name").style.color = colors[num];
    }
  }
}