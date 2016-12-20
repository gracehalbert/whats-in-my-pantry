var pantryList = angular.module('pantryList', []);

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
    console.log($scope.formData);
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
    console.log(id);
    $http.delete('/api/groceries/' + id)
      .success(function(data) {
        $scope.groceries = data;
      })
      .error(function(err) {
        console.log(err);
      });
  };
};
