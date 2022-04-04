class index {
  
  colors=["Red","Blue","Yellow","Green","Orange","Purple","Pink","Black","White","Brown","Gray"];
  flag = True;

  constructor(){};

  random(){
      num = Math.floor(Math.random() * 11);
      Document.getElementByID("name").style.color = colors[num];
  };
}