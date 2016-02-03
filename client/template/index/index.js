Session.set('array',[]);
Template.index.helpers({
  question: function(){
    return Session.get('array');
  }
});

Template.index.events({
  'click .addQuestion':function(event, template){
    event.preventDefault();
    var text = template.find('#q1').value;
    if (text!= ""){
      var array = Session.get('array');
      array.push(text);
      Session.set('array', array);
    }

  }
})
//     'click .finished':function(event, template){
// }
