var Links = {
  setColor:function(color){
    var list = document.querySelectorAll('a');
    var i = 0;
    while(i<list.length){
      list[i].style.color = color;
      i++;
      }
  }
}

var Body = {
  setColor:function (color){
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor:function (color){
    document.querySelector('body').style.backgroundColor = color;
  }
}

function night_day(self){
    if(self.value === 'night'){
      Body.setBackgroundColor('black');
      Body.setColor('white');
      self.value = 'day';
      Links.setColor('red');
    } else {
      Body.setBackgroundColor('white');
      Body.setColor('black');
      self.value = 'night';
      Links.setColor('green');
  }
}
