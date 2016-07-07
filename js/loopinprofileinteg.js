Few discussion points : every app different maintainance , if release then different for different app
Loopin work 
Tech :
redirect to kryptos profile when click on posted by
post notice screens (to post) publish post, capture photo discussion plugin
if category not specified then fill the other category 
in posting show name of the page from which have posted ( replace the heading by page name - then sub heading showing ) when posting have to integrate the categories also
when posting then spam and report abuse 
push notification mailing
commenting and liking functionality 
logo making and adding it when posting
post notice screens (to post) publish post, capture photo discussion plugin
category viewing on the wall if posting is category wise - category views 

shubhanshhu
backend liking and commenting feature
(design to tell him) in posting show name of the page from which have posted ( replace the heading by page name - then sub heading showing ) when posting have to integrate the categories also


shubhanshu (sit with him sat sun to integrate) to see some of its parts 
1) Take files from vishal integrate (ask if userid of their user also their) in them (login register and update js files) (1 js file) debugging via alerts (to sit with him) 
2) calling the function from inside the kryptos code (return userid to kryptos) (for register login and updation )
3) have posting developed and integ , posting function integration with views (without photo , then with photo) 
4) mark spam and report abuse 
5) category display views (all categories with selection) and adding in it the functionality
6) clicking on the name and diverted to kryptos profile
7) push notifications integration
8) views for liking and commenting 
9) backend frontend integration


Biss :
1) logo making ,certi making , talk to proceed with rahul , talking about monetisation in nit ,college admission domain to venture , talk with people backlogged and selected
talk with sponsoring institutions , front end dev hire , sales to institutions like princeton , 









function calling when login chk ( updateinterestedcategories and getcount )
checkPreAuth();
app.updateInterestedCategories();
app.getCount("Notices");

chk to see if its registered , if yes get count and updateInterestedCategories
if not registered then register it


    registration
       things needed : deviceType , email , pass ( constant store : kryptos ) , name , roll , college 

       college mapping , which file to put all the functions then calling a function and returing the userid
 when logout all information gets deleted?


function checkPreAuth() {

        var email = window.localStorage["email"];
                var password = window.localStorage["password"];
                
             

}











            getCount: function (mainCategory) {

        //if here to execute only when profile id set
        //$.jStorage.set("feedEntriesData" + mainCategory + categoryId + categoryName, feedEntriesDataJson);
        //($.jStorage.get("feedEntriesData" + mainCategory + categoryId + categoryName))
        //$.jStorage.get('feedEntriesData' + mainCategory + value.categoryId + value.categoryName)
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



















updateInterestedCategories: function () {

        //if here to execute only when profile id set
        if (window.localStorage["email"] != undefined || window.localStorage["password"] != undefined) {
            var u = window.localStorage.getItem('email');
            var p = window.localStorage.getItem('password');

            var updateInterestedCategoriesUrl = "http://collegeboard-env2.elasticbeanstalk.com/userInfo/userSignIn?userEmail=" + u + "&userPassword=" + p;
            $.get(updateInterestedCategoriesUrl, function (response) {

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

                }
                if (isSuccess) {
                    //store profile data in local storage
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
                    window.localStorage["profileData"] = JSON.stringify(profileData);
                }

            }).fail(function () {

                //alert("some probem with internet or server not able to fetch count in categories.");
            });

        }
        //alert("Hello");

    }






















$scope.userLogin = function () {

            //alert("clicked");

            var form = $("#loginForm");
            //disable the button so we can't resubmit while we wait
            $("#submitButton", form).attr("disabled", "disabled");
            var u = $("#email", form).val();
            var p = $("#password", form).val();
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
                            window.localStorage["email"] = register_email;
                            window.localStorage["password"] = register_password;
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
                            window.localStorage["profileData"] = JSON.stringify(profileData);
                            //$.mobile.changePage("some.html");
                            //show categories and hide login and register form

                            $('#loginPage').hide();
                            //$('#registerPage').hide();
                            $('#toolbar').show();
                            $('#category-page').show();
                            app.getCount("Notices");
                            //app.getCount("News");
                            menu.setSwipeable(true);


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

        $('#login-form-link').click(function (e) {
            $("#loginForm").delay(100).fadeIn(100);
            $("#registerForm").fadeOut(100);
            $('#register-form-link').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });
    }]);











    module.controller('registerController', ["$scope", "$http", "FeedPluginData", function ($scope, $http, FeedPluginData) {


        $scope.userRegister = function () {

            //alert("clicked");

            var deviceType = (navigator.userAgent.match(/iPad/i)) == "iPad" ? "iPad" :
                (navigator.userAgent.match(/iPhone/i)) == "iPhone" ? "iPhone" :
                    (navigator.userAgent.match(/Android/i)) == "Android" ? "Android" :
                        (navigator.userAgent.match(/BlackBerry/i)) == "BlackBerry" ? "BlackBerry" : "null";

            var form = $("#registerForm");
            //disable the button so we can't resubmit while we wait
            $("#register_submitButton", form).attr("disabled", "disabled");
            var u = $("#register_email", form).val();
            var p = $("#register_password", form).val();
            var cp = $("#register_confirmPassword", form).val();
            var name = $("#register_name", form).val();
            var roll = $("#register_roll", form).val();
            var college = $("#register_college", form).val();
            //var categories = $("#register_categories", form).val();
            var contactNumber = $("#register_contactNumber", form).val();
            var referenceCode = $("#referenceCode", form).val();

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
                        window.localStorage["email"] = register_email;
                        window.localStorage["password"] = register_password;
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
                        window.localStorage["profileData"] = JSON.stringify(profileData);
                        //$.mobile.changePage("some.html");
                        //show categories and hide login and register form

                        $('#loginPage').hide();
                        //$('#registerPage').hide();
                        $('#toolbar').show();
                        $('#category-page').show();
                        app.getCount("Notices");
                        //app.getCount("News");
                        menu.setSwipeable(true);


                    } else {
                        // or message from shubhanshu to show here
                        showAlertMessage("Your registration failed try again");
                    }
                }).error(function (response) {

                    showAlertMessage(response.message);
                    showAlertMessage("Sorry,no internet connection available right now.Please try again later");
                });


                $("#register_submitButton").removeAttr("disabled");

            } else {
                //Thanks Igor!
                showAlertMessage("You must enter a valid email ,password and matching confirm password ");
                $("#register_submitButton").removeAttr("disabled");
            }


            /*var selectedItem = $scope.categories[index];
             FeedPluginData.selectedItem = selectedItem;
             $scope.ons.navigator.pushPage('feed-category.html', {title : selectedItem.title});*/
        }


    }]);
































module.controller('editProfileController', ["$scope", "$http", function ($scope, $http) {
        var profileData = $.parseJSON(window.localStorage.getItem('profileData'));
        //to place condition if not null here
        $scope.editProfileButtonText = "Submit";
        $scope.name = profileData.register_name;
        $scope.email = profileData.register_email;
        $scope.college = profileData.register_college;
        $scope.userCollegeBranches = profileData.userCollegeBranches;
        $scope.contactNumber = profileData.contact_nos;
        $scope.roll = profileData.register_roll;

        $scope.yearGrad = profileData.register_yearGrad;
        if (profileData.register_branch != null)
            $scope.branch = profileData.register_branch.branchId;
        $scope.company = profileData.register_company;
        $scope.user_id = profileData.user_id;
        $scope.status = profileData.register_status;
        //$scope.aboutMe = profileData.register_aboutMe;
        $scope.fbUrl = profileData.register_fbUrl;
        $scope.twitterUrl = profileData.register_twitterUrl;
        $scope.interests = profileData.register_interests;
        $scope.linkedinUrl = profileData.register_linkedinUrl;

        //branch if null angular puts a nullable object in the options tag
        if ($scope.branch == null) {
            $scope.branch = '';
        }

        var yearList = [];
        for (var i = 1970; i <= 2030; i++) {
            yearList.push(i);
        }

        $scope.gradYearList = yearList;
        $scope.userSelectedBranch = function (selectTagBranch) {
            if (selectTagBranch == profileData.register_branch.branchId) {
                return true;
            }
        };
        $scope.userSelectedYear = function (selectTagYear) {
            if (selectTagYear == profileData.register_yearGrad) {
                return true;
            }
        };

        $scope.submitForm = function () {
            $scope.disableButton = true;
            $scope.editProfileButtonText = "Wait...";
            //var name = $scope.name;
            var contactNumber = $scope.contactNumber;
            var roll = $scope.roll;
            var user_id = $scope.user_id;
            var yearGrad = $scope.yearGrad;
            var branch = $scope.branch;
            var company = $scope.company;
            var status = $scope.status;
            //var aboutMe = $scope.aboutMe;
            var fbUrl = $scope.fbUrl;
            var twitterUrl = $scope.twitterUrl;
            var linkedinUrl = $scope.linkedinUrl;
            var interests = $scope.interests;


            var fd = new FormData();
            if (roll != undefined && roll != null) {
                fd.append('rollNumber', roll);
            }
            if (yearGrad != undefined && yearGrad != null && yearGrad != '') {
                fd.append('yearGrad', yearGrad);
            }
            if (contactNumber != undefined && contactNumber != null) {
                fd.append('contactNumber', contactNumber);
            }
            if (branch != undefined && branch != null && branch != '') {
                fd.append('branch', branch);
            }
            if (company != undefined && company != null) {
                fd.append('company', company);
            }
            if (status != undefined && status != null) {
                fd.append('status', status);
            }
            if (fbUrl != undefined && fbUrl != null) {
                fd.append('fbUrl', fbUrl);
            }
            if (twitterUrl != undefined && twitterUrl != null) {
                fd.append('twitterUrl', twitterUrl);
            }
            if (linkedinUrl != undefined && linkedinUrl != null) {
                fd.append('linkedinUrl', linkedinUrl);
            }
            if (interests != undefined && interests != null) {
                fd.append('interests', interests);
            }
            fd.append('userId', user_id);


            //fd.append('aboutMe', aboutMe);


            var locationOrigin = "http://collegeboard-env2.elasticbeanstalk.com";

            $http.post(locationOrigin + "/userInfo/editUserInfo", fd, {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                }
            }).success(function (response) {


                var isSuccess = response.success;
                if (isSuccess) {
                    showAlertMessage("Your information has been edited . Go back.");
                    var register_name = response.data.userName;
                    var register_roll = response.data.rollNumber;
                    var user_id = response.data.userId;
                    var register_yearGrad = response.data.yearGrad;
                    var register_branch = response.data.branch;
                    var register_company = response.data.company;
                    var contact_nos = response.data.contactNumber;
                    var userCollegeBranches = response.data.collegeBranches;
                    var register_email = response.data.emailAddress;
                    var register_password = response.data.password;
                    var register_college = response.data.collegeName;
                    var interestedCategories = response.data.userCategories;
                    var register_status = response.data.status;
                    //var register_aboutMe = response.data.aboutMe;
                    var register_fbUrl = response.data.fbUrl;
                    var register_twitterUrl = response.data.twitterUrl;
                    var register_linkedinUrl = response.data.linkedinUrl;
                    var register_interests = response.data.interests;
                    var special_user = response.data.specialUser;

                    var profileData = {
                        'register_email': register_email,
                        'user_id': user_id,
                        'contact_nos': contact_nos,
                        'register_yearGrad': register_yearGrad,
                        'register_branch': register_branch,
                        'userCollegeBranches': userCollegeBranches,
                        'register_company': register_company,
                        'register_password': register_password,
                        'register_name': register_name,
                        'register_college': register_college,
                        'register_roll': register_roll,
                        'interestedCategories': interestedCategories,
                        'register_status': register_status,
                        //'aboutMe': register_aboutMe,
                        'register_fbUrl': register_fbUrl,
                        'register_twitterUrl': register_twitterUrl,
                        'register_linkedinUrl': register_linkedinUrl,
                        'register_interests': register_interests,
                        'special_user': special_user
                    };
                    window.localStorage["profileData"] = JSON.stringify(profileData);
                    $scope.disableButton = false;
                    $scope.editProfileButtonText = "Submit";

                } else {

                    var errorMessage = response.message;
                    showAlertMessage("Following error occured while editing profile info : " + errorMessage);
                    $scope.disableButton = false;
                    $scope.editProfileButtonText = "Submit";
                    //alert(errorMessage);
                }
            }).error(function (response) {

                //alert(response.message);
                showAlertMessage("Sorry,no internet connection available right now. Please try again later..");
                $scope.disableButton = false;
                $scope.editProfileButtonText = "Submit";
            });


        };

    }]);







//show alert message to change , UI to come up with for posting , global css try use bootstrap , NITD loop can it be changed to create post

module.controller('noticePostController', ["$scope", "$http", function ($scope, $http) {
        //var profileData = JSON.parse(window.localStorage.getItem('profileData'));
        var profileData = JSON.parse($.jStorage.get('profileData'));
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
            var url = $scope.url;
            var fbUrl = $scope.fbUrl;
            var imageBlob = $scope.imageBlob;
            var categories = $scope.isSelected;


            if (heading == undefined || heading == '') {
                showAlertMessage("Please provide a heading for the notice..");
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
s            fd.append('noticeImageFile', imageBlob);

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









