<template>

  <Row type="flex" justify="center">
    <Col span="12">
      <card-note style="margin-right:6px;"></card-note>
    </Col>
    <Col span="6">
      <ul>
        <li v-for="movie in hotMovies">
          <Tag type="dot" closable color="blue">
            {{movie.title}}
          </Tag>
        <li/>
      </ul>
      <br>
      <card-recommand></card-recommand>
    </Col>
  </Row>


</template>

<script>
import cardRecommand from './../card/card.recommand'
import cardNote from './../card/card.note'

export default {
  data() {
    return {
      notes:[
        {
          user:{
            userName: 'Amy'
          },
          publicTime: '01/01/2018',
          title:'Vue入门到青铜',
          img:''
        }
      ],
      hotMovies: [],
      recommandNotes: []
    };
  },
  components : {cardRecommand , cardNote},
  mounted: function() {
    this.$http
      .jsonp(
        "https://api.douban.com/v2/movie/top250?count=10",
        {},
        {
          headers: {},
          emulateJSON: true
        }
      )
      .then(
        function(response) {
          // 这里是处理正确的回调

          this.hotMovies = response.data.subjects;
          // this.articles = response.data["subjects"] 也可以
        },
        function(response) {
          // 这里是处理错误的回调
          console.log(response);
        }
      );
  }
};
</script>
