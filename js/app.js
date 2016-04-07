/**
 * Created by lenovo on 2016/4/2.
 */
var routerApp = angular.module('neomanApp', ['ui.router', 'app.controller', 'app.directive','app.service']);

routerApp.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

routerApp.config(function($stateProvider, $urlRouterProvider,$httpProvider) {
    //øÁ”Ú¥¶¿Ì
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Request-with'];
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
    }).state('index.selfInfo', {
        url : '/selfinfo',
        views : {
            'top' : {
                templateUrl: 'template/top-selfinfo.html',
                controller : "topInfoCtrl"
            }
        }
    }).state('index.contentDetail', {
        url : '/contentdetail',
        views : {
            'top' : {
                templateUrl: 'template/top-content-detail.html',
                controller : "topContentCtrl"
            },
            'contentTopAd@index.contentDetail' : {
                templateUrl : 'template/content-top-view.html',
                controller : "contentTopViewCtrl"
            },
            'contentRightAd@index.contentDetail' : {
                templateUrl : 'template/content-right-view.html',
                controller : "contentRightViewCtrl"
            },
            'asideRight' : {
                template: '',
                controller: ""
            }
        }
    })
});