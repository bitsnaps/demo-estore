<!doctype html>
<html lang="en" class="no-js">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <title>Welcome to Grails</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

    <style type="text/css">
        [ng\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak {
            display: none !important;
        }
    </style>

    <asset:stylesheet src="application.css"/>

    <asset:link rel="icon" href="favicon.ico" type="image/x-ico" />

    <script type="text/javascript">
        window.contextPath = "${request.contextPath}";
    </script>

    <asset:stylesheet src="owlcarousel/owl.carousel.min.css" />
    <asset:stylesheet src="owlcarousel/owl.theme.default.css" />

    <style>
        .owl-carousel img {
            width: 50% !important;
            padding: 5px;
            margin-left: 90px;
        }
    </style>

</head>

<body ng-app="demo.estore" ng-controller="IndexController as indexCtrl">
<!-- h2>{{ indexCtrl.applicationData }} </h2 -->
<!-- h2><a href="{{indexCtrl.contextPath}}">Home</a></h2 -->
    <div class="navbar navbar-default navbar-static-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" ng-click="navExpanded = !navExpanded">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/#">
                    <asset:image src="grails.svg" alt="Grails Logo"/>
                </a>
            </div>

            <div class="navbar-collapse collapse" aria-expanded="false" style="height: 0.8px;" uib-collapse="!navExpanded">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#/index">Home</a></li>
                    <li><a href="#/listing">Listing</a></li>
                    <!-- li><a ui-sref="listing()">Listing</a></li -->
                    <li class="dropdown" uib-dropdown>
                        <a href="#" class="dropdown-toggle" uib-dropdown-toggle role="button" aria-haspopup="true" aria-expanded="false">Brands <span class="caret"></span></a>
                        <ul class="dropdown-menu" uib-dropdown-menu>
                            <div ng-repeat="brand in indexCtrl.brands">
                                <li><a href="#/brands/{{brand}}">{{ brand }}</a></li>
                            </div>
                        </ul>
                    </li>
                    <li class="dropdown" uib-dropdown>
                        <a href="#" class="dropdown-toggle" uib-dropdown-toggle role="button" aria-haspopup="true" aria-expanded="false">Categories <span class="caret"></span></a>
                        <ul class="dropdown-menu" uib-dropdown-menu>
                            <div ng-repeat="category in indexCtrl.categories">
                                <li><a href="#/categories/{{category.name}}">{{ category.name }}</a></li>
                            </div>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div ui-view></div>
    <div ui-view="listing"></div>
    <div ui-view="card"></div>

    <div class="footer" role="contentinfo"></div>

    <div id="spinner" class="spinner" style="display:none;">
        <g:message code="spinner.alt" default="Loading&hellip;"/>
    </div>

    <asset:javascript src="/jquery/jquery.min.js" />
    <asset:javascript src="/owlcarousel/owl.carousel.min.js" />
    <asset:javascript src="/demo/estore/demo.estore.js" />


</body>
</html>
