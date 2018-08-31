<template>
  <div>
    <div class="demo-upload-list" v-for="(item, index) in uploadList" :key="index">
      <template v-if="item && item.status === 'finished'">
        <img :src="item.url">
        <div class="demo-upload-list-cover">
            <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
            <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
        </div>
      </template>
      <template v-else>
        <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
      </template>
    </div>
    <Upload
        ref="upload"
        :show-upload-list="false"
        :default-file-list="defaultList"
        :on-success="handleSuccess"
        :on-error="handleError"
        :format="['jpg','jpeg','png']"
        :max-size="2048"
        :on-format-error="handleFormatError"
        :on-exceeded-size="handleMaxSize"
        :before-upload="handleBeforeUpload"
        multiple
        type="drag"
        :action="action"
        style="display: inline-block;width:58px;">
        <div style="width: 58px;height:58px;line-height: 58px;">
            <Icon type="ios-camera" size="20"></Icon>
        </div>
    </Upload>
    <Modal title="大图展示" v-model="visible">
        <img :src="staticUrl + imgName" v-if="visible" style="max-width: 100%">
    </Modal>
  </div>
</template>
<script>
export default {
  name: "MultiUpload",
  props: {
    list: Array
  },
  watch: {
    list: function() {
      const img = this.$store.state.iwImage;
      if (!img.length) {
        this.uploadList = img;
        this.$refs.upload.fileList = [];
      }
    }
  },
  data() {
    return {
      action: "http://127.0.0.1:3000/upload/images",
      staticUrl: "http://127.0.0.1:3000/static/",
      defaultList: [],
      imgName: "",
      visible: false,
      uploadList: []
    };
  },
  methods: {
    handleView(name) {
      this.imgName = name;
      this.visible = true;
    },
    handleRemove(file) {
      const fileList = this.$refs.upload.fileList;
      this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
      this.$store.commit("REMOVE_IWIMG", fileList);
    },
    handleError(err, file) {
      this.$Notice.warning({
        title: "文件上传错误",
        desc: "文件 " + file.name + " 上传失败."
      });
      this.uploadList = this.$refs.upload.fileList;
    },
    handleSuccess(res, file) {
      if (res && res.success) {
        file.name = res.data;
        this.$store.commit("UPDATE_IWIMG", res.data);
      } else {
        this.$Notice.warning({
          title: "上传失败",
          desc: "文件 " + file.name + " 上传失败."
        });
      }
      file.url = this.staticUrl + file.name;
      this.uploadList = this.$refs.upload.fileList;
    },
    handleFormatError(file) {
      this.$Notice.warning({
        title: "文件格式不正确",
        desc: "文件 " + file.name + " 的格式不正确, 请选择 jpg 或者 png."
      });
    },
    handleMaxSize(file) {
      this.$Notice.warning({
        title: "文件过大",
        desc: "文件：  " + file.name + " 太大, 请选择小于2M的文件上传."
      });
    },

    handleBeforeUpload() {
      const check = this.uploadList.length < 5;
      if (!check) {
        this.$Notice.warning({
          title: "一个产品,最多上传5张照片."
        });
      }
      return check;
    }
  },

  mounted() {
    this.uploadList = this.$refs.upload.fileList;
  }
};
</script>
<style>
.demo-upload-list {
  display: inline-block;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 4px;
}

.demo-upload-list img {
  max-width: 100%;
  /* height: 100%; */
}

.demo-upload-list-cover {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
}

.demo-upload-list:hover .demo-upload-list-cover {
  display: block;
}

.demo-upload-list-cover i {
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin: 0 2px;
}
</style>