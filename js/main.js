// javascript
const js = new Vue({
  el: '#app',
  data:{

    // array vuoto per lista email
    list: [],

  },
  created(){

    // this.email.forEach((response.data.response) => {
    //
    //   this.list.push(response.data.response)
    //
    // });
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then( response => {
       // handle success
       console.log(response.data.response);

      })
      .catch( error => {
       // handle error
       console.log(error);
      })
  },
  methods:{

    // email(){
    //
    //     axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    //       .then( response => {
    //        // handle success
    //        console.log(response.data);
    //       })
    //       .catch( error => {
    //        // handle error
    //        console.log(error);
    //       })
    // },

  },


});
