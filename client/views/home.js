Template.home.helpers({
    name: function () {
        if (!Meteor.user()) return "World";
        return Users.findOne({_id: Meteor.userId()}).profile.name;
    }
});

Template.home.events({
   'click #change-username': function(e) {
       e.preventDefault();
       var usernameEl = $('#new-username');
       var username = usernameEl.val();
       Meteor.users.update({'_id': Meteor.userId()}, {$set: {'profile.name': username}});
       usernameEl.val('');
   }
});