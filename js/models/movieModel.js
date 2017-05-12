var movies = Backbone.Model.extend({

    apiURL = "http://localhost:3000/",

    initialize : function(){
        return apiURL
    },

    getMovie : function(id){
        return apiURL + id
    }

});