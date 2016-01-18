/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./mock-predictions.ts" />
var Prediction = (function () {
    function Prediction($timeout) {
        this.$timeout = $timeout;
        this.prediction = 'Tap 8Ball for an answer';
        this.answered = true;
        this.$inject = ['$timeout'];
        this.predictionList = Mocks.PredictionList;
    }
    Prediction.prototype.ask = function () {
        var _this = this;
        this.answered = false;
        this.prediction = 'Asking the Oracle';
        this.$timeout(function () {
            _this.prediction = _this.predictionList[Math.floor(Math.random() * _this.predictionList.length)];
            _this.answered = true;
        }, 2000);
    };
    return Prediction;
})();
angular.module('8Ball')
    .controller('PredictionController', Prediction);
