var MovieListView = Backbone.View.extend({

    el: '#table-body',

    initialize: function () {
        this.render();
    },

    render: function () {
        console.log(movieCollection);
        movieCollection.each(function (model) {
            var movie = new MovieView({
                model: model
            });

            this.$el.append(movie.render().el);
        }.bind(this));

        return this;
    }

});

var MovieView = Backbone.View.extend({

    tagName: 'tr',

    template: _.template($('#movie-list-template').html()),

    initialize: function () {
        console.log('chamou o initialize');
        console.log(this.collection);

    },

    render: function () {
        console.log('chamou o render 2');
        this.$el.html(this.template(this.model.attributes));
        return this;
    }
});


var App = new MovieListView();
