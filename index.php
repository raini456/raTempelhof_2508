<!DOCTYPE html>
<html>
    <head>
        <title>Rechtanwalt Berlin Tempelhof</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="assets/css/lib/mycolors.css" />
        <link rel="stylesheet" href="assets/css/lib/jquery.mobile.icons.min.css" />
        <link href="assets/css/lib/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <link href="assets/css/styles.css" rel="stylesheet" type="text/css"/>
        <link rel="stylesheet" href="assets/css/lib/jquery.mobile.structure-1.4.5.min.css" /> 
        <script src="assets/js/lib/jquery-1.11.1.min.js"></script> 
        <script src="assets/js/lib/jquery.mobile-1.4.5.min.js"></script>
        <script src="assets/js/lib/bootstrap.min.js" type="text/javascript"></script>
        <script src="assets/js/lib/angularJS.js" type="text/javascript"></script>
        <script src="assets/js/lib/ngRoute.js" type="text/javascript"></script>
        <script src="assets/js/mainJS.js" type="text/javascript"></script>
    </head>
    <body ng-app="mainApp"> 
        <div data-role="content">
            <div data-role="page" id="page_home">
                <header>
                    <div class='row'>
                        <h1>Rechtsanwaltskanzlei Rainer Döring</h1>
                        <!--input type='text' ng-model='test'><br>
                        {{test}}-->
                    </div>
                    <div data-role="navbar" data-grid="b">
                        <ul>
                            <!--li><a href="#" class="ui-btn-active">One</a></li-->
                            <li><a href="#/miete">Mietrecht</a></li>
                            <li><a href="#/verkehr">Verkehrsrecht</a></li>
                            <li><a href="#/familie">Familienrecht</a></li>
                        </ul>
                    </div><!-- /navbar -->
                </header>
                <div class='row'>                  
                    <div class="col-2" ng-include="'html/asideLeft.html'"></div>
                    <div class="col-8" ng-view="view"></div>
                    <div class="col-2" ng-include="'html/asideRight.html'"></div>
                </div>
                
                


                <!--input type='text' ng-model='test'><br>
                {{test}}-->

                
                
                <div data-role="footer" data-position="fixed">
                    <div ng-include="'html/footer.html'"></div>
                </div>
            </div>
        </div>

    </body>
</html>