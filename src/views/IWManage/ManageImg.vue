<template>
  <div>
    <div class="btn-group">
      <Button :size="buttonSize" type="primary" @click="add">添加图文</Button>
      <Button :size="buttonSize" type="default">Default</Button>
      <Button :size="buttonSize" type="dashed">Dashed</Button>
      <Button :size="buttonSize" type="text">Text</Button>
    </div>
    <Table height="200" :columns="columns1" :data="data2"></Table>
    <div class="pinfo-box">
      <Pinfo :total="100" show-sizer show-elevator />
    </div>
    <div class="clearfix"></div>
  </div>
</template>
<script>
export default {
  name: "ManinageImg",
  data() {
    return {
      buttonSize: "default",
      columns1: [
        {
          title: "产品名称",
          key: "name"
        },
        {
          title: "产品信息",
          key: "info"
        },
        {
          title: "产品图片",
          key: "address"
        },
        {
          title: "创建日期",
          key: "date"
        }
      ],
      data2: [
        {
          name: "John Brown",
          info: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          info: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          info: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          info: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        },
        {
          name: "John Brown",
          info: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          info: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          info: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          info: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        }
      ]
    };
  },
  methods: {
    add: function() {
      this.$router.push({ name: "add" });
    }
  }
};
</script>
<style lang="less" scoped>
.pinfo-box {
  margin: 12px 0;
  position: relative;
  float: right;
}
.btn-group {
  margin: 8px 0;
  button {
    margin-right: 8px;
  }
}
</style>

