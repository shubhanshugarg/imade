page 1 html
<style>
    @import url(http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,700italic,300,400,700);

    .openSans {
        font-family: 'Open Sans', sans-serif;
    }
    h3{
        font-size: 1em;
        padding: 0;
        margin: 5px 0 0 0;
        color: #434343;
    }
    span{
        font-size: 0.75em;
        color: #aeaeae;
    }
    h5{
        font-size: 1.3em;
        margin: 0.5em 0 0 0;
        font-weight: 400;
    }



</style>

<div  style="color: white;
    background: #0099e6;
    font-size: 2.5em;
    position: fixed;
    border-radius: 0.5em;
    bottom: 0.8em;
    right: 0.25em;
    padding: 0.5em;
    z-index: 5;" ng-click="showPostPage()" ><i class="fa fa-pencil"></i>
</div>
<div >
<div  ng-repeat="feed in feeds | limitTo: paginationLimit()" ng-click="showDetail($index)" style="margin: 10px 10px 10px 10px;box-shadow: 0px 0px 4px #969696;">
    <div style="background: white;padding: 10px 10px 0px 20px" >
        <h3>{{feed.postedByName}}</h3>
        <span style="margin-right: 20px">Posted {{feed.contentSnippet}} </span><span><img  style="vertical-align: sub;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTE1MjZBNDlFMDkyMTFFNTgwODVERDFGQjM1NjE2NkEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTE1MjZBNEFFMDkyMTFFNTgwODVERDFGQjM1NjE2NkEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MTUyNkE0N0UwOTIxMUU1ODA4NUREMUZCMzU2MTY2QSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1MTUyNkE0OEUwOTIxMUU1ODA4NUREMUZCMzU2MTY2QSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuhdFFkAAAEgSURBVHja1NM/SEJRFMdxn1hLQw1iEEJSUJNCNfZnkaZocIoIXGqJwCGJrDHao2gQGnMRoQcWBC4Nlbo2CAZRGA7RVEMtDa/vld+Dh9LkEB74LO+ee+65h/ssx3F83YTf12X8f4GAbdvt32awijjGYeEFN8ij/FcHIZyhgjSCyMoAUrhHDuH2AlO4xQb6dNokMthBDJfKXcMdZt0C07jGhBJ+sIkonrX+hW18K2cUV1gwBQ4x7LnKBx6xrsQi9vGEN0/eEI5MgQNtcmMQYzjHp2ZT10y8B5lu9kyBKpbR1EI/TjTtCEZwgVMN08Q7Eii5QzRDmdOpZgZLqGFLV3nAinILmDebW+/A01IDSRzrHSxiV2uv6qrjHVi9/zP9CjAATJc+BTj1u7gAAAAASUVORK5CYII="/>&nbsp;Views:&nbsp;</span><span style="font-size: 0.75em;color: #434343">{{feed.seenCount }}</span>
        <h5>{{feed.title}}</h5>

    </div>
    <div  style="background: white;padding: 5px">
        <img style="width:100%;height:180px;" ng-src="http://collegeboard-env2.elasticbeanstalk.com/archive/document/{{feed.images.url1}}" onerror="this.onerror=null;this.style.display='none';"/>


    </div>
</div>
    <a class="btn btn-primary btn-block" style="width: 80%;margin: auto" ng-show="hasMoreItems()" ng-click="showMoreItems()">Show more</a>
</div>



page 1

function pageprocessortheLoop(pagedef, $scope, $routeParams, $compile, $http, $rootScope, $sce, $window, $location) {var data1 = $compile($(pagedef.datatemplate))($scope);$("#appContent").append(data1);

       $scope.msg = "Loading...";


        $scope.feeds = "";

        //push notification id sending to backend
        var user_id = "809";
        var fd = new FormData();
        fd.append('userId', user_id);
        var mainCategory = "Notices";
        var categoryId = "99999";
        var categoryName = "IGDTUW";
        var categoryDescription = "All notices";
        //which category is clicked
        //showing from local storage here as if internet as if net not there and internet chk take time
        //$.jStorage.set(key, value, options)
        //$.jStorage.get(key)
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
        $scope.showPostPage = function () {

            $location.path('/app/theLoop/theLoopPage3');

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
                        var errorMessage = response.message;
                        //showAlertMessage("Sorry,no new notices available right now...");
                        navigator.notification.alert("Sorry,no new notices available right now...",null,'Error','Ok');
                        $scope.msg = "";
                    }
                }

            }).
            error(function (data, status, headers, config) {
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





page2 html


<style>
    @import url(http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,700italic,300,400,700);

    .jumbotron {
        font-family: 'Open Sans', arial;
        padding: 0;
        background-color: white;
    }

    .dummyImage {
        width: 100%;
        min-height: 200px;
        /*overflow: hidden;*/
        /*position: absolute;*/
        max-height: 200px;
        top: 0;
        /*z-index: 0;*/
        margin-left: 0px;
    }

    .jumbotron h4.page-header {
        /*  background: rgba(255, 255, 255, 0) linear-gradient(45deg, white 92%, transparent 45%) repeat scroll 0 0;
          background: rgba(255, 255, 255, 0)  -webkit-linear-gradient(45deg, white 92%, transparent 45%) repeat scroll 0 0;
          background: rgba(255, 255, 255, 0)  linear-gradient(45deg, white 92%, transparent 45%) repeat scroll 0 0;
        */
        /*margin-top: 56%;*/
        padding: 11px 20px 0;
        /*position: relative;*/
        /*z-index: 2;*/
        font-size: 24px;
        line-height: 28px;
        font-weight: normal;
        border: 0;

    }

    /*.jumbotron h4.page-header img {
        z-index: -1;
        left: 0;
        top: 0;
        position: absolute;
        width: 100%;
    }*/

    .scrollable-content {
        background: white !important;
    }

    .jumbotron .small {
        padding: 0 20px;
        font-size: 15px;
    }

    .jumbotron .small a {
        display: block;
        overflow: hidden;
    }

    .jumbotron .small a img {
        width: 100%;
        height: auto;
        overflow: hidden;
        position: absolute;
        top: 0;
        z-index: 0;
        margin-left: 0px;
        display: none;
    }



</style>

<div >
    

<div class="jumbotron" style="min-height: 100%;padding-bottom:10px;">
    
    <!-- <img class="dummyImage" ng-src={{mediaImage(feed)}}> -->

    <img class="dummyImage" ng-show="image != null" ng-src="http://collegeboard-env2.elasticbeanstalk.com/archive/document/{{image}}" onerror="this.onerror=null;this.style.display='none';"/>
    <h4 class="page-header">{{title}}
    </h4>
    <p class="small">Published on : {{publishedDate}}</p>
    <p class="small" align="justify">{{content}}</p>

    
    <a class="btn btn-primary btn-block" style="width: 30%;display: inline-block;margin-left:10px;" ng-show="urlLink != 'undefined' && urlLink != '' && urlLink != null" ng-click="loadURL(urlLink)" style="">Website</a>

    <a class="btn btn-primary btn-block" style="width: 30%;display: inline-block;margin:auto;margin-left:10px;" ng-show="socialLink != 'undefined' && socialLink != '' && socialLink != null" ng-click="loadURL(socialLink)">Social media</a>



</div>



page 2 js

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




page 3 html


<style>
    @import url(http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,700italic,300,400,700);

    .openSans {
        font-family: 'Open Sans', sans-serif;
    }
    h3{
        font-size: 1em;
        padding: 0;
        margin: 5px 0 0 0;
        font-weight: 300;
        color: #434343;
    }
    span{
        font-size: 0.75em;
        color: #aeaeae;
    }
    h5{
        font-size: 1.3em;
        margin: 0.5em 0 0 0;
        font-weight: 400;
    }
.image-upload > input
{
    display: none;
}
.app-body
{
    background-color: #ffffff;
}
</style>
<div  >
    <select ng-model="isSelected" class="form-control" style="background:white;color:#AFACAC;">
                <option value="">Select category *</option>
                <option ng-repeat="category in allCategories" value="{{category.categoryId}}">
                    {{category.categoryName}}
                </option>
            </select>
<input type="text" class="text-input" placeholder="Subject *" ng-model="subject"
               style="width:100%; height:2.5em;padding-left: 1em;border-style: none;border-radius:0px;border-top:1px solid #D4C8C8;background:white;">

        <textarea class="textarea" rows="15" placeholder="Description" ng-model="message"
                  style="width:100%; margin-bottom:10px;padding-left: 1em;border-style: none;border-radius:0px;border-top:1px solid #D4C8C8;"></textarea>
        
               <p id="enteredLink"></p>
               <p id="enteredSocialLink"></p>
               <img id="uploadPreview" src=""/>
               <div style="background:white;width:100%;position:absolute;bottom:0.75em;padding:0.1em">
<span style="font-size: 2em;margin-left:0.5em;color:grey;padding:0.1em" ng-click="enterLink()"><i class="fa fa-link"></i>
</span>
<span  style="font-size: 2em;margin-left:0.5em;color:grey;padding:0.1em" ng-click="enterSocialLink()" ><i class="fa fa-facebook"></i></span>

<div class="image-upload" style="display: inline-block;margin-left:1.5em;">
    <label for="uploadImage">
        <span style="font-size: 2em;color:grey;"><i class="fa fa-camera"></i></span>

    </label>

    <input id="uploadImage" type="file" onchange="angular.element(this).scope().loadImageFile()" />
</div>
<button class="btn btn-primary btn-block" style="width: 30%;display: inline-block;float:right;margin-right:1em;" ng-click="submitForm()" ng-attr-disabled="{{disableButton}}">
            {{postNoticeButtonText}}
</button>
</div>
</div>



page3 js



function pageprocessortheLoopPage3(pagedef, $scope, $routeParams, $compile, $http, $rootScope, $sce, $window, $location) {var data1 = $compile($(pagedef.datatemplate))($scope);$("#appContent").append(data1);



$scope.enterLink = function () {
        var link = prompt("Enter Link below: ", "");
    
        if (link != null) {
            document.getElementById("enteredLink").innerHTML = link ;
            $rootScope.enteredLink = link;
        }



        };
$scope.enterSocialLink = function () {
        var link = prompt("Enter Social Network Link below: ", "");
    
        if (link != null) {
            document.getElementById("enteredSocialLink").innerHTML = link ;
            $rootScope.enteredSocialLink = link;
        }



        };
        //var profileData = {"register_email":"igdtuw@gmail.com","user_id":809,"contact_nos":"9999999999","register_password":"collegeLoopIn@123","register_name":"igdtuw loop","register_college":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","register_roll":"loopin","interestedCategories":[{"categoryId":1833,"categoryName":"Hostel","categoryDescription":"Buzz going on in hostel","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1834,"categoryName":"Fest","categoryDescription":"Cultural And Tech Fest Info","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1835,"categoryName":"Masters","categoryDescription":"Latest info for Masters aspirants","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1836,"categoryName":"Fourth Year","categoryDescription":"Fourth year community","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1837,"categoryName":"Internship","categoryDescription":"Internship information in college","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1838,"categoryName":"MBA","categoryDescription":"Latest info for CAT aspirants","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1839,"categoryName":"Alumni","categoryDescription":"Information exchange with alumni network","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1840,"categoryName":"Third Year","categoryDescription":"Third year community","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1841,"categoryName":"Placement","categoryDescription":"Placement information in college","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1842,"categoryName":"First Year","categoryDescription":"First year community","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1843,"categoryName":"Music","categoryDescription":"Music updates in college","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1844,"categoryName":"Sharing Goods","categoryDescription":"Share stuff with peers and juniors","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1845,"categoryName":"Second Year","categoryDescription":"Second year community","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1846,"categoryName":"Sports","categoryDescription":"Sports updates in college","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3242,"categoryName":"Others","categoryDescription":"General Notices","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3243,"categoryName":"Deals","categoryDescription":"Deals to check out","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3244,"categoryName":"Marketing","categoryDescription":"Marketing notices","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3245,"categoryName":"Travel","categoryDescription":"Travel related updates","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3246,"categoryName":"Competitions","categoryDescription":"Competitions to participate in","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3247,"categoryName":"Events","categoryDescription":"College events info","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3248,"categoryName":"Technology","categoryDescription":"Technology related updates","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3249,"categoryName":"Entrepreneurship","categoryDescription":"Entrepreneurship updates","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3250,"categoryName":"Food","categoryDescription":"Food related updates","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4441,"categoryName":"Innerve","categoryDescription":"Technical Fest","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4442,"categoryName":"Rotaract Club","categoryDescription":"Rotaract Club of IGDTU","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4443,"categoryName":"Impulse","categoryDescription":"Impulse, IGDTUW","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4444,"categoryName":"Enactus","categoryDescription":"enactus igdtuw","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4445,"categoryName":"Google Students Club","categoryDescription":"Google Students Club IGDTUW","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4446,"categoryName":"CSI","categoryDescription":"CSI IGDTUW","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4447,"categoryName":"EDC","categoryDescription":"entrepreneurship IGTUW","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4448,"categoryName":"Greenx","categoryDescription":"Igdtuw Greenx","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4449,"categoryName":"IEEE","categoryDescription":"IEEE Igtuw","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4450,"categoryName":"IGTUW","categoryDescription":"Our college","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null}],"userCollegeBranches":[]};
        var profileData = JSON.parse($.jStorage.get('profileData'));
        //$.jStorage.get('profileData')
        //$.jStorage.get("feedEntriesData" + mainCategory + categoryId + categoryName)
        var interestedCategories = profileData.interestedCategories;

        if (!profileData.special_user) {

            var commonCategories = ["Internship", "Placement", "Fest", "Sharing Goods", "MBA", "Masters", "First Year",
                "Second Year", "Third Year", "Fourth Year", "Hostel", "Alumni", "Music", "Sports", "Food", "Travel", "Events",
                "Technology", "Marketing", "Competitions", "Entrepreneurship", "Deals", "Others"];

            interestedCategories = interestedCategories.filter(function (el) {
                return commonCategories.indexOf(el.categoryName) > -1;
            });
        }

        var deviceType = (navigator.userAgent.match(/iPad/i)) == "iPad" ? "iPad" :
            (navigator.userAgent.match(/iPhone/i)) == "iPhone" ? "iPhone" :
                (navigator.userAgent.match(/Android/i)) == "Android" ? "Android" :
                    (navigator.userAgent.match(/BlackBerry/i)) == "BlackBerry" ? "BlackBerry" : "null";

        $scope.allCategories = interestedCategories;
        $scope.disableButton = false;
        $scope.postNoticeButtonText = "Post ";
        $scope.deviceType = deviceType;

        //have to make a default photo if photo not present load a default photo from online medium

        $scope.capturePhotoEdit = function () {
            // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
            navigator.camera.getPicture($scope.onPhotoDataSuccess, $scope.onFail, {
                quality: 20, allowEdit: true,
                destinationType: destinationType.DATA_URL
            });
        };
        $scope.onFail = function (message) {
            //showAlertMessage('Unable to upload image. Reason :  ' + message);
            navigator.notification.alert('Unable to upload image. Reason :  ',null,'Error','Ok');
        };
        $scope.onPhotoDataSuccess = function (imageData) {
            // Uncomment to view the base64-encoded image data
            // console.log(imageData);

            // Get image handle
            //
            imageData = "data:image/jpeg;base64," + imageData;

            $scope.imageBlob = $scope.dataURItoBlob(imageData);

            var uploadPreview = document.getElementById('uploadPreview');

            // Unhide image elements
            //
            //uploadPreview.style.display = 'block';

            // Show the captured photo
            // The in-line CSS rules are used to resize the image
            //
            uploadPreview.src = imageData;
        };
        $scope.dataURItoBlob = function (dataURI) {
            // convert base64/URLEncoded data component to raw binary data held in a string
            var byteString;
            if (dataURI.split(',')[0].indexOf('base64') >= 0)
                byteString = atob(dataURI.split(',')[1]);
            else
                byteString = unescape(dataURI.split(',')[1]);

            // separate out the mime component
            var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

            // write the bytes of the string to a typed array
            var ia = new Uint8Array(byteString.length);
            for (var i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);

            }

            return new Blob([ia], {type: mimeString});
        };

        $scope.loadImageFile = function () {

            var oFReader = new FileReader(), rFilter = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i;

            oFReader.onload = function (oFREvent) {

                var img = new Image();
                img.onload = function () {
                    //document.getElementById("originalImg").src=img.src;
                    var canvas = document.createElement("canvas");
                    var ctx = canvas.getContext("2d");
                    //canvas.width=img.width/2;
                    //canvas.height=img.height/2;
                    canvas.width = 399;
                    canvas.height = 300;
                    ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
                    document.getElementById("uploadPreview").src = canvas.toDataURL();
                    var imageData = canvas.toDataURL();
                    $scope.imageBlob = $scope.dataURItoBlob(imageData);
                };
                img.src = oFREvent.target.result;
            };

            if (document.getElementById("uploadImage").files.length === 0) {
                return;
            }
            var oFile = document.getElementById("uploadImage").files[0];
            /*if (!rFilter.test(oFile.type)) {
             alert("You must select a valid image file!");
             return;
             }*/
            oFReader.readAsDataURL(oFile);

        };
        $scope.submitForm = function () {
            $scope.postNoticeButtonText = "Wait ...";
            $scope.disableButton = true;
            var heading = $scope.subject;
            var description = $scope.message;
            //chk for url and social url --- plus page --- and $location when clicked when posted to come back to the page 
            var fbUrl = $scope.fbUrl;
            var url = $scope.url;
            if ($rootScope.enteredLink != undefined &&  $rootScope.enteredLink != "") {var url = $rootScope.enteredLink;};
            if ($rootScope.enteredSocialLink != undefined && $rootScope.enteredSocialLink != "") {var fbUrl = $rootScope.enteredSocialLink;};            
            //var fbUrl = $scope.fbUrl;
            var imageBlob = $scope.imageBlob;
            var categories = $scope.isSelected;
            //alert(heading+url);die;
            
            if (heading == undefined || heading == '') {
                //showAlertMessage("Please provide subject for the notice..");
                navigator.notification.alert("Please provide subject for the notice..",null,'Error','Ok');
                $scope.postNoticeButtonText = "Post";
                $scope.disableButton = false;
                return false;
            }
            if (categories == undefined || categories == '') {
                //showAlertMessage("Please select a category for the notice..");
                navigator.notification.alert("Please select a category for the notice..",null,'Error','Ok');
                $scope.postNoticeButtonText = "Post";
                $scope.disableButton = false;
                return false;
            }
        
            //var profileData = {"register_email":"igdtuw@gmail.com","user_id":809,"contact_nos":"9999999999","register_password":"collegeLoopIn@123","register_name":"igdtuw loop","register_college":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","register_roll":"loopin","interestedCategories":[{"categoryId":1833,"categoryName":"Hostel","categoryDescription":"Buzz going on in hostel","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1834,"categoryName":"Fest","categoryDescription":"Cultural And Tech Fest Info","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1835,"categoryName":"Masters","categoryDescription":"Latest info for Masters aspirants","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1836,"categoryName":"Fourth Year","categoryDescription":"Fourth year community","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1837,"categoryName":"Internship","categoryDescription":"Internship information in college","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1838,"categoryName":"MBA","categoryDescription":"Latest info for CAT aspirants","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1839,"categoryName":"Alumni","categoryDescription":"Information exchange with alumni network","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1840,"categoryName":"Third Year","categoryDescription":"Third year community","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1841,"categoryName":"Placement","categoryDescription":"Placement information in college","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1842,"categoryName":"First Year","categoryDescription":"First year community","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1843,"categoryName":"Music","categoryDescription":"Music updates in college","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1844,"categoryName":"Sharing Goods","categoryDescription":"Share stuff with peers and juniors","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1845,"categoryName":"Second Year","categoryDescription":"Second year community","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":1846,"categoryName":"Sports","categoryDescription":"Sports updates in college","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3242,"categoryName":"Others","categoryDescription":"General Notices","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3243,"categoryName":"Deals","categoryDescription":"Deals to check out","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3244,"categoryName":"Marketing","categoryDescription":"Marketing notices","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3245,"categoryName":"Travel","categoryDescription":"Travel related updates","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3246,"categoryName":"Competitions","categoryDescription":"Competitions to participate in","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3247,"categoryName":"Events","categoryDescription":"College events info","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3248,"categoryName":"Technology","categoryDescription":"Technology related updates","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3249,"categoryName":"Entrepreneurship","categoryDescription":"Entrepreneurship updates","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":3250,"categoryName":"Food","categoryDescription":"Food related updates","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4441,"categoryName":"Innerve","categoryDescription":"Technical Fest","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4442,"categoryName":"Rotaract Club","categoryDescription":"Rotaract Club of IGDTU","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4443,"categoryName":"Impulse","categoryDescription":"Impulse, IGDTUW","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4444,"categoryName":"Enactus","categoryDescription":"enactus igdtuw","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4445,"categoryName":"Google Students Club","categoryDescription":"Google Students Club IGDTUW","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4446,"categoryName":"CSI","categoryDescription":"CSI IGDTUW","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4447,"categoryName":"EDC","categoryDescription":"entrepreneurship IGTUW","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4448,"categoryName":"Greenx","categoryDescription":"Igdtuw Greenx","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4449,"categoryName":"IEEE","categoryDescription":"IEEE Igtuw","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null},{"categoryId":4450,"categoryName":"IGTUW","categoryDescription":"Our college","collegeInfo":{"collegeId":120,"collegeName":"Indira Gandhi Delhi Technical University for Women (IGDTUW)","collegeAddress":"null","collegeImageId":null,"location":"Delhi","noticeScreening":false,"collegePassword":"default"},"mostRecentNoticeCount":null,"mostRecentNoticeDate":null}],"userCollegeBranches":[]};
            var profileData = JSON.parse($.jStorage.get('profileData'));
            //var user_id=809;
            

            var user_id = profileData["user_id"];
            /*var data = {
             "userId": user_id,
             "noticeInfoList": noticeInfos
             };
             */
            //data = JSON.stringify(data);
            //navigator.notification.alert("Your notice has been successfully posted",null,'Error','Ok');
            var fd = new FormData();
            fd.append('userId', user_id);
            fd.append('noticeHeading', heading);
            fd.append('noticeDescription', description);
            fd.append('categories', categories);
            fd.append('noticeUrl', url);
            fd.append('noticeFBUrl', fbUrl);
            //fd.append('infoState', 'APPROVED');
            //fd.append('noticeImageFile', imgUri);
            fd.append('noticeImageFile', imageBlob);

            var locationOrigin = "http://collegeboard-env2.elasticbeanstalk.com";
            $http.post(locationOrigin + "/noticeInfo/postNotice", fd, {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                }
            }).success(function (response) {
                var isSuccess = response.success;
                if (isSuccess) {
                    //showAlertMessage("Your notice has been successfully posted");
                        

                    $scope.disableButton = false;
                    $scope.postNoticeButtonText = "Post ";
                    //empty the initial variabes of notice
                    $scope.subject = '';
                    $scope.message = '';
                    $scope.cat1 = '';
                    $scope.url = '';
                    $scope.fbUrl = '';
                    $scope.imageBlob = '';
                    $scope.isSelected = '';

                    document.getElementById("uploadPreview").src = '';

                    navigator.notification.alert("Your notice has been successfully posted",null,'Success','Ok');
                    
                    
                } else {

                    var errorMessage = response.message;
                    //showAlertMessage("Sorry.Unable to post notice currently.Please try later.Reason :" + errorMessage);
                    navigator.notification.alert("Sorry.Unable to post notice currently.Please try later.Reason :",null,'Error','Ok');
                    $scope.disableButton = false;
                    $scope.postNoticeButtonText = "Post ";
                    //alert(errorMessage);
                }
            }).error(function (response) {

                //alert(response.message);
                //showAlertMessage("Sorry,no internet connection available right now. Please try again later..");
                navigator.notification.alert("Sorry,no internet connection available right now. Please try again later..",null,'Error','Ok');
                $scope.disableButton = false;
                $scope.postNoticeButtonText = "Post ";
            });


        };

}

