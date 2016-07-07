function pageprocessortheLoop(pagedef, $scope, $routeParams, $compile, $http, $rootScope, $sce, $window, $location) {
    var data1 = $compile($(pagedef.datatemplate))($scope);$("#appContent").append(data1);


        var data2 = '<div class="container-fluid"><div class="row"><div class="col-xs-6 col-md-6" style="border-style: solid; border-width: 0px 1px 0px 0px; padding: 10px; border-color: #efefef;-webkit-filter: grayscale(100%);filter: grayscale(100%);color:#000;"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAaVBMVEUAAAB5eXlnZ2d4eHh4eHhvb293d3d1dXV4eHh4eHhmZmZ4eHh5eXl2dnZ3d3d4eHh4eHh4eHh3d3d4eHh4eHh4eHh4eHh3d3d5eXl4eHh3d3d4eHh1dXV5eXl4eHh4eHh3d3d1dXV4eHjD6Mb9AAAAInRSTlMA9gnTog0sKKrWBKfxEUCH7edF48bCfjPJsY5qG25cQ3ZMGEkeywAAAZBJREFUSMfNlsmSgzAMRCUDIRjCmn0yW///R44iwqRSnkg5Tp/sqn7yA19MFNu85yfpAy0plkXo8Dx8A+J7vsvfo65bAOycUOSK57qrwW14mrlfA8NuAOrrvgdHMrNZA9mKVtl8Bl9Fjej8rJRFKcSbC2h/KnW5mnCKCjg+GEbS7HDcKGDPZ6BR4jBgbZ+g/Wq1F+hTjLxvUB/pE3VA05YVkEcT0P8j/ZmY9K9aQDHP14iV9hfAuK85JUu/oAWw7kuz3HIIQQHHh8ql33OvgOeT3XyClBfA97GAIpkfyALU5z5ffSygeOhXOj8BHJ8EcHwSwPFJAccnBRyfFLB8LCD84WMCZ2C4z1cfE4jSaQ4PPjbwAcnQPviYwBn9DpjGXx8HuEw4bs5i9b34OMAIdET7Bsza94B4Ai5yFVtAfVygALZhPGUMne8Db2LPkAzbL9n6wBGa9V5vwgdCBXD1cYik8QHqtt0laVuA5n8ADTi+CkRGQ2ugDS9mBOrk6WAFQJs8Tux0QcQ+64ZfSlO3kX4A8j05ST7Y6AAAAAAASUVORK5CYII=" style="width:20px;height:20px;"><a ng-click="showPostPage()" class="button">Create Post</a></div><div class="col-xs-6 col-sm-6" style="padding: 10px;-webkit-filter: grayscale(100%);filter: grayscale(100%);color:#000;"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAQMAAABtzGvEAAAABlBMVEUAAABwcHCOrNlVAAAAAXRSTlMAQObYZgAAACBJREFUGNNjwAf+M/wHAhh1mOEAAwMzVgpNJR4w3O0DAEU/Tg2sIyCsAAAAAElFTkSuQmCC" style="width:20px;height:20px; "><a ng-click="showLoopCategoriesPage()" class="button">Categories</a></div></div></div>';

  var htmlView = $compile($(data2))($scope);
  $("#fixedHeaderContent").html(htmlView);
       $scope.msg = "Loading...";


        $scope.feeds = "";
        var user_id = "809";
        var fd = new FormData();
        fd.append('userId', user_id);
        var mainCategory = "Notices";
        var categoryId = "99999";
        $rootScope.generalCategoryId = categoryId;
        var categoryName = "generalWall";
        $rootScope.generalCategoryName = categoryName;
        //below line for circle scrolling
        $("#IOSCART").css({"top": $(".app-content .scrollable-content").scrollTop() + $(window).height() - 150 + "px"});
        $(".scrollable-content").scroll(function () {
            $("#IOSCART").stop().animate({"top": $(".app-content .scrollable-content").scrollTop() + $(window).height() - 150 + "px"}, 400);
        });
        //circle scrolling closed 
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


        
        $scope.dateToHours = function (publishedDate) {
            
            var d = new Date(publishedDate);
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

}