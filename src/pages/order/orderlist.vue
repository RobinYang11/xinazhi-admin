<template>
   <div class="panel">
       <div class="panel-header">
           <div class="panel-title">
               <h4>我的订单</h4>
           </div>
       </div>
       <div class="panel-body">
           <div>
               <orderManager></orderManager>
           </div>
       </div>
   </div>
</template>
<script>
import orderManager from "../../components/order/orderManager"
export default {
    components:{
        orderManager
    }
}
</script>

