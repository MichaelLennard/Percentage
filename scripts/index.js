class My {
  constructor() {
    this.intIndicators();
  }
  intIndicators() {
    $(".indicator").map((index, indicator) => {
      new Indicator(indicator);
    });
  }
}

class Indicator {
  constructor(indicator) {
    this.$indicator = $(indicator);
    this.$line = this.$indicator.find(".line");
    this.value = parseInt(this.$indicator.find(".info").text(), 10);

    this._initEvents();
    this._animate();
  }

  _initEvents() {
    this.$indicator.find(".text").on("click", this._animate.bind(this));
  }

  _animate() {
    this.$line.css("width", 0).animate({ width: `${this.value}%` }, 500);
  }
}

new My();
