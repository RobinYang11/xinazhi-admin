<template>
   <div class="thematic">
      <h3> {{msg.split('').reverse().join('*')}}</h3>
      <h3>{{reverseMsg}}</h3>    
   </div>
</template>

<script>
export default {
  data: function() {
    return {
         msg: "welcom to hangzhou"
        };
  },
     
  computed: {
    reverseMsg: function() {
      return this.msg.split("").reverse() .join("");
      
    }
  },
  method:{

  }
};
</script>

