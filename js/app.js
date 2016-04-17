/**
 * Created by lenovo on 2016/4/2.
 */
var routerApp = angular.module('neomanApp', ['ui.router', 'app.controller', 'app.directive','app.service']);

routerApp.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

routerApp.config(function($stateProvider, $urlRouterProvider,$httpProvider) {
    //������
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Request-with'];
    $urlRouterProvider.otherwise('/index');
    $stateProvider.state('index', {
        url: '/index?slug',
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
    }).state('index.category', {
        url : '/category',
        views : {
            'top' : {
                templateUrl: 'template/top-category.html',
                controller : "topCategoryCtrl"
            }
        }
    }).state('index.selfInfo', {
        url : '/selfinfo?uid',
        views : {
            'top' : {
                templateUrl: 'template/top-selfinfo.html',
                controller : "topInfoCtrl"
            }
        }
    }).state('index.contentDetail', {
        url : '/contentdetail/:id',
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
                template: ''
            }
        }
    }).state('tvPage', {
        url : '/tvpage',
        views : {
            'main' : {
                templateUrl : "template/tv-page.html",
                controller : 'tvPageCtrl'
            },
            'contentTopAd@tvPage' : {
                templateUrl : 'template/content-top-view.html',
                controller : "contentTopViewCtrl"
            }
        }
    }).state('tvdetail', {
        url : '/tvdetail/:id',
        views : {
            'main': {
                templateUrl: 'template/main.html',
                controller : "mainCtrl"
            },
            'top@tvdetail' : {
                templateUrl: 'template/tv-detail.html',
                controller : "tvDetailCtrl"
            },
            'asideLeft@tvdetail' : {
                templateUrl: 'template/aside-left.html',
                controller : "asideLeftCtrl"
            },
            'asideRight@tvdetail' : {
                templateUrl: 'template/aside-right.html',
                controller : "asideRightCtrl"
            }
        }
    })
});