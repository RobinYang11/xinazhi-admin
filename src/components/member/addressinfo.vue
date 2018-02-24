<template>
    <div class="addressmade">
        <div class="panel">
            <div class="panel-header">
                <div class="panel-title">
                    <h4>地址管理</h4>
                </div>
            </div>
            <div class="panel-body">
                <div> <hxzaddress/></div>
            </div>
        </div>
    </div>
</template>

<script>
import hxzaddress from './hxzaddress.vue'
export default {
  data:function(){
      return{

      }
  },
  components:{ hxzaddress}
}
</script>

<style lang="less" scoped>
    .addressmade{
        .panel{
            .panel-title{
                font-size:17px;
            }
            .panel-body{
                .address-main{
                    width: 321px;
                    display: inline-block;
                    padding: 5px;
                    box-sizing: border-box;
                    border: 0;
                    margin-bottom: 5px;
                    .address-box{
                        padding: 15px;
                        border: 1px solid #ddd;
                        width: 100%;
                        height: 110px;
                        box-sizing: border-box;
                        &:hover{ border: 1px solid #2ec748;}
                    }
                }
            }
        }
    }
</style>

