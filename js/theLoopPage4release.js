function pageprocessortheLoopPage4(pagedef, $scope, $routeParams, $compile, $http, $rootScope, $sce, $window, $location) {var data1 = $compile($(pagedef.datatemplate))($scope);$("#appContent").append(data1);
        $scope.mainCategory = "Notices";
        $scope.profileData = JSON.parse($.jStorage.get('profileData'));
        $scope.interestedCategories = $scope.profileData.interestedCategories;
        $.each($scope.interestedCategories, function (key, value) {
            if ($scope.mainCategory.toLowerCase() == "notices") {
                if ($.jStorage.get('#notificationNoticesCount-' + value.categoryId)) {
                    value.categoryNotifications = JSON.parse($.jStorage.get('#notificationNoticesCount-' + value.categoryId));
                } else {
                    value.categoryNotifications = 0;
                }
            }

        });            
            var categories = $scope.interestedCategories;
            //alert("here");
        categories = categories.sort(function (b, a) {
            $.jStorage.get("#notificationTimestamp" + "Notices" + "Date-" + b.categoryId);
            var timestampA = $.jStorage.get("#notificationTimestamp" + "Notices" + "Date-" + a.categoryId);
            var timestampB = $.jStorage.get("#notificationTimestamp" + "Notices" + "Date-" + b.categoryId);
        
            return timestampA - timestampB;
        });
        $scope.items = categories;    

        $scope.showGeneralCategoryFeed = function () {


            $rootScope.categoryName = $rootScope.generalCategoryName;
            $rootScope.categoryId= $rootScope.generalCategoryId;
            $rootScope.pageNumberHistory="4";
            $location.path('/app/theLoop/theLoop');
        }

        $scope.showCategoryFeed = function (index) {

            var selectedItem = $scope.items[index];
            $rootScope.categoryName = selectedItem.categoryName;
            $rootScope.categoryId= selectedItem.categoryId;
            $rootScope.pageNumberHistory="4";
            $location.path('/app/theLoop/theLoop');
        }


}