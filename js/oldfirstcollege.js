var app = angular.module('newApp', []);

app.controller('FeedPluginMasterController', ["$scope", "$http", function ($scope, $http, FeedPluginData) {

         $scope.msg = "Loading...";


        $scope.feeds = "";

        //push notification id sending to backend
        var user_id = "1";
        var fd = new FormData();
        fd.append('userId', user_id);
        var mainCategory = "Notices";
        var categoryId = "8";
        var categoryName = "Internship";
        var categoryDescription = "Internship information in NSIT";
        //which category is clicked
        //showing from local storage here as if internet as if net not there and internet chk take time
        //$.jStorage.set(key, value, options)
        //$.jStorage.get(key)
        if ($.jStorage.get("feedEntriesData" + mainCategory + categoryId + categoryName)) {
            try{alert("a");
            var feedEntriesData = JSON.parse($.jStorage.get("feedEntriesData" + mainCategory + categoryId + categoryName));
            //array formed for to limt to work
            //$scope.feeds=feedEntriesData;
            feedEntriesData = $.map(feedEntriesData, function (value, index) {
                return [value];
            });
            $scope.feeds = feedEntriesData;
            executeOnSucess(feedEntriesData);
        }catch(e){alert(e)}
        }

        //close showing from llocal storage
        //alert(user_id);
        var getUrl = "http://collegeboard-env2.elasticbeanstalk.com/noticeInfo/getNotices?userId=" + user_id + "&categoriesToFetch=" + categoryId;
        if (mainCategory.toLowerCase() == "notices") {

            getUrl = "http://collegeboard-env2.elasticbeanstalk.com/noticeInfo/getNotices?userId=" + user_id + "&categoriesToFetch=" + categoryId;

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

                alert(JSON.stringify(response));
                //new
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
                alert("err="+JSON.stringify(data));
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
                var selectedItem = feedEntriesData[index];
                FeedPluginData.selectedItem = selectedItem;
                $scope.ons.navigator.pushPage('feed-detail.html', selectedItem);
            }


        }

    }]);