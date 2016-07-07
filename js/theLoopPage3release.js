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

        var profileData = JSON.parse($.jStorage.get('profileData'));
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
        $scope.capturePhotoEdit = function () {
            navigator.camera.getPicture($scope.onPhotoDataSuccess, $scope.onFail, {
                quality: 20, allowEdit: true,
                destinationType: destinationType.DATA_URL
            });
        };
        $scope.onFail = function (message) {
            navigator.notification.alert('Unable to upload image. Reason :  ',null,'Error','Ok');
        };
        $scope.onPhotoDataSuccess = function (imageData) {
            imageData = "data:image/jpeg;base64," + imageData;

            $scope.imageBlob = $scope.dataURItoBlob(imageData);

            var uploadPreview = document.getElementById('uploadPreview');

            uploadPreview.src = imageData;
        };
        $scope.dataURItoBlob = function (dataURI) {
            var byteString;
            if (dataURI.split(',')[0].indexOf('base64') >= 0)
                byteString = atob(dataURI.split(',')[1]);
            else
                byteString = unescape(dataURI.split(',')[1]);

            var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
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
                    var canvas = document.createElement("canvas");
                    var ctx = canvas.getContext("2d");
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
            oFReader.readAsDataURL(oFile);

        };
        $scope.submitForm = function () {
            $scope.postNoticeButtonText = "Wait ...";
            $scope.disableButton = true;
            var heading = $scope.subject;
            var description = $scope.message;
            var fbUrl = $scope.fbUrl;
            var url = $scope.url;
            if ($rootScope.enteredLink != undefined &&  $rootScope.enteredLink != "") {var url = $rootScope.enteredLink;};
            if ($rootScope.enteredSocialLink != undefined && $rootScope.enteredSocialLink != "") {var fbUrl = $rootScope.enteredSocialLink;};            
            var imageBlob = $scope.imageBlob;
            var categories = $scope.isSelected;
            if (heading == undefined || heading == '') {
                navigator.notification.alert("Please provide subject for the notice..",null,'Error','Ok');
                $scope.postNoticeButtonText = "Post";
                $scope.disableButton = false;
                return false;
            }
            if (categories == undefined || categories == '') {
                navigator.notification.alert("Please select a category for the notice..",null,'Error','Ok');
                $scope.postNoticeButtonText = "Post";
                $scope.disableButton = false;
                return false;
            }
            var profileData = JSON.parse($.jStorage.get('profileData'));
            var user_id = profileData["user_id"];
            var fd = new FormData();
            fd.append('userId', user_id);
            fd.append('noticeHeading', heading);
            fd.append('noticeDescription', description);
            fd.append('categories', categories);
            fd.append('noticeUrl', url);
            fd.append('noticeFBUrl', fbUrl);
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

                    $scope.disableButton = false;
                    $scope.postNoticeButtonText = "Post ";
                    $scope.subject = '';
                    $scope.message = '';
                    $scope.cat1 = '';
                    $scope.url = '';
                    $scope.fbUrl = '';
                    $scope.imageBlob = '';
                    $scope.isSelected = '';
                    
                    document.getElementById("enteredSocialLink").innerHTML = '';
                    document.getElementById("enteredLink").innerHTML = '';
                    document.getElementById("uploadPreview").src = '';

                    navigator.notification.alert("Your notice has been successfully posted",null,'Success','Ok');
                    
                    
                } else {

                    var errorMessage = response.message;
                    navigator.notification.alert("Sorry.Unable to post notice currently.Please try later.Reason :",null,'Error','Ok');
                    $scope.disableButton = false;
                    $scope.postNoticeButtonText = "Post ";
                }
            }).error(function (response) {
                navigator.notification.alert("Sorry,no internet connection available right now. Please try again later..",null,'Error','Ok');
                $scope.disableButton = false;
                $scope.postNoticeButtonText = "Post ";
            });


        };

}