<style>
  .wrap-img {
    position: absolute;
    top: 50%;
    margin-top: -68px;
    margin-right: 20px;
    right: 0;
    width: 150px;
    height: 120px;
  }

  .author {
    margin-bottom: 14px;
    font-size: 13px;
  }

  .avatar {
    display: inline-block;
    vertical-align: middle;
    margin: 0 5px 0 0;
    width: 32px;
    height: 32px;
  }

  .author .info {
    display: inline-block;
    vertical-align: middle;
  }

  .title {
    font-family: -apple-system, SF UI Display, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
    margin: -7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
  }

  .abstract {
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
  }

  p {
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    padding-right: 140px;
  }

  .meta {
    padding-right: 0;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
    vertical-align: middle;
  }

  .like {
    right: 0;
    bottom: 0;
    margin-right: 20px;
    display: inline-block;
  }

</style>
<template>
  <Card style="width:700px;text-align:left;">

    <li id="note-23000185" data-note-id="23000185" class="have-img">
      <a class="wrap-img" href="/p/d756572a5045" target="_blank">
        <img class="img-blur-done" src="./../../assets/logo.png" alt="120">
      </a>
      <div class="content">
        <div class="author">
          <a class="avatar" target="_blank" href="/u/09c373f051cf">
            <img src="./../../assets/logo.png" alt="64">
          </a>
          <div class="info">
            <a class="nickname" target="_blank" href="/u/09c373f051cf">田宝谈写作</a>
            <a target="_blank" href="http://www.jianshu.com/p/dc5761bbaa76">
              <img width="30" height="30" class="badge-icon" data-toggle="tooltip" title="" src="//cdn2.jianshu.io/assets/badges/signed-9702260821906f0d953eab67a29f8e7a2d2e3d20960576347591283a3fbfd867.png"
                alt="Signed" data-original-title="简书签约作者">
            </a>
            <span class="time" data-shared-at="2018-01-23T09:12:52+08:00">5小时前</span>
          </div>
        </div>
        <a class="title" target="_blank" href="/p/d756572a5045">学会表达：别让这三种穷人思维的说话方式，毁了你的未来</a>
        <p class="abstract">
          优秀的人，从来不会败给情绪；而会说话的人，在与人交往的过程中往往游刃有余。 别人通过体力赚钱谋职位，他却能通过恰到好处的几句话博得别人的欢心，周围同事朋友喜欢跟他相处，上司赏...
        </p>
        <div class="meta">

          <Tag type="border" color="blue"  class="like">
            <Icon type="star" style="color:#92d0e9;"></Icon>
            123
          </Tag>
          <Tag type="dot" closable color="blue">
            思考
          </Tag>

        </div>
      </div>
    </li>

  </Card>
</template>



<script>
  export default{
    data(){
      return {
        note:{
          user:{
            userName: 'Amy'
          },
          publicTime: '01/01/2018',
          title:'Vue入门到青铜',
          img:''
        }
      }
    },
    methods: {
      hasImg : function(){
        if(this.note.img){
          return true;
        }
        return false;
      }
    }
  }
</script>
