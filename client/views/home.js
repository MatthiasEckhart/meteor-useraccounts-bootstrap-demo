Template.home.helpers({
    name: function () {
        if (!Meteor.user()) return "World";
        return Users.findOne({_id: Meteor.userId()}).profile.name;
    }
});

Template.home.events({
   'click #change-name': function(e) {
       e.preventDefault();
       var nameEl = $('#new-name');
       var name = nameEl.val();
       Meteor.users.update({'_id': Meteor.userId()}, {$set: {'profile.name': name}});
       nameEl.val('');
   }
});