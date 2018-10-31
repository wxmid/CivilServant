<template>
  <div class="home">
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
            <Icon type="ios-search-outline" /><input type="text"><button class="search-btn" id="searchContent">搜索</button>
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
        <div class="h-h-item">全站</div>
        <div class="h-h-item">免费资源</div>
        <div class="h-h-item">大神笔记</div>
        <div class="h-h-item search-result">共找到 61875 个相关内容</div>
      </div>
    </div>
    <div class="h-container">
      <div class="h-c-list">
        <div class="h-c-item" v-for="(item,index) in 19" :key="item" @click="goToDetail(index)">
          <div class="h-c-pic">
            <img src="/static/img/zl.jpg" :alt="index">
          </div>
          <div class="h-c-abstract">
            <div class="abs-title">笔试系统班图书大礼包：2018下半年四川省考4期（部分回放）2018下半年四川省考4期（部分回放）</div>
            <div class="abs-describtion">
              <span class="free" v-if="index%2">免费</span>
              <span class="charge" v-else>￥39.80 / VIP</span>
              <Icon type="ios-people" class="browsers" /> <span>137</span>
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
          imgurl: '/static/img/banner0.jpg',
          title: 'title0'
        },
        {
          imgurl: '/static/img/banner1.jpg',
          title: 'title1'
        },
        {
          imgurl: '/static/img/banner2.jpg',
          title: 'title2'
        }
      ],
      currentBanner: 0,
      toTop: false
    }
  },
  mounted () {
    this.lisentnerScroll()
  },
  methods: {
    lisentnerScroll () {
      let self = this
      document.onscroll = function () {
        let scrolltop = document.documentElement.scrollTop
        let offsetTop = document.getElementsByClassName('fast-search')[0].offsetTop
        console.log("scrolltop:" + scrolltop)
        console.log("offsetTop:" + offsetTop)
        console.log("scrolltop - offsetTop:" +(scrolltop - offsetTop))
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
  }
}
</script>

<style scoped lang="stylus">
@import "~common/style/styl"
.home
  height: 100%
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
    display: flex
    justify-content: flex-start
    width: 100%
    padding: 10px 20px 0 20px
    margin-top:6px
    background: #fff
    .h-h-item
      width: 120px
      height: 48px
      line-height: 48px
      font-size: 18px
    .search-result
      font-size: 13px
      min-width: 180px
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
        height: 240px
        padding:10px 20px
        text-align: left
        margin: 0 20px 20px 0
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
          animation: moveAnimation 0.4s
          -moz-animation: moveAnimation 0.4s
          -webkit-animation: moveAnimation 0.4s
          -o-animation: moveAnimation 0.4s
          animation-fill-mode: forwards;
        .h-c-pic
          img
            width: 100%
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
    display: none
  }
</style>
