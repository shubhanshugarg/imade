function pageprocessorProfileUpdatePage2(pagedef, $scope, $routeParams, $compile, $http, $rootScope, $sce, $window, $location) {
var data1 = $compile($(pagedef.datatemplate))($scope);
$("#appContent").append(data1);
var profiledata=$.jStorage.get("userdetails");
        if(profiledata){
        $scope.userProfileName = profiledata.firstname+" "+profiledata.lastname;
        $scope.useremail = profiledata.email;
        if(profiledata.img  == undefined || profiledata.img == ""){
                                $scope.userProfilePic = 'images/profileImage.png';
                                $scope.showUploadPhoto=true;
                            }else{
                                $scope.userProfilePic = profiledata.img;
                                $scope.showUploadPhoto=false;
            }

        if(profiledata.DN == "" || profiledata.DN == undefined || profiledata.DN == null){
                $scope.showdefaultDN=true;
                
            }else{
                $scope.showdefaultDN=false;
                $scope.userProfileDN=profiledata.DN;
                $scope.userProfileDN=$scope.userProfileDN.charAt(0).toUpperCase() + $scope.userProfileDN.slice(1);
        }

        if(profiledata.studentRole == "" || profiledata.studentRole == undefined || profiledata.studentRole == null){
                $scope.showdefaultUR=true;
                
            }else{
                $scope.showdefaultUR=false;
                $scope.studentRole=profiledata.studentRole;
                $scope.studentRole=$scope.studentRole.charAt(0).toUpperCase() + $scope.studentRole.slice(1);
        }

        if(profiledata.InstitutionName == "" || profiledata.InstitutionName == undefined || profiledata.InstitutionName == null){
                $scope.showdefaultInstitute=true;
                
            }else{
                $scope.showdefaultInstitute=false;
                $scope.InstitutionName=profiledata.InstitutionName;
                $scope.InstitutionName=$scope.studentRole.charAt(0).toUpperCase() + $scope.studentRole.slice(1);
        }

        
        

        
        

        $scope.phn=profiledata.phone;
        $scope.rollNo=profiledata.rollno;

        if(profiledata.gender == undefined){
            $scope.gender='';
        }else{
            $scope.gender=profiledata.gender;
        }

        if(profiledata.userRole == undefined){
            $scope.userRole='';
        }else{
            $scope.userRole=profiledata.userRole;
        }

        if(profiledata.country == undefined){
            $scope.country='';
        }else{
            $scope.country=profiledata.country;
        }
        $scope.InstitutionName=profiledata.InstitutionName;
        if(profiledata.course == undefined){
            $scope.course='';
        }else{
            $scope.course=profiledata.course;
        }
        if(profiledata.stream == undefined){
            $scope.stream='';
        }else{
            $scope.stream=profiledata.stream;
        }

        $scope.$apply();
        }


        $scope.updateProfileLoop=function(){
            
            //mind the small case in profiledata
            var profiledata=$.jStorage.get("userdetails"); //from kryptos
            var profileData = JSON.parse($.jStorage.get('profileData'));
            //var user_id=809;
            var user_id = profileData["user_id"];

            var fd = new FormData();
            
            //name , role , gender , dob , mobile , email , facebook id, gmal id , linkedin id , roll done , degree/course , major/stream , gpa , image, branch , graduation year ,
            // update fields for profile : gender done, done dob , mobile done ,done facebook id, not done gmal id , donelinkedin id , roll done , degree/course , major/stream , done gpa , image, branch , graduation year ,
            fd.append('userId', user_id);
            //$scope.name = profiledata.firstname+" "+profiledata.lastname;
            if (profiledata.rollno != undefined && profiledata.rollno != null) {
                fd.append('rollNumber', profiledata.rollno);
            }
            
            if (profiledata.phone != undefined && profiledata.phone != null) {
                fd.append('contactNumber', profiledata.phone);
            }
            if (yearGrad != undefined && yearGrad != null && yearGrad != '') {
                fd.append('yearGrad', yearGrad);
            }
            if (profiledata.gender != undefined && profiledata.gender != null && profiledata.gender != '') {
                fd.append('userGender', profiledata.gender);
            }
            
            if (profiledata.stream != undefined && profiledata.stream != null && profiledata.stream != '') {
                fd.append('branch', profiledata.stream);
            }
            
            if (profiledata.fbID != undefined && profiledata.fbID != null) {
                fd.append('fbUrl', profiledata.fbID);
            }
            
            if (profiledata.dob != undefined && profiledata.dob != null) {
                fd.append('dateOfBirth', profiledata.dob);
            }
            
            if (profiledata.linkedInID != undefined && profiledata.linkedInID != null) {
                fd.append('linkedinUrl', profiledata.linkedInID);
            }
            if (profiledata.gpa != undefined && profiledata.gpa != null) {
                fd.append('gpa', profiledata.gpa);
            }
            if (profiledata.img != undefined && profiledata.img != null) {
                fd.append('gpa', profiledata.img);
            }
            

            var locationOrigin = "http://collegeboard-env2.elasticbeanstalk.com";
            $http.post(locationOrigin + "/userInfo/editUserInfo", fd, {
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
                navigator.notification.alert('Request not sent .Try later ',null,'Error','Ok');
                
            });

        }

    $scope.savedUserProfile=function(){
        var userData={};
        var token = $.jStorage.get("userdetails").usertoken;
        var rollno = $.jStorage.get("userdetails").rollno;
        var _id = $.jStorage.get("userdetails")._id;
        var tenant = $rootScope.metadata.tenantid;

        userData.usertoken=token;
        userData._id=_id;
        userData.tenant=tenant;
        userData.rollno=rollno;

        userData.firstname=$scope.userProfileName.split(" ")[0];
        userData.lastname =$scope.userProfileName.split(" ")[1];

        userData.email = $scope.useremail;
        userData.img=$scope.img;

        userData.DN = $scope.userProfileDN;

        userData.studentRole = $scope.userRole;
        userData.phone = $scope.phn;

        userData.gender=$scope.gender;

        userData.userRole=$scope.userRole;

        userData.country=$scope.country;

        userData.course=$scope.course;

        userData.stream=$scope.stream;
        
        userData.InstitutionName=$scope.InstitutionName;

        userData.interests=$scope.interest;
        //alert(JSON.stringify(userData));



        var url="https://kryptosda.kryptosmobile.com/kryptosds/nuser/updateuserprofile";

        $http.post(url,userData).success(function(data){
                if(data.success){
                //alert(JSON.stringify(data));
                $rootScope.userProfilePic = data.userinfo.img;
                $rootScope.useremail=$scope.useremail;
                $rootScope.userProfileName=$scope.userProfileName;

                $.jStorage.set("userdetails",data.userinfo);
                $scope.updateProfileLoop();//will take info from userdetails
                $rootScope.$apply();
                navigator.notification.alert("Profile saved.",null,' ','Ok');
            }else{

                navigator.notification.alert("Profile not saved. Please try after sometime.",null,'Error','Ok');
            }
            $.unblockUI();
            }).error(function(err){
                alert(JSON.stringify(err));
                $.unblockUI();
            });
    }

    $scope.SaveProfile=function(){
        $.blockUI({
            message: '<div id="floatingBarsG"><div class="blockG" id="rotateG_01"></div><div class="blockG" id="rotateG_02"></div><div class="blockG" id="rotateG_03"></div><div class="blockG" id="rotateG_04"></div><div class="blockG" id="rotateG_05"></div><div class="blockG" id="rotateG_06"></div><div class="blockG" id="rotateG_07"></div><div class="blockG" id="rotateG_08"></div></div><div></div>'
        });

        if($scope.uploadedPhoto != undefined){
            var url="https://kryptosda.kryptosmobile.com/kryptosds/api/imageUpload";
            var data={'imageData':$scope.image,"imageExtn":'png'};
            
            $http.post(url,data).success(function(data){
                $scope.img=data.url;
                $scope.savedUserProfile();
                $.unblockUI();
            }).error(function(err){
                alert(JSON.stringify(err));
                $.unblockUI();
            });
        }else{
            $scope.img=$scope.userProfilePic;
            $scope.savedUserProfile();
        }
    }

    function onFail(message) {
        //alert('Failed because: ' + message);
        $.unblockUI();
    }
    
    $scope.cameraSuccess=function(imageData) {        
        $scope.image="data:image/png;base64,"+imageData;
        
        $("#userImage").attr('src',$scope.image);
        $scope.showUploadPhoto=false;    

        $scope.uploadedPhoto=true;
        
        $.unblockUI();
    }
    $scope.useCamera=function(){
        $.blockUI({
                                                                 message: '<div id="floatingBarsG"><div class="blockG" id="rotateG_01"></div><div class="blockG" id="rotateG_02"></div><div class="blockG" id="rotateG_03"></div><div class="blockG" id="rotateG_04"></div><div class="blockG" id="rotateG_05"></div><div class="blockG" id="rotateG_06"></div><div class="blockG" id="rotateG_07"></div><div class="blockG" id="rotateG_08"></div></div><div></div>'
                                                                 });
        navigator.camera.getPicture($scope.cameraSuccess, onFail, { quality: 50,
            destinationType: Camera.DestinationType.DATA_URL
        });
    }

    $scope.useGallery=function(){
        $.blockUI({
                                                                 message: '<div id="floatingBarsG"><div class="blockG" id="rotateG_01"></div><div class="blockG" id="rotateG_02"></div><div class="blockG" id="rotateG_03"></div><div class="blockG" id="rotateG_04"></div><div class="blockG" id="rotateG_05"></div><div class="blockG" id="rotateG_06"></div><div class="blockG" id="rotateG_07"></div><div class="blockG" id="rotateG_08"></div></div><div></div>'
                                                                 });
            navigator.camera.getPicture($scope.cameraSuccess, onFail, { quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            popoverOptions: new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY)
        });
    }

    var ActionSheetSuccess=function(btn){
        if(btn == 1){
            if($.jStorage.get("cameraAllowed") == false){
                navigator.notification.alert("To use camera please give access to camera under settings.",null,'Access denied','Ok');
            }else{
            $scope.useCamera();
                                
            }

        }else if(btn == 2){
            $scope.useGallery();
        }
    }

    $scope.openCamera=function(){
        var options = {
        'androidTheme': window.plugins.actionsheet.ANDROID_THEMES.THEME_HOLO_LIGHT,
        'title': 'Profile Image',
        'buttonLabels': ['Take a photo', 'Choose from gallery'],
        'addCancelButtonWithLabel': 'Cancel'
        };
        window.plugins.actionsheet.show(options, ActionSheetSuccess);
    }
    
}