export class SummaryCard {
    /**
   * @param {string} icon - Icon class (mdi).
   * @param {string} text - Description of the card.
   * @param {int} data - Data display on the card.
   * @param {string} classIn - Class color(vuetify).
   */

     constructor (icon, text, data, classIn) {
      this.icon = icon,
      this.text = text,
      this.data = data,
      this.class = classIn
    }
  // Using toJSON method to avoid POJO's error in vuex
  toJSON () {
    return {
      icon: this.icon,
      text: this.text,
      data: this.data,
      class: this.class
    }
  }
}

export class status{
  constructor(date, attempts,success,acceptable,fail,rate){
    this.date = date,
    this.attempts = attempts,
    this.success = success,
    this.acceptable = acceptable,
    this.fail = fail,
    this.rate = rate
  }
  toJSON(){
    return{
      date: this.date,
      attempts : this.attempts,
      success : this.success,
      acceptable : this.acceptable,
      fail : this.fail,
      rate : this.rate,
    }
  }
}