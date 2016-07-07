function pageprocessortheLoopPage2(pagedef, $scope, $routeParams, $compile, $http, $rootScope, $sce, $window, $location) {var data1 = $compile($(pagedef.datatemplate))($scope);$("#appContent").append(data1);


$scope.timestampToHours = function (timeStamp) {

            var d = new Date(timeStamp);
            var today = new Date();
            var timeStart = d.getTime();
            var timeEnd = today.getTime();
            var hourDiff = timeEnd - timeStart; //in ms
            var secDiff = hourDiff / 1000; //in s
            var minDiff = Math.floor(hourDiff / 60 / 1000) ; //in minutes
            var hDiff = Math.floor(hourDiff / 3600 / 1000); //in hours
            var days = Math.floor(hourDiff / 3600 / 1000/24) ;
            if(days>=30){
                return "more than month ago";
            }
            if(days!=0){
                return days+"d ago";
            }
            if(hDiff!=0){
                return hDiff+"hrs ago" ;
            }
            if(minDiff!=0){
                return minDiff+"min ago";
            }
            return "now";             
                  
        };

$scope.mainCategory = $rootScope.mainCategory;
        $scope.title = $rootScope.title;
        $scope.publishedFullDate = new Date($rootScope.publishedDate);
        try {
    $scope.publishedDate=$scope.timestampToHours($scope.publishedFullDate.getTime());
}
catch(err) {
    alert(err);
}
        
        //$scope.publishedDate = $scope.publishedFullDate.toDateString();
        $scope.content = $rootScope.content;
        $scope.urlLink = $rootScope.urlLink;
        $scope.image= $rootScope.image;
        $scope.noticeId=$rootScope.noticeId;
        $scope.socialLink = $rootScope.socialLink;
        $scope.postedByName = $rootScope.postedByName;
        $scope.postedById = $rootScope.postedById;
        $scope.postedByRoll = $rootScope.postedByRoll;
        $scope.hasUserLiked = $rootScope.hasUserLiked;
        $scope.likeCount = $rootScope.likeCount;
        //alert($scope.likeCount);
        $scope.commentCount = $rootScope.commentCount;
        $scope.commentData = $rootScope.commentData;

        if ($scope.images != undefined) {
        }
        if ($rootScope.mainCategory.toLowerCase() == "notices") {
        }
        



            var locationOrigin = "http://collegeboard-env2.elasticbeanstalk.com";

        $scope.checkItemPermission = function () {

            return $scope.myUserId == $scope.postedById;


        };


        $scope.setInfoState = function (state) {
            var confirmed = confirm("Are you sure you want to mark report item?");
            if (!confirmed) {
                return;
            }
            var fd = new FormData();
            var setInfoStateUrl = "";
            if ($scope.mainCategory.toLowerCase() == "notices") {
                fd.append('noticeId', $scope.noticeId);
                setInfoStateUrl = "/noticeInfo/changeNoticeState";

            }
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
                    navigator.notification.alert("This notice has been reported for review....",null,'Error','Ok');

                } else {

                    var errorMessage = response.message;
                    navigator.notification.alert("Sorry...Unable to report now.Please try later ..",null,'Error','Ok');
                }
            }).error(function (response) {
                navigator.notification.alert("Sorry,no internet connection available right now. Please try again later..",null,'Error','Ok');

            });


        };

        $scope.getTrustedResourceUrl = function (src) {

            return $sce.trustAsResourceUrl(src);
        };

        $scope.loadURL = function (link) {
            if (link.substring(0, 4).toLowerCase() != "http") {
                link = "http://" + link;
            }
            window.open(link, '_blank');
        };
        $scope.commentBoxFocusIn = function () {
            var boxheight =  $(window).height() - 40;
    $(".jumbotron").append("<div id='blank' style='height:"+boxheight+"px;'"+"></div>");
    $('.jumbotron').animate({scrollTop: $('#add-new-comment').offset().top - 100}, 500);
    //$('body').scrollTo('#commentBox'+($(window).height()/2));
        };
        $scope.commentBoxFocusOut = function () {
            $('#blank').remove();
        };

        $scope.submitComment = function (noticeId) {
            var comment = $scope.comment;
            if(comment=="" || comment==null ){
                navigator.notification.alert("Did you forget to type in Comment box? ",null,'Error','Ok');
                return;
            }
            var noticeId = noticeId;
            $scope.commentCount=$scope.commentCount+1;
            $scope.userAddedInstantaneousComment=comment;
            var profileData = JSON.parse($.jStorage.get('profileData'));
            $scope.userNameAddedInstantaneousComment = profileData["register_name"]; 
            $scope.comment="";
            var user_id = profileData["user_id"];
            var fd = new FormData();
            fd.append('userId', user_id);
            fd.append('commentText', comment);
            fd.append('noticeId', noticeId);
            
            var locationOrigin = "http://collegeboard-env2.elasticbeanstalk.com";
            $http.post(locationOrigin + "/comments/saveComment", fd, {
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
                $scope.comment=comment ;
                $scope.userAddedInstantaneousComment="";
            });


        };
        $scope.likeItem = function (noticeId) {
            var noticeId = noticeId;
            var profileData = JSON.parse($.jStorage.get('profileData'));
            var user_id = profileData["user_id"];

            var fd = new FormData();
            fd.append('userId', user_id);
            fd.append('noticeId', noticeId);
            
            var locationOrigin = "http://collegeboard-env2.elasticbeanstalk.com";
            $http.post(locationOrigin + "/likes/saveLike", fd, {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                }
            }).success(function (response) {
                //alert("here1");
                var isSuccess = response.success;
                if (isSuccess) {
                    //alert("liked");
                    
                } else {

                    
                }
            }).error(function (response) {
                //alert("here2");
                
            });

        };
        $scope.highlightCommentBox = function () {

            
            //$scope.commentBoxFocusIn();
            $('#commentBox').focus();           
        };

        if ($rootScope.commentIconClicked) {
            $rootScope.commentIconClicked=false;
            $scope.highlightCommentBox();            
        };


        


}