<template>
  <div id="Link">
    <article class="a1">
      <h2>友情链接</h2>
      <p>请在<router-link to="/message">留言区</router-link>申请友链，本站友链信息</p>
      <p>名称：东东ヾ(≧▽≦*)o</p>
      <p class="code ">主页：<span>http://eastwind.fun</span></p>
      <p class="code ">图标：<span>http://eastwind.fun/logo.png</span></p>
      <p>描述：一名喜欢前端的头发茂密的刘同学🤟</p>
    </article>
    <article class="a2">
      <ul>
        <li>
          <a href="" target="_blank">
            <svg
              viewBox="0 0 300 100"
              preserveAspectRatio="none"
            >
              <path 
              d="M 300 100 V 0 H 0 V 100 H 300" 
              stroke="red"
               fill="none"
      
               ></path>  
            </svg>
            <div class="top">
              <p class="img" style="background-image:url('https://www.baidu.com/favicon.ico')"></p>
              <p class="name">百度</p>
            </div>
            <div class="bottom">
              <p class="des">百度一下，你就知道</p>
            </div>
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <svg
              viewBox="0 0 300 100"
              preserveAspectRatio="none"
            >
              <path 
              d="M 300 100 V 0 H 0 V 100 H 300" 
              stroke="red"
               fill="none"
      
               ></path>  
            </svg>
            <div class="top">
              <p class="img" style="background-image:url('https://www.baidu.com/favicon.ico')"></p>
              <p class="name">百度</p>
            </div>
            <div class="bottom">
              <p class="des">百度一下，你就知道</p>
            </div>
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <svg
              viewBox="0 0 300 100"
              preserveAspectRatio="none"
            >
              <path 
              d="M 300 100 V 0 H 0 V 100 H 300" 
              stroke="red"
               fill="none"
      
               ></path>  
            </svg>
            <div class="top">
              <p class="img" style="background-image:url('https://www.baidu.com/favicon.ico')"></p>
              <p class="name">百度</p>
            </div>
            <div class="bottom">
              <p class="des">百度一下，你就知道</p>
            </div>
          </a>
        </li>
      </ul>
    </article>
  </div>
</template>

<script>
export default {
    name:"Link"
}
</script>

<style lang="less" scoped>
#Link{
  article {
        box-sizing: border-box;
        width: 100%;
        margin-bottom: 15px;
        box-shadow: 0 0 4px #ddd;
        padding: 25px 20px ;
        background-color: #fff;
        font-family: Quicksand,Microsoft YaHei,sans-serif;
        h2 {
            margin-bottom: 15px;
            font-size: 20px;
            letter-spacing: 3px;
            line-height: 24px;
            border-left: 5px solid #73b899;
            text-indent: 10px;
        }
        p {
            text-indent: 2em;
            color: #444;
            font-size: 14px;
            letter-spacing: 4px;
            line-height: 30px;
            code {
                font-family: Quicksand,Microsoft YaHei,sans-serif;
            }
            a {
                color: #409eff;
                &:hover{
                   text-decoration: underline; 
                }
            }
        }
        p.code span {
            font-weight: 700;
            color: #bd4147;
            background: rgba(27,31,35,.05);
        }
        p.border {
            border-bottom: 1px dotted rgb(170,170,170 );
        }
    }
    article.a2{
      ul{
        display: flex;
        flex-wrap:wrap  ;
        li{
          position: relative;
          box-sizing: border-box;
          flex: 1;
          min-width: 260px;
          margin: 0 7.5px 15px;
          background-color: rgba(27,31,35,.05);
          p {
            text-indent: 2em;
            color: #444;
            font-size: 14px;
            letter-spacing: 4px;
            line-height: 30px;
          }
          a{
            box-sizing: border-box;
            position: relative;
            display: block;
            width: 100%;
            height: 100%;
            padding: 5px;
            svg{
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;

              path{
                stroke-dasharray: 800;
                stroke-dashoffset: 800;
                transition: all 1s ease-in-out;
              }
            }
            &:hover svg path{
                stroke-dashoffset: 0;
              }
            .top {
              display: flex;
              height: 50px;
              .img{
                width: 50px;
                height: 50px;
                background-position:50%;
                background-size: cover;
                border-radius: 50%;
              }
              .name{
                flex: 1;
                font-size: 14px;
                height: 50px;
                margin-left: 15px;
                line-height: 50px;
                color: #409eff;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }
            .bottom{
              p.des{
                font-size: 12px;
                height: 60px;
                word-break: break-all;
                text-overflow: ellipsis;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
              }
            }
          }
        }
      }
    }
}
  
</style>