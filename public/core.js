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
      .otherwise('list.html');
  });

var pantryController = function($scope, $http) {
  $scope.formData = {};

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

var userController = function($scope, $http) {
  $scope.formData = {};

  $scope.login = function () {
    $http.post('/api/login', $scope.formData)
      .success(function(data) {
        return resp.data;
      })
      .error(function(err) {
        console.log(err);
      });
  };

  $scope.signup = function () {
    $http.post('/api/signup', $scope.formData)
    .success(function(data) {
      return resp.data;
    })
    .error(function(err) {
      console.log(err);
    });
  };

};
