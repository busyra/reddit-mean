angular.module('articleApp', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('articles', {
      url: '/',
      templateUrl: './views/articles.html',
      controller: 'articleController'
    })

    .state('new', {
      url: '/new',
      templateUrl: './views/new.html'
    });

  $urlRouterProvider.otherwise('/');

}])

.controller('articleController', ['$scope',function($scope) {
  $scope.articles = [{title: 'Gone with the Wind', votes: 9, author: 'Frederick Douglas'},{title: 'Gone with the Wind', votes: 9, author: 'Frederick Douglas'},{title: 'Gone with the Wind', votes: 9, author: 'Frederick Douglas'},{title: 'Gone with the Wind', votes: 9, author: 'Frederick Douglas'},{title: 'Gone with the Wind', votes: 9, author: 'Frederick Douglas'},{title: 'Gone with the Wind', votes: 9, author: 'Frederick Douglas'}]

  $scope.add = function(article) {
    console.log(article);
  };
}]);