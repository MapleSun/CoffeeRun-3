(function(window) {
    'use strict';
    var App = window.App || {};

    var Validation = {
        isCompanyEmail: function(email) {
            return /.+@bignerdranch\.com$/.test(email);
        },
        isDecaf: function(strength, decafString) {
            var containsDecaf = /.*decaf.*/.test(decafString);
            var tooStrong = (strength > 20);
            return !(containsDecaf && tooStrong);
        }
    };

    App.Validation = Validation;
    window.App = App;
})(window);
