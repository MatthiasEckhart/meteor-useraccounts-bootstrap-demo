Users = Meteor.users;

Users.allow({
   update: function(userId, doc) {
       return doc && doc.userId === userId;
   }
});