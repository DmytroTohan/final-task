Posts = new Mongo.Collection('posts');

var imageStore = new FS.Store.GridFS('images');

Images = new FS.Collection('images', {
    stores: [imageStore]
});

Posts.allow({
    update: function(userId, post) {
        return ownsDocument(userId, post);
    },
    remove: function(userId, post) {
        return ownsDocument(userId, post);
    }
});

Images.deny({
    insert: function() {
        return false;
    },
    update: function() {
        return false;
    },
    remove: function() {
        return false;
    },
    download: function() {
        return false;
    }
});

Images.allow({
    insert: function() {
        return true;
    },
    update: function() {
        return true;
    },
    remove: function() {
        return true;
    },
    download: function() {
        return true;
    }
});

Meteor.methods({
    postInsert: function(postAttributes) {
        var user = Meteor.user();
        var post = _.extend({
            userId: user._id,
            author: user.username,
            imageURL: postAttributes.imageURL,
            userImage: postAttributes.userImageURL,
            submitted: new Date(),
            commentsCount: 0,
            upvoters: [],
            votes: 0
        });
        var postId = Posts.insert(post);
        return {
            _id: postId
        };
    },

    upvote: function(postId) {
        var affected = Posts.update({
            _id: postId,
            upvoters: {
                $ne: this.userId
            }
        }, {
            $addToSet: {
                upvoters: this.userId
            },
            $inc: {
                votes: 1
            }
        });

        if (!affected)
            throw new Meteor.Error('invalid', "You weren't able to upvote that post");
    }
});

Meteor.users.allow({
  	update: function (userId, doc, fields, modifier) {
		return true;
	}
});
