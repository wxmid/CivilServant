<template>
  <div class="backstage-datas">
    <Table border :columns="dataListTitle" :data="dataList"></Table>
    <Modal
      v-model="isShow"
      title="编辑资料信息"
      @on-ok="ok"
      @on-cancel="cancel">
      <p>Content of dialog</p>
      <p>Content of dialog</p>
      <p>Content of dialog</p>
    </Modal>
  </div>
</template>

<script>
  export default {
    name: 'backstageDatas',
    data () {
      return {
        currentData: {},
        isShow: false,
        dataListTitle: [
          {
            title: '资料图',
            key: 'level',
            render: (h, params) => {
              return h('div', [
                h('Icon', {
                  props: {
                    type: 'person'
                  }
                }),
                h('strong', params.row.level)
              ])
            }
          },
          {
            title: '标题',
            key: 'term'
          },
          {
            title: '描述',
            key: 'rights'
          },
          {
            title: '下载链接',
            key: 'rights'
          },
          {
            title: '课程类别',
            key: 'rights'
          },
          {
            title: '价格',
            key: 'price',
            render: (h, params) => {
              return h('div', [
                h('Icon', {
                  props: {
                    type: 'person'
                  }
                }),
                h('span', params.row.price + '元')
              ])
            }
          },
          {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.editDatas(params)
                    }
                  }
                }, '编辑'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.show(params)
                    }
                  }
                }, '删除')
              ])
            }
          }
        ],
        dataList: [
          {
            level: '普通会员',
            term: '--',
            rights: '仅限免费资源下载',
            price: '--'
          },
          {
            level: '月费VIP会员',
            term: '30天',
            rights: '全站资源随意下载',
            price: 19.8
          },
          {
            level: '年费VIP会员',
            term: '365天',
            rights: '全站资源随意下载',
            price: 49.8
          },
          {
            level: '永久VIP会员',
            term: '永久',
            rights: '全站资源随意下载',
            price: 99.8
          }
        ]
      }
    },
    methods: {
      editDatas (data) {
        debugger
        this.isShow = true
        this.currentData = data.row
      },
      remove (data) {
        this.dataList.splice(data.index, 1)
      }
    }
  }
</script>

<style scoped lang="stylus">
  .backstage-datas
    height: 100%
    background: #ffffff
</style>
