function pageprocessorProfileUpdate(pagedef, $scope, $routeParams, $compile, $http, $rootScope, $sce, $window, $location) {
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

        if(profiledata.dob == undefined){
            $scope.dob='';
        }else{
            $scope.dob=profiledata.dob;
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

        if(profiledata.fbID == undefined){
            $scope.fbID='';
        }else{
            $scope.fbID=profiledata.fbID;
        }

        if(profiledata.linkedInID == undefined){
            $scope.linkedInID='';
        }else{
            $scope.linkedInID=profiledata.linkedInID;
        }

        if(profiledata.googleID == undefined){
            $scope.googleID='';
        }else{
            $scope.googleID=profiledata.googleID;
        }

        if(profiledata.gpa == undefined){
            $scope.gpa='';
        }else{
            $scope.gpa=profiledata.gpa;
        }
        if(profiledata.syncedFacebook == undefined){
            $scope.showSocialTab=false;
        }else{
            $scope.showSocialTab=true;
        }


        $scope.$apply();
        }

  
  
  

    
}