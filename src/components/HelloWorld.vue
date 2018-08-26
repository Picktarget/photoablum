<template>
  <div class="masonary">
    <div class="clumn">
      <div class="item">
        <div class="item__content">
          <img v-lazy="img1" alt="" class="animated bounceIn">
          <div class="fh5co-desc">Tempora distinctio inventore, nisi excepturi pariatur tempore sit quasi animi.</div>
        </div>
        <div class="item__content"><img src="../assets/img_2.jpg" alt="" class="animated bounceIn"></div>
        <div class="item__content"><img src="../assets/img_3.jpg" alt="" class="animated bounceIn"> </div>
        <div class="item__content"><img src="../assets/img_4.jpg" alt="" class="animated bounceIn"></div>
        <div class="item__content"><img src="../assets/img_5.jpg" alt="" class="animated bounceIn"> </div>
        <div class="item__content"><img src="../assets/img_6.jpg" alt="" class="animated bounceIn"></div>
      </div>
    </div>
    <div class="clumn">
      <div class="item">
        <div class="item__content"><img src="../assets/img_7.jpg" alt="" class="animated bounceIn"></div>
        <div class="item__content"><img src="../assets/img_8.jpg" alt="" class="animated bounceIn"></div>
        <div class="item__content"><img src="../assets/img_9.jpg" alt="" class="animated bounceIn"> </div>
        <div class="item__content"><img src="../assets/img_10.jpg" alt="" class="animated bounceIn"></div>
        <div class="item__content"><img src="../assets/img_11.jpg" alt="" class="animated bounceIn"> </div>
        <div class="item__content"><img src="../assets/img_12.jpg" alt="" class="animated bounceIn"></div>
      </div>
    </div>
    <div class="clumn">
      <div class="item">
        <div class="item__content"><img src="../assets/img_13.jpg" alt="" class="animated bounceIn"></div>
        <div class="item__content"><img src="../assets/img_14.jpg" alt="" class="animated bounceIn"></div>
        <div class="item__content"><img src="../assets/img_15.jpg" alt="" class="animated bounceIn"> </div>
        <div class="item__content"><img src="../assets/img_16.jpg" alt="" class="animated bounceIn"></div>
        <div class="item__content"><img src="../assets/img_17.jpg" alt="" class="animated bounceIn"> </div>
        <div class="item__content"><img src="../assets/img_18.jpg" alt="" class="animated bounceIn"></div>
      </div>
    </div>
    <div class="clumn">
      <div class="item">
        <div class="item__content"><img src="../assets/img_19.jpg" alt="" class="animated bounceIn"></div>
        <div class="item__content"><img src="../assets/img_20.jpg" alt="" class="animated bounceIn"></div>
        <div class="item__content"><img src="../assets/img_21.jpg" alt="" class="animated bounceIn"> </div>
        <div class="item__content"><img src="../assets/img_22.jpg" alt="" class="animated bounceIn"></div>
        <div class="item__content"><img src="../assets/img_23.jpg" alt="" class="animated bounceIn"> </div>
        <div class="item__content"><img src="../assets/img_24.jpg" alt="" class="animated bounceIn"></div>
      </div>
    </div>
  </div>
</template>

<script>
import img from "../assets/img_1.jpg";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      show: false,
      img1: img
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.masonary {
  width: 100%;
  // max-width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: column;
  height: auto;
}

@media only screen and (min-width: 500px) {
  .masonary {
    flex-direction: row;
  }
}

.clumn {
  margin-left: 0.5rem;
  display: flex;
  flex-flow: column wrap;
  width: 100%;
}

@media only screen and (max-width: 500px) {
  .clumn {
    width: 100%;
    max-width: 95%;
    margin: auto;
  }
}

.clumn > .item > .item__content {
  margin-bottom: 0.5rem;
  color: white;
  text-align: center;
  img {
    max-width: 100%;
    // width: 100%;
    display: block;
    cursor: pointer;
    margin: 0 auto;
    &:hover {
      opacity: 0.5;
      &.bounceIn {
        -webkit-animation-duration: 0;
        animation-duration: 0;
        -webkit-animation-fill-mode: none;
        animation-fill-mode: none;
      }
    }
  }
}

.fh5co-desc {
  padding: 20px;
  float: left;
  line-height: 24px;
  font-family: "Roboto", arial, sans-serif;
  font-weight: 300;
  font-size: 15px;
  color: #818892;
  background-color: #f4f4f4;
}

.item__content {
  margin: 10px 10px 20px 10px;
  background: #fff;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  -ms-border-radius: 2px;
  border-radius: 2px;
  overflow: hidden;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
  -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
}
</style>
