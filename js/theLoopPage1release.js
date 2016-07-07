function pageprocessortheLoop(pagedef, $scope, $routeParams, $compile, $http, $rootScope, $sce, $window, $location) {
    var data1 = $compile($(pagedef.datatemplate))($scope);$("#appContent").append(data1);

       $scope.msg = "Loading...";


        $scope.feeds = "";
        var user_id = "824";
        var fd = new FormData();
        fd.append('userId', user_id);
        var mainCategory = "Notices";
        var categoryId = "99999";
        $rootScope.generalCategoryId = categoryId;
        var categoryName = "generalWall";
        $rootScope.generalCategoryName = categoryName;
        
        var categoryDescription = "All notices";
        if( $rootScope.categoryId && $rootScope.categoryName ){
            var categoryIdToFetch = $rootScope.categoryId;
            var categoryNameToFetch = $rootScope.categoryName;
        }else{
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
            $.blockUI({
             message: '<div id="floatingBarsG"><div class="blockG" id="rotateG_01"></div><div class="blockG" id="rotateG_02"></div><div class="blockG" id="rotateG_03"></div><div class="blockG" id="rotateG_04"></div><div class="blockG" id="rotateG_05"></div><div class="blockG" id="rotateG_06"></div><div class="blockG" id="rotateG_07"></div><div class="blockG" id="rotateG_08"></div></div><div></div>'
                         });
        
 $scope.getCount = function (mainCategory){
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
                        $.jStorage.set("#notification" + mainCategory + "Count-" + value.categoryId,0);
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
$scope.getCount("Notices");


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
        if( $rootScope.categoryId && $rootScope.categoryName ){
            if($rootScope.pageNumberHistory=="4"){
            $rootScope.pageNumberHistory="1";
            
        }
            var profileData = JSON.parse($.jStorage.get('profileData'));
            var user_id = profileData["user_id"];
            if ($rootScope.categoryId!=categoryId)
            {getUrl = "http://collegeboard-env2.elasticbeanstalk.com/noticeInfo/getNotices?userId=" + user_id + "&categoriesToFetch=" + $rootScope.categoryId;
            }
        }else{
            $rootScope.categoryId = categoryId ;
             $rootScope.categoryName = categoryName;
        }
        $http({
            method: 'GET',
            url: getUrl,
            async: false
        }).
            success(function (response, status, headers, config) {


                //new
                $.unblockUI();
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
                            for (var i=0, iLen=value.likeInfoList.length; i<iLen; i++) {
                                //alert(value.likeInfoList[i].userId);
                             if (value.likeInfoList[i].userId == user_id){
                                //alert();
                                hasUserLiked=true;break;
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
                                "hasUserLiked" : hasUserLiked,
                                "likeCount" : value.likeInfoList.length,
                                "commentCount" : value.commentInfoList.length,
                                "commentData" : value.commentInfoList,
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
                    $.jStorage.set("feedEntriesData" + mainCategory + $rootScope.categoryId + $rootScope.categoryName, feedEntriesDataJson);
                    var array = $.map(feedEntriesData, function (value, index) {
                        return [value];
                    });

                    $scope.feeds = array;
                    feedEntriesData = array;
                    if (feedEntriesData.length==0) {
                        navigator.notification.alert("Sorry ,no new notices available in this category",null,'Oops','OK');
                    };
                    //console.log(array);
                    $scope.msg = "";
                    executeOnSucess(feedEntriesData);
                } else {
                    $.unblockUI();
                    $scope.title = categoryName;
                    $scope.description = categoryDescription;

                    if ($.jStorage.get("feedEntriesData" + mainCategory + categoryId + categoryName)) {

                        navigator.notification.alert("Sorry,no new notices available right now...",null,'Error','Ok');
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
                        navigator.notification.alert("Sorry,no new notices available right now...",null,'Error','Ok');
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
                }

            });

//pagination and clicking executeonsucess
        function executeOnSucess(feedEntriesData) {

            //alert(Object.keys(feedEntriesData).length);
            var page = 1;
            // Define the number of the feed results in the page
            var pageSize = 15;
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

}