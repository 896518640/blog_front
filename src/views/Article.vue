<template>
  <div id="Article">
    <article>
      <h2>组件基础</h2>
      <div class="time">
        <p class="date">17</p>
        <p class="m-y">
          <span>07</span>
          <span>2021</span>
        </p>
      </div>
      <div class="show">
        <div class="img" :style="{backgroundImage: `url(${url})`}"></div>
        <div class="des">666666</div>
      </div>
      <div class="r-b">
        <p>浏览量：30</p>
        <a href="">阅读全文</a>
      </div>
    </article>
    <article>
      <h2>组件基础</h2>
      <div class="time">
        <p class="date">17</p>
        <p class="m-y">
          <span>07</span>
          <span>2021</span>
        </p>
      </div>
      <div class="show">
        <div class="img" :style="{backgroundImage: `url(${url})`}"></div>
        <div class="des">666666</div>
      </div>
      <div class="r-b">
        <p>浏览量：30</p>
        <a href="">阅读全文</a>
      </div>
    </article>
    <article>
      <h2>组件基础</h2>
      <div class="time">
        <p class="date">17</p>
        <p class="m-y">
          <span>07</span>
          <span>2021</span>
        </p>
      </div>
      <div class="show">
        <div class="img" :style="{backgroundImage: `url(${url})`}"></div>
        <div class="des">666666</div>
      </div>
      <div class="r-b">
        <p>浏览量：30</p>
        <a href="">阅读全文</a>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "Article",
  data(){
    return{
      url:require("../assets/img/article/1.jpg")
    }
  }
};
</script>

<style lang="less" scoped>
#Article {
  article {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    margin-bottom: 15px;
    box-shadow: 0 0 4px #ddd;
    padding: 25px 20px;
    background-color: #fff;
    font-family: Quicksand, "微软雅黑";
    h2 {
      margin-bottom: 15px;
      font-size: 20px;
      letter-spacing: 3px;
      line-height: 24px;
      border-left: 5px solid #73b899;
      text-indent: 10px;
    }
    .time {
      position: absolute;
      top: 0;
      right: 10px;
      width: 60px;
      .date {
        font-weight: bolder;
        font-size: 40px;
        text-align: center;
        color: #6bc30d;
      }
      .m-y {
        display: flex;
        justify-content: space-between;
      }
    }
    .show {
      display: flex;
      width: 100%;
      height: 250px;
      .img{
        box-sizing: border-box;
        width: 50%;
        padding-right: 1%;
        background-size: cover;
        background-position: 50%;
      }
      .des {
        box-sizing: border-box;
        width: 50%;
        padding-left: 1%;
      }
    }
    .r-b{
        position: absolute;
        right:20px;
        bottom: 20px;
        p{
          position: relative;
          top: -10px;
          color: #aaa;
          font-size: 12px;
        }
        a{
          padding: 10px 20px;
          background-color: #409eff;
          color: #fff;
          transition: opacity .3s;
          &:hover{
          opacity:0.8;
        }
        }
        
      }
  }
}
</style>