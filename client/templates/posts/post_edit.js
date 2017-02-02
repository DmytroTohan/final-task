Template.postEdit.onCreated(function() {
    Session.set('usernameErrors', {});
});

Template.postEdit.helpers({
    errorMessage: function(field) {
        return Session.get('usernameErrors')[field];
    },
    errorClass: function(field) {
        return !!Session.get('usernameErrors')[field] ? 'has-error' : '';
    }
});

Template.postEdit.events({
    'submit form': function(e) {
        e.preventDefault();
        var updateInfo = {};
        var imageURL = $('span.image-url').text();
        if (imageURL) {
            updateInfo['profile.image'] = imageURL;
        }
        if (Object.keys(updateInfo).length > 0) {
            Meteor.users.update({
                _id: Meteor.userId()
            }, {
                $set: updateInfo
            });
        }
        
        Router.go('home');
    },
    'change #imgInp': function(e) {
        FS.Utility.eachFile(e, function(file) {
            Images.insert(file, function(err, fileObj) {
                if (err) {} else {
                    var imagePath = '/cfs/files/images/' + fileObj._id;
                    $('span.image-url').text(imagePath);
                    setTimeout(function() {
                        $('#imageupload').get(0).src = imagePath;
                    }, 500);
                }
            });
        });
    },
    'click .cancel': function(e) {
        e.preventDefault();
        Router.go('home');
    }
});
