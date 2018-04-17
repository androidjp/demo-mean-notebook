<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  float: left;
  position: relative;
  left: 20px;
}
.logo-style {
  width: 34px;
  height: 34px;
  display: inline-block;
  box-sizing: border-box;
  vertical-align: middle;
}
.title-text {
  font-size: 22px;
  color: #d7dde4;
  display: inline-block;
  box-sizing: border-box;
  vertical-align: middle;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout-footer-center {
  text-align: center;
}

router-link {
  color: white;
}
</style>
<template>
    <div class="layout">
        <Layout>
            <Header :style="{position: 'fixed', width: '100%'}">
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">
                      <img src="./../../assets/logo.png" class="logo-style" alt="">
                      <span class="title-text">笔记本</span>
                    </div>



                    <div class="layout-nav">
                        <MenuItem v-for="menuItem in menu">
                            <router-link :to="menuItem.link" tag='li'>
                              <Icon :type="menuItem.icon"></Icon>
                              {{menuItem.tag}}
                            </router-link>
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Content :style="{padding: '88px 20px 0', background: '#eee', minHeight: '500px'}">
                <router-view></router-view>
            </Content>
            <Footer class="layout-footer-center">2017-2018 &copy; Jasper Wu</Footer>
        </Layout>
    </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          tag: "首页",
          icon: "ios-navigate",
          link: "/"
        },
        {
          tag: "写文章",
          icon: "edit",
          link: "/edit"
        },
        {
          tag: "我的",
          icon: "person",
          link: "/user"
        }
      ]
    };
  }
};
</script>
