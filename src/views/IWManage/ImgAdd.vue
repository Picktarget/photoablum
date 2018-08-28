<template>
  <div style="width:700px">
       <Form :model="formItem" :label-width="80">
        <FormItem label="产品描述">
            <i-input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入产品描述..."></i-input>
        </FormItem>
        <FormItem>
            <MultiUpload></MultiUpload>
        </FormItem>
        <FormItem>
            <Button type="primary">提交</Button>
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
        textarea: ""
      }
    };
  },
  methods: {
    goBack: function() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
</style>

