app.controller('ctrl', function($scope){

	$scope.data = [
		{
			"first_name" : "Sumit",
			"last_name" : "Sharma",
			"Age" : 22,
			"Sex" : "Male",
			"Location" : "Delhi"
		},
		{
			"first_name" : "Jatin",
			"last_name" : "Garg",
			"Age" : 34,
			"Sex" : "Female",
			"Location" : "Andaman & Nicobar Island"
		},
		{
			"first_name" : "Jawwad",
			"last_name" : "Zafar",
			"Age" : "n/a",
			"Sex" : "n/a",
			"Location" : "Bihar"
		}
	];


	$scope.showAll = function(x, i){
		$('#cell'+i).toggleClass("active");
		
		$('#'+i).toggle();
		$scope.last_name = $scope.data[i].last_name;
		$scope.Age = $scope.data[i].Age;
		$scope.Sex = $scope.data[i].Sex;
		$scope.Location = $scope.data[i].Location;
	}


});