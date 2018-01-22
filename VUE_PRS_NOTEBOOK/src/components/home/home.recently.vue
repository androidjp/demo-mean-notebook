<template>
  <Row :gutter="16">
    <Col span="16">
    col-12
    </Col>
    <Col span="8">
    <ul>
      <li v-for="note in notes">
        <Tag type="dot" closable color="blue">
          {{note.title}}
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
      notes: [],
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

          this.notes = response.data.subjects;
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
