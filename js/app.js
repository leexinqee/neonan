/**
 * Created by lenovo on 2016/4/2.
 */
var routerApp = angular.module('neomanApp', ['ui.router', 'app.controller', 'app.directive']);

routerApp.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider.state('index', {
        url: '/index',
        views: {
            'main': {
                templateUrl: 'template/main.html',
                controller : "mainCtrl"
            },
            'top@index' : {
                templateUrl: 'template/top.html',
                controller : "topCtrl"
            },
            'asideLeft@index' : {
                templateUrl: 'template/aside-left.html',
                controller : "asideLeftCtrl"
            },
            'asideRight@index' : {
                templateUrl: 'template/aside-right.html',
                controller : "asideRightCtrl"
            }
        }
    })
});