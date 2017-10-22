class My {
  constructor() {
    this.intIndicators();
  }
  intIndicators() {
    $(".indicator").map((index, $indicator) => {
      new Indicator($indicator);

      
    });
  }
}

class Indicator {
  constructor($indicator) {
    console.log($indicator);
  //   const display = $('.line');
  //   let currentValue = parseInt(display.text());
    const zero = 0;
  //   const diff =  zero - currentValue;
  //   var step = ( 0 < diff ? 1 : -1 ); 

  //   for (var i = 0; i < Math.abs(diff); ++i) {
  //     setTimeout(function() {
  //         currentValue += step
  //         display.text(currentValue);
  //     }, 100 * i)   
  // } 

  $(".text").click(function(){
    let currentInfo = parseInt($('.info').text());
    console.log(currentInfo);   
    })





  }
}

new My();
