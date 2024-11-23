<template>
  <div>
    <el-container>
      <el-header style="font-size: 40px;background-color: rgb(238, 241, 246)">Victoria.Ling's contact</el-header>
      <el-container>
        <el-aside width="200px" style="background-color: rgb(238, 241, 246);height:100%;">
          <el-menu :default-openeds="['1']" default-active="/" router>
            <el-submenu index="1">
              <!--    menu配置了router 可以正常跳转           -->
              <template slot="title"><i class="el-icon-message"></i>Contact</template>
              <el-menu-item index="/">All contacts</el-menu-item>
              <el-menu-item index="/favorite">My favorite</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <!-- 路由测试   -->
          <router-view></router-view>
        </el-main>
      </el-container>

    </el-container>

  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "谢奕"
    }
  },
  methods: {},
}

</script>

<style>
*{
  padding:0;
  margin:0;
}
</style>
