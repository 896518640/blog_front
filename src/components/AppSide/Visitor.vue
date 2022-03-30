<template>
  <div class="Visitor">
      <h4>最近访客</h4>
      <ul>
          <li>
              <p>小希希</p>
          </li>
          <li>
              <p>小希希</p>
          </li>
          <li>
              <p>小希希</p>
          </li>
          <li>
              <p>小希希</p>
          </li>
          <li>
              <p>小希希</p>
          </li>
          <li>
              <p>小希希</p>
          </li>
          <li>
              <p>小希希</p>
          </li>
          <li>
              <p>小希希</p>
          </li>
          <li>
              <p>小希希</p>
          </li>
          <li>
              <p>小希希</p>
          </li>
          <li>
              <p>小希希</p>
          </li>
          <li>
              <p>小希希</p>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:"Visitor"
}
</script>

<style scoped lang="less">
    .Visitor{
        box-sizing: border-box;
        overflow: hidden;
        background-color:#fff;
        width: 100%;
        margin-top: 15px;
        box-shadow: 0 0 4px #ddd;
        padding: 20px;
        h4 {
            line-height: 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid #e8e9e7;
            color: #383937;
            font-size: 16px;
        }
        ul {
            display: flex;
            margin-top: 20px;
            flex-wrap: wrap;
            li {
                position: relative;
                float: left;
                width:53px;
                height: 53px;
                margin-right: 6px;
                margin-bottom: 6px;
                background: none no-repeat 50%/cover;
                background-image: url("../../assets/img/personal/tx.jpg");
                &:nth-child(4n){
                    margin-right: 0;
                }
                p{
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 16px;
                    background: rgba(0,0,0,.5);
                    color: #fff;
                    text-align: center;
                    line-height: 16px;
                    font-size: 12px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;

                }
          }
        }
    }
</style>