<template>
  <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
    <el-tab-pane label="全部订单" name="first">
          <el-table
            :data="tableData"
            style="width: 100%">
             <el-table-column
              prop="detail"
              label="订单详情"
              width="240"
              >
            </el-table-column>
            <el-table-column
              prop="date"
              label="订单日期"
              sortable
            >
            </el-table-column>
            <el-table-column
              prop="name"
              label="收货人"
             >
            </el-table-column>
             <el-table-column
              prop="money"
              label="订单金额"
              sortable
             >
            </el-table-column>
            <el-table-column
              prop="address"
              label="状态"
              :formatter="formatter">
            </el-table-column>
            <el-table-column
              prop="operation"
              label="操作"
              :formatter="formatter">
            </el-table-column>
            <el-table-column
              prop="tag"
              label="标签"
              width="100"
              :filters="[{ text: '待收货', value: '待收货' }, { text: '待评价', value: '待评价' },{ text: '待付款', value: '待付款' }]"
              :filter-method="filterTag"
              filter-placement="bottom-end">
              <template slot-scope="scope">
                <el-tag
                  :type="scope.row.tag === '待收货' ? 'primary' : 'success'"
                  close-transition>{{scope.row.tag}}</el-tag>
              </template>
            </el-table-column>
          </el-table>


    </el-tab-pane>
    <el-tab-pane label="待付款" name="second">
        删选商品
    </el-tab-pane>
    <el-tab-pane label="待收货" name="third">
        删选收货商品
    </el-tab-pane>
    <el-tab-pane label="待评价" name="fourth">
        交易完成评价商品
    </el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName2: 'first',
        tableData: [{
          detail:'iphoneX-79001-huaxinzhi',
          date: '2016-05-02',
          name: '华信智',
          money:100,
          address: '待收货',
          tag: '待付款',
          operation:'收货'
        }, {
          detail:'iphoneX-79001-huaxinzhi',
          date: '2016-05-04',
          name: '华信智',
          money:1000,
          address: '待付款',
          tag: '待收货',
           operation:'收货'
        }, {
          detail:'iphoneX-79001-huaxinzhi',
          date: '2016-05-01',
          name: '华信智',
          money:10000,
          address: '已收货',
          tag: '待付款',
           operation:'收货'
        }, {
          detail:'iphoneX-79001-huaxinzhi',
          date: '2016-05-03',
          name: '华信智',
          money:100000,
          address: '待评价 ',
          tag: '待收货',
           operation:'收货'
        }]
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
        formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      }
    }
  };
</script>