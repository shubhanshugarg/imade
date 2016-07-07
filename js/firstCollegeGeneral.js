var app = angular.module('newApp', []);

app.controller('FeedPluginMasterController', ["$scope","$location","$rootScope", "$http", function ($scope,$rootScope, $location , $http, FeedPluginData) {

          //var profileData = JSON.parse($.jStorage.get('profileData'));
            //var user_id = profileData["user_id"];
            $.blockUI({
             message: '<div id="floatingBarsG"><div class="blockG" id="rotateG_01"></div><div class="blockG" id="rotateG_02"></div><div class="blockG" id="rotateG_03"></div><div class="blockG" id="rotateG_04"></div><div class="blockG" id="rotateG_05"></div><div class="blockG" id="rotateG_06"></div><div class="blockG" id="rotateG_07"></div><div class="blockG" id="rotateG_08"></div></div><div></div>'
                         }); 



            $scope.set_color = function (username) {
                //alert(username);
                var x=username.length*9;
                  var dynamicColor="rgb("+((x*30)%255)+", "+((x*70)%255)+" , "+((x*90)%255)+")";
                    var returnColor={'background-color' : dynamicColor};

                    return returnColor;
                    //return { 'background-color' : 'red' };
                  
                }
                
                $scope.UiActionOnSendRequest = function (item) {
                //alert(username);
                $scope.connectionSuggestionsArrayView[$scope.connectionSuggestionsArrayView.indexOf(item)].approved=true;
                //setTimeout($scope.connectionSuggestionsArrayView.splice($scope.connectionSuggestionsArrayView.indexOf(item), 1), 5000);
                $scope.connectionSuggestionsArrayView.splice($scope.connectionSuggestionsArrayView.indexOf(item), 1);
                
                }
                /*$scope.UiActionOnRespondRequest = function (item) {
                //alert(username);
                $scope.connectionSuggestionsArrayView[$scope.connectionSuggestionsArrayView.indexOf(item)].approved=true;
                //setTimeout($scope.connectionSuggestionsArrayView.splice($scope.connectionSuggestionsArrayView.indexOf(item), 1), 5000);
                $scope.connectionSuggestionsArrayView.splice($scope.connectionSuggestionsArrayView.indexOf(item), 1);
                
                }*/

          $scope.sendConnectionRequest = function (toUserId , item) {
            
            var profileData = JSON.parse($.jStorage.get('profileData'));
            //var user_id=809;
            var user_id = profileData["user_id"];
            //var user_id='25';
            var fromUserId=user_id;
            $scope.UiActionOnSendRequest(item);
            //var user_id = profileData["user_id"];
            var fd = new FormData();
            fd.append('requestFromUserId', fromUserId);
            fd.append('requestToUserId', toUserId);
            
            var locationOrigin = "http://collegeboard-env2.elasticbeanstalk.com";
            $http.post(locationOrigin + "/connections/sendConnectionRequest", fd, {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                }
            }).success(function (response) {
                //alert("here1");
                //issuccess not comming in response
                var isSuccess = response.success;
                
                if (isSuccess) {
                    //alert("liked");
                    
                } else {

                    
                }
            }).error(function (response) {
                //alert("here2");
                navigator.notification.alert('Request not sent .Try later ',null,'Error','Ok');
                
            });

        };

        $scope.respondToRequest = function (toUserId, connectionState ,item) {
            
            var profileData = JSON.parse($.jStorage.get('profileData'));
            //var user_id=809;
            var user_id = profileData["user_id"];
            var fromUserId=user_id;
            //var user_id = profileData["user_id"];
            //UI action below
            $scope.connectionInvitesArrayView.splice($scope.connectionInvitesArrayView.indexOf(item), 1);
            //UI action close
            var fd = new FormData();
            fd.append('requestFromUserId', fromUserId);
            fd.append('requestToUserId', toUserId);
            fd.append('connectionState', connectionState);
            // /connections/updateConnectionState?requestFromUserId=12&requestToUserId=331&connectionState=REJECTED
            var locationOrigin = "http://collegeboard-env2.elasticbeanstalk.com";
            $http.post(locationOrigin + "/connections/updateConnectionState", fd, {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                }
            }).success(function (response) {
                //alert("here1");
                //issuccess not comming in response
                var isSuccess = response.success;
                
                if (isSuccess) {
                    //alert("liked");
                    
                } else {

                    
                }
            }).error(function (response) {
                //alert("here2");
                
            });

        };



            //user_id="25";
            var profileData = JSON.parse($.jStorage.get('profileData'));
            //var user_id=809;
            var user_id = profileData["user_id"];
            var getConUrl = "http://collegeboard-env2.elasticbeanstalk.com/connections/getConnectionsForUser?userId=" + user_id ;

            $http({
            method: 'GET',
            url: getConUrl,
            async: false
        }).
            success(function (response, status, headers, config) {


                //new
                $.unblockUI();
                //suggestions
                var responseData = response.data;
                //alert(responseData);
                $scope.conectionData = responseData.connectionSuggestions;
                //alert(responseData.connectionSuggestions);
                var connectionSuggestionsArray=[];
                $.each(responseData.connectionSuggestions, function (key, value) {
                    connectionSuggestionsArray.push(value);
                    // multi dimensional arrays retrieving that in UI

                });
                //alert(catIds);
                $scope.connectionSuggestionsArrayView=connectionSuggestionsArray;

                //pending requests
                $scope.conectionInvites = responseData.pendingConnectionInvites;
                //alert(responseData.connectionSuggestions);
                var connectionInvitesArray=[];
                $.each(responseData.pendingConnectionInvites, function (key, value) {
                    connectionInvitesArray.push(value);
                    // multi dimensional arrays retrieving that in UI

                });
                //alert(catIds);
                $scope.connectionInvitesArrayView=connectionInvitesArray;
                if ($scope.connectionInvitesArrayView.length==0) {$scope.noPendingRequests =true ;};
                

                //my connections
                $scope.conectionExistingData = responseData.existingConnections;
                //alert(responseData.connectionSuggestions);
                var connectionExistingArray=[];
                $.each(responseData.existingConnections, function (key, value) {
                    connectionExistingArray.push(value);
                    // multi dimensional arrays retrieving that in UI

                });
                //alert(catIds);
                $scope.connectionExistingArrayView=connectionExistingArray;
                if ($scope.connectionExistingArrayView.length==0) {$scope.noExistingConnections =true ;};
                
                /*var parsedJSON = JSON.parse(responseData.connectionSuggestions);
                
       //parsedJSON.length
       for (var i=0;i<3;i++) {
            alert(parsedJSON[i].userId);
         }*/
                                
                

            }).
            error(function (data, status, headers, config) {
                $.unblockUI();
                /*if ($.jStorage.get("feedEntriesData" + mainCategory + categoryId + categoryName)) {
                    //var errorMessage=response.message;
                    $scope.title = categoryName;
                    $scope.description = categoryDescription;

                    //showAlertMessage("No internet connection available.");
                    navigator.notification.alert("No internet connection available.",null,'Error','Ok');
                    var feedEntriesData = JSON.parse($.jStorage.get("feedEntriesData" + mainCategory + categoryId + categoryName));
                    //array formed for to limit to work
                    //$scope.feeds=feedEntriesData;
                    feedEntriesData = $.map(feedEntriesData, function (value, index) {
                        return [value];
                    });
                    $scope.feeds = feedEntriesData;
                    $scope.msg = "";
                    executeOnSucess(feedEntriesData);

                } else {
                    //var errorMessage=response.message;
                    $scope.title = categoryName;
                    $scope.description = categoryDescription;

                    //$scope.msg = 'An error occured:' + status;
                    $scope.msg = 'No notices to fetch in this category';
                }*/

            });


    }]);
