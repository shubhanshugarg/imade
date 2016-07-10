var app = angular.module('newApp', []);

app.controller('FeedPluginMasterController', ["$scope", "$location", "$rootScope", "$http", function ($scope, $rootScope, $location, $http, FeedPluginData) {

    //var profileData = JSON.parse($.jStorage.get('profileData'));
    //var user_id = profileData["user_id"];
    if ($rootScope.userSignedUp) {
        $location.path("/app/FirstTimeUser/FirstTimeUser");
        return;
    } else {
        //$scope.showGuidedImage=false;
    }
//  var data1 = $compile($(pagedef.datatemplate))($scope);
    // $("#appContent").append(data1);


    $scope.hideGuidedImage = function () {
        $scope.showGuidedImage = false;
    }
    var data2 = '<div class="container-fluid" style="border-bottom:1px solid #bcbcbc;"><div class="row"><div class="col-xs-6 col-md-6" style="border-style: solid; border-width: 0px 1px 0px 0px; padding:8px 0px; border-color: #efefef;color:#232323;text-align:center;"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAe1BMVEUAAAAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMmeYkoAAAAKHRSTlMA9QmjqikN0tUtBPvw5EAR+OuIRdZsxsKfgzPJsSOOfVwV2th2TD4aT9xFzwAAAZ5JREFUSMfNltuOgyAURQEvrYDWS9Wxt2nnuv//C4cedDIJkePj7CdI9oKFxKgQukqsXEmjxJJ8GagW66lnQPfJmPSaxhVgJLNDnhD+QrME5kutZe6nQDmWQPKcW0gtojm4/q4Qxc7vUUOqaD9/9jM3yBzRCyEZgHyuNCxKXDQBjA/Kzk9GnB8ExNc3gCXiVCKN70D9fTEBdcefYfbZu/O2gK2yI/CiPcA9HyL8PUQA6h8LP341oP4MRH0oV+P6uQiB0IdS7Pz6SikCVp/PPMmWfiMbAhgf1/c+qkZNAOOzX86rXHkGeJ8YcPi7frYnnwBgfAKA8QkAxicAGJ8QYHxCgPEJgZhPDFArPqvADWgCnwig3wF7mn2OtH4cuBsAZRX4rAI3NKMjul8fBriWOB9aZ/U5+3BAB0zubbcwkvocoC8wD3cVA0A+LJAbDKq77Gr/5eCB3tlLuDTDh5vywBmUdKKb4AH1BtTH+0kLH36Hdmi/qb0VoPwHoH4CeiugJaxIYSq1MZ1BGvw6xGKAin5OtmdSTqxKrdwUm1Ra/ABr3UFzY2HLPQAAAABJRU5ErkJggg==" style="width:16px;opacity:1;margin-top:-2px;"><a ng-click="showPostPage()" style="margin-left:6px;margin-top:4px;color:#232323;opacity:1;font-size:12px;">Create Post</a></div><div class="col-xs-6 col-sm-6" style="padding:8px 0px;color:#232323;text-align:center;"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAQMAAABtzGvEAAAABlBMVEUAAAAjIyODokdlAAAAAXRSTlMAQObYZgAAACBJREFUGNNjwAf+M/wHAhh1mOEAAwMzVgpNJR4w3O0DAEU/Tg2sIyCsAAAAAElFTkSuQmCC" style="width:16px;opacity:1;margin-top:-2px;"><a ng-click="showLoopCategoriesPage()" style="margin-left:6px;margin-top:4px;color:#232323;opacity:1;font-size:12px;">Categories</a></div></div></div>';

//  var htmlView = $compile($(data2))($scope);
    // $("#fixedHeaderContent").html(htmlView);
    $scope.msg = "Loading...";


    $scope.feeds = "";
    var user_id = "1294";
    var fd = new FormData();
    fd.append('userId', user_id);
    var mainCategory = "Notices";
    var categoryId = "99999";
    $rootScope.generalCategoryId = categoryId;
    var categoryName = "generalWall";
    $rootScope.generalCategoryName = categoryName;
    //below line for circle scrolling
    $("#IOSCART").css({
        "top": $(".app-content .scrollable-content").scrollTop() + $(window).height() - 150 + "px"
    });
    $(".scrollable-content").scroll(function () {
        $("#IOSCART").stop().animate({
            "top": $(".app-content .scrollable-content").scrollTop() + $(window).height() - 150 + "px"
        }, 400);
    });
    //circle scrolling closed
    var categoryDescription = "All notices";
    if ($rootScope.categoryId && $rootScope.categoryName) {
        var categoryIdToFetch = $rootScope.categoryId;
        var categoryNameToFetch = $rootScope.categoryName;
    } else {
        var categoryIdToFetch = $rootScope.generalCategoryId;
        var categoryNameToFetch = $rootScope.generalCategoryName;
    }
    if ($.jStorage.get("feedEntriesData" + mainCategory + categoryIdToFetch + categoryNameToFetch)) {

        var feedEntriesData = JSON.parse($.jStorage.get("feedEntriesData" + mainCategory + categoryIdToFetch + categoryNameToFetch));
        feedEntriesData = $.map(feedEntriesData, function (value, index) {
            return [value];
        });
        $scope.feeds = feedEntriesData;
        executeOnSucess(feedEntriesData);

    }
    /*$.blockUI({
     message: '<div id="floatingBarsG"><div class="blockG" id="rotateG_01"></div><div class="blockG" id="rotateG_02"></div><div class="blockG" id="rotateG_03"></div><div class="blockG" id="rotateG_04"></div><div class="blockG" id="rotateG_05"></div><div class="blockG" id="rotateG_06"></div><div class="blockG" id="rotateG_07"></div><div class="blockG" id="rotateG_08"></div></div><div></div>'
     });*/


    $scope.showPostPage = function () {

        $location.path('/app/theLoop/theLoopPage3');

    };
    $scope.showLoopCategoriesPage = function () {
        //alert("here");
        $location.path('/app/theLoop/theLoopPage4');

    };
    $scope.likeItem = function (noticeId) {
        //alert("here");
        var noticeId = noticeId;
        var profileData = JSON.parse($.jStorage.get('profileData'));
        //var user_id=809;
        var user_id = profileData["user_id"];

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
    var getUrl = "http://collegeboard-env2.elasticbeanstalk.com/noticeInfo/fetchNoticesForUser?userId=" + user_id;
    if (mainCategory.toLowerCase() == "notices") {

        getUrl = "http://collegeboard-env2.elasticbeanstalk.com/noticeInfo/fetchNoticesForUser?userId=" + user_id;

    }
    if ($rootScope.categoryId && $rootScope.categoryName) {
        if ($rootScope.pageNumberHistory == "4") {
            $rootScope.pageNumberHistory = "1";

        }
        var profileData = {
            "register_email": "igdtuw@gmail.com",
            "user_id": 809,
            "contact_nos": "9999999999",
            "register_password": "collegeLoopIn@123",
            "register_name": "igdtuw loop",
            "register_college": "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
            "register_roll": "loopin",
            "interestedCategories": [{
                "categoryId": 1833,
                "categoryName": "Hostel",
                "categoryDescription": "Buzz going on in hostel",
                "collegeInfo": {
                    "collegeId": 120,
                    "collegeName": "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
                    "collegeAddress": "null",
                    "collegeImageId": null,
                    "location": "Delhi",
                    "noticeScreening": false,
                    "collegePassword": "default"
                },
                "mostRecentNoticeCount": null,
                "mostRecentNoticeDate": null
            }, {
                "categoryId": 1834,
                "categoryName": "Fest",
                "categoryDescription": "Cultural And Tech Fest Info",
                "collegeInfo": {
                    "collegeId": 120,
                    "collegeName": "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
                    "collegeAddress": "null",
                    "collegeImageId": null,
                    "location": "Delhi",
                    "noticeScreening": false,
                    "collegePassword": "default"
                },
                "mostRecentNoticeCount": null,
                "mostRecentNoticeDate": null
            }, {
                "categoryId": 1835,
                "categoryName": "Masters",
                "categoryDescription": "Latest info for Masters aspirants",
                "collegeInfo": {
                    "collegeId": 120,
                    "collegeName": "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
                    "collegeAddress": "null",
                    "collegeImageId": null,
                    "location": "Delhi",
                    "noticeScreening": false,
                    "collegePassword": "default"
                },
                "mostRecentNoticeCount": null,
                "mostRecentNoticeDate": null
            }, {
                "categoryId": 1836,
                "categoryName": "Fourth Year",
                "categoryDescription": "Fourth year community",
                "collegeInfo": {
                    "collegeId": 120,
                    "collegeName": "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
                    "collegeAddress": "null",
                    "collegeImageId": null,
                    "location": "Delhi",
                    "noticeScreening": false,
                    "collegePassword": "default"
                },
                "mostRecentNoticeCount": null,
                "mostRecentNoticeDate": null
            }, {
                "categoryId": 1837,
                "categoryName": "Internship",
                "categoryDescription": "Internship information in college",
                "collegeInfo": {
                    "collegeId": 120,
                    "collegeName": "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
                    "collegeAddress": "null",
                    "collegeImageId": null,
                    "location": "Delhi",
                    "noticeScreening": false,
                    "collegePassword": "default"
                },
                "mostRecentNoticeCount": null,
                "mostRecentNoticeDate": null
            }, {
                "categoryId": 1838,
                "categoryName": "MBA",
                "categoryDescription": "Latest info for CAT aspirants",
                "collegeInfo": {
                    "collegeId": 120,
                    "collegeName": "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
                    "collegeAddress": "null",
                    "collegeImageId": null,
                    "location": "Delhi",
                    "noticeScreening": false,
                    "collegePassword": "default"
                },
                "mostRecentNoticeCount": null,
                "mostRecentNoticeDate": null
            }, {
                "categoryId": 1839,
                "categoryName": "Alumni",
                "categoryDescription": "Information exchange with alumni network",
                "collegeInfo": {
                    "collegeId": 120,
                    "collegeName": "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
                    "collegeAddress": "null",
                    "collegeImageId": null,
                    "location": "Delhi",
                    "noticeScreening": false,
                    "collegePassword": "default"
                },
                "mostRecentNoticeCount": null,
                "mostRecentNoticeDate": null
            }, {
                "categoryId": 1840,
                "categoryName": "Third Year",
                "categoryDescription": "Third year community",
                "collegeInfo": {
                    "collegeId": 120,
                    "collegeName": "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
                    "collegeAddress": "null",
                    "collegeImageId": null,
                    "location": "Delhi",
                    "noticeScreening": false,
                    "collegePassword": "default"
                },
                "mostRecentNoticeCount": null,
                "mostRecentNoticeDate": null
            }, {
                "categoryId": 1841,
                "categoryName": "Placement",
                "categoryDescription": "Placement information in college",
                "collegeInfo": {
                    "collegeId": 120,
                    "collegeName": "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
                    "collegeAddress": "null",
                    "collegeImageId": null,
                    "location": "Delhi",
                    "noticeScreening": false,
                    "collegePassword": "default"
                },
                "mostRecentNoticeCount": null,
                "mostRecentNoticeDate": null
            }, {
                "categoryId": 1842,
                "categoryName": "First Year",
                "categoryDescription": "First year community",
                "collegeInfo": {
                    "collegeId": 120,
                    "collegeName": "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
                    "collegeAddress": "null",
                    "collegeImageId": null,
                    "location": "Delhi",
                    "noticeScreening": false,
                    "collegePassword": "default"
                },
                "mostRecentNoticeCount": null,
                "mostRecentNoticeDate": null
            }, {
                "categoryId": 1843,
                "categoryName": "Music",
                "categoryDescription": "Music updates in college",
                "collegeInfo": {
                    "collegeId": 120,
                    "collegeName": "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
                    "collegeAddress": "null",
                    "collegeImageId": null,
                    "location": "Delhi",
                    "noticeScreening": false,
                    "collegePassword": "default"
                },
                "mostRecentNoticeCount": null,
                "mostRecentNoticeDate": null
            }, {
                "categoryId": 1844,
                "categoryName": "Sharing Goods",
                "categoryDescription": "Share stuff with peers and juniors",
                "collegeInfo": {
                    "collegeId": 120,
                    "collegeName": "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
                    "collegeAddress": "null",
                    "collegeImageId": null,
                    "location": "Delhi",
                    "noticeScreening": false,
                    "collegePassword": "default"
                },
                "mostRecentNoticeCount": null,
                "mostRecentNoticeDate": null
            }, {
                "categoryId": 1845,
                "categoryName": "Second Year",
                "categoryDescription": "Second year community",
                "collegeInfo": {
                    "collegeId": 120,
                    "collegeName": "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
                    "collegeAddress": "null",
                    "collegeImageId": null,
                    "location": "Delhi",
                    "noticeScreening": false,
                    "collegePassword": "default"
                },
                "mostRecentNoticeCount": null,
                "mostRecentNoticeDate": null
            }, {
                "categoryId": 1846,
                "categoryName": "Sports",
                "categoryDescription": "Sports updates in college",
                "collegeInfo": {
                    "collegeId": 120,
                    "collegeName": "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
                    "collegeAddress": "null",
                    "collegeImageId": null,
                    "location": "Delhi",
                    "noticeScreening": false,
                    "collegePassword": "default"
                },
                "mostRecentNoticeCount": null,
                "mostRecentNoticeDate": null
            }, {
                "categoryId": 3242,
                "categoryName": "Others",
                "categoryDescription": "General Notices",
                "collegeInfo": {
                    "collegeId": 120,
                    "collegeName": "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
                    "collegeAddress": "null",
                    "collegeImageId": null,
                    "location": "Delhi",
                    "noticeScreening": false,
                    "collegePassword": "default"
                },
                "mostRecentNoticeCount": null,
                "mostRecentNoticeDate": null
            }, {
                "categoryId": 3243,
                "categoryName": "Deals",
                "categoryDescription": "Deals to check out",
                "collegeInfo": {
                    "collegeId": 120,
                    "collegeName": "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
                    "collegeAddress": "null",
                    "collegeImageId": null,
                    "location": "Delhi",
                    "noticeScreening": false,
                    "collegePassword": "default"
                },
                "mostRecentNoticeCount": null,
                "mostRecentNoticeDate": null
            }, {
                "categoryId": 3244,
                "categoryName": "Marketing",
                "categoryDescription": "Marketing notices",
                "collegeInfo": {
                    "collegeId": 120,
                    "collegeName": "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
                    "collegeAddress": "null",
                    "collegeImageId": null,
                    "location": "Delhi",
                    "noticeScreening": false,
                    "collegePassword": "default"
                },
                "mostRecentNoticeCount": null,
                "mostRecentNoticeDate": null
            }, {
                "categoryId": 3245,
                "categoryName": "Travel",
                "categoryDescription": "Travel related updates",
                "collegeInfo": {
                    "collegeId": 120,
                    "collegeName": "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
                    "collegeAddress": "null",
                    "collegeImageId": null,
                    "location": "Delhi",
                    "noticeScreening": false,
                    "collegePassword": "default"
                },
                "mostRecentNoticeCount": null,
                "mostRecentNoticeDate": null
            }, {
                "categoryId": 3246,
                "categoryName": "Competitions",
                "categoryDescription": "Competitions to participate in",
                "collegeInfo": {
                    "collegeId": 120,
                    "collegeName": "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
                    "collegeAddress": "null",
                    "collegeImageId": null,
                    "location": "Delhi",
                    "noticeScreening": false,
                    "collegePassword": "default"
                },
                "mostRecentNoticeCount": null,
                "mostRecentNoticeDate": null
            }, {
                "categoryId": 3247,
                "categoryName": "Events",
                "categoryDescription": "College events info",
                "collegeInfo": {
                    "collegeId": 120,
                    "collegeName": "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
                    "collegeAddress": "null",
                    "collegeImageId": null,
                    "location": "Delhi",
                    "noticeScreening": false,
                    "collegePassword": "default"
                },
                "mostRecentNoticeCount": null,
                "mostRecentNoticeDate": null
            }, {
                "categoryId": 3248,
                "categoryName": "Technology",
                "categoryDescription": "Technology related updates",
                "collegeInfo": {
                    "collegeId": 120,
                    "collegeName": "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
                    "collegeAddress": "null",
                    "collegeImageId": null,
                    "location": "Delhi",
                    "noticeScreening": false,
                    "collegePassword": "default"
                },
                "mostRecentNoticeCount": null,
                "mostRecentNoticeDate": null
            }, {
                "categoryId": 3249,
                "categoryName": "Entrepreneurship",
                "categoryDescription": "Entrepreneurship updates",
                "collegeInfo": {
                    "collegeId": 120,
                    "collegeName": "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
                    "collegeAddress": "null",
                    "collegeImageId": null,
                    "location": "Delhi",
                    "noticeScreening": false,
                    "collegePassword": "default"
                },
                "mostRecentNoticeCount": null,
                "mostRecentNoticeDate": null
            }, {
                "categoryId": 3250,
                "categoryName": "Food",
                "categoryDescription": "Food related updates",
                "collegeInfo": {
                    "collegeId": 120,
                    "collegeName": "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
                    "collegeAddress": "null",
                    "collegeImageId": null,
                    "location": "Delhi",
                    "noticeScreening": false,
                    "collegePassword": "default"
                },
                "mostRecentNoticeCount": null,
                "mostRecentNoticeDate": null
            }, {
                "categoryId": 4441,
                "categoryName": "Innerve",
                "categoryDescription": "Technical Fest",
                "collegeInfo": {
                    "collegeId": 120,
                    "collegeName": "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
                    "collegeAddress": "null",
                    "collegeImageId": null,
                    "location": "Delhi",
                    "noticeScreening": false,
                    "collegePassword": "default"
                },
                "mostRecentNoticeCount": null,
                "mostRecentNoticeDate": null
            }, {
                "categoryId": 4442,
                "categoryName": "Rotaract Club",
                "categoryDescription": "Rotaract Club of IGDTU",
                "collegeInfo": {
                    "collegeId": 120,
                    "collegeName": "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
                    "collegeAddress": "null",
                    "collegeImageId": null,
                    "location": "Delhi",
                    "noticeScreening": false,
                    "collegePassword": "default"
                },
                "mostRecentNoticeCount": null,
                "mostRecentNoticeDate": null
            }, {
                "categoryId": 4443,
                "categoryName": "Impulse",
                "categoryDescription": "Impulse, IGDTUW",
                "collegeInfo": {
                    "collegeId": 120,
                    "collegeName": "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
                    "collegeAddress": "null",
                    "collegeImageId": null,
                    "location": "Delhi",
                    "noticeScreening": false,
                    "collegePassword": "default"
                },
                "mostRecentNoticeCount": null,
                "mostRecentNoticeDate": null
            }, {
                "categoryId": 4444,
                "categoryName": "Enactus",
                "categoryDescription": "enactus igdtuw",
                "collegeInfo": {
                    "collegeId": 120,
                    "collegeName": "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
                    "collegeAddress": "null",
                    "collegeImageId": null,
                    "location": "Delhi",
                    "noticeScreening": false,
                    "collegePassword": "default"
                },
                "mostRecentNoticeCount": null,
                "mostRecentNoticeDate": null
            }, {
                "categoryId": 4445,
                "categoryName": "Google Students Club",
                "categoryDescription": "Google Students Club IGDTUW",
                "collegeInfo": {
                    "collegeId": 120,
                    "collegeName": "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
                    "collegeAddress": "null",
                    "collegeImageId": null,
                    "location": "Delhi",
                    "noticeScreening": false,
                    "collegePassword": "default"
                },
                "mostRecentNoticeCount": null,
                "mostRecentNoticeDate": null
            }, {
                "categoryId": 4446,
                "categoryName": "CSI",
                "categoryDescription": "CSI IGDTUW",
                "collegeInfo": {
                    "collegeId": 120,
                    "collegeName": "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
                    "collegeAddress": "null",
                    "collegeImageId": null,
                    "location": "Delhi",
                    "noticeScreening": false,
                    "collegePassword": "default"
                },
                "mostRecentNoticeCount": null,
                "mostRecentNoticeDate": null
            }, {
                "categoryId": 4447,
                "categoryName": "EDC",
                "categoryDescription": "entrepreneurship IGTUW",
                "collegeInfo": {
                    "collegeId": 120,
                    "collegeName": "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
                    "collegeAddress": "null",
                    "collegeImageId": null,
                    "location": "Delhi",
                    "noticeScreening": false,
                    "collegePassword": "default"
                },
                "mostRecentNoticeCount": null,
                "mostRecentNoticeDate": null
            }, {
                "categoryId": 4448,
                "categoryName": "Greenx",
                "categoryDescription": "Igdtuw Greenx",
                "collegeInfo": {
                    "collegeId": 120,
                    "collegeName": "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
                    "collegeAddress": "null",
                    "collegeImageId": null,
                    "location": "Delhi",
                    "noticeScreening": false,
                    "collegePassword": "default"
                },
                "mostRecentNoticeCount": null,
                "mostRecentNoticeDate": null
            }, {
                "categoryId": 4449,
                "categoryName": "IEEE",
                "categoryDescription": "IEEE Igtuw",
                "collegeInfo": {
                    "collegeId": 120,
                    "collegeName": "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
                    "collegeAddress": "null",
                    "collegeImageId": null,
                    "location": "Delhi",
                    "noticeScreening": false,
                    "collegePassword": "default"
                },
                "mostRecentNoticeCount": null,
                "mostRecentNoticeDate": null
            }, {
                "categoryId": 4450,
                "categoryName": "IGTUW",
                "categoryDescription": "Our college",
                "collegeInfo": {
                    "collegeId": 120,
                    "collegeName": "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
                    "collegeAddress": "null",
                    "collegeImageId": null,
                    "location": "Delhi",
                    "noticeScreening": false,
                    "collegePassword": "default"
                },
                "mostRecentNoticeCount": null,
                "mostRecentNoticeDate": null
            }],
            "userCollegeBranches": []
        };
        //var profileData = JSON.parse($.jStorage.get('profileData'));
        var user_id = profileData["user_id"];
        if ($rootScope.categoryId != categoryId) {
            getUrl = "http://collegeboard-env2.elasticbeanstalk.com/noticeInfo/getNotices?userId=" + user_id + "&categoriesToFetch=" + $rootScope.categoryId;
        }
    } else {
        $rootScope.categoryId = categoryId;
        $rootScope.categoryName = categoryName;
    }
    $http({
        method: 'GET',
        url: getUrl,
        async: false
    }).
        success(function (response, status, headers, config) {


            //new
            // $.unblockUI();
            var isSuccess = response.success;
            if (isSuccess) {
                //var register_name = response.data.userName;


                var responseData = response.data;
                var feed = {};
                var entries = {};
                var count = 0;
                var entryValueObj = {};

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


                $scope.title = categoryName;
                $scope.description = categoryDescription;
                $scope.feeds = feed.entries;
                var feedEntriesData = feed.entries;
                var feedEntriesDataJson = JSON.stringify(feedEntriesData);
                //$.jStorage.set("feedEntriesData" + mainCategory + $rootScope.categoryId + $rootScope.categoryName, feedEntriesDataJson);
                window.localStorage["feedEntriesData" + mainCategory + categoryId + categoryName] = feedEntriesDataJson;
                var array = $.map(feedEntriesData, function (value, index) {
                    return [value];
                });

                $scope.feeds = array;
                feedEntriesData = array;
                if (feedEntriesData.length == 0) {
                    navigator.notification.alert("Sorry ,no new notices available in this category", null, 'Oops', 'OK');
                }
                ;
                //console.log(array);
                $scope.msg = "";
                executeOnSucess(feedEntriesData);
            } else {
                $.unblockUI();
                $scope.title = categoryName;
                $scope.description = categoryDescription;

                if ($.jStorage.get("feedEntriesData" + mainCategory + categoryId + categoryName)) {

                    navigator.notification.alert("Sorry,no new notices available right now...", null, 'Error', 'Ok');
                    var feedEntriesData = JSON.parse($.jStorage.get("feedEntriesData" + mainCategory + categoryId + categoryName));
                    feedEntriesData = $.map(feedEntriesData, function (value, index) {
                        return [value];
                    });
                    $scope.feeds = feedEntriesData;
                    $scope.msg = "";
                    executeOnSucess(feedEntriesData);

                } else {
                    $.unblockUI();
                    var errorMessage = response.message;
                    //showAlertMessage("Sorry,no new notices available right now...");
                    navigator.notification.alert("Sorry,no new notices available right now...", null, 'Error', 'Ok');
                    $scope.msg = "";
                }
            }

        }).
        error(function (data, status, headers, config) {
            $.unblockUI();
            if ($.jStorage.get("feedEntriesData" + mainCategory + categoryId + categoryName)) {
                //var errorMessage=response.message;
                $scope.title = categoryName;
                $scope.description = categoryDescription;

                //showAlertMessage("No internet connection available.");
                navigator.notification.alert("No internet connection available.", null, 'Error', 'Ok');
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
        var pageSize = 8;
        $scope.paginationLimit = function () {
            return pageSize * page;
        };
        $scope.hasMoreItems = function () {
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
            $rootScope.content = selectedItem.content;
            $rootScope.image = selectedItem.images.url1;
            $rootScope.urlLink = selectedItem.urlLink;
            $rootScope.hasUserLiked = selectedItem.hasUserLiked;
            $rootScope.likeCount = selectedItem.likeCount;
            $rootScope.commentCount = selectedItem.commentCount;
            $rootScope.commentData = selectedItem.commentData;
            $rootScope.socialLink = selectedItem.socialLink;
            $rootScope.postedByName = selectedItem.postedByName;
            $rootScope.postedById = selectedItem.postedById;
            $rootScope.postedByRoll = selectedItem.postedByRoll;
            $rootScope.noticeId = selectedItem.id;
            $location.path('/app/theLoop/theLoopPage2');
        }


    }

    $scope.commentClickShowDetail = function (index) {
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
        $rootScope.commentIconClicked = true;
        $rootScope.content = selectedItem.content;
        $rootScope.image = selectedItem.images.url1;
        $rootScope.urlLink = selectedItem.urlLink;
        $rootScope.hasUserLiked = selectedItem.hasUserLiked;
        $rootScope.likeCount = selectedItem.likeCount;
        $rootScope.commentCount = selectedItem.commentCount;
        $rootScope.commentData = selectedItem.commentData;
        $rootScope.socialLink = selectedItem.socialLink;
        $rootScope.postedByName = selectedItem.postedByName;
        $rootScope.postedById = selectedItem.postedById;
        $rootScope.postedByRoll = selectedItem.postedByRoll;
        $rootScope.noticeId = selectedItem.id;
        $location.path('/app/theLoop/theLoopPage2');
    }
    $scope.commentsShowDetail = function (index) {
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
        $rootScope.commentsClicked = true;
        $rootScope.content = selectedItem.content;
        $rootScope.image = selectedItem.images.url1;
        $rootScope.urlLink = selectedItem.urlLink;
        $rootScope.hasUserLiked = selectedItem.hasUserLiked;
        $rootScope.likeCount = selectedItem.likeCount;
        $rootScope.commentCount = selectedItem.commentCount;
        $rootScope.commentData = selectedItem.commentData;
        $rootScope.socialLink = selectedItem.socialLink;
        $rootScope.postedByName = selectedItem.postedByName;
        $rootScope.postedById = selectedItem.postedById;
        $rootScope.postedByRoll = selectedItem.postedByRoll;
        $rootScope.noticeId = selectedItem.id;
        $location.path('/app/theLoop/theLoopPage2');
    }


    $scope.dateToHours = function (publishedDate) {

        var d = new Date(publishedDate);
        var today = new Date();
        var timeStart = d.getTime();
        var timeEnd = today.getTime();
        var hourDiff = timeEnd - timeStart; //in ms
        var secDiff = hourDiff / 1000; //in s
        var minDiff = Math.floor(hourDiff / 60 / 1000); //in minutes
        var hDiff = Math.floor(hourDiff / 3600 / 1000); //in hours
        var days = Math.floor(hourDiff / 3600 / 1000 / 24);
        if (days >= 30) {
            return "more than month ago";
        }
        if (days > 14) {
            return "2 weeks ago";
        }
        if (days > 7) {
            return "week ago";
        }
        if (days != 0) {
            return days + "d ago";
        }
        if (hDiff != 0) {
            return hDiff + "hrs ago";
        }
        if (minDiff != 0) {
            return minDiff + "min ago";
        }
        return "now";

    };

    $scope.getCount = function (mainCategory) {
        if ($.jStorage.get("profileData")) {
            var profileData = $.parseJSON($.jStorage.get("profileData"));
            var catIds = [];
            if (profileData != null) {
                $.each(profileData.interestedCategories, function (key, value) {
                    catIds.push(value.categoryId);
                });
                var catIdsString = catIds.join(",");

                var postedDates = [];

                $.each(profileData.interestedCategories, function (key, value) {
                    if ($.jStorage.get("feedEntriesData" + mainCategory + value.categoryId + value.categoryName)) {
                        var categoryFeed = JSON.parse($.jStorage.get("feedEntriesData" + mainCategory + value.categoryId + value.categoryName));
                        //alert(categoryFeed);
                        if (typeof categoryFeed[0] !== 'undefined' && typeof categoryFeed[0].publishedDate !== 'undefined') {
                            postedDates.push(categoryFeed[0].publishedDate);
                        } else {
                            postedDates.push(0000000000000);
                        }

                    } else {
                        postedDates.push(0000000000000);
                    }

                });

                var postedDatesString = postedDates.join(",");
                if (mainCategory == "Notices") {
                    getCountUrl = "http://collegeboard-env2.elasticbeanstalk.com/noticeInfo/getNoticesInfoForCategories?userId=" + profileData.user_id + "&categoriesToFetch=" + catIdsString + "&dates=" + postedDatesString;
                }
                $.get(getCountUrl, function (response) {
                    $.each(profileData.interestedCategories, function (key, value) {
                        //$.jStorage.get('feedEntriesData' + mainCategory + value.categoryId + value.categoryName)
                        $.jStorage.set("#notification" + mainCategory + "Count-" + value.categoryId, 0);
                        //window.localStorage['#notification' + mainCategory + 'Count-' + value.categoryId] = 0;
                    });


                    $.each(response, function (key, value) {
                        $('#notification' + mainCategory + 'Count-' + key).text(value);
                        if (value > 0) {
                            $('#notificationNew' + mainCategory).text("New " + mainCategory);
                        }
                        $.jStorage.set("#notification" + mainCategory + "Count-" + key, value.mostRecentNoticeCount);
                        $.jStorage.set("#notificationTimestamp" + mainCategory + "Date-" + key, value.mostRecentNoticeDate);

                    });


                }).fail(function () {

                });
            }
        }
        //alert("Hello");

    }
    //$scope.getCount("Notices");
    $scope.updateInterestedCategories = function () {

        //alert("clicked");


        var u = $.jStorage.get("email");
        var p = $.jStorage.get("password");
        $http({
            method: 'GET',
            url: "http://collegeboard-env2.elasticbeanstalk.com/userInfo/userSignIn?userEmail=" + u + "&userPassword=" + p,
            async: false
        }).
            success(function (response, status, headers, config) {

                //alert(JSON.stringify(response));

                var isSuccess = response.success;
                if (isSuccess) {
                    var register_name = response.data.userName;
                    var register_roll = response.data.rollNumber;
                    var register_yearGrad = response.data.yearGrad;
                    var register_branch = response.data.branch;
                    var register_company = response.data.company;
                    var user_id = response.data.userId;
                    var contact_nos = response.data.contactNumber;
                    var register_email = response.data.emailAddress;
                    var register_password = response.data.password;
                    var register_college = response.data.collegeName;
                    var interestedCategories = response.data.userCategories;
                    var userCollegeBranches = response.data.collegeBranches;
                    var register_status = response.data.status;
                    //var register_aboutMe = response.data.aboutMe;
                    var register_fbUrl = response.data.fbUrl;
                    var register_twitterUrl = response.data.twitterUrl;
                    var register_linkedinUrl = response.data.linkedinUrl;
                    var register_interests = response.data.interests;
                    var special_user = response.data.specialUser;
                } else {
                    var errorMessage = response.message;
                    navigator.notification.alert(errorMessage, null, 'Error', 'Ok');
                }
                if (isSuccess) {
                    //store profile data in local storage
                    $.jStorage.set("email", register_email);
                    $.jStorage.set("password", register_password);
                    //window.localStorage["email"] = register_email;
                    //window.localStorage["password"] = register_password;
                    var profileData = {
                        'register_email': register_email,
                        'user_id': user_id,
                        'contact_nos': contact_nos,
                        'register_yearGrad': register_yearGrad,
                        'register_branch': register_branch,
                        'register_company': register_company,
                        'register_password': register_password,
                        'register_name': register_name,
                        'register_college': register_college,
                        'register_roll': register_roll,
                        'interestedCategories': interestedCategories,
                        'userCollegeBranches': userCollegeBranches,
                        'register_status': register_status,
                        //'aboutMe': register_aboutMe,
                        'register_fbUrl': register_fbUrl,
                        'register_twitterUrl': register_twitterUrl,
                        'register_linkedinUrl': register_linkedinUrl,
                        'register_interests': register_interests,
                        'special_user': special_user
                    };
                    $.jStorage.set("profileData", JSON.stringify(profileData));


                }
            }).
            error(function (data, status, headers, config) {

            });


        //$("#submitButton").removeAttr("disabled");


        /*var selectedItem = $scope.categories[index];
         FeedPluginData.selectedItem = selectedItem;
         $scope.ons.navigator.pushPage('feed-category.html', {title : selectedItem.title});*/
    };
    //$scope.updateInterestedCategories();


    $scope.$on("$destroy", function () {
        $("#fixedHeaderContent").html("");
    });

}]);
