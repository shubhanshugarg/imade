function pageprocessortheLoopPage2(pagedef, $scope, $routeParams, $compile, $http, $rootScope, $sce, $window, $location) {var data1 = $compile($(pagedef.datatemplate))($scope);$("#appContent").append(data1);


$scope.mainCategory = $rootScope.mainCategory;
        //alert("newcon");
        $scope.title = $rootScope.title;
        $scope.publishedFullDate = new Date($rootScope.publishedDate);
        $scope.publishedDate = $scope.publishedFullDate.toDateString();
        //$scope.publishedDate = FeedPluginData.publishedDate;
        $scope.content = $rootScope.content;
        $scope.urlLink = $rootScope.urlLink;
        $scope.image= $rootScope.image;
        $scope.noticeId=$rootScope.noticeId;
        $scope.socialLink = $rootScope.socialLink;
        $scope.postedByName = $rootScope.postedByName;
        $scope.postedById = $rootScope.postedById;
        $scope.postedByRoll = $rootScope.postedByRoll;
        //alert("newcon"+$scope.content);
        
       // $scope.item.myUserId = $rootScope.profileData["user_id"];

        /*$scope.item = "dummy";
        //decoupling the selected item
        $scope.item.mainCategory = "dummy";
        $scope.item.title = "dummy";
        //$scope.item.publishedFullDate = new Date($rootScope.selectedItem.publishedDate);
        //$scope.item.publishedDate = $scope.item.publishedFullDate.toDateString();
        //$scope.item.publishedDate = FeedPluginData.selectedItem.publishedDate;
        $scope.item.content = "dummy";
        $scope.item.urlLink = "dummy";
        $scope.item.socialLink = "dummy";
        $scope.item.postedByName = "dummy";
        $scope.item.postedById = "dummy";
        $scope.item.postedByRoll = "dummy";
        $scope.item.myUserId = "dummy";*/
        if ($scope.images != undefined) {
            //$scope.item.images.url1 = $rootScope.selectedItem.images.url1;
            //$scope.item.images.url1 = "dummy";
        }
        if ($rootScope.mainCategory.toLowerCase() == "notices") {
            $scope.noticeId = $rootScope.id;
            //$scope.item.noticeId = "dummy";
        }
        



            var locationOrigin = "http://collegeboard-env2.elasticbeanstalk.com";
            


        

        //close delete call

        $scope.checkItemPermission = function () {

            return $scope.myUserId == $scope.postedById;


        };


        //marking spam and report abuse here function firing post call to the server same function doing both calls

        $scope.setInfoState = function (state) {
            var confirmed = confirm("Are you sure you want to mark report item?");
            if (!confirmed) {
                return;
            }
            var fd = new FormData();
            //if news or notice
            var setInfoStateUrl = "";
            //alert("here");
            if ($scope.mainCategory.toLowerCase() == "notices") {
                fd.append('noticeId', $scope.noticeId);
                setInfoStateUrl = "/noticeInfo/changeNoticeState";
              //  alert(setInfoStateUrl);

            }
            /*else if (FeedPluginData.mainCategory.toLowerCase() == "news") {
             fd.append('newsId', $scope.item.newsId);
             setInfoStateUrl = "/newsInfo/changeNewsState";
             }*/
            //if spam or abuse
            if (state.toLowerCase() == "spam") {
                fd.append('infoState', "REPORTED_SPAM");
                //alert("here2");
            } else if (state.toLowerCase() == "abuse") {
                fd.append('infoState', "REPORTED_ABUSE");
            }


            var locationOrigin = "http://collegeboard-env2.elasticbeanstalk.com";
            $http.post(locationOrigin + setInfoStateUrl, fd, {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                }
            }).success(function (response) {
                var isSuccess = response.success;

                if (isSuccess) {
                    //showAlertMessage("This notice has been reported for review....");
                    navigator.notification.alert("This notice has been reported for review....",null,'Error','Ok');
                    //empty the initial variabes of notice

                } else {

                    var errorMessage = response.message;
                    //showAlertMessage("Sorry...Unable to report now.Please try later .." + errorMessage);
                    navigator.notification.alert("Sorry...Unable to report now.Please try later ..",null,'Error','Ok');
                    //alert(errorMessage);
                }
            }).error(function (response) {

                //alert(response.message);
                //showAlertMessage("Sorry,no internet connection available right now. Please try again later..");
                navigator.notification.alert("Sorry,no internet connection available right now. Please try again later..",null,'Error','Ok');

            });


        };

        $scope.getTrustedResourceUrl = function (src) {

            return $sce.trustAsResourceUrl(src);
        };

        $scope.loadURL = function (link) {
            //target: The target in which to load the URL, an optional parameter that defaults to _self. (String)
            //_self: Opens in the Cordova WebView if the URL is in the white list, otherwise it opens in the InAppBrowser.
            //_blank: Opens in the InAppBrowser.
            //_system: Opens in the system's web browser.
            //window.open($scope.item.link,'_blank');
            //alert(link);
            if (link.substring(0, 4).toLowerCase() != "http") {
                link = "http://" + link;
            }
            window.open(link, '_blank');
        };

}