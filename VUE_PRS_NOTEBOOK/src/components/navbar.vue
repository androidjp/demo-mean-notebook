<template>
    <Menu mode="horizontal" :theme="navTheme" active-name="1">
        <MenuItem name="1">
            <Icon type="ios-paper"></Icon>
            登录
        </MenuItem>
        <MenuItem name="2">
            <Icon type="ios-people"></Icon>
            用户管理
        </MenuItem>
    </Menu>
</template>

<script>
export default {
  data() {
    return {
      navTheme: "light"
    };
  }
};
</script>

<style>
</style>
