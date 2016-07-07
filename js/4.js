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