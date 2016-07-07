//register  (where the call for registration of kryptos there)
// initialisation function (kryptos to call when app loggedin) (chk if flag set , getcount and updatecategories)

//registercall 

/*var fd = new FormData();
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

*/

var app = {
    


        initialisation: function () {
        checkPreAuth();

        app.updateInterestedCategories();
        app.getCount("Notices");   

    },
    // there are 2 definitions of getcount they both do the same thing but otherone cannot be called from somewhere else wrong design
    getCount: function (mainCategory) {

        //if here to execute only when profile id set
        if (window.localStorage["profileData"] != undefined) {
            var profileData = $.parseJSON(window.localStorage.getItem('profileData'));
            var catIds = [];
            if (profileData != null) {
                $.each(profileData.interestedCategories, function (key, value) {
                    catIds.push(value.categoryId);
                });
                var catIdsString = catIds.join(",");

                var postedDates = [];

                $.each(profileData.interestedCategories, function (key, value) {
                    //catIds.push(value.categoryId);
                    if (window.localStorage['feedEntriesData' + mainCategory + value.categoryId + value.categoryName] != undefined) {
                        var categoryFeed = JSON.parse(window.localStorage.getItem('feedEntriesData' + mainCategory + value.categoryId + value.categoryName));
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
                        window.localStorage['#notification' + mainCategory + 'Count-' + value.categoryId] = 0;
                    });


                    $.each(response, function (key, value) {
                        $('#notification' + mainCategory + 'Count-' + key).text(value);
                        if (value > 0) {
                            $('#notificationNew' + mainCategory).text("New " + mainCategory);
                        }
                        window.localStorage['#notification' + mainCategory + 'Count-' + key] = value.mostRecentNoticeCount;
                        window.localStorage['#notificationTimestamp' + mainCategory + 'Date-' + key] = value.mostRecentNoticeDate;
                    });


                }).fail(function () {

                    //alert("some probem with internet or server not able to fetch count in categories.");
                });
            }
        }
        //alert("Hello");

    },

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

    },

    receivedEvent: function (id) {
    }

};