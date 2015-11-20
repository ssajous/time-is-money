/* global moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { CalendarController } from './calendar/calendar.controller';

angular.module('timeIsMoney', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria',
  'ngResource', 'ui.router', 'ngMaterial', 'toastr', 'angularMoment'])
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('CalendarController', CalendarController)

