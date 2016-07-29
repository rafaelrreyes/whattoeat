var eatApp = angular.module('eatModule', []);

eatApp.controller('mealFormController', mealFormController);

function mealFormController($scope) {
	$scope.meals = [];
	$scope.mealCounter = 0;	


	$scope.addMeal = function () {
		var inputField = document.getElementById('inputField');
		if(inputField.value != "") {
			var addToArray = true;
			for (var i = 0; i < $scope.meals.length; i++) {
				if($scope.meals[i].name===$scope.meal) {
					addToArray = false;
				}
			}

			if(addToArray) {

				$scope.meals.push( { name:$scope.meal } );
				$scope.mealCounter++;
			}

			$scope.meal = "";
		}
	};

	$scope.pickMeal = function () {
		$scope.randNum = Math.floor(Math.random() * $scope.meals.length);
		$scope.result = $scope.meals[$scope.randNum].name;
		alert("You are eating " + $scope.result + ".");
	};

	$scope.clearMeals = function () {
		$scope.meals = [];
		$scope.result = "";
	};

	$scope.checkIfenterKeyWasPressed = function ($event) {
		var keyCode = $event.which || $event.keyCode;
		if(keyCode == 13) {	
			var inputField = document.getElementById('inputField');
		if(inputField.value != "") {
			var addToArray = true;
			for (var i = 0; i < $scope.meals.length; i++) {
				if($scope.meals[i].name===$scope.meal) {
					addToArray = false;
				}
			}

			if(addToArray) {

				$scope.meals.push( { name:$scope.meal } );
				$scope.mealCounter++;
			}

			$scope.meal = "";
		}
		}
	};
}


