<template>
  <div :class="['main', { 'is-phone': isMobileDevice }]">
    <div class="public-page-bg"></div>
    <header v-if="!isMobileDevice || !isFocus" class="header logo">
      <span class="text">MyMap.AI Playground</span>
    </header>
    <main class="main-container">
      <el-input
        v-model="searchKey"
        placeholder="What’s on your mind?"
        class="search-input"
        @keyup.enter="handleGotoMap"
      >
        <!-- <template #append>
          <el-button :icon="Search" @click="handleGotoMap" />
        </template> -->
      </el-input>
      <div v-if="isMobileDevice" class="right-icon" @click="handleGotoMap">
        <Right />
      </div>
    </main>
  </div>
  <footer class="footer">
    <span>A project from </span>
    <a href="http://www.mymap.ai" target="_blank" rel="noopener noreferrer"
      >mymap.ai</a
    >
  </footer>
</template>
<script setup>
import { Right } from "@element-plus/icons-vue";

let siteURL = "";

let isFocus = ref(false);
let searchKey = ref();
let isMobileDevice = ref(false);
// 由于要快速改变量所以要nextTick
nextTick(() => {
if (process.client) {
  isMobileDevice.value = isMobile();
  siteURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/vizmap?prompt={{searchKey}}&tpl=vizgpt&type=vgmap"
      : `${location.origin}/vizmap?prompt={{searchKey}}&tpl=vizgpt&type=vgmap`;
}
});
// 点击搜索
const handleGotoMap = () => {
  if (!searchKey.value) {
    ElMessage.warning("please input somthing");
    return;
  }
  const url = siteURL.replace("{{searchKey}}", searchKey.value);
  window.open(url)
  // window.location.href = url;
};
</script>
<style lang="scss">
.main {
  .search-input {
    .el-input__wrapper {
      background-color: transparent;
      font-size: 18px;
      height: 50px;
      line-height: 50px;
      box-shadow: 0 0 0 2px rgba(125, 64, 255, 0.6) inset;
      border-radius: 10px;
      padding: 0 15px;
      .el-input__inner {
        color: white;
      }
      &.is-focus {
        box-shadow: 0 0 0 2px rgba(125, 64, 255, 1) inset;
      }
    }
    .el-input-group__append,
    .el-input-group__prepend {
      background-color: #181818;
      box-shadow: 0 2px 0 0 #333333 inset, 0 -2px 0 0 #333333 inset,
        -2px 0 0 0 #333333 inset;
    }
    .el-input-group__append {
      position: absolute;
      right: 0;
      background: none;
      box-shadow: none;
    }
  }
}
// @media screen and (orientation: landscape) {
//   .hn2search-pop {
//     .el-scrollbar__wrap {
//       max-height: 160px !important;
//     }
//   }
// }
</style>
<style lang="scss" scoped>
.main {
  .public-page-bg {
    height: 100%;
    width: 100%;
    z-index: -99;
    display: inline-block;
    position: fixed;
    left: 0;
    top: 0;
    background: url("~/assets/img/concept-map-bg.svg") no-repeat center center
      fixed;
    background-size: cover;
  }
  .header {
    // font-family: 'IBM Plex Mono', monospace;
    display: flex;
    justify-content: center;
    margin-top: 25vh;
    font-size: 48px;
    font-weight: 700;
    .el-image {
      width: 44px;
      height: auto;
    }
    .text {
      background: -webkit-linear-gradient(0deg, #9462ff, #4dbfff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-left: 18px;
    }
  }
  overflow: hidden;
  .main-container {
    display: flex;
    justify-content: center;
    margin-top: calc(0.05 * 100vh);
    position: relative;
    .search-input {
      width: 100%;
      max-width: 640px;
    }
    .right-icon {
      position: absolute;
      top: 50%;
      right: 10%;
      // color: white;
      transform: translateY(-50%);
      background: rgba(150, 124, 251, 0.7);
      padding: 4px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      svg {
        width: 18px;
        height: 18px;
      }
    }
  }
}
.footer {
  align-items: center;
  bottom: 68px;
  color: #999;
  display: flex;
  font-size: 14px;
  font-weight: 400;
  justify-content: center;
  left: 50%;
  line-height: 17px;
  position: fixed;
  transform: translateX(-50%);
  width: 100%;
  a {
    margin-left: 4px;
    text-decoration: underline;
  }
}
.is-phone {
  .header {
    svg {
      width: 148px;
    }
  }
  .text {
    font-size: 24px;
  }
  @media screen and (orientation: landscape) {
    .header {
      margin-top: 6vh;
    }
    .main-container {
      margin-top: 27px;
      .search-input {
        width: 88%;
      }
    }
  }
  @media screen and (orientation: portrait) {
    // .header {
    //   margin-top: 30vh;
    // }
    .main-container {
      margin-top: 35px;
      .search-input {
        width: 88%;
      }
    }
  }
}
</style>
