$.mobile.linkBindingEnabled = false;
$.mobile.hashListeningEnabled = false;
var app=angular.module("mainApp",['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    
    $routeProvider
        .when('/',{
            templateUrl:'html/main.html', 
            controller:'indexCtrl'           
        })
        .when('/home',{
            templateUrl:'html/main.html',
            controller:'mainCtrl'
        })
        .when("/schwerpunkte",{
            templateUrl:'html/taetigkeitsschwerpunkte.html', 
            controller:'schwerpunkteCtrl'
        }) 
        .when("/leistungen",{
            templateUrl:'html/leistungen.html', 
            controller:'leistungenCtrl'
        }) 
        .when("/miete",{
            templateUrl:'html/mietrecht.html',
            controller:'mietrechtCtrl'
        }) 
        .when("/familie",{
            templateUrl:'html/familienrecht.html',
            controller:'familienrechtCtrl'  
        })
        .when("/verkehr",{
            templateUrl:'html/verkehrsrecht.html',
            controller:'verkehrsrechtCtrl'
        })/**/
        .when("/weitere",{
            templateUrl:'html/taetigkeitsschwerpunkte_weitere.html',
            controller:'weitereCtrl'
        })
        .when("/team",{
            templateUrl:'html/team.html', 
            controller:'teamCtrl'
        }) 
        .when("/rechtsprechung",{
            templateUrl:'html/rechtsprechung.html', 
            controller:'rechtsprechungCtrl'
        }) 
        .when("/email",{
            templateUrl:'html/email.html', 
            controller:'emailCtrl'
        }) 
        .when("/kontakt",{
            templateUrl:'html/email.html', 
            controller:'emailCtrl'
        }) 
        .when("/anfahrt",{
            templateUrl:'html/anfahrt.html', 
            controller:'anfahrtCtrl'
        }) 
        .when("/impressum",{
            templateUrl:'html/impressum.html', 
            controller:'impressumCtrl'
        })
        .when("/datenschutz",{
            templateUrl:'html/datenschutz.html', 
            controller:'datenschutzCtrl'
        })
        .otherwise({
            redirectTo:'html/main.html'
        });
    }]);
ngApp.directive('jqm', function($timeout) {
  return {
    link: function(scope, elm, attr) {
        $timeout(function(){
            elm.trigger('create');
        });
    }
  };
});
app.controller('indexCtrl', function(){
        var siteWidth = window.innerWidth;
        siteWidth="gfgf";
        $('#siteWidth').text(siteWidth);
        $('#siteWidth').css({
            display:'none',
            backgroundColor:'green'
        });

    
    
});
app.controller('headerCtrl', function($scope){
    /*jqmUtils = {
        setContentFullHeight: function () {
            var screenH = $.screen.getScreenHeight();
            var screenW = $.screen.getScreenWidth();
            console.log(screenH, screenW);
            var header = $(".ui-header").hasClass("ui-header-fixed") ? $(".ui-header").outerHeight() - 1 : $(".ui-header").outerHeight();
            var footer = $(".ui-footer").hasClass("ui-footer-fixed") ? $(".ui-footer").outerHeight() - 1 : $(".ui-footer").outerHeight();
            var contentCurrent = $(".ui-content").outerHeight() - $(".ui-content").height();
            var content = screen - header - footer - contentCurrent;
            $(".ui-content").height(content);
            return content;
        }
    };*/
    $('#banner').change(function(){
        var logoWidth = $('#banner').height() *0.9;
        var logoHeight = logoWidth * 1.7;
        
        $('#logo').css({
            width:"'"+logoWidth+"'",//logoWidth,
            height:"'"+logoHeight+"'"//logoHeight
        });
    });
    /*$('#banner').change(function(){
        console.log("Hallo");
        var logoWidth = $('#banner').height() *0.9;
        var logoHeight = logoWidth * 1.7;
        $('#logo').css({
            width:'3rem',//logoWidth,
            height:'3rem'//logoHeight
        });
    });    */
    $('#navSandwich').click(function(){
     $('#navToggleSmall').slideToggle("slow");
    });
    $('#navToggleSmall li').click(function(){
     $('#navToggleSmall').slideUp("slow");
    });    
});
app.controller('naviCtrl', function($scope){
    $scope.toggleKontakt = function(){
        $('#ulKontakt').toggle(200); 
        $('#ulKanzlei').hide(200);       
    };
    $scope.toggleKanzlei=function(){
        $('#ulKanzlei').toggle(200);
        $('#ulKontakt').hide(200);        
    };
    $scope.slideUp=function(){
        $('#ulKanzlei').slideUp(200);
        $('#ulKontakt').slideUp(200);
    };
    $scope.slideUpNavSite1 = function(){        
        $('.navSmall').slideUp(200);        
    };    
});
app.controller('asideLeftCtrl', function($scope){
    onload(function(){alert("Fick");});
    $('#navLeftSmall ul li').click(function(){
         $('.logo').slideToggle('slow');
         
     });
});
app.controller('rechtsprechungCtrl', function($scope){
    $scope.openFall=function(){        
        $('#fall').slideToggle(200);
        $('#neuestes').slideUp(200);
        $('#praxis').slideUp(200);

    };
    $scope.openNeuestes=function(){        
        $('#neuestes').slideToggle(200);
        $('#fall').slideUp(200);
        $('#praxis').slideUp(200);

    };
    $scope.openPraxis=function(){        
        $('#praxis').slideToggle(200);
        $('#fall').slideUp(200);
        $('#neuestes').slideUp(200);
    };
});
app.controller('indexCtrl', function($scope){ 
        
            $scope.siteWidth=window.innerWidth;
           
        //$scope.siteWidth = window.innerWidth;               
});
app.controller('asideLeftCtrl', function($scope){
    $('#liKanzlei').mouseover(function(){
        $('#ulKanzlei').slideDown('slow');
    }); 
    $('#liHome, #liIhrRecht').mouseover(function(){
        $('#ulKanzlei').slideUp('slow');               
    });
    $('.liUlKanzlei').click(function(){
        $('#ulKanzlei').slideUp('slow');
    });
});
app.controller('mainCtrl', function($scope){});
app.controller('schwerpunkteCtrl', function($scope){});
app.controller('familienrechtCtrl', function($scope){});
app.controller('mietrechtCtrl', function($scope){});
app.controller('verkehrsrechtCtrl', function($scope){});
app.controller('sliderCtr.', function($scope){
    var x=30;
    var y= x*0.75;
    $('.slider').css({
        width: x +"rem",
        height:y + "rem"
    });
});
app.controller('weitereCtrl', function($scope){});
app.controller('emailCtrl', function($scope){
    $('#dataCheck').change(function(){
    if(document.getElementById('dataCheck').checked==true){
        $("#inputSubmit").slideDown('slow');
    }  
    else{
        $("#inputSubmit").slideUp('slow');
    }  
});
    
    /* $('#dataCheck').change(function(){
    //if($('#dataCheck').checked) {
        $('inputSubmit').css({
            display:'none'
        });
   $("#inputSubmit").show();
} else {
    $("#inputSubmit").hide();
}*/
});
    /*var dataChecked;
    $("#dataCheck").change(function(){
        dataChecked=$('#dataCheck').attr('checked')});
    if(dataChecked){    
        $('#inputSubmit').css({
            display:'block'
        });
    }*/
app.controller('anfahrtCtrl', function($scope){});
app.controller('impressumCtrl', function($scope){});
app.controller('datenschutzCtrl', function($scope){});
app.controller('leistungenCtrl', function($scope){});
app.controller('teamCtrl', function($scope){
    $scope.changePic1=function(){
        $('#picTeam').css({
            backgroundImage:'url("assets/team1.jpg")'
        });
        $('.label1').css({
            backgroundColor:'orange'
        });        
        $('.label2, .label3, .label4, .label5, .label6').css({
            backgroundColor:'#efefef'
        });  
    };
    $scope.changePic2=function(){
        $('#picTeam').css({
            backgroundImage:'url("assets/team2.jpg")'
        });
        $('.label2').css({
            backgroundColor:'orange'
        });        
        $('.label1, .label3, .label4, .label5, .label6').css({
            backgroundColor:'#efefef'
        });  
    };
    $scope.changePic3=function(){
        $('#picTeam').css({
            backgroundImage:'url("assets/team3.jpg")',
            transition: 'opacity 2s ease-in-out'
        });
        $('.label3').css({
            backgroundColor:'orange'
        });        
        $('.label1, .label2, .label4, .label5, .label6').css({
            backgroundColor:'#efefef'
        });  
    };
    $scope.changePic4=function(){
        $('#picTeam').fadeIn(300).css({
            backgroundImage:'url("assets/team4.jpg")'
        });
        $('.label4').css({
            backgroundColor:'orange'
        });        
        $('.label1, .label2, .label3, .label5, .label6').css({
            backgroundColor:'#efefef'
        });  
    };
    $scope.changePic5=function(){
        $('#picTeam').css({
            backgroundImage:'url("assets/team5.jpg")'
        });
        $('.label5').css({
            backgroundColor:'orange'
        });        
        $('.label1, .label2, .label3, .label4, .label6').css({
            backgroundColor:'#efefef'
        });  
    };
    $scope.changePic6=function(){
        $('#picTeam').css({
            backgroundImage:'url("assets/team6.jpg")'
        });
        $('.label6').css({
            backgroundColor:'orange'
        });        
        $('.label1, .label2, .label3, .label4, .label5').css({
            backgroundColor:'#efefef'
        });  
    };
    
});
/*function vergroessern1(){
    document.getElementById("groesser").style.backgroundImage="url('../assets/team1.jpg')";
    document.getElementById("groesser").style.border=2+"px" + " ridge" + " grey";
    document.getElementById("groesser").style.boxShadow="2px 2px 7px black";
    document.getElementById("groesser").style.display="block";
}
function vergroessern2(){
    document.getElementById("groesser").style.backgroundImage="url('../assets/team2.jpg')";
    document.getElementById("groesser").style.border=2+"px" + " ridge" + " grey";
    document.getElementById("groesser").style.boxShadow="2px 2px 7px black";
    document.getElementById("groesser").style.display="block";
}
function vergroessern3(){
    document.getElementById("groesser").style.backgroundImage="url('../assets/team3.jpg')";
    document.getElementById("groesser").style.border=2+"px" + " ridge" + " grey";
    document.getElementById("groesser").style.boxShadow="2px 2px 7px black";
    document.getElementById("groesser").style.display="block";
}
function vergroessern4(){
    document.getElementById("groesser").style.backgroundImage="url('../assets/team4.jpg')";
    document.getElementById("groesser").style.border=2+"px" + " ridge" + " grey";
    document.getElementById("groesser").style.boxShadow="2px 2px 7px black";
    document.getElementById("groesser").style.display="block";
}
function loeschen(){
    document.getElementById("groesser").style.backgroundImage="";
    document.getElementById("groesser").style.border="";
    document.getElementById("groesser").style.boxShadow="";
    document.getElementById("groesser").style.display="none";
}*/