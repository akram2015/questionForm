
Template.index.events({
  'click .button':function(event, template){
    event.preventDefault();
    var text = template.find('#q1').value;
    var qa = [{"question": text, "answer":null}];
    for( var i = 0; i<10; i++){
      if(text!= ""){
        Question.insert({filled:false, filledOn: null, QA:qa, createAt:new Date()});
        console.log(text);
      }}

    })
  }
})
