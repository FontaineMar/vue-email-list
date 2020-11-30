const app = new Vue({
  el:'#root',
  data:{
    emails:[],
    url: "https://flynn.boolean.careers/exercises/api/random/mail",
  },
  mounted:function(){
    for( i = 0; i < 10; i++){
      axios.get(this.url)
      .then((result) => { this.emails.push(result.data.response) });
    }
  }

});
