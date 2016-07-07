function pageprocessortheLoopPage4(pagedef, $scope, $routeParams, $compile, $http, $rootScope, $sce, $window, $location) {var data1 = $compile($(pagedef.datatemplate))($scope);$("#appContent").append(data1);
        //$scope.items = FeedPluginData.selectedItem.items;
        $scope.mainCategory = "Notices";
        $scope.profileData = JSON.parse($.jStorage.get('profileData'));
        $scope.interestedCategories = $scope.profileData.interestedCategories;
        //retreiving notification from local storage
        //var notifications=[];
        //$.each(FeedPluginData.profileData["interestedCategories"], function (key, value) {



            



        /*var mainCategory = FeedPluginData.mainCategory;
         var categoryId = FeedPluginData.selectedItem.categoryId;
         var categoryName = FeedPluginData.selectedItem.categoryName;
         var feedEntriesDataA = JSON.parse(window.localStorage.getItem('feedEntriesData' + 'Notices' + a.categoryId + a.categoryName));*/
        

         //function executeAfterGetcount() {
            
        $.each($scope.interestedCategories, function (key, value) {
            //window.localStorage['#notificationNoticesCount-' + value.categoryId] = 0;
            //var profileData = JSON.parse(window.localStorage.getItem('#notificationNoticesCount-' + value.categoryId));
            //notifications.push(JSON.parse(window.localStorage.getItem('#notificationNoticesCount-' + value.categoryId)));
            //if (FeedPluginData.mainCategory.toLowerCase() == "notices") {
                //$.jStorage.set("feedEntriesData" + mainCategory + categoryId + categoryName, feedEntriesDataJson);
            if ($scope.mainCategory.toLowerCase() == "notices") {
                if ($.jStorage.get('#notificationNoticesCount-' + value.categoryId)) {
                    value.categoryNotifications = JSON.parse($.jStorage.get('#notificationNoticesCount-' + value.categoryId));
                    // value.categoryNotifications = Number(window.localStorage.getItem('#notificationNoticesCount-' + value.categoryId)) ;
                } else {
                    value.categoryNotifications = 0;
                }
            }
            /*else if (FeedPluginData.mainCategory.toLowerCase() == "news") {
             if (window.localStorage['#notificationNewsCount-' + value.categoryId] != undefined) {
             value.categoryNotifications = JSON.parse(window.localStorage.getItem('#notificationNewsCount-' + value.categoryId));

             } else {
             value.categoryNotifications = 0;
             }
             }
             */

        });            
            var categories = $scope.interestedCategories;
            //alert("here");
        categories = categories.sort(function (b, a) {
            $.jStorage.get("#notificationTimestamp" + "Notices" + "Date-" + b.categoryId);
            var timestampA = $.jStorage.get("#notificationTimestamp" + "Notices" + "Date-" + a.categoryId);
            var timestampB = $.jStorage.get("#notificationTimestamp" + "Notices" + "Date-" + b.categoryId);
            //var timestampA = window.localStorage.getItem('#notificationTimestamp' + 'Notices' + 'Date-' + a.categoryId);
            //var timestampB = window.localStorage.getItem('#notificationTimestamp' + 'Notices' + 'Date-' + b.categoryId);
        
            return timestampA - timestampB;
            //return parseFloat(a.categoryNotifications) - parseFloat(b.categoryNotifications);
        });
        //alert(categories);
        $scope.items = categories;    
         //}


        /*var categories = $scope.interestedCategories;
        categories = categories.sort(function (b, a) {
            $.jStorage.get('#notificationTimestamp' + 'Notices' + 'Date-' + b.categoryId);
            var timestampA = $.jStorage.get('#notificationTimestamp' + 'Notices' + 'Date-' + a.categoryId);
            var timestampB = $.jStorage.get('#notificationTimestamp' + 'Notices' + 'Date-' + b.categoryId);
            //var timestampA = window.localStorage.getItem('#notificationTimestamp' + 'Notices' + 'Date-' + a.categoryId);
            //var timestampB = window.localStorage.getItem('#notificationTimestamp' + 'Notices' + 'Date-' + b.categoryId);
        
            return timestampA - timestampB;
            //return parseFloat(a.categoryNotifications) - parseFloat(b.categoryNotifications);
        });
        $scope.items = categories;*/
        //var iii= FeedPluginData.profileData["interestedCategories"];
        //var ii=0;


        $scope.showGeneralCategoryFeed = function () {

            //specific wall feed , button for general to make in the categries tab

            $rootScope.categoryName = $rootScope.generalCategoryName;
            $rootScope.categoryId= $rootScope.generalCategoryId;
            $rootScope.pageNumberHistory="4";
            $location.path('/app/theLoop/theLoop');
            //pass the page 1 parameters
            //FeedPluginData.selectedItem = selectedItem;
            //$scope.ons.navigator.pushPage('feed-master.html', {title: selectedItem.categoryName});
        }

        $scope.showCategoryFeed = function (index) {

            //specific wall feed , button for general to make in the categries tab
            var selectedItem = $scope.items[index];
            $rootScope.categoryName = selectedItem.categoryName;
            $rootScope.categoryId= selectedItem.categoryId;
            $rootScope.pageNumberHistory="4";
            $location.path('/app/theLoop/theLoop');
            //pass the page 1 parameters
            //FeedPluginData.selectedItem = selectedItem;
            //$scope.ons.navigator.pushPage('feed-master.html', {title: selectedItem.categoryName});
        }


}