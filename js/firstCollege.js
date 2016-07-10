var app = angular.module('newApp', ['infinite-scroll']);

app.controller('FeedPluginMasterController', ["$scope", "$location", "$rootScope", "$http", function ($scope, $rootScope, $location, $http, FeedPluginData) {

    $scope.msg = "Loading...";


    $scope.feeds = "";

    //push notification id sending to backend
    var user_id = "803";
    //var user_id = "5";
    var fd = new FormData();
    fd.append('userId', user_id);
    var mainCategory = "Notices";
    var categoryId = "99999";
    var categoryName = "NitDAll";
    var categoryDescription = "All notices";
    //which category is clicked
    //showing from local storage here as if internet as if net not there and internet chk take time
    //$.jStorage.set(key, value, options)
    //$.jStorage.get(key)
    $scope.showPostPage = function () {

        $location.path('/app/theLoop/theLoopPage3');

    };

    /*$scope.setLikedStyle = function (isLiked) {

     if (isLiked) {

     $scope.myStyle={'color' : 'red' };
     //alert($scope.myStyle);
     }else{

     $scope.myStyle={'color' : 'green' };
     };


     };*/

    $scope.likeItem = function (noticeId) {

        var noticeId = noticeId;
        //var profileData = {"register_email":"igdtuw@gmail.com","user_id":809,"contact_nos":"9999999999","register_password":"collegeLoopIn@123","register_name":"igdtuw loop","register_college":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","register_roll":"loopin","interestedCategories":[{"categoryId":1833,"categoryName":"Hostel","categoryDescription":"Buzz going on in hostel","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1834,"categoryName":"Fest","categoryDescription":"Cultural And Tech Fest Info","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1835,"categoryName":"Masters","categoryDescription":"Latest info for Masters aspirants","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1836,"categoryName":"Fourth Year","categoryDescription":"Fourth year community","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1837,"categoryName":"Internship","categoryDescription":"Internship information in college","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1838,"categoryName":"MBA","categoryDescription":"Latest info for CAT aspirants","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1839,"categoryName":"Alumni","categoryDescription":"Information exchange with alumni network","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1840,"categoryName":"Third Year","categoryDescription":"Third year community","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1841,"categoryName":"Placement","categoryDescription":"Placement information in college","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1842,"categoryName":"First Year","categoryDescription":"First year community","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1843,"categoryName":"Music","categoryDescription":"Music updates in college","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1844,"categoryName":"Sharing Goods","categoryDescription":"Share stuff with peers and juniors","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1845,"categoryName":"Second Year","categoryDescription":"Second year community","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1846,"categoryName":"Sports","categoryDescription":"Sports updates in college","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3242,"categoryName":"Others","categoryDescription":"General Notices","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3243,"categoryName":"Deals","categoryDescription":"Deals to check out","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3244,"categoryName":"Marketing","categoryDescription":"Marketing notices","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3245,"categoryName":"Travel","categoryDescription":"Travel related updates","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3246,"categoryName":"Competitions","categoryDescription":"Competitions to participate in","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3247,"categoryName":"Events","categoryDescription":"College events info","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3248,"categoryName":"Technology","categoryDescription":"Technology related updates","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3249,"categoryName":"Entrepreneurship","categoryDescription":"Entrepreneurship updates","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3250,"categoryName":"Food","categoryDescription":"Food related updates","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4441,"categoryName":"Innerve","categoryDescription":"Technical Fest","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4442,"categoryName":"Rotaract Club","categoryDescription":"Rotaract Club of IGDTU","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4443,"categoryName":"Impulse","categoryDescription":"Impulse, IGDTUW","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4444,"categoryName":"Enactus","categoryDescription":"enactus igdtuw","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4445,"categoryName":"Google Students Club","categoryDescription":"Google Students Club IGDTUW","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4446,"categoryName":"CSI","categoryDescription":"CSI IGDTUW","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4447,"categoryName":"EDC","categoryDescription":"entrepreneurship IGTUW","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4448,"categoryName":"Greenx","categoryDescription":"Igdtuw Greenx","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4449,"categoryName":"IEEE","categoryDescription":"IEEE Igtuw","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4450,"categoryName":"IGTUW","categoryDescription":"Our college","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null}],"userCollegeBranches":[]};
        //var profileData = JSON.parse($.jStorage.get('profileData'));
        var user_id = "5";
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
            var isSuccess = response.success;
            if (isSuccess) {


            } else {


            }
        }).error(function (response) {


        });

    };


    if ($.jStorage.get("feedEntriesData" + mainCategory + categoryId + categoryName)) {

        var feedEntriesData = JSON.parse($.jStorage.get("feedEntriesData" + mainCategory + categoryId + categoryName));
        //array formed for to limt to work
        //$scope.feeds=feedEntriesData;
        feedEntriesData = $.map(feedEntriesData, function (value, index) {
            return [value];
        });
        $scope.feeds = feedEntriesData;
        executeOnSucess(feedEntriesData);

    }

    //close showing from llocal storage
    //alert(user_id);
    /*       var getUrl = "http://collegeboard-env2.elasticbeanstalk.com/noticeInfo/getNotices?userId=" + user_id + "&categoriesToFetch=" + categoryId;
     if (mainCategory.toLowerCase() == "notices") {

     getUrl = "http://collegeboard-env2.elasticbeanstalk.com/noticeInfo/getNotices?userId=" + user_id + "&categoriesToFetch=" + categoryId;

     }*/
    var getUrl = "http://collegeboard-env2.elasticbeanstalk.com/noticeInfo/fetchNoticesForUser?userId=" + user_id;
    if (mainCategory.toLowerCase() == "notices") {

        getUrl = "http://collegeboard-env2.elasticbeanstalk.com/noticeInfo/fetchNoticesForUser?userId=" + user_id;

    }
    /*else if (mainCategory.toLowerCase() == "news") {
     getUrl = "http://collegeboard-env2.elasticbeanstalk.com/newsInfo/getNews?userId=" + user_id + "&categoriesToFetch=" + categoryId;
     }*/
    //noticeInfo/getNotices?userId=user_id&categoriesToFetch=categoryId
    //$http({method: 'GET', url: "http://localhost/noticeBoard/www/loginDummy2.php", async: false}).
    $http({
        method: 'GET',
        //url: "http://collegeboard-env2.elasticbeanstalk.com/noticeInfo/getNotices?userId=" + user_id + "&categoriesToFetch=" + categoryId,
        url: getUrl,
        async: false
    }).
        success(function (response, status, headers, config) {


            //new
            var isSuccess = response.success;
            if (isSuccess) {
                //var register_name = response.data.userName;


                var responseData = response.data;
                var feed = {};
                var entries = {};
                var count = 0;
                var entryValueObj = {};
                //var profileData = JSON.parse($.jStorage.get('profileData'));
                //var user_id = profileData["user_id"];
                var user_id = "5";
                //var profileData = $.parseJSON($.jStorage.get("profileData"));
                if (mainCategory.toLowerCase() == "notices") {

                    $.each(responseData, function (key, value) {

                        var hasUserLiked = false;
                        for (var i = 0, iLen = value.likeInfoList.length; i < iLen; i++) {
                            //alert(value.likeInfoList[i].userId);
                            if (value.likeInfoList[i].userId == user_id) {
                                //alert();
                                hasUserLiked = true;
                                break;
                            }

                        }

                        var publishedFullDate = new Date(value.creationDate);
                        var publishedDate = publishedFullDate.toDateString();
                        entryValueObj = {
                            "id": value.noticeId,
                            "title": value.noticeHeading,
                            "images": {
                                "url1": value.noticeImageId
                            },
                            "publishedDate": value.creationDate,
                            "content": value.noticeDescription,
                            "urlLink": value.noticeUrl,
                            "hasUserLiked": hasUserLiked,
                            "likeCount": value.likeInfoList.length,
                            "commentCount": value.commentInfoList.length,
                            "commentData": value.commentInfoList,
                            "socialLink": value.noticeFBUrl,
                            "postedById": value.userInfo.userId,
                            "postedByRoll": value.userInfo.rollNumber,
                            "postedByName": value.userInfo.userName,
                            "seenCount": value.seenCount,
                            //"contentSnippet": "Click to read"
                            "contentSnippet": publishedDate
                        };
                        entries[count++] = entryValueObj;


                    });
                }
                feed = {
                    "entries": entries
                };


                //var feedData = response.data;
                $scope.title = categoryName;
                $scope.description = categoryDescription;
                //$scope.link = feedData.feed.link;
                //$scope.feeds = feedData.feed.entries;
                $scope.feeds = feed.entries;
                var feedEntriesData = feed.entries;
                //console.log($scope.feeds);
                var feedEntriesDataJson = JSON.stringify(feedEntriesData);
                $.jStorage.set("feedEntriesData" + mainCategory + categoryId + categoryName, feedEntriesDataJson);
                //window.localStorage["feedEntriesData" + mainCategory + categoryId + categoryName] = feedEntriesDataJson;
                //td json formation and storing in memory, retrieving from memory and then showing
                //below is change from object to array for working of limito filter in feed-master angular

                //for showing feeds and using limito below has to be ser for array converion from json
                var array = $.map(feedEntriesData, function (value, index) {
                    return [value];
                });

                $scope.feeds = array;
                feedEntriesData = array;
                //console.log(array);
                $scope.msg = "";
                //feedEntriesData is not decoupled from the incomming data so also change in the feed master when data changes
                executeOnSucess(feedEntriesData);
            } else {
                //check if data in local storage show that
                $scope.title = categoryName;
                $scope.description = categoryDescription;

                if ($.jStorage.get("feedEntriesData" + mainCategory + categoryId + categoryName)) {

                    showAlertMessage("Sorry,no new notices available right now...");
                    var feedEntriesData = JSON.parse($.jStorage.get("feedEntriesData" + mainCategory + categoryId + categoryName));
                    //array formed for to limt to work
                    //scope.feeds allocate to the view
                    //$scope.feeds=feedEntriesData;
                    feedEntriesData = $.map(feedEntriesData, function (value, index) {
                        return [value];
                    });
                    $scope.feeds = feedEntriesData;
                    $scope.msg = "";
                    //var feedEntriesData=window.localStorage["feedEntriesData"+categoryId+categoryName];
                    executeOnSucess(feedEntriesData);

                } else {
                    var errorMessage = response.message;
                    showAlertMessage("Sorry,no new notices available right now...");
                    $scope.msg = "";
                }
            }

        }).
        error(function (data, status, headers, config) {
            if ($.jStorage.get("feedEntriesData" + mainCategory + categoryId + categoryName)) {
                //var errorMessage=response.message;
                $scope.title = categoryName;
                $scope.description = categoryDescription;

                showAlertMessage("No internet connection available.");
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
            }

        });

//pagination and clicking executeonsucess
    function executeOnSucess(feedEntriesData) {

        //alert(Object.keys(feedEntriesData).length);
        var page = 1;
        // Define the number of the feed results in the page
        var pageSize = 15;
        //console.log(feedData.responseData.feed.entries);
        //$scope.paginationLimit = function(data) {
        $scope.paginationLimit = function () {
            return pageSize * page;
        };
        $scope.hasMoreItems = function () {

            //return page < ($scope.feeds.length / pageSize);
            return page < (Object.keys(feedEntriesData).length / pageSize);
        };

        $scope.showMoreItems = function () {
            page = page + 1;
        };

        $scope.showDetail = function (index) {
            //    alert(index);
            var selectedItem = feedEntriesData[index];
            //$scope.item = $rootScope.selectedItem;
            //decoupling the selected item
            $rootScope.mainCategory = "notices";
            // alert(selectedItem.title);
            $rootScope.title = selectedItem.title;
            $rootScope.publishedFullDate = new Date(selectedItem.publishedDate);
            $rootScope.publishedDate = $rootScope.publishedFullDate.toDateString();
            //$scope.item.publishedDate = FeedPluginData.selectedItem.publishedDate;
            $rootScope.hasUserLiked = selectedItem.hasUserLiked;
            $rootScope.likeCount = selectedItem.likeCount;
            $rootScope.commentCount = selectedItem.commentCount;
            $rootScope.commentData = selectedItem.commentData;
            $rootScope.content = selectedItem.content;
            $rootScope.image = selectedItem.images.url1;
            $rootScope.urlLink = selectedItem.urlLink;
            $rootScope.socialLink = selectedItem.socialLink;
            $rootScope.postedByName = selectedItem.postedByName;
            $rootScope.postedById = selectedItem.postedById;
            $rootScope.postedByRoll = selectedItem.postedByRoll;
            $rootScope.noticeId = selectedItem.id;
            //alert($rootScope.noticeId);
            //$rootScope.myUserId = profileData["user_id"];
            //      $rootScope.selectedItem = selectedItem ;
            //alert($rootScope.selectedItem);
            $location.path('/app/theLoop/theLoopPage2');
            //var a =window.location.href;
            //use $location below
            //window.location.assign("http://localhost/noticeboard/firstApp/wwwimade/main2.html");
            //console.log(window.location.href);

            //$location.path('/newValue');
            //console.log($location.path());
            //FeedPluginData.selectedItem = selectedItem;
            //$scope.ons.navigator.pushPage('feed-detail.html', selectedItem);
        }


    }

}]);
