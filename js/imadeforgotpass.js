function pageprocessorForgotPassword2Page3(pagedef, $scope, $routeParams, $compile, $http, $rootScope, $sce, $window, $location) {
var data1 = $compile($(pagedef.datatemplate))($scope);
$("#appContent").append(data1);


$scope.updatePwdLoop = function (email,pwd) {
            var email_address=email;
            var password = pwd;
            var locationOrigin = "http://collegeboard-env2.elasticbeanstalk.com";
            var fd = new FormData();
            fd.append('userEmail', email_address);
            fd.append('newPassword', password);
            //fd.append('noticeId', noticeId);

             //http://localhost:8080/userInfo/updatePassword?userEmail=shubhanshugarg2005@gmail.com&newPassword=abcdef

            $http.post(locationOrigin + "/userInfo/updatePassword", fd, {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                }
            }).success(function (response) {
                var isSuccess = response.success;
                if (isSuccess) {
                    
                    
                } else {

                }
            }).error(function (response) {

                navigator.notification.alert("Sorry,no internet connection available right now. Please try again later..",null,'Error','Ok');
                
            });

        };

$scope.changePassword=function(){
    if($scope.pwd == "" || $scope.pwd == undefined){
            if(window.device){
                navigator.notification.alert("Please enter password.",null,'Alert','Ok');
            }else{
                alert("Please enter password.");                
            }
            return;
        }
        if($scope.cpwd == "" || $scope.cpwd == undefined){
            if(window.device){
                navigator.notification.alert("Please enter confirm password.",null,'Alert','Ok');
            }else{
                alert("Please enter confirm password.");                
            }
            return;
        }
        if($scope.pwd === $scope.cpwd){

        }else{
            if(window.device){
                navigator.notification.alert("Password doesn't match",null,'Alert','Ok');
            }else{
                alert("Password doesn't match",null,'Alert','Ok');
            }
            return;
        }
        $.blockUI({
                                 message: '<div id="floatingBarsG"><div class="blockG" id="rotateG_01"></div><div class="blockG" id="rotateG_02"></div><div class="blockG" id="rotateG_03"></div><div class="blockG" id="rotateG_04"></div><div class="blockG" id="rotateG_05"></div><div class="blockG" id="rotateG_06"></div><div class="blockG" id="rotateG_07"></div><div class="blockG" id="rotateG_08"></div></div><div></div>'
                                 });

        var url="https://kryptosda.kryptosmobile.com/kryptosds/nuser/resetpassword";
        var tenantid = $rootScope.metadata.tenantid;
        var data={"tenant" : tenantid,"username": $rootScope.useremailID, "pwd" : $scope.pwd, "cpwd" : $scope.cpwd, "otp" : $rootScope.ForgetOTP}
        
        $http.post(url, data).success(function(res) {
                    $.unblockUI();
                    if(!res.success){
                        navigator.notification.alert('Some error occured. Please try again after sometime.',null,'','Ok');
                    }else{
                        
                        //theLoop college Loopin password update function 
                        $scope.updatePwdLoop(data.username, data.pwd);
                        navigator.notification.alert('Password reset done successfully.',null,'','Ok');
                        $location.path("/app/SignIn2/SignIn2");
                        $scope.$apply();
                    }
                }).error(function(err) {
                    $.unblockUI();
                    if(window.device){
                    navigator.notification.alert('Some error occured. Please try again after sometime',null,'Error','Ok');
                    }else{
                        alert('Some error occured. Please try again after sometime.');
                    }
                    //alert(JSON.stringify(err));
                });
}
}