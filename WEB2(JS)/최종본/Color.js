var Links = {
  setColor:function(color){
    $('a').css('color',color);
  }
}

var Body = {
  setColor:function (color){
        $('body').css('color',color);
  },
  setBackgroundColor:function (color){
    $('body').css('backgroundColor',color);
  //  document.querySelector('body').style.backgroundColor = color;
  }
}

function night_day(self){
    if(self.value === 'night'){1
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
