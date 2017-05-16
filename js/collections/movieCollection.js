var MovieCollection = Backbone.Collection.extend({
    url: "http://localhost:3000/movies",
    model: MovieModel
});

var movieCollection = new MovieCollection();
movieCollection.fetch({
    success: function (response) {
    },
    error: function (err) {
        console.log('Something wrong...');
    }

});



