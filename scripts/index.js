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
  }
}

new My();
