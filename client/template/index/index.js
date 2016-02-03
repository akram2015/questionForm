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
    $('#q1').val('');
    if (text!= ""){
      var array = Session.get('array');
      array.push({'question':text, 'answer':null});
      Session.set('array', array);

    }

  },

  'click .finished':function(event, template){
    if (Session.get ('length') != 0)
    {
      Question.insert({filled:false, filledOn: null, QA:Session.get('array'), createAt:new Date()})
      Session.set('array', []);
    }

  }
})
