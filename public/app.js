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
      templateUrl: './views/new.html',
      controller: 'newArticleController'
    });

  $urlRouterProvider.otherwise('/');

}])

.controller('newArticleController', ['$http',
	function($http){
		console.log('just make sure its here');
	}])

.controller('articleController', ['$scope', '$http', function($scope, $http) {
  // $scope.articles = [{title: 'Gone with the Wind', votes: 9, author: 'Frederick Douglas'},{title: 'Gone with the Wind', votes: 9, author: 'Frederick Douglas'},{title: 'Gone with the Wind', votes: 9, author: 'Frederick Douglas'},{title: 'Gone with the Wind', votes: 9, author: 'Frederick Douglas'},{title: 'Gone with the Wind', votes: 9, author: 'Frederick Douglas'},{title: 'Gone with the Wind', votes: 9, author: 'Frederick Douglas'}]
  $http.get('/api/articles')
  .then(function (response){
	$scope.articles = response.data

	});

  // $http.post('/api/articles')

  $scope.add = function(article) {
    console.log(article);
  };
}]);