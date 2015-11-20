export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('calendar', {
      url: '/',
      templateUrl: 'app/calendar/calendar.html',
      controller: 'CalendarController',
      controllerAs: 'cal'
    });

  $urlRouterProvider.otherwise('/');
}
