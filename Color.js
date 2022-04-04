
  let colors=["Red","Blue","Yellow","Green","Orange","Purple","Pink","Black","White","Brown","Gray"];
  let flag = True;

  random(this);{
      let num = Math.floor(Math.random() * 11);
      this.style.color = colors[num];
  }