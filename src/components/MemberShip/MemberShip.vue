<template>
  <div class="member-ship">
    <Table border :columns="columns7" :data="data6"></Table>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      columns7: [
        {
          title: '会员等级',
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
          title: '会员期限(购买之日起)',
          key: 'term'
        },
        {
          title: '会员权益',
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
              h('span', params.row.price ? params.row.price.toFixed(2) : '0.00' + '元')
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
              params.row.price ? h('Button', {
                props: {
                  type: 'primary',
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
              }, '购买')
                : h('span', '--')
            ])
          }
        }
      ],
      data6: [
        {
          level: '普通会员',
          term: '--',
          rights: '仅限免费资源下载',
          price: 0
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
    show (params) {
      this.$Modal.confirm({
        title: '系统提示',
        content: `确定去支付购买<b>“${params.row.level}”</b>吗？`,
        cancelText: '取消',
        okText: '确定',
        maskClosable: true,
        onOk: () => {
          this.toPay(params)
        },
        onCancel: () => {
          this.cancelPay(params)
        },
      })
    },
    remove (index) {
      this.data6.splice(index, 1)
    },
    toPay(cancelPay) {
      debugger
    },
    cancelPay(cancelPay) {
      debugger
    }
  }
}
</script>

<style scoped lang="stylus">
.member-ship
  /*padding: 40px 0*/
</style>
