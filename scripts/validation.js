(function (window) {
    'use strict';
    var App = window.App || {};

    var Validation = {
        isCompanyEmail: function (email) {
            return /.+@bignerdranch\.com$/.test(email);
        },

        isDecaf: function (strength, decafString) {
            if(strength>20 && decafString.includes('decaf')){
                return false;
            }else{
                return true;
            }
        }
    };

    App.Validation = Validation;
    window.App = App;
})(window);
