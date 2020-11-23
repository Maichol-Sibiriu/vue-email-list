// javascript
const js = new Vue({
  el: '#app',
  data:{

    // array vuoto per lista email
    list: [],

  },
  created(){


    this.chuckEmail();

  },
  methods:{

       chuckEmail(){

          for (var i = 0; i < 10; i++) {

           axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then( response => {
             // handle success
             console.log(response.data.response);

             this.list.push(response.data.response);
            })
            .catch( error => {
             // handle error
             console.log(error);
            })

          }

        }

  },


});
