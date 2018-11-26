<template>
  <div class="backstage-datas">
    <Table border :columns="dataListTitle" :data="dataList"></Table>
    <Modal
      v-model="isShow"
      title="编辑资料信息"
      @on-ok="ok"
      @on-cancel="cancel">
      <Form :model="formItem" :label-width="80">
        <FormItem label="Input">
          <Input v-model="formItem.input" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="Select">
          <Select v-model="formItem.select">
            <Option value="beijing">New York</Option>
            <Option value="shanghai">London</Option>
            <Option value="shenzhen">Sydney</Option>
          </Select>
        </FormItem>
        <FormItem label="DatePicker">
          <Row>
            <Col span="11">
            <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
            </Col>
            <Col span="2" style="text-align: center">-</Col>
            <Col span="11">
            <TimePicker type="time" placeholder="Select time" v-model="formItem.time"></TimePicker>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="Radio">
          <RadioGroup v-model="formItem.radio">
            <Radio label="male">Male</Radio>
            <Radio label="female">Female</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="Checkbox">
          <CheckboxGroup v-model="formItem.checkbox">
            <Checkbox label="Eat"></Checkbox>
            <Checkbox label="Sleep"></Checkbox>
            <Checkbox label="Run"></Checkbox>
            <Checkbox label="Movie"></Checkbox>
          </CheckboxGroup>
        </FormItem>
        <FormItem label="Switch">
          <i-switch v-model="formItem.switch" size="large">
            <span slot="open">On</span>
            <span slot="close">Off</span>
          </i-switch>
        </FormItem>
        <FormItem label="Slider">
          <Slider v-model="formItem.slider" range></Slider>
        </FormItem>
        <FormItem label="Text">
          <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem>
          <Button type="primary">Submit</Button>
          <Button style="margin-left: 8px">Cancel</Button>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
  export default {
    name: 'backstageDatas',
    data () {
      return {
        formItem: {
          input: '',
          select: '',
          radio: 'male',
          checkbox: [],
          switch: true,
          date: '',
          time: '',
          slider: [20, 50],
          textarea: ''
        },
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
