
  let colors=["Red","Blue","Yellow","Green","Orange","Purple","Pink","Black","White","Brown","Gray"];
  let flag = True;

  random(id);{
      let num = Math.floor(Math.random() * 11);
      id.style.color = colors[num];
  }