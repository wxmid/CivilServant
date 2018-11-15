<template>
  <div class="detail">
    <div class="d-container">
      <div class="main-img-describ">
        <div class="main-img">
          <img src="/static/img/mainImg.jpg" alt="">
        </div>
        <div class="main-describ">
          <div class="m-title">2018下半年四川省考4期（部分回放）2018下半年四川省考4期（部分回放）</div>
          <div class="m-row">
            <span class="m-r-title">价值：</span>
            <span v-if="id%2">￥{{selectedCateg.price.toFixed(2)}}/ VIP</span>
            <span v-else class="m-free">免费</span>
          </div>
          <div class="m-row curse-category">
            <span class="m-r-title">课程类别:</span>
            <div class="categ-list">
              <span v-for="item in product.categList" :class="{activeCateg: selectedCateg.id === item.id}" :key="item.id" @click="selectCateg(item)">{{item.categName}}</span>
            </div>
          </div>
          <div class="m-row">
            <span class="m-r-title">下载链接：</span>
            <a :href="panLink" target="_blank" class="pan-link" v-if="isShow">{{panLink}}</a>
            <span class="default-text" v-else>{{defaultText}}</span>
          </div>
          <div class="m-row buy-upgread">
            <button>立即购买</button>
            <button>升级为VIP</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      id: '',
      isShow: false,
      panLink: 'https://www.mindwin.com',
      defaultText: 'VIP会员或单独购买后可看链接',
      selectedCateg: {
        id: 0,
        categName: '18年10月钩不了沉',
        price: 37.80,
        isPay: false
      },
      product: {
        categList: [
          {
            id: 0,
            categName: '18年10月钩不了沉',
            price: 37.80,
            isPay: false
          },
          {
            id: 1,
            categName: '18年8月四海龙飞',
            price: 37.80,
            isPay: false
          },
          {
            id: 2,
            categName: '17年8月口碑山人',
            price: 29.80,
            isPay: false
          },
          {
            id: 3,
            categName: '16年8月小月独家',
            price: 18.80,
            isPay: true
          }]
      }
    }
  },
  created () {
    this.id = this.$route.query.id
    this.selectedCateg = this.product.categList[0]
  },
  methods: {
    selectCateg (data) {
      this.selectedCateg = data
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "~common/style/styl"
.detail
  background: #fff
  padding: 50px 0
  .d-container
    width: 1000px
    margin: 0 auto
    .main-img-describ
      display: flex
      justify-content:space-between
      /*align-items: center*/
      .main-img
        width: 50%
        img
          width: 100%
      .main-describ
        width: 50%
        padding-left: 20px
        text-align: left
        .m-title
          font-size  16px
          font-weight:bolder
        .m-row
          margin-top 20px
          span,a
            font-size: 14px
            font-weight:bold
            padding: 4px
          .m-r-title
            display: inline-block
            width: 80px
          .m-free
            font-size: 14px
            color: $title-color
          &:first-child
            font-size: 16px
            padding-right:10px
            font-weight:bold
          .pan-link
            border: 1px dashed #ddd
          .default-text
            font-weight: normal
            border: 1px dashed #ddd
            color: #999
        .buy-upgread
          button
            color: #E5511D;
            border-color: #F0CAB6;
            background: #FFE4D0;
            display: inline-block;
            cursor: pointer;
            width: 134px;
            height: 38px;
            text-align: center;
            font-family: "Hiragino Sans GB","microsoft yahei",sans-serif;
            font-size: 16px;
            line-height: 38px;
            border-width: 1px;
            border-style: solid;
            -moz-border-radius: 2px;
            -webkit-border-radius: 2px;
            border-radius: 2px;
            &:nth-child(2)
              border-color: #F22D00;
              background: #F22D00;
              color: #FFF;
              border-color: #F40;
              background: #F40;
              margin-left:25px
        .curse-category
          display: flex
          justify-content:flex-start
          .categ-list
            display: flex
            justify-content: flex-start
            flex-wrap: wrap
            span
              display: inline-block
              padding: 5px 6px
              font-size: 10px
              border: 1px solid #ccc
              margin: 0 10px 10px 0
              font-weight: normal
              cursor: pointer
              height: 32px
              color: #333
              -webkit-box-sizing: border-box
              -moz-box-sizing: border-box
              box-sizing: border-box
            .activeCateg
              color: #F40;
              border: 2px solid #F40;
</style>
