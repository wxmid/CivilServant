<template>
  <div class="home" v-model="currentPath = $route.fullPath">
    <div class="banner">
      <Carousel autoplay v-model="currentBanner" loop>
        <CarouselItem v-for="(item,index) in bannerList" :key="item+index">
          <div class="demo-carousel">
            <img :src="item.imgurl" :alt="item.title">
          </div>
        </CarouselItem>
      </Carousel>
    </div>
    <div class="fast-search" :class="{searchrotop:toTop}">
      <div class="search">
        <div class="search-el">
          <div class="search-cont">
            <Icon type="ios-search-outline" /><input type="text" v-model="title" placeholder="输入内容全局搜索"><button class="search-btn" id="searchContent" @click="globalSearch">搜索</button>
          </div>
        </div>
        <div class="hot-search">
          <span>热搜关键词：</span>
          <label for="searchContent">小月公开课</label>
          <label for="searchContent">粉笔公开课</label>
          <label for="searchContent">CCTalk公开课</label>
        </div>
      </div>
      <div class="h-header">
        <div class="second-level-list">
          <div class="h-h-item" :class="{second_level_active: class2 == null}" @click="class2 = null"><span>全部</span></div>
            <template v-if="class1 != null">
              <div class="h-h-item" v-for="(item,index) in classList[class1].child" :class="{second_level_active: class2 == item.value}" @click="class2 = item.value"><span>{{item.name}}</span></div>
            </template>
          <div class="h-h-item search-result">共找到 {{total ? total : 0}} 个相关内容</div>
        </div>
        <div class="third-level-list">
          <div class="third-lv-item" :class="{third_level_active: class3 == null}" @click="class3 = null">
            <span>全部</span>
          </div>
          <template v-if="class1 != null && class2 != null">
            <div class="third-lv-item" v-for="(item,index) in classList[class1].child[class2].child" :class="{third_level_active: class3 == item.value}" @click="class3 = item.value">
              <span>{{item.name}}</span>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="h-container">
      <div class="h-c-list">
        <div class="h-c-item" v-for="(item,index) in dataList" :key="item._id" @click="goToDetail(item._id)">
          <div class="h-c-pic">
            <img :src="item.thumbnail" :alt="item.title">
          </div>
          <div class="h-c-abstract">
            <div class="abs-title">{{item.title}}</div>
            <div class="abs-describtion">
              <span class="free" v-if="item.price == 0">免费</span>
              <span class="charge" v-else>￥{{item.price}} / VIP</span>
              <Icon type="ios-people" class="browsers" /> <span>{{item.browseCount}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../base/Header/Header.vue'
import Footer from '../../base/Footer/Footer.vue'
import data from 'common/js/data.js'
export default {
  name: 'home',
  components: {
    'v-header': Header,
    'v-footer': Footer
  },
  data () {
    return {
      bannerList: [
        {
          imgurl: '/static/img/banner3.jpg',
          title: 'title2'
        },
        {
          imgurl: '/static/img/banner5.jpg',
          title: 'title2'
        }
      ],
      currentBanner: 0,
      toTop: false,
      class1: null,
      class2: null,
      class3: null,
      currentPath: '',
      classList: data.classList,
      dataList: [],
      title: '',
      pageNo: 1,
      pageSize: 10,
      total: 0,
    }
  },
  watch: {
    currentPath(val,oldVal) {
      this.class1 = val.split('=').length == 2 ? parseInt(val.split('=')[1]) : null
      console.log(this.class1)
    },
    class1(val,oldVal) {
      this.class2 = null;
      this.class3 = null;
      this.filtDataList();
    },
    class2(val,oldVal) {
      this.class3 = null;
      if(val != null) {
        this.filtDataList();
      }
    },
    class3(val,oldVal) {
      if(val != null) {
        this.filtDataList();
      }
    },
  },
  mounted () {
//    this.lisentnerScroll()
  },
  created () {
    this.filtDataList();
  },
  methods: {
//全局搜索
    globalSearch() {
      debugger
      this.$router.push('/home');
      this.filtDataList()
    },
// 获取筛选列表
    filtDataList() {
      let params = {
        class1: this.class1,
        class2:this.class2,
        class3:this.class3,
        title: this.title,
        pageNo: this.pageNo,
        pageSize: this.pageSize,
        title: this.title
      }
      let self = this
      this.api.filtDataList(params).then((res) => {
        if (res.status === 0) {
          self.dataList = res.list
          self.total = res.total
          console.log(res.list)
        }
      });
    },
    lisentnerScroll () {
      let self = this
      document.onscroll = function () {
        let scrolltop = document.documentElement.scrollTop
        let offsetTop = document.getElementsByClassName('fast-search')[0].offsetTop
        if (scrolltop >= 622) {
          self.toTop = true
        } else {
          self.toTop = false
        }
      }
    },
    goToDetail (id) {
      this.$router.push({path: '/detail', query: {id: id}})
    }
  },
  beforeDestroyed () {
    document.onscroll = ''
  }
}
</script>

<style scoped lang="stylus">
@import "~common/style/styl"
.home
  height: 100%
  .banner
    .demo-carousel
      img
        width: 100%
  .search
    padding: 10px 0 6px 0
    .search-el
      display: flex
      justify-content: center
      font-size: 18px
      .search-btn
        height: 48px
        line-height: 48px
        background: $title-color
        -webkit-border-radius: 0 6px 6px 0
        -moz-border-radius:0 6px 6px 0
        border-radius:0 6px 6px 0
        width: 90px
        outline:none;
        vertical-align: middle
        border: none
        color: #fff
        font-size: 18px
        vertical-align: middle
      .search-cont
        height: 48px
        width: 800px
        min-width:400px
        position: relative
        i
          position: absolute
          left: 20px
          top: 50%;
          -webkit-transform: translateY(-50%)
          -moz-transform: translateY(-50%)
          -ms-transform: translateY(-50%)
          -o-transform: translateY(-50%)
          transform: translateY(-50%)
          font-size: 36px
        input
          height: 100%
          line-height: 48px
          vertical-align: middle
          padding:0 40px 0 70px
          width:calc(100% - 90px)
          border: none
    .hot-search
      width: 800px
      min-width:400px
      margin:5px auto
      text-align: left
      label
        margin-left: 15px
  .h-header
    padding: 10px 20px 0 20px
    margin-top:6px
    background: #fff
    .second-level-list
      display: flex
      justify-content: flex-start
      width: 100%
      .h-h-item
        padding: 0 25px
        line-height: 32px
        font-size: 16px
        cursor: pointer
      .second_level_active
        color: $title-color
        span
          position: relative
          &:before
            content: ' ';
            position: absolute;
            bottom: -8px;
            background: #f01414;
            width: 16px;
            height: 3px;
            left: 50%;
            -webkit-transform: translateX(-50%);
            -moz-transform: translateX(-50%);
            -ms-transform: translateX(-50%);
            -o-transform: translateX(-50%);
            transform: translateX(-50%);
      .search-result
        font-size: 13px
        min-width: 180px
    .third-level-list
      display: flex
      justify-content: flex-start
      align-items: center
      padding: 10px
      .third-lv-item
        padding: 10px
        cursor: pointer
        span
          font-size: 14px
          padding: 8px
          -webkit-border-radius: 16px
          -moz-border-radius: 16px
          border-radius: 16px
      .third_level_active
        span
          background: #909090
          color: #ffffff
  .h-container
    height: calc(100% -100px)
    padding :0px 20px 20px 20px
    background: #fff
    .h-c-list
      height:calc(100% - 158px)
      overflow-x: scroll
      display: flex
      justify-content: space-around
      flex-wrap: wrap
      align-items: center
      padding-top: 20px
      &::-webkit-scrollbar
        display: none
      .h-c-item
        width: 300px
        /*height: 240px*/
        padding:10px 20px
        text-align: left
        margin: 0 0px 20px 0
        -webkit-border-radius: 10px
        -moz-border-radius:10px
        border-radius: 10px
        -webkit-box-shadow: 0 2px 20px 5px rgba(7,17,27,.1)
        -moz-box-shadow: 0 2px 20px 5px rgba(7,17,27,.1)
        box-shadow: 0 2px 20px 5px rgba(7,17,27,.1)
        &:hover
          -webkit-box-shadow: 0 2px 20px 5px rgba(7,17,27,.26)
          -moz-box-shadow: 0 2px 20px 5px rgba(7,17,27,.26)
          box-shadow: 0 2px 20px 5px rgba(7,17,27,.26)
          /*animation: moveAnimation 0.4s
          -moz-animation: moveAnimation 0.4s
          -webkit-animation: moveAnimation 0.4s
          -o-animation: moveAnimation 0.4s
          animation-fill-mode: forwards;*/
        .h-c-pic
          height: 146px
          display: flex
          justify-content: center
          align-items: center
          img
            max-width: 100%
            max-height: 100%
            -webkit-border-radius: 6px
            -moz-border-radius:6px
            border-radius: 6px
        .abs-title
          font-size: 15px
          width: 100%
          font-weight:bolder
          height: 46px
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
          margin-top: 8px
        .abs-describtion
          font-size: 13px
          margin:5px 0
          span
            vertical-align: middle
          .free
            color: $title-color
          .browsers
            font-size: 24px
            vertical-align: middle
            margin-left: 15px
.searchrotop
  position: fixed
  top: 0px
  left: 0
  width: 100%
  background: #D9DDE1;
</style>
<style>
  html::-webkit-scrollbar {
    /*display: none*/
  }
</style>
