var app=angular.module("myApp",[]);

app.controller("MyCtr",function($scope){
    $scope.listOfContacts=[
        {id:1,Name:"kiran",PhoneNumber:"8884408060",
        Email:"kiran.1484u@gmail.com"},

        {id:2,Name:"Arun",PhoneNumber:"9669699996",
        Email:"Arun.4282@gmail.com"},

        {id:3,Name:"chethan",PhoneNumber:"8888956545",
        Email:"chethan.1484u@gmail.com"},

        {id:4,Name:"Nandish",PhoneNumber:"8866696966",
        Email:"Nandy@gmail.com"}

    ]
    $scope.frmToggle = function() {
        $('#contactForm').slideToggle();
    }
    
    function getselectedIndex(id){
        for (let i =0;i  <$scope.listOfContacts.length;i++) {
            if($scope.listOfContacts[i].id==id)
            return i;
            
        }
    }
    $scope.add=function(){
        $scope.listOfContacts.push({
            Name:$scope.Name,
            PhoneNumber:$scope.PhoneNumber,
            Email:$scope.Email,
        })
    }
    $scope.delete=function(id){
        var index=getselectedIndex(id);
        $scope.listOfContacts.splice(index,1);
    }

    $scope.selectEdit=function(id){
        var index=getselectedIndex(id)
        var product=$scope.listOfContacts[index];
        $scope.id=product.id;
        $scope.Name=product.Name;
        $scope.PhoneNumber=product.PhoneNumber;
        $scope.Email=product.Email
    }
   $scope.edit=function(){
       var index=getselectedIndex($scope.id);
       $scope.listOfContacts[index].Name=$scope.Name;
       $scope.listOfContacts[index].PhoneNumber=$scope.PhoneNumber;
       $scope.listOfContacts[index].Email=$scope.Email;

   }

});
   