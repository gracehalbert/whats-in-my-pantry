var pantryList = angular.module('pantryList', ['ngRoute'])
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/list', {
        templateUrl: 'list.html',
        controller: 'pantryController'
      })
      .when('/signup', {
        templateUrl: 'signup.html',
        controller: 'userController'
      })
      .when('/login', {
        templateUrl: 'login.html',
        controller: 'userController'
      })
      .when('/', {
        templateUrl: 'login.html',
        controller: 'userController'
      })
      .otherwise('list.html');
  })
  .run(function($rootScope, $location) {
    $rootScope.$on( '$routeChangeStart', function(event, next, current) {
      if ($rootScope.loggedInUser == null) {
        // no logged user, redirect to /login
        if ( next.templateUrl === 'login.html') {
        } else {
          $location.path('/login');
        }
      }
    });
  });



var pantryController = function($scope, $http, $rootScope) {
  $scope.formData = {};
  $scope.formData.user = $rootScope.loggedInUser;
  $http.get('/api/groceries')
    .success(function(data) {
      $scope.groceries = data;
      console.log(data, ' this is data');
    })
    .error(function(err) {
      console.log(err);
    });

  $scope.createGrocery = function () {
    $http.post('/api/groceries', $scope.formData)
      .success(function(data) {
        $scope.formData = {}; //clears form
        $scope.groceries = data;
      })
      .error(function(err) {
        console.log(err);
      });
  };

  $scope.deleteGrocery = function(id) {
    $http.delete('/api/groceries/' + id)
      .success(function(data) {
        $scope.groceries = data;
      })
      .error(function(err) {
        console.log(err);
      });
  };
};

var userController = function($scope, $http, $location, $rootScope) {
  $scope.formData = {};

  $scope.login = function() {
    $rootScope.loggedInUser = $scope.username;
    $location.path('/list');
  };

  $scope.signup = function () {
    $http.post('/api/signup', $scope.formData)
    .success(function(data) {
      console.log('maybe working');
    })
    .error(function(err) {
      console.log(err);
    });
  };

};
