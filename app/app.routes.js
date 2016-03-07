materialAdmin.config(['$stateProvider','$routeProvider', function($stateProvider,$routeProvider) {

    $routeProvider.otherwise({redirectTo: '/home'});
    $stateProvider.state('home',{
        url:'/home',
        templateUrl:'views/home/home.html'
    })
}]);
