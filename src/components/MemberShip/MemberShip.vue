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
                    this.show(params.index)
                  }
                }
              }, '购买')
            ])
          }
        }
      ],
      data6: [
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
    show (index) {
      this.$Modal.info({
        title: 'User Info',
        content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
      })
    },
    remove (index) {
      this.data6.splice(index, 1)
    }
  }
}
</script>

<style scoped lang="stylus">
.member-ship
  /*padding: 40px 0*/
</style>
