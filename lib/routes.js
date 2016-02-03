Router.route('/', {
  name:'index'
});

Router.route('/form/:id', {
  data: function(){
    var questionForm = Question.findOne({_id:this.params.id});
    return questionForm;
  },
  name: 'form'
});
