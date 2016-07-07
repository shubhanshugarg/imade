function pageprocessorIIITDMobile(pagedef, $scope, $routeParams, $compile, $http, $rootScope, $sce, $window, $location) {
    
        var data1 = $compile($(pagedef.datatemplate))($scope);
        $("#appContent").append(data1);
try{
    $scope.rollNo = "";
    $scope.OTPpin = "";
    $scope.agreeTerms=false;
    $scope.CreateUserScreen = false;
    $scope.validateOTPScreen = true;
    $scope.showBranding = true;
    $scope.pwd="";
    $scope.cpwd="";

        
        
    

    

    $scope.sendOTP = function() {
        $.blockUI({
                                 message: '<div id="floatingBarsG"><div class="blockG" id="rotateG_01"></div><div class="blockG" id="rotateG_02"></div><div class="blockG" id="rotateG_03"></div><div class="blockG" id="rotateG_04"></div><div class="blockG" id="rotateG_05"></div><div class="blockG" id="rotateG_06"></div><div class="blockG" id="rotateG_07"></div><div class="blockG" id="rotateG_08"></div></div><div></div>'
                                 });
    
        if(!$scope.agreeTerms){
                if(window.device){
                        $.unblockUI();
                        navigator.notification.alert("Please accept privacy policy & terms of use.", null, 'Alert', 'Ok');
                        return;
                }else{
                        $.unblockUI();
                        alert("Please accept terms and conditions.");
                        return;
                }
            }
        var rollNo = $scope.rollNo;

        if (rollNo == "" || rollNo == undefined) {
            if(window.device){
            $.unblockUI();
            navigator.notification.alert("Please enter roll no.", null, 'Alert', 'Ok');
            return;
        }else{
            $.unblockUI();
            alert("Please enter roll no.");
            return;
            }
        }

        var url = "https://kryptosda.kryptosmobile.com/kryptosds/user/finduserbyroll";
        var data = {
            "sheetid": "1qPLoIV7F662lUlgeUzIqLld6EryqlpplPv5VcMMMMLI",
            "rollno": rollNo
        };
        $http.post(url, data).success(function(res) {
            if (res.found == true) {
                $scope.userInfo = res.userinfo;
                $rootScope.UserEmail=res.userinfo.email;
                $scope.phone=res.userinfo.phone.substr(0,2)+'xxxxxxx'+res.userinfo.phone.substr(res.userinfo.phone.length-3,res.userinfo.phone.length);
                $scope.email=res.userinfo.email.substr(0,2)+'xxxxxxx'+res.userinfo.email.substr(res.userinfo.email.indexOf("@"),res.userinfo.email.length);
                $.unblockUI();
                $scope.requestOTPScreen=true;
                $scope.EnterOTPScreen=false;
                $scope.createPasswordScreen=false;
                $rootScope.toggle("confirmUserInfo");

            } else {
                $.unblockUI();
                navigator.notification.alert('User not found. Please check with your college adminstrator.', null, 'Alert', 'Ok');
            }

        }).error(function(err) {
            $.unblockUI();
            alert(JSON.stringify(err));
        });
    }

    $scope.requestOTP=function(){
        //$rootScope.toggle("confirmUserInfo");
        $scope.requestOTPScreen=false;
                    $scope.EnterOTPScreen=true;
                    $scope.createPasswordScreen=false;

        $.blockUI({
                                 message: '<div id="floatingBarsG"><div class="blockG" id="rotateG_01"></div><div class="blockG" id="rotateG_02"></div><div class="blockG" id="rotateG_03"></div><div class="blockG" id="rotateG_04"></div><div class="blockG" id="rotateG_05"></div><div class="blockG" id="rotateG_06"></div><div class="blockG" id="rotateG_07"></div><div class="blockG" id="rotateG_08"></div></div><div></div>'
                                 });
    
        var url = "https://kryptosda.kryptosmobile.com/kryptosds/user/sendotp";
                var tenantid = $rootScope.metadata.tenantid;
                var data = {
                    "sheetid": "1qPLoIV7F662lUlgeUzIqLld6EryqlpplPv5VcMMMMLI",
                    "rollno": $scope.rollNo,
                    "tenant": tenantid
                };
                $http.post(url, data).success(function(res) {
                    $.unblockUI();
                    
                    

                    $rootScope.OTP = res.otp;

                }).error(function(err) {
                    $.unblockUI();
                    alert(JSON.stringify(err));
                });
    }

    $scope.cancelOTP=function(){
        $rootScope.toggle("confirmUserInfo");
    }

    $scope.submitOTP = function() {
        $.blockUI({
                                 message: '<div id="floatingBarsG"><div class="blockG" id="rotateG_01"></div><div class="blockG" id="rotateG_02"></div><div class="blockG" id="rotateG_03"></div><div class="blockG" id="rotateG_04"></div><div class="blockG" id="rotateG_05"></div><div class="blockG" id="rotateG_06"></div><div class="blockG" id="rotateG_07"></div><div class="blockG" id="rotateG_08"></div></div><div></div>'
                                 });

        var url="https://kryptosda.kryptosmobile.com/kryptosds/user/validateotp";
        var OTP=parseInt($scope.OTPpin);
        var rollno=$scope.rollNo;;
        var tenantid = $rootScope.metadata.tenantid;
        if(OTP == "" || OTP == undefined)
        {
            $.unblockUI();
            navigator.notification.alert("Please enter OTP received in your SMS. If you haven't received OTP yet, press re-send OTP button.",null,'Alert','Ok');
            return;
        }else{
            var data={"otp": OTP,"rollno" : rollno, "tenant" : tenantid};
            $http.post(url, data).success(function(res) {
                if(res.otpvalid){
                    $scope.requestOTPScreen=false;
                    $scope.EnterOTPScreen=false;
                    $scope.createPasswordScreen=true;
                    

                }else{
                    if(window.device){
                        navigator.notification.alert("Invalid OTP. Please try again.",null,'Invalid OTP','Ok');
                    }else{
                        alert("Invalid OTP. Please try again.");
                    }
                }
                $.unblockUI();
                }).error(function(err) {

                    $.unblockUI();
                    alert(JSON.stringify(err));
                });
        }
    }


        //open loopin registration
         

         //getCount: function (mainCategory) 
         
         $scope.getCount = function (mainCategory){

        //if here to execute only when profile id set
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
                    //catIds.push(value.categoryId);
                    if ($.jStorage.get('feedEntriesData' + mainCategory + value.categoryId + value.categoryName)) {
                        var categoryFeed = JSON.parse($.jStorage.get('feedEntriesData' + mainCategory + value.categoryId + value.categoryName));
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
                }
                /*else if (mainCategory == "News") {
                 getCountUrl = "http://collegeboard-env2.elasticbeanstalk.com/newsInfo/getNewsCount?userId=" + profileData.user_id + "&categoriesToFetch=" + catIdsString + "&dates=" + postedDatesString;
                 }*/
                $.get(getCountUrl, function (response) {
                    //alert("not stored in local storage");

                    //notification display logic here take out from response and show in text
                    //make all zero here and again set (if not 0 then notification circle shown)
                    //reseting notifcation local storage
                    $.each(profileData.interestedCategories, function (key, value) {
                        //$.jStorage.get('feedEntriesData' + mainCategory + value.categoryId + value.categoryName)
                        $.jStorage.set('#notification' + mainCategory + 'Count-' + value.categoryId,0);
                        //window.localStorage['#notification' + mainCategory + 'Count-' + value.categoryId] = 0;
                    });


                    $.each(response, function (key, value) {
                        $('#notification' + mainCategory + 'Count-' + key).text(value);
                        if (value > 0) {
                            $('#notificationNew' + mainCategory).text("New " + mainCategory);
                        }
                        $.jStorage.set('#notification' + mainCategory + 'Count-' + key, value.mostRecentNoticeCount);
                        $.jStorage.set('#notificationTimestamp' + mainCategory + 'Date-' + key, value.mostRecentNoticeDate);
                        
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






    $scope.loopinUserRegister = function (useremail,userProfileName,rollNo,phone,password,College) {

            //alert("clicked");

            var deviceType = (navigator.userAgent.match(/iPad/i)) == "iPad" ? "iPad" :
                (navigator.userAgent.match(/iPhone/i)) == "iPhone" ? "iPhone" :
                    (navigator.userAgent.match(/Android/i)) == "Android" ? "Android" :
                        (navigator.userAgent.match(/BlackBerry/i)) == "BlackBerry" ? "BlackBerry" : "null";

            //var form = $("#registerForm");
            //disable the button so we can't resubmit while we wait
            //$("#register_submitButton", form).attr("disabled", "disabled");
            var u = useremail;
            var p = password;
            var cp = password;
            var name = userProfileName;
            var roll = rollNo;
            var college = College;
            //var categories = $("#register_categories", form).val();
            var contactNumber = phone;
            var referenceCode = "kryptos";

            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

            if (u != '' && p != '' && !(p != cp) && u.match(re)) {

                var fd = new FormData();
                fd.append('userName', name);
                fd.append('rollNumber', roll);
                fd.append('contactNumber', contactNumber);
                //fd.append('categoryIds', categories);
                fd.append('email', u);
                fd.append('password', p);
                fd.append('collegeName', college);
                //fd.append('collegeAddress', collegeAddress);
                //fd.append('userImageFile', userImageFile);
                fd.append('referenceCode', referenceCode);
                fd.append('deviceType', deviceType);

                var locationOrigin = "http://collegeboard-env2.elasticbeanstalk.com";
                $http.post(locationOrigin + "/userInfo/userSignUp", fd, {
                    transformRequest: angular.identity,
                    headers: {
                        'Content-Type': undefined
                    }
                }).success(function (response) {
                    var isSuccess = response.success;
                    if (isSuccess) {
                        var register_name = response.data.userName;
                        var register_roll = response.data.rollNumber;
                        var user_id = response.data.userId;
                        var contact_nos = response.data.contactNumber;
                        var register_email = response.data.emailAddress;
                        var register_password = response.data.password;
                        var register_college = response.data.collegeName;
                        var interestedCategories = response.data.userCategories;
                        var userCollegeBranches = response.data.collegeBranches;
                    } else {
                        var errorMessage = response.message;
                        showAlertMessage(errorMessage);
                    }
                    if (isSuccess) {
                        //store profile data in local storage
                        $.jStorage.set("email", register_email);
                        $.jStorage.set("password", register_password);
                        //window.localStorage["email"] = register_email;
                        //window.localStorage["password"] = register_password;
                        var profileData = {
                            'register_email': register_email,
                            'user_id': user_id,
                            'contact_nos': contact_nos,
                            'register_password': register_password,
                            'register_name': register_name,
                            'register_college': register_college,
                            'register_roll': register_roll,
                            'interestedCategories': interestedCategories,
                            'userCollegeBranches': userCollegeBranches
                        };
                        $.jStorage.set("profileData", JSON.stringify(profileData));
                        //window.localStorage["profileData"] = JSON.stringify(profileData);
                        //$.mobile.changePage("some.html");
                        //show categories and hide login and register form

                        
                        $scope.getCount("Notices");
                        

                    } else {
                        // or message from shubhanshu to show here
                        showAlertMessage("Your registration failed try again");
                        return "false";
                    }
                }).error(function (response) {

                    //showAlertMessage(response.message);
                    showAlertMessage("Sorry,no internet connection available right now.Please try again later");
                    return "false";
                });


                

            } else {
                //Thanks Igor!

                showAlertMessage("not a valid email");
                
            }

     }


        //close registration

    $scope.gotoSyncProfile=function(){
        $.blockUI({
                                 message: '<div id="floatingBarsG"><div class="blockG" id="rotateG_01"></div><div class="blockG" id="rotateG_02"></div><div class="blockG" id="rotateG_03"></div><div class="blockG" id="rotateG_04"></div><div class="blockG" id="rotateG_05"></div><div class="blockG" id="rotateG_06"></div><div class="blockG" id="rotateG_07"></div><div class="blockG" id="rotateG_08"></div></div><div></div>'
                                 });

        var url="https://kryptosda.kryptosmobile.com/kryptosds/user/authenticate";
                            var tenantid = $rootScope.metadata.tenantid;
                            var data={"username": $rootScope.UserEmail,"tenant" : tenantid, "password" : $scope.pwd};
        
                            $http.post(url, data).success(function(res) {
                                $.unblockUI();
                                if(res.success){
                                $.jStorage.set("userdetails",res.userinfo);
                    var profiledata=res.userinfo;
                    $rootScope.userProfileName = profiledata.firstname+" "+profiledata.lastname;
                    $rootScope.useremail = profiledata.email;
                    if(profiledata.img == '' || profiledata.img == undefined){
                                $rootScope.userProfilePic = 'images/profileImage.png';
                                $rootScope.showUploadPhoto=true;
                            }else{
                                $rootScope.userProfilePic = profiledata.img;
                                $rootScope.showUploadPhoto=false;
                            }
                    if(profiledata.studentRole == '' || profiledata.studentRole == undefined){
                                $rootScope.studentRole = "Role";
                            }else{
                                $rootScope.studentRole = profiledata.studentRole;
                            }

                                $rootScope.phone = profiledata.phone;
                                $rootScope.rollNo = profiledata.rollNo;
                                //mine
                                $scope.loopinUserRegister($rootScope.useremail,$rootScope.userProfileName,$rootScope.rollNo,$rootScope.phone , $scope.pwd ,"National Institute Of Technology Delhi");
                                
                                $rootScope.$apply();
                                navigator.geolocation.getCurrentPosition(function(){},function(){});
                                //$location.path("/app/theLoop/theLoop");
                              }else{
                            $.jStorage.set("userdetails",null);
                            if(window.device){
                                navigator.notification.alert('Please check your login credentials and try again.',null,'Error','Ok');
                            }else{
                                alert('Please check your login credentials and try again.');
                            }
                          }
                            }).error(function(err) {
                                $.unblockUI();
                                if(window.device){
                                    navigator.notification.alert('Please check your login credentials and try again.',null,'Error','Ok');
                                }else{
                                    alert('Please check your login credentials and try again.');
                                }
                            });
    }

    $scope.createPassword=function(){
        $rootScope.toggle("confirmUserInfo");

        if($scope.pwd == "" || $scope.pwd == undefined){
            if(window.device){
                navigator.notification.alert("Please enter password.",null,'Alert','Ok');
            }else{
                alert("Please enter password.");                
            }
            return;
        }
        if($scope.cpwd == "" || $scope.cpwd == undefined){
            if(window.device){
                navigator.notification.alert("Please enter confirm password.",null,'Alert','Ok');
            }else{
                alert("Please enter confirm password.");                
            }
            return;
        }
        if($scope.pwd === $scope.cpwd){

        }else{
            if(window.device){
                navigator.notification.alert("Password doesn't match",null,'Alert','Ok');
            }else{
                alert("Password doesn't match",null,'Alert','Ok');
            }
            return;
        }
        $.blockUI({
                                 message: '<div id="floatingBarsG"><div class="blockG" id="rotateG_01"></div><div class="blockG" id="rotateG_02"></div><div class="blockG" id="rotateG_03"></div><div class="blockG" id="rotateG_04"></div><div class="blockG" id="rotateG_05"></div><div class="blockG" id="rotateG_06"></div><div class="blockG" id="rotateG_07"></div><div class="blockG" id="rotateG_08"></div></div><div></div>'
                                 });

        var url="https://kryptosda.kryptosmobile.com/kryptosds/user/create";
        var tenantid = $rootScope.metadata.tenantid;
        //{"otp": 73226,"rollno" : "10001", "tenant" : "IIITD", "pwd" : "password", "cpwd": "password"}
        
        var OTP=parseInt($scope.OTPpin);

        var data={"otp": OTP,"rollno" : $scope.rollNo, "tenant" : tenantid, "pwd" : $scope.pwd, cpwd: $scope.cpwd};
            $http.post(url, data).success(function(res) {
                    $.unblockUI();
                    if(res.success){
                        if(window.device){
                            
                            navigator.notification.alert("Your account is successfully created.",$scope.gotoSyncProfile,'Account created','Ok');
                            //alert($rootScope.UserEmail+" "+$scope.pwd);
                            $location.path("/app/FirstTimeUser/FirstTimeUser");
                        }else{
                            alert("Your account is successfully created.");
                            
                            
                            $location.path("/app/FirstTimeUser/FirstTimeUser");
                            //$location.path("/app/SignIn2/SignIn2");

                        }
                        
                    }else{
                        if(window.device){
                            navigator.notification.alert(res.error,$scope,null,'Error','Ok');
                        }else{
                            alert(res.error);
                        }
                    }
                }).error(function(err) {
                    $.unblockUI();
                    alert(JSON.stringify(err));
                });
    }

    }catch(e){alert(e)}


    $scope.sendEmail=function(){
        cordova.plugins.email.open({
    to:      'support@i-made.in',
    subject: 'Student Information Incorrect',
    body:    '',
    isHtml:  true
        });
    }
}