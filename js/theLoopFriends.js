function pageprocessorFriends(pagedef, $scope, $routeParams, $compile, $http, $rootScope, $sce, $window, $location) {


            var profileData = JSON.parse($.jStorage.get('profileData'));
            var user_id = profileData["user_id"];
            $.blockUI({
             message: '<div id="floatingBarsG"><div class="blockG" id="rotateG_01"></div><div class="blockG" id="rotateG_02"></div><div class="blockG" id="rotateG_03"></div><div class="blockG" id="rotateG_04"></div><div class="blockG" id="rotateG_05"></div><div class="blockG" id="rotateG_06"></div><div class="blockG" id="rotateG_07"></div><div class="blockG" id="rotateG_08"></div></div><div></div>'
                         }); 

            
            var getConUrl = "http://collegeboard-env2.elasticbeanstalk.com/connections/getConnectionsForUser?userId=" + user_id ;

            $http({
            method: 'GET',
            url: getConUrl,
            async: false
        }).
            success(function (response, status, headers, config) {


                //new
                $.unblockUI();
				var responseData = response.data;
				
				                
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


}