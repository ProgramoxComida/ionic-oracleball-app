/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./mock-predictions.ts" />


class Prediction {
  public prediction: String = 'Tap 8Ball for an answer';
  public answered: Boolean = true;
  public $inject = ['$timeout'];
  public predictionList: Array<String> = Mocks.PredictionList;
  constructor(private $timeout: ng.ITimeoutService){}
  ask () {
    this.answered = false
    this.prediction = 'Asking the Oracle'
    this.$timeout(() => {
      this.prediction = this.predictionList[Math.floor(Math.random() * this.predictionList.length)]
      this.answered = true
    }, 2000)
  }
}

angular.module('8Ball')
.controller('PredictionController', Prediction)