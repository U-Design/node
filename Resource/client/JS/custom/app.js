var app = angular.module("sample", []);

app.controller("mainCntrl", function($scope,AppServices){
    $scope.sendData =function(){
        AppServices.sendDetails($scope.detail)
    }
});

app.service("AppServices",function($http){

    this.sendDetails =function(details){
        $http({
            method:'POST',
            url:"/sendDetails",
            data:{detail:details}
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    }
});