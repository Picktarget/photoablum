<template>
  <div style="width:700px">
       <Form :model="formItem" :label-width="80">
        <FormItem label="产品名称">
            <i-input v-model="formItem.productionName" type="text" placeholder="请输入产品名称"></i-input>
        </FormItem>
        <FormItem label="产品描述">
            <i-input v-model="formItem.description" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入产品描述..."></i-input>
        </FormItem>
        <FormItem>
            <MultiUpload></MultiUpload>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="addIW">提交</Button>
            <Button style="margin-left: 8px">取消</Button>
            <Button style="margin-left: 8px" type="primary" @click="goBack">返回</Button>
        </FormItem>
    </Form>
  </div>
</template>
<script>
import MultiUpload from "@/components/MultiUpload.vue";
export default {
  name: "ImgAdd",
  components: {
    MultiUpload
  },
  data() {
    return {
      buttonSize: "default",
      formItem: {
        productionName: "",
        description: ""
      }
    };
  },
  methods: {
    goBack: function() {
      this.$router.go(-1);
    },
    addIW: function() {
      this.$http.post("http://127.0.0.1:3000/iw/add", this.formItem).then(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
    }
  }
};
</script>
<style lang="less" scoped>
</style>

