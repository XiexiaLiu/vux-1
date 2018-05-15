<template>
  <div class="menu-wrapper">
    <template v-for="item in routes" v-if="!item.hidden">
      <router-link v-if="item.children && item.children.length===1 && !item.children[0].children" :to="item.path+'/'+item.children[0].path" :key="item.children[0].title">
        <el-menu-item :index="item.path+'/'+item.children[0].path" class='submenu-name-noDropdown'>
          <svg-icon v-if="item.children[0].icon" :icon-class="item.children[0].icon"></svg-icon>
          <span v-if="item.children[0].title">{{item.children[0].title}}</span>
        </el-menu-item>
      </router-link>

      <router-link v-else-if="item.type === '1'&&!item.hidden" :to="item.path" :key="item.title">
        <el-menu-item :index="item.path" class='submenu-name-noDropdown'>
          <svg-icon v-if="item.icon" :icon-class="item.icon"></svg-icon>
          <span v-if="item.title">{{item.title}}</span>
        </el-menu-item>
      </router-link>

      <el-submenu v-else-if="!item.hidden && item.children && item.children.length > 1" :index="item.title||item.path" :key="item.title">
        <template slot="title">
          <svg-icon v-if="item.icon" :icon-class="item.icon"></svg-icon>
          <span>{{item.title}}</span>
        </template>
        <template v-for="children in item.children" v-if="!children.hidden">
          <sidebar-item class="nest-menu" v-if="children.children&&children.children.length>0" :routes="[children]" :key="children.path"></sidebar-item>
          <router-link v-else :to="refreshRoute(item, children)" :key="children.title">
            <el-menu-item :index="refreshRoute(item, children)">
              <svg-icon v-if="children.icon" :icon-class="children.icon"></svg-icon>
              <span v-if="children.title">{{children.title}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>

    </template>
  </div>
</template>

<script>

export default {
  name: 'appNavbar',
  props: {
    routes: {
      type: Array
    }
  },
  mounted() {
    console.log('routes', this.routes)
  },
  methods: {
    refreshRoute(item, children) {
      return item.path + '/' + children.path
    }
  }
}
</script>

