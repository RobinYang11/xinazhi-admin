<template>
   <div>
       <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="shop_lie"
      label="序号"
      sortable
      width="180"
     
    >
    </el-table-column>
    <el-table-column
      prop="shop_id"
      label="商户ID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="shop_name"
      label="商户名称"
      >
    </el-table-column>
    <el-table-column
      prop="shop_area"
      label="区域"
      width="100" >
    </el-table-column>
    <el-table-column
      prop="shop_all"
      label="所有"
      width="100"
      :filters="[{ text: '未审核', value: '未审核' }, { text: '驳回', value: '驳回' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end">
      <template slot-scope="scope">
        <el-tag
          :type="scope.row.tag === '未审核' ? 'primary' : 'success'"
          close-transition>{{scope.row.tag}}</el-tag>
      </template>
    </el-table-column>
  </el-table>
   </div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          shop_lie: '1',
          shop_id: '854653286',
          shop_name: '宁夏六盘源头食品有限公司',
          shop_area:'银川金凤区',
          tag: '未审核'
        }, {
          shop_lie: '2',
          shop_id: '754653286',
          shop_name: '宁夏六盘源头食品有限公司',
          shop_area:'银川金凤区',
          tag: '驳回'
        }, {
          shop_lie: '3',
          shop_id: '654653286',
          shop_name: '宁夏六盘源头食品有限公司',
          shop_area:'银川金凤区',
          tag: '未审核'
        }, {
          shop_lie: '4',
          shop_id: '554653286',
          shop_name: '宁夏六盘源头食品有限公司',
          shop_area:'银川金凤区',
          tag: '驳回'
        }]
      }    
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      }
    }
  }
</script>
