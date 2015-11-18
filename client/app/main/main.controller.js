'use strict';

let http;
let myScope;
let mySocket;

class MainController {
  constructor($scope, $http, socket) {
    this.awesomeThings = [];
    this.newThing = '';
    http = $http;
    myScope = $scope;
    mySocket = socket;

    http.get('/api/things').success(awesomeThings => {
      this.awesomeThings = awesomeThings;
      mySocket.syncUpdates('thing', this.awesomeThings);

      myScope.$on('$destroy', () => {
        mySocket.unsycUpdates('thing');
      });
    });
  }

  addThing() {
    if (this.newThing === '') {
      return;
    }
    http.post('/api/things', { name: this.newThing });
    this.newThing = '';
  }

  deleteThing(thing)
  {
    http.delete(`api/things/${thing._id}`);
  }
}

MainController.$inject =['$scope', '$http', 'socket'];

angular.module('timeIsMoneyApp')
  .controller('MainCtrl', MainController);
