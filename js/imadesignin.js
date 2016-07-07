function pageprocessorSignIn2(pagedef, $scope, $routeParams, $compile, $http, $rootScope, $sce, $window, $location) {
    

    setTimeout(function(){
    var data1 = $compile($(pagedef.datatemplate))($scope);
    $("#appContent").append(data1);
    $(".app-body").addClass("bounceInDown");
    $(".app-body").addClass("animated");  
    },200);

    $scope.myswiperight = function() {    
               
            }
            $scope.myswipeleft = function() {
                
            }  

    $scope.username = "";
    $scope.password = "";

    
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




$scope.loopinUserLogin = function (userEmail, password) {

            //alert("clicked");

            var u = userEmail;
            var p = password;
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            //console.log("click");
            if (u != '' && p != '' && u.match(re)) {


                $http({
                    method: 'GET',
                    url: "http://collegeboard-env2.elasticbeanstalk.com/userInfo/userSignIn?userEmail=" + u + "&userPassword=" + p,
                    async: false
                }).
                    success(function (response, status, headers, config) {

                        var isSuccess = response.success;
                        if (isSuccess) {
                            var register_name = response.data.userName;
                            var register_roll = response.data.rollNumber;
                            var register_yearGrad = response.data.yearGrad;
                            var register_branch = response.data.branch;
                            var register_company = response.data.company;
                            var user_id = response.data.userId;
                            var contact_nos = response.data.contactNumber;
                            var register_email = response.data.emailAddress;
                            var register_password = response.data.password;
                            var register_college = response.data.collegeName;
                            var interestedCategories = response.data.userCategories;
                            var userCollegeBranches = response.data.collegeBranches;
                            var register_status = response.data.status;
                            //var register_aboutMe = response.data.aboutMe;
                            var register_fbUrl = response.data.fbUrl;
                            var register_twitterUrl = response.data.twitterUrl;
                            var register_linkedinUrl = response.data.linkedinUrl;
                            var register_interests = response.data.interests;
                            var special_user = response.data.specialUser;
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
                                'register_yearGrad': register_yearGrad,
                                'register_branch': register_branch,
                                'register_company': register_company,
                                'register_password': register_password,
                                'register_name': register_name,
                                'register_college': register_college,
                                'register_roll': register_roll,
                                'interestedCategories': interestedCategories,
                                'userCollegeBranches': userCollegeBranches,
                                'register_status': register_status,
                                //'aboutMe': register_aboutMe,
                                'register_fbUrl': register_fbUrl,
                                'register_twitterUrl': register_twitterUrl,
                                'register_linkedinUrl': register_linkedinUrl,
                                'register_interests': register_interests,
                                'special_user': special_user
                            };
                            $.jStorage.set("profileData", JSON.stringify(profileData));
                            //window.localStorage["profileData"] = JSON.stringify(profileData);
                            //$.mobile.changePage("some.html");
                            //show categories and hide login and register form

                            app.getCount("Notices");
                            

                        }
                    }).
                    error(function (data, status, headers, config) {
                        showAlertMessage("Sorry,no internet connection available right now.Please try again later.");
                        //page remain as it is
                        $scope.isLoggedIn = "no";
                    });


                $("#submitButton").removeAttr("disabled");

            } else {
                showAlertMessage("You must enter valid email and password");
                $("#submitButton").removeAttr("disabled");
            }


            /*var selectedItem = $scope.categories[index];
             FeedPluginData.selectedItem = selectedItem;
             $scope.ons.navigator.pushPage('feed-category.html', {title : selectedItem.title});*/
        };

    }]);





    $scope.login=function(){
        if($scope.username == "" || $scope.username == undefined){
        if(window.device){
            navigator.notification.alert("Please enter username.",null,'Username required','Ok');
        }else{
            alert("Please enter username.");
        }
        return;
    }
    if($scope.password == "" || $scope.password == undefined){
        if(window.device){
            navigator.notification.alert("Please enter password.",null,'Password required','Ok');
        }else{
            alert("Please enter password.");
        }
        return;
    }
    $.blockUI({
                                 message: '<div id="floatingBarsG"><div class="blockG" id="rotateG_01"></div><div class="blockG" id="rotateG_02"></div><div class="blockG" id="rotateG_03"></div><div class="blockG" id="rotateG_04"></div><div class="blockG" id="rotateG_05"></div><div class="blockG" id="rotateG_06"></div><div class="blockG" id="rotateG_07"></div><div class="blockG" id="rotateG_08"></div></div><div></div>'
                                 });
    
        var url="https://kryptosda.kryptosmobile.com/kryptosds/user/authenticate";
        var tenantid = $rootScope.metadata.tenantid;
        var username=$scope.username.toLowerCase();
        
        var data={"username": username,"tenant" : tenantid, "password" : $scope.password};
        
        try{
        $http.post(url, data).success(function(res) {
                    $.unblockUI();
                    if(res.success){

                    $.jStorage.set("userdetails",res.userinfo);
                    var profiledata=res.userinfo;
                    $rootScope.userProfileName = profiledata.firstname+" "+profiledata.lastname;
                    $rootScope.useremail = profiledata.email;
                    $scope.loopinUserLogin($rootScope.useremail, $scope.password);
                    //alert(profiledata.img+" "+profiledata.studentRole);
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
                                $rootScope.$apply();
                                navigator.geolocation.getCurrentPosition(function(){},function(){});
                                $location.path("/app/theLoop/theLoop");
                              }else{
                                $.jStorage.set("userdetails",null);
                                if(window.device){
                                    navigator.notification.alert('Please check your login credentials and try again.',null,'Error','Ok');
                                }else{
                                    alert('Please check your login credentials and try again.');
                                }
                            }
                            $.unblockUI();
                            }).error(function(data, status, headers, config) {
                                $.jStorage.set("userdetails",null);
                                if(window.device){
                                    navigator.notification.alert('Please check your login credentials and try again.',null,'Error','Ok');
                                }else{
                                    alert('Please check your login credentials and try again.');
                                }
                                $.unblockUI();
                            });
            }catch(e){alert(e)}
    }

    $scope.openSignUp=function(){
        $location.path("/app/IIITDMobile/IIITDMobile");
    }
    $scope.openForgotPassword=function(){
        $location.path("/app/ForgotPassword2/ForgotPassword2");
    }
}





