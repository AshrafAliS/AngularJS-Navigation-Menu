'use strict';

var myApp = angular.module('myApp', []);

myApp.config(function($routeProvider) {
    $routeProvider.when(
    	'/home',
    	{
    		templateUrl: 'partials/home.html'
    	});
    $routeProvider.when(
    	'/profile',
    	{
    		templateUrl: 'partials/profile.html'
    	});
      $routeProvider.when(
      	'/contact',
      	{
      		templateUrl: 'partials/contact.html'
      	});
        $routeProvider.when(
        	'/about',
        	{
        		templateUrl: 'partials/about.html'
        	});
    $routeProvider.otherwise(
        {
            redirectTo: '/home'
        });
});
