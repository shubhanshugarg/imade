function pageprocessorProfileUpdate(pagedef, $scope, $routeParams, $compile, $http, $rootScope, $sce, $window, $location) {
  
  $rootScope.blackOverlay=false;
  $rootScope.$apply();
  var data1 = $compile($(pagedef.datatemplate))($scope);
  $("#appContent").append(data1);

  $scope.editProfile = function() {
    $location.path("/app/ProfileUpdate/ProfileUpdatePage2");
  }

  $scope.editPersonalInfo = function() {
    $location.path("/app/ProfileUpdate/ProfileUpdatePage3");
  }

  $scope.editEducation = function() {
    $location.path("/app/ProfileUpdate/ProfileUpdatePage4");
  }

  var profiledata = $.jStorage.get("userdetails");
  if (profiledata) {
    $scope.userProfileName = profiledata.firstname + " " + profiledata.lastname;
    $scope.useremail = profiledata.email;
    if (profiledata.img == undefined || profiledata.img == "" || profiledata.img == "images/profileImage.png") {
      $scope.userProfilePic = 'images/profileImage.png';
      $scope.showUploadPhoto = true;
    } else {
      $scope.userProfilePic = profiledata.img;
      $scope.showUploadPhoto = false;
    }

    if (profiledata.DN == "" || profiledata.DN == undefined || profiledata.DN == null) {
      $scope.showdefaultDN = true;

    } else {
      $scope.showdefaultDN = false;
      $scope.userProfileDN = profiledata.DN;
      $scope.userProfileDN = $scope.userProfileDN.charAt(0).toUpperCase() + $scope.userProfileDN.slice(1);
    }

    if (profiledata.studentRole == "" || profiledata.studentRole == undefined || profiledata.studentRole == null) {
      $scope.showdefaultUR = true;

    } else {
      $scope.showdefaultUR = false;
      $scope.studentRole = profiledata.studentRole;
      $scope.studentRole = $scope.studentRole.charAt(0).toUpperCase() + $scope.studentRole.slice(1);
    }

    if (profiledata.InstitutionName == "" || profiledata.InstitutionName == undefined || profiledata.InstitutionName == null) {
      $scope.showdefaultInstitute = true;

    } else {
      $scope.showdefaultInstitute = false;
      $scope.InstitutionName = profiledata.InstitutionName;
      $scope.InstitutionName = $scope.studentRole.charAt(0).toUpperCase() + $scope.studentRole.slice(1);
    }







    $scope.phn = profiledata.phone;
    $scope.rollNo = profiledata.rollno;

    if (profiledata.gender == undefined) {
      $scope.gender = '';
    } else {
      $scope.gender = profiledata.gender;
    }

    if (profiledata.dob == undefined) {
      $scope.dob = '';
    } else {
      $scope.dob = profiledata.dob;
    }

    if (profiledata.userRole == undefined) {
      $scope.userRole = '';
    } else {
      $scope.userRole = profiledata.userRole;
    }

    if (profiledata.country == undefined) {
      $scope.country = '';
    } else {
      $scope.country = profiledata.country;
    }
    $scope.InstitutionName = profiledata.InstitutionName;
    if (profiledata.course == undefined) {
      $scope.course = '';
    } else {
      $scope.course = profiledata.course;
    }
    if (profiledata.stream == undefined) {
      $scope.stream = '';
    } else {
      $scope.stream = profiledata.stream;
    }

    if (profiledata.fbID == undefined) {
      $scope.fbID = '';
    } else {
      $scope.fbID = profiledata.fbID;
    }

    if (profiledata.linkedInID == undefined) {
      $scope.linkedInID = '';
    } else {
      $scope.linkedInID = profiledata.linkedInID;
    }

    if (profiledata.googleID == undefined) {
      $scope.googleID = '';
    } else {
      $scope.googleID = profiledata.googleID;
    }

    if (profiledata.gpa == undefined) {
      $scope.gpa = '';
    } else {
      $scope.gpa = profiledata.gpa;
    }
    if (profiledata.syncedFacebook == undefined) {
      $scope.showSocialTab = false;
    } else {
      $scope.showSocialTab = true;
    }


    $scope.$apply();
  }

  $scope.savedUserProfile = function() {
    var userData = {};
    var token = $.jStorage.get("userdetails").usertoken;
    var rollno = $.jStorage.get("userdetails").rollno;
    var _id = $.jStorage.get("userdetails")._id;
    var tenant = $.jStorage.get("userdetails").tenant;

    userData.usertoken = token;
    userData._id = _id;
    userData.tenant = tenant;
    userData.rollno = rollno;

    userData.firstname = $scope.userProfileName.split(" ")[0];
    userData.lastname = $scope.userProfileName.split(" ")[1];

    userData.email = $scope.useremail;
    userData.img = $scope.img;

    userData.DN = $scope.userProfileDN;

    userData.studentRole = $scope.userRole;
    userData.phone = $scope.phn;

    userData.gender = $scope.gender;
    userData.dob = $scope.dob;

    userData.googleID = $scope.googleID;
    userData.linkedInID = $scope.linkedInID;
    userData.fbID = $scope.fbID;

    userData.userRole = $scope.userRole;

    userData.country = $scope.country;

    userData.course = $scope.course;

    userData.stream = $scope.stream;

    userData.gpa = $scope.gpa;

    userData.InstitutionName = $scope.InstitutionName;

    userData.interests = $scope.interest;
    userData.showSocialTab = $scope.showSocialTab;

    //alert(JSON.stringify(userData));



    var url = "https://kryptosda.kryptosmobile.com/kryptosds/user/update";

    $http.post(url, userData).success(function(data) {
      if (data.success) {
        $rootScope.userProfilePic = data.userinfo.img;
        $rootScope.useremail = $scope.useremail;
        $rootScope.userProfileName = $scope.userProfileName;

        $.jStorage.set("userdetails", data.userinfo);
        $rootScope.$apply();
        navigator.notification.alert("Profile saved.", null, ' ', 'Ok');
      } else {

        navigator.notification.alert("Profile not saved. Please try after sometime.", null, 'Error', 'Ok');
      }
      $.unblockUI();
    }).error(function(err) {
      alert(JSON.stringify(err));
      $.unblockUI();
    });
  }

  $scope.SaveProfile = function() {
    $.blockUI({
      message: '<div id="floatingBarsG"><div class="blockG" id="rotateG_01"></div><div class="blockG" id="rotateG_02"></div><div class="blockG" id="rotateG_03"></div><div class="blockG" id="rotateG_04"></div><div class="blockG" id="rotateG_05"></div><div class="blockG" id="rotateG_06"></div><div class="blockG" id="rotateG_07"></div><div class="blockG" id="rotateG_08"></div></div><div></div>'
    });

    if ($scope.uploadedPhoto != undefined) {
      var url = "https://kryptosda.kryptosmobile.com/kryptosds/api/imageUpload";
      var data = {
        'imageData': $scope.image,
        "imageExtn": 'png'
      };

      $http.post(url, data).success(function(data) {
        $scope.img = data.url;
        $scope.savedUserProfile();
        $.unblockUI();
      }).error(function(err) {
        alert(JSON.stringify(err));
        $.unblockUI();
      });
    } else {
      $scope.img = $scope.userProfilePic;
      $scope.savedUserProfile();
    }
  }


  function onFail(message) {
    //alert('Failed because: ' + message);
    $.unblockUI();
  }

  $scope.cameraSuccess = function(imageData) {
    $scope.image = "data:image/png;base64," + imageData;

    $("#userImage").attr('src', $scope.image);
    $scope.showUploadPhoto = false;

    $scope.uploadedPhoto = true;

    $.unblockUI();
  }
  $scope.useCamera = function() {
    $.blockUI({
      message: '<div id="floatingBarsG"><div class="blockG" id="rotateG_01"></div><div class="blockG" id="rotateG_02"></div><div class="blockG" id="rotateG_03"></div><div class="blockG" id="rotateG_04"></div><div class="blockG" id="rotateG_05"></div><div class="blockG" id="rotateG_06"></div><div class="blockG" id="rotateG_07"></div><div class="blockG" id="rotateG_08"></div></div><div></div>'
    });
    navigator.camera.getPicture($scope.cameraSuccess, onFail, {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL
    });
  }

  $scope.useGallery = function() {
    $.blockUI({
      message: '<div id="floatingBarsG"><div class="blockG" id="rotateG_01"></div><div class="blockG" id="rotateG_02"></div><div class="blockG" id="rotateG_03"></div><div class="blockG" id="rotateG_04"></div><div class="blockG" id="rotateG_05"></div><div class="blockG" id="rotateG_06"></div><div class="blockG" id="rotateG_07"></div><div class="blockG" id="rotateG_08"></div></div><div></div>'
    });
    navigator.camera.getPicture($scope.cameraSuccess, onFail, {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      popoverOptions: new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY)
    });
  }

  var ActionSheetSuccess = function(btn) {
    if (btn == 1) {
      $scope.useCamera();
    } else if (btn == 2) {
      $scope.useGallery();
    }
  }

  $scope.openCamera = function() {
    var options = {
      'androidTheme': window.plugins.actionsheet.ANDROID_THEMES.THEME_HOLO_LIGHT,
      'title': 'Profile Image',
      'buttonLabels': ['Take a photo', 'Choose from gallery'],
      'addCancelButtonWithLabel': 'Cancel'
    };
    window.plugins.actionsheet.show(options, ActionSheetSuccess);
  }

  $scope.openInterests = function() {
    $rootScope.toggle("interestSelect");
  }



  $scope.linkedInSync = function() {
    try {
      var liauthurl = "https://www.linkedin.com/uas/oauth2/authorization";
      var linnkedinApiurl = "https://www.linkedin.com"
      var linkedinApiBaseUrl = "https://api.linkedin.com";
      var clientid = "75lhmjfmryahk5";
      var clientsecret = "oQJPhc2ULOrPm7MW";
      var redirecturl = "https://kryptos.kryptosmobile.com/";
      $rootScope.invokeLinkedInAPI = function(endpoint, method, postdata, callback) {
        $.blockUI({
          message: '<div id="floatingBarsG"><div class="blockG" id="rotateG_01"></div><div class="blockG" id="rotateG_02"></div><div class="blockG" id="rotateG_03"></div><div class="blockG" id="rotateG_04"></div><div class="blockG" id="rotateG_05"></div><div class="blockG" id="rotateG_06"></div><div class="blockG" id="rotateG_07"></div><div class="blockG" id="rotateG_08"></div></div><div></div>'
        });
        var url = linkedinApiBaseUrl + endpoint;
        var bearertoken = 'Bearer ' + $.jStorage.get("DMLIAuthToken").access_token;
        //alert(url + " token : " + bearertoken + " method : " + method);
        $http({
          method: method,
          url: url,
          headers: {
            'Authorization': bearertoken
          },
          data: postdata
        }).success(function(data, status, headers, config) {
          //alert (data);
          $.unblockUI();
          callback(data, status, headers, config);
        }).error(function(data, status, headers, config) { //alert (data);
          $.unblockUI();
          alert("Error in service call : " + data + " Status : " + status);
        });
      }
      $rootScope.LIlogout = function() {
        var logoutcleanup = function(buttonIndex) {
          if (buttonIndex == 1) {
            $rootScope.ticket = null;
            $rootScope.loggedin = false;
            $.jStorage.deleteKey('DMLIAuthToken');
            $rootScope.$apply(function() {
              $location.path("/home");
            });
          }
        };
        //navigator.notification.confirm('Are you sure you want to logout?', // messagelogoutcleanup, // callback to invoke with index of button pressed'Just Confirming', // title['Yes', 'No'] // buttonLabels);
      }
      $rootScope.fetchLinkedInToken = function(accesscode, callback) {
        $.blockUI({
          message: '<div id="floatingBarsG"><div class="blockG" id="rotateG_01"></div><div class="blockG" id="rotateG_02"></div><div class="blockG" id="rotateG_03"></div><div class="blockG" id="rotateG_04"></div><div class="blockG" id="rotateG_05"></div><div class="blockG" id="rotateG_06"></div><div class="blockG" id="rotateG_07"></div><div class="blockG" id="rotateG_08"></div></div><div></div>'
        });
        var url = linnkedinApiurl + "/uas/oauth2/accessToken";
        var postdata = {
          "grant_type": "authorization_code",
          "client_id": clientid,
          "client_secret": clientsecret,
          "redirect_uri": redirecturl,
          "code": accesscode
        };
        $http({
          method: 'POST',
          url: url,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          transformRequest: function(obj) {
            var str = [];
            for (var p in obj) str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            return str.join("&");
          },
          data: postdata
        }).success(function(data) { //alert(JSON.stringify(data));
          $.jStorage.set("DMLIAuthToken", data);
          $.unblockUI();
          $scope.LILoggedin = true;
          callback(data);
        }).error(function(data, status, headers, config) {
          alert("Error : " + JSON.stringify(data));
          $.unblockUI();
        });
      };
      var loadLandingPage = function() { //alert("Landing page loading");
        $rootScope.invokeLinkedInAPI("/v1/people/~:(id,picture-url,first-name,last-name,email-address)?format=json", "GET", {}, function(profiledata) { //alert(JSON.stringify(profiledata));//$scope.liprofile = profiledata;$rootScope.userProfile = profiledata;
          var userProfile = {
            img: profiledata.pictureUrl,
            username: profiledata.firstName + " " + profiledata.lastName,
            email: profiledata.emailAddress
          }
          $rootScope.userProfileName = userProfile.username;
          $rootScope.useremail = userProfile.email;
          $rootScope.userProfilePic = userProfile.img;
          $.jStorage.set("UserProfile", userProfile);

          $rootScope.hideUploadPhoto = false;
          $rootScope.profileSynced = true;
          $rootScope.$apply();
          //$location.path("/home");
          //$rootScope.userProfilePic = "https://graph.facebook.com/v2.5/me/picture?height=500&width=500&access_token="+$.jStorage.get("DMFBAuthToken").access_token;
        });
      }
      $rootScope.returnLinkedInAccessToken = function() {
        return $.jStorage.get("DMLIAuthToken");
      }
      $scope.LinkedInLogin = function() {
        var launchurl = liauthurl + "?client_id=" + clientid + "&response_type=code&state=mystate&scope=r_basicprofile,r_emailaddress&redirect_uri=" + redirecturl + "";
        var iabRef = window.open(launchurl, "_blank", "location=yes,hidden=no,clearcache=yes,enableViewportScale=yes");
        var iabClose = function(data) {
          window.location.href = "index.html#home";
        };
        var loadStart = function(data) {
          if (data.url.indexOf("code=") != -1) {
            iabRef.close();
            var tokencode = data.url.substr(data.url.indexOf("code=") + 5);
            tokencode = tokencode.split("&")[0];
            $.jStorage.set("DMFBTokenCode", tokencode);
            $rootScope.fetchLinkedInToken(tokencode, function(accestoken) {
              loadLandingPage();
            });
          } else if (data.url.indexOf("error=") != -1) {
            iabRef.close();
            alert("Access Denied");
          } //alert ("Start : " + data.url);
        };
        iabRef.addEventListener("loadstart", loadStart);
      }
      $scope.LinkedInLogin(); //loadLandingPage();//return;
    } catch (e) {
      alert(e)
    }
  }




  $scope.facebookSync = function() {
    try {
      var fbauthurl = "https://www.facebook.com/dialog/oauth";
      var fbgraphurl = "https://graph.facebook.com"
      var clientid = "353054581537716";
      var clientsecret = "aa14fc4067cd4ab0369b779d3cc728bd";
      var redirecturl = "https://kryptos.kryptosmobile.com/";
      $rootScope.invokeFBGraphAPI = function(endpoint, method, postdata, callback) {
        $.blockUI({
          message: '<div id="floatingBarsG"><div class="blockG" id="rotateG_01"></div><div class="blockG" id="rotateG_02"></div><div class="blockG" id="rotateG_03"></div><div class="blockG" id="rotateG_04"></div><div class="blockG" id="rotateG_05"></div><div class="blockG" id="rotateG_06"></div><div class="blockG" id="rotateG_07"></div><div class="blockG" id="rotateG_08"></div></div><div></div>'
        });
        var url = fbgraphurl + endpoint;
        var bearertoken = 'Bearer ' + $.jStorage.get("DMFBAuthToken").access_token; //alert(url + " token : " + bearertoken + " method : " + method);
        $http({
          method: method,
          url: url,
          headers: {
            'Authorization': bearertoken
          },
          data: postdata
        }).success(function(data, status, headers, config) { //alert (data);
          $.unblockUI();
          callback(data, status, headers, config);
        }).error(function(data, status, headers, config) { //alert (data);
          $.unblockUI();
          alert("Error in service call : " + data + " Status : " + status);

          /*if (status == 401 && data.errors && data.errors.length > 0 && data.errors[0].message === 'Invalid access token.') { //Ticket expired.. need to reloginvar authpostdata = {"grant_type": "refresh_token","client_id": clientid,"client_secret": clientsecret,"refresh_token": $.jStorage.get("CanvasAuthToken").refresh_token};$http.post(canvasurl + "/login/oauth2/token", authpostdata).success(function(data, status, headers, config) {//alert("Refresh token Data " + JSON.stringify(data));var curStoredToken = $.jStorage.get("CanvasAuthToken");curStoredToken.access_token = data.access_token;$.jStorage.set("CanvasAuthToken", curStoredToken);$rootScope.invokeCanvasAPI(endpoint, method, postdata, callback);$.unblockUI();}).error(function(data, status, headers, config) {alert("Error : " + JSON.stringify(data));$.unblockUI();});} else {callback(data, status, headers, config);}*/
        });
      }
      $rootScope.fetchFBToken = function(accesscode, callback) {
        $.blockUI({
          message: '<div id="floatingBarsG"><div class="blockG" id="rotateG_01"></div><div class="blockG" id="rotateG_02"></div><div class="blockG" id="rotateG_03"></div><div class="blockG" id="rotateG_04"></div><div class="blockG" id="rotateG_05"></div><div class="blockG" id="rotateG_06"></div><div class="blockG" id="rotateG_07"></div><div class="blockG" id="rotateG_08"></div></div><div></div>'
        });
        var url = fbgraphurl + "/v2.5/oauth/access_token";
        var postdata = {
          "grant_type": "authorization_code",
          "client_id": clientid,
          "client_secret": clientsecret,
          "redirect_uri": redirecturl,
          "code": accesscode
        };
        $http.post(url, postdata).success(function(data, status, headers, config) { //alert("Data " + JSON.stringify(data));
          $.jStorage.set("DMFBAuthToken", data);
          $.unblockUI();
          $scope.FBLoggedin = true;
          callback(data);
        }).error(function(data, status, headers, config) {
          alert("Error : " + JSON.stringify(data));
          $.unblockUI();
        });
      };
      var loadLandingPage = function() { //alert("Landing page loading");
        $rootScope.invokeFBGraphAPI("/v2.5/me/?fields=picture,cover,name,gender,first_name,last_name,email", "GET", {}, function(profiledata) {
          $scope.fbprofile = profiledata;
          var userProfile = {
            img: "https://graph.facebook.com/v2.5/me/picture?height=500&width=500&access_token=" + $.jStorage.get("DMFBAuthToken").access_token,
            username: profiledata.name,
            email: profiledata.email
          }
          $rootScope.userProfileName = userProfile.username;
          $rootScope.useremail = userProfile.email;
          $rootScope.userProfilePic = userProfile.img;

          $scope.defaultImage = userProfile.img;
          $scope.userDisplayName = userProfile.username;
          $scope.userRole = "Role";

          $scope.$apply();
          $rootScope.hideUploadPhoto = false;

          $.jStorage.set("UserProfile", userProfile);

          $rootScope.profileSynced = true;
          $location.path("/home");
          //$rootScope.userProfilePic = "https://graph.facebook.com/v2.5/me/picture?height=500&width=500&access_token="+$.jStorage.get("DMFBAuthToken").access_token;
        });
      }
      $scope.FBLogin = function() {
        var launchurl = fbauthurl + "?client_id=" + clientid + "&response_type=code&redirect_uri=" + redirecturl + "&scope=public_profile,email";
        var iabRef = window.open(launchurl, "_blank", "location=yes,hidden=no,clearcache=yes,enableViewportScale=yes");
        var iabClose = function(data) {
          window.location.href = "index.html#home";
        };
        var loadStart = function(data) {
          if (data.url.indexOf("code=") != -1) {
            iabRef.close();
            var tokencode = data.url.substr(data.url.indexOf("code=") + 5);
            $.jStorage.set("DMFBTokenCode", tokencode);
            $rootScope.fetchFBToken(tokencode, function(accestoken) {
              loadLandingPage();
            });
          } else if (data.url.indexOf("error=") != -1) {
            iabRef.close();
            alert("Access Denied");
          } //alert ("Start : " + data.url);};
          iabRef.addEventListener("loadstart", loadStart);
        }
      }
      $scope.FBLogin(); //loadLandingPage();//return;
    } catch (e) {
      alert(e)
    }
  }
}













//screen 2



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




//screen 3











