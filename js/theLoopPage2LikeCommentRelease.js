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
        //alert($scope.noticeId);
        $scope.socialLink = $rootScope.socialLink;
        $scope.postedByName = $rootScope.postedByName;
        $scope.postedById = $rootScope.postedById;
        $scope.postedByRoll = $rootScope.postedByRoll;
        $scope.hasUserLiked = $rootScope.hasUserLiked;
        $scope.likeCount = $rootScope.likeCount;
        //alert($scope.likeCount);
        $scope.commentCount = $rootScope.commentCount;
        $scope.commentData = $rootScope.commentData;
        //alert($scope.commentData);
        
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
            //$scope.noticeId = $rootScope.id;
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
        $scope.submitComment = function (noticeId) {
            var comment = $scope.comment;
            if(comment=="" || comment==null ){
                navigator.notification.alert("Did you forget to type in Comment box? ",null,'Error','Ok');
                return;
            }
            var noticeId = noticeId;
            $scope.commentCount=$scope.commentCount+1;
            $scope.userAddedInstantaneousComment=comment;
            //var profileData = {"register_email":"igdtuw@gmail.com","user_id":809,"contact_nos":"9999999999","register_password":"collegeLoopIn@123","register_name":"igdtuw loop","register_college":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","register_roll":"loopin","interestedCategories":[{"categoryId":1833,"categoryName":"Hostel","categoryDescription":"Buzz going on in hostel","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1834,"categoryName":"Fest","categoryDescription":"Cultural And Tech Fest Info","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1835,"categoryName":"Masters","categoryDescription":"Latest info for Masters aspirants","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1836,"categoryName":"Fourth Year","categoryDescription":"Fourth year community","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1837,"categoryName":"Internship","categoryDescription":"Internship information in college","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1838,"categoryName":"MBA","categoryDescription":"Latest info for CAT aspirants","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1839,"categoryName":"Alumni","categoryDescription":"Information exchange with alumni network","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1840,"categoryName":"Third Year","categoryDescription":"Third year community","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1841,"categoryName":"Placement","categoryDescription":"Placement information in college","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1842,"categoryName":"First Year","categoryDescription":"First year community","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1843,"categoryName":"Music","categoryDescription":"Music updates in college","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1844,"categoryName":"Sharing Goods","categoryDescription":"Share stuff with peers and juniors","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1845,"categoryName":"Second Year","categoryDescription":"Second year community","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1846,"categoryName":"Sports","categoryDescription":"Sports updates in college","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3242,"categoryName":"Others","categoryDescription":"General Notices","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3243,"categoryName":"Deals","categoryDescription":"Deals to check out","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3244,"categoryName":"Marketing","categoryDescription":"Marketing notices","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3245,"categoryName":"Travel","categoryDescription":"Travel related updates","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3246,"categoryName":"Competitions","categoryDescription":"Competitions to participate in","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3247,"categoryName":"Events","categoryDescription":"College events info","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3248,"categoryName":"Technology","categoryDescription":"Technology related updates","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3249,"categoryName":"Entrepreneurship","categoryDescription":"Entrepreneurship updates","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3250,"categoryName":"Food","categoryDescription":"Food related updates","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4441,"categoryName":"Innerve","categoryDescription":"Technical Fest","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4442,"categoryName":"Rotaract Club","categoryDescription":"Rotaract Club of IGDTU","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4443,"categoryName":"Impulse","categoryDescription":"Impulse, IGDTUW","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4444,"categoryName":"Enactus","categoryDescription":"enactus igdtuw","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4445,"categoryName":"Google Students Club","categoryDescription":"Google Students Club IGDTUW","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4446,"categoryName":"CSI","categoryDescription":"CSI IGDTUW","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4447,"categoryName":"EDC","categoryDescription":"entrepreneurship IGTUW","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4448,"categoryName":"Greenx","categoryDescription":"Igdtuw Greenx","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4449,"categoryName":"IEEE","categoryDescription":"IEEE Igtuw","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4450,"categoryName":"IGTUW","categoryDescription":"Our college","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null}],"userCollegeBranches":[]};
            var profileData = JSON.parse($.jStorage.get('profileData'));
            $scope.userNameAddedInstantaneousComment = profileData["register_name"]; 
            $scope.comment="";
            //var user_id=809;
            //$scope.userAddedInstantaneousCommentDiv=$scope.userAddedInstantaneousCommentDiv+"<div>"+$scope.userNameAddedInstantaneousComment+comment+"</div>";

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

                    //navigator.notification.alert("Sorry. Unable to post comment currently.",null,'Error','Ok');
                    //$scope.userAddedInstantaneousComment="";
                    //alert(errorMessage);
                }
            }).error(function (response) {

                navigator.notification.alert("Sorry,no internet connection available right now. Please try again later..",null,'Error','Ok');
                $scope.comment=comment ;
                $scope.userAddedInstantaneousComment="";
            });


        };
        $scope.likeItem = function (noticeId) {
            //alert("here");
            var noticeId = noticeId;
            //var profileData = {"register_email":"igdtuw@gmail.com","user_id":809,"contact_nos":"9999999999","register_password":"collegeLoopIn@123","register_name":"igdtuw loop","register_college":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","register_roll":"loopin","interestedCategories":[{"categoryId":1833,"categoryName":"Hostel","categoryDescription":"Buzz going on in hostel","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1834,"categoryName":"Fest","categoryDescription":"Cultural And Tech Fest Info","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1835,"categoryName":"Masters","categoryDescription":"Latest info for Masters aspirants","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1836,"categoryName":"Fourth Year","categoryDescription":"Fourth year community","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1837,"categoryName":"Internship","categoryDescription":"Internship information in college","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1838,"categoryName":"MBA","categoryDescription":"Latest info for CAT aspirants","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1839,"categoryName":"Alumni","categoryDescription":"Information exchange with alumni network","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1840,"categoryName":"Third Year","categoryDescription":"Third year community","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1841,"categoryName":"Placement","categoryDescription":"Placement information in college","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1842,"categoryName":"First Year","categoryDescription":"First year community","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1843,"categoryName":"Music","categoryDescription":"Music updates in college","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1844,"categoryName":"Sharing Goods","categoryDescription":"Share stuff with peers and juniors","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1845,"categoryName":"Second Year","categoryDescription":"Second year community","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1846,"categoryName":"Sports","categoryDescription":"Sports updates in college","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3242,"categoryName":"Others","categoryDescription":"General Notices","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3243,"categoryName":"Deals","categoryDescription":"Deals to check out","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3244,"categoryName":"Marketing","categoryDescription":"Marketing notices","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3245,"categoryName":"Travel","categoryDescription":"Travel related updates","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3246,"categoryName":"Competitions","categoryDescription":"Competitions to participate in","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3247,"categoryName":"Events","categoryDescription":"College events info","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3248,"categoryName":"Technology","categoryDescription":"Technology related updates","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3249,"categoryName":"Entrepreneurship","categoryDescription":"Entrepreneurship updates","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3250,"categoryName":"Food","categoryDescription":"Food related updates","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4441,"categoryName":"Innerve","categoryDescription":"Technical Fest","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4442,"categoryName":"Rotaract Club","categoryDescription":"Rotaract Club of IGDTU","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4443,"categoryName":"Impulse","categoryDescription":"Impulse, IGDTUW","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4444,"categoryName":"Enactus","categoryDescription":"enactus igdtuw","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4445,"categoryName":"Google Students Club","categoryDescription":"Google Students Club IGDTUW","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4446,"categoryName":"CSI","categoryDescription":"CSI IGDTUW","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4447,"categoryName":"EDC","categoryDescription":"entrepreneurship IGTUW","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4448,"categoryName":"Greenx","categoryDescription":"Igdtuw Greenx","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4449,"categoryName":"IEEE","categoryDescription":"IEEE Igtuw","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4450,"categoryName":"IGTUW","categoryDescription":"Our college","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null}],"userCollegeBranches":[]};
            var profileData = JSON.parse($.jStorage.get('profileData'));
            //var user_id=809;
            var user_id = profileData["user_id"];
            //alert(user_id);
            //alert(noticeId);
            //var user_id = profileData["user_id"];
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

            $('#commentBox').focus();

        };


}