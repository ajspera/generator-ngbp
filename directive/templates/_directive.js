(function(app) {

    app.directive('<%= camelModuleName %>', function() {
        return {
            restrict: 'A',
            scope: {},
            templateUrl: '<%= templatePath %><%= name %>/<%= name %>.tpl.html',
            link: function (scope, elem) {
                
            }
        };
    });

}(angular.module('<%= projectName %>.<%= camelModuleName %>', [

])));