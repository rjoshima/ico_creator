Vue.use(VueForm, {
  inputClasses: {
     valid: 'form-control-success',
     invalid: 'form-control-danger'
   }
 });
  
 new Vue({
   el: '#app',
   data: {
     formstate: {},
     model: {
       name: '',
       email: '',
       phone: '',
       department: null,
     }
   },
   methods: {
     fieldClassName: function (field) {
       if(!field) {
         return '';
       }
       if((field.$touched || field.$submitted) && field.$valid) {
         return 'has-success';
       }
       if((field.$touched || field.$submitted) && field.$invalid) {
         return 'has-danger';
       }
     },
     onSubmit: function() {
       console.log(this.formstate.$valid);
     }
   }
 });