Template.postSubmit.events({
    'submit form': function(e) {
        e.preventDefault();
        var imageURL = $('span.image-url').text();
        if (!imageURL) {
            return throwError('Please, choose a photo for the new post!');
        }
        var post = {
            imageURL: $('span.image-url').text(),
            userImageURL: Meteor.user().profile.image
        };
        Meteor.call('postInsert', post, function(error, result) {
            Router.go('postPage', {
                _id: result._id
            });
        });
    },
    'click #cancel-btn': function() {
        Router.go('home');
    },
    'change #imgInp': function(e) {
        FS.Utility.eachFile(e, function(file) {
            Images.insert(file, function(err, fileObj) {
                if (err) {
                    // handle error
                } else {
                    var imagePath = '/cfs/files/images/' + fileObj._id;
                    $('span.image-url').text(imagePath);
                    $('input[type=submit]').removeClass('disabled');
                    setTimeout(function() {
                        $('#imageupload').get(0).src = imagePath;
                    }, 500);
                }
            });
        });
    }
});
