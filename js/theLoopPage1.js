function pageprocessortheLoop(pagedef, $scope, $routeParams, $compile, $http, $rootScope, $sce, $window, $location) {
    var data1 = $compile($(pagedef.datatemplate))($scope);$("#appContent").append(data1);

       $scope.msg = "Loading...";


        $scope.feeds = "";

        //push notification id sending to backend
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
        //which category is clicked
        //showing from local storage here as if internet as if net not there and internet chk take time
        //$.jStorage.set(key, value, options)
        //$.jStorage.get(key)
        if ($.jStorage.get("feedEntriesData" + mainCategory + categoryIdToFetch + categoryNameToFetch)) {
         
            var feedEntriesData = JSON.parse($.jStorage.get("feedEntriesData" + mainCategory + categoryIdToFetch + categoryNameToFetch));
            //array formed for to limt to work
            //$scope.feeds=feedEntriesData;
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
    //alert("here1");
        //if here to execute only when profile id set
       if ($.jStorage.get("profileData")) {
            var profileData = $.parseJSON($.jStorage.get("profileData"));
            var catIds = [];
            //alert("here2");
            if (profileData != null) {
                $.each(profileData.interestedCategories, function (key, value) {
                    catIds.push(value.categoryId);
                });
                var catIdsString = catIds.join(",");

                var postedDates = [];
                
                $.each(profileData.interestedCategories, function (key, value) {
                    //catIds.push(value.categoryId);
                    //alert('feedEntriesData' + mainCategory + value.categoryId + value.categoryName);
                    //alert($.jStorage.get("feedEntriesData" + mainCategory + value.categoryId + value.categoryName));
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
                    //            getCountUrl = "http://collegeboard-env2.elasticbeanstalk.com/noticeInfo/getNoticesCount?userId=" + profileData.user_id + "&categoriesToFetch=" + catIdsString + "&dates=" + postedDatesString;
                    getCountUrl = "http://collegeboard-env2.elasticbeanstalk.com/noticeInfo/getNoticesInfoForCategories?userId=" + profileData.user_id + "&categoriesToFetch=" + catIdsString + "&dates=" + postedDatesString;
                //alert(getCountUrl);
                }
                /*else if (mainCategory == "News") {
                 getCountUrl = "http://collegeboard-env2.elasticbeanstalk.com/newsInfo/getNewsCount?userId=" + profileData.user_id + "&categoriesToFetch=" + catIdsString + "&dates=" + postedDatesString;
                 }*/
                $.get(getCountUrl, function (response) {
                    //alert("not stored in local storage");
                    //alert("here4");
                    //notification display logic here take out from response and show in text
                    //make all zero here and again set (if not 0 then notification circle shown)
                    //reseting notifcation local storage
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
                        
                        //window.localStorage['#notification' + mainCategory + 'Count-' + key] = value.mostRecentNoticeCount;
                        //window.localStorage['#notificationTimestamp' + mainCategory + 'Date-' + key] = value.mostRecentNoticeDate;
                    
                    });


                }).fail(function () {

                    //alert("some probem with internet or server not able to fetch count in categories.");
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
        if( $rootScope.categoryId && $rootScope.categoryName ){
            //blockui as new category to load
            //alert($rootScope.categoryId + $rootScope.categoryName );
            //page history as blockUI only when new category to load and not when back from a detail page 
            if($rootScope.pageNumberHistory=="4"){
            $rootScope.pageNumberHistory="1";
            /*$.blockUI({
             message: '<div id="floatingBarsG"><div class="blockG" id="rotateG_01"></div><div class="blockG" id="rotateG_02"></div><div class="blockG" id="rotateG_03"></div><div class="blockG" id="rotateG_04"></div><div class="blockG" id="rotateG_05"></div><div class="blockG" id="rotateG_06"></div><div class="blockG" id="rotateG_07"></div><div class="blockG" id="rotateG_08"></div></div><div></div>'
                         });*/
            
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
        /*else if (mainCategory.toLowerCase() == "news") {
         getUrl = "http://collegeboard-env2.elasticbeanstalk.com/newsInfo/getNews?userId=" + user_id + "&categoriesToFetch=" + categoryId;
         }*/
        //noticeInfo/getNotices?userId=user_id&categoriesToFetch=categoryId
        //$http({method: 'GET', url: "http://localhost/noticeBoard/www/loginDummy2.php", async: false}).
        /*$.blockUI({
                                                                     message: '<div id="floatingBarsG"><div class="blockG" id="rotateG_01"></div><div class="blockG" id="rotateG_02"></div><div class="blockG" id="rotateG_03"></div><div class="blockG" id="rotateG_04"></div><div class="blockG" id="rotateG_05"></div><div class="blockG" id="rotateG_06"></div><div class="blockG" id="rotateG_07"></div><div class="blockG" id="rotateG_08"></div></div><div></div>'
                                                                     });*/
        $http({
            method: 'GET',
            //url: "http://collegeboard-env2.elasticbeanstalk.com/noticeInfo/getNotices?userId=" + user_id + "&categoriesToFetch=" + categoryId,
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
                    //alert("here5");
                    var feedEntriesDataJson = JSON.stringify(feedEntriesData);
                    //alert("feedEntriesData" + mainCategory + categoryId + categoryName);
                    $.jStorage.set("feedEntriesData" + mainCategory + $rootScope.categoryId + $rootScope.categoryName, feedEntriesDataJson);
                    /*alert("here7");
                    var toPrint=$.jStorage.get("feedEntriesData" + mainCategory + categoryId + categoryName);
                    alert("here8");
                    alert(toPrint+"here6");*/
                    
                    //var toPrint=$.jStorage.get('feedEntriesData' + mainCategory + value.categoryId + value.categoryName);
                    //alert(toPrint+"here6");
                    
                    //window.localStorage["feedEntriesData" + mainCategory + categoryId + categoryName] = feedEntriesDataJson;
                    //td json formation and storing in memory, retrieving from memory and then showing
                    //below is change from object to array for working of limito filter in feed-master angular

                    //for showing feeds and using limito below has to be ser for array converion from json
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
                    //feedEntriesData is not decoupled from the incomming data so also change in the feed master when data changes
                    executeOnSucess(feedEntriesData);
                } else {
                    //check if data in local storage show that
                    $.unblockUI();
                    $scope.title = categoryName;
                    $scope.description = categoryDescription;

                    if ($.jStorage.get("feedEntriesData" + mainCategory + categoryId + categoryName)) {

                        //showAlertMessage("Sorry,no new notices available right now...");
                        navigator.notification.alert("Sorry,no new notices available right now...",null,'Error','Ok');
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

}