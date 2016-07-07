var app = angular.module('newApp', []);

app.controller('FeedPluginMasterController', ["$scope","$location","$rootScope", "$sce","$http", function ($scope,$rootScope,$sce ,$location , $http, FeedPluginData) {



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

        var profileData = JSON.parse(window.localStorage.getItem('profileData'));
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
            showAlertMessage('Unable to upload image. Reason :  ' + message);
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
            if ($rootScope.enteredLink) {var url = $rootScope.enteredLink;};
			if ($rootScope.enteredSocialLink) {var fbUrl = $rootScope.enteredSocialLink;};            
            //var fbUrl = $scope.fbUrl;
            var imageBlob = $scope.imageBlob;
            var categories = $scope.isSelected;
            //alert(heading+url);die;

            if (heading == undefined || heading == '') {
                showAlertMessage("Please provide subject for the notice..");
                $scope.postNoticeButtonText = "Post";
                $scope.disableButton = false;
                return false;
            }
            if (categories == undefined || categories == '') {
                showAlertMessage("Please select a category for the notice..");
                $scope.postNoticeButtonText = "Post";
                $scope.disableButton = false;
                return false;
            }
        
            var profileData = JSON.parse($.jStorage.get('profileData'));

            var user_id = profileData["user_id"];
            /*var data = {
             "userId": user_id,
             "noticeInfoList": noticeInfos
             };
             */
            //data = JSON.stringify(data);
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
                    showAlertMessage("Your notice has been successfully posted");
                    

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
                    $location.path('/app/theLoop/theLoopPage1');
                } else {

                    var errorMessage = response.message;
                    showAlertMessage("Sorry.Unable to post notice currently.Please try later.Reason :" + errorMessage);
                    $scope.disableButton = false;
                    $scope.postNoticeButtonText = "Post ";
                    //alert(errorMessage);
                }
            }).error(function (response) {

                //alert(response.message);
                showAlertMessage("Sorry,no internet connection available right now. Please try again later..");
                $scope.disableButton = false;
                $scope.postNoticeButtonText = "Post ";
            });


        };

    }]);