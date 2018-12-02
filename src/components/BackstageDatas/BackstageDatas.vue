<template>
  <div class="backstage-datas">
    <div class="top-part">
      <Button class="add-data" type="primary" @click="adddata"><Icon type="md-add" /></Button><Input suffix="ios-search" placeholder="Enter text" style="width: auto" />
    </div>
    <Table border :columns="dataListTitle" :data="dataList"></Table>
    <Page class-name="t-pager" :total="total" :page-size-opts="pageSizeOpts" :current="current" :page-size="pageSize" show-total show-elevator show-sizer />
    <Modal
      v-model="isShow"
      title="编辑资料信息"
      :loading="modalLoading"
      @on-ok="confirm"
      @on-cancel="cancel">
      <Form :model="formItem" :label-width="80">
        <FormItem label="*缩略图">
          <Upload
            multiple
            type="drag"
            class="upload-ele"
            action="//jsonplaceholder.typicode.com/posts/">
            <img v-if="currentData.thumbnail" :src="currentData.thumbnail" alt="" class="uload-thumbnail">
            <div v-else style="padding: 20px 0">
              <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
              <p>Click or drag files here to upload</p>
            </div>
          </Upload>
        </FormItem>
        <FormItem label="*图片列表">
          <div class="demo-upload-list" v-for="item in uploadList">
            <template v-if="item.status === 'finished'">
              <img :src="item.url">
              <div class="demo-upload-list-cover">
                <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
                <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
              </div>
            </template>
            <template v-else>
              <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
            </template>
          </div>
          <Upload
            ref="upload"
            :show-upload-list="false"
            :default-file-list="currentData.imgList"
            :on-success="handleSuccess"
            :format="['jpg','jpeg','png']"
            :max-size="2048"
            :on-format-error="handleFormatError"
            :on-exceeded-size="handleMaxSize"
            :before-upload="handleBeforeUpload"
            multiple
            type="drag"
            action="//jsonplaceholder.typicode.com/posts/"
            style="display: inline-block;width:58px;">
            <div style="width: 58px;height:58px;line-height: 58px;">
              <Icon type="ios-camera" size="20"></Icon>
            </div>
          </Upload>
          <Modal title="View Image" v-model="visible">
            <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
          </Modal>
        </FormItem>
        <FormItem label="标题">
          <Input v-model="formItem.input" placeholder="请输入标题"></Input>
        </FormItem>
        <FormItem label="价格">
          <Input type="text" v-model="formItem.input" placeholder="请输入价格"></Input>
        </FormItem>
        <FormItem label="浏览基数">
          <Input type="text" v-model="formItem.input" placeholder="请输入购买基数"></Input>
        </FormItem>
        <!--<FormItem label="Select">
          <Select v-model="formItem.select">
            <Option value="beijing">New York</Option>
            <Option value="shanghai">London</Option>
            <Option value="shenzhen">Sydney</Option>
          </Select>
        </FormItem>-->
        <!--<FormItem label="DatePicker">
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
        </FormItem>-->
        <FormItem label="上下架">
          <i-switch v-model="formItem.switch" size="large">
            <span slot="open">上架</span>
            <span slot="close">下架</span>
          </i-switch>
        </FormItem>
       <!-- <FormItem label="Slider">
          <Slider v-model="formItem.slider" range></Slider>
        </FormItem>-->
        <FormItem label="描述">
          <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入描述内容."></Input>
        </FormItem>
      </Form>
    </Modal>
    <Modal v-model="deleteModalShow" scrollable title="系统提示" @on-ok="deleteRow">
      <div>确定删除该条数据吗？</div>
    </Modal>
  </div>
</template>

<script>
  export default {
    name: 'backstageDatas',
    data () {
      return {
        current: 1,
        total: 80,
        pageSize: 10,
        pageSizeOpts: [10,30,50,100],
        deleteModalShow: false,
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
        isShow: false,
        modalLoading:true,
        dataListTitle: [
          {
            title: '资料图',
            width: 140,
            key: 'level',
            render: (h, params) => {
              return h('div',
                {
                  attrs: {
                    class: 'thumbnail-wrap'
                  }
                },
                [
                h('img', {
                  attrs: {
                    src: params.row.thumbnail,
                    class: 'thumbnail'
                  }
                })
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
                      this.currentData = params
                      this.deleteModalShow = true
                    }
                  }
                }, '删除')
              ])
            }
          }
        ],
        dataList: [
          {
            id: 123456,
            thumbnail: '/static/img/mainImg.jpg',
            level: '普通会员',
            term: '--',
            rights: '仅限免费资源下载',
            price: '--'
          }
        ],
        currentData: {
          id: 123456,
          thumbnail: '', // '/static/img/mainImg.jpg',
          level: '普通会员',
          term: '--',
          rights: '仅限免费资源下载',
          price: '--',
          imgList: [
            {
              'name': 'a42bdcc1178e62b4694c830f028db5c0',
              'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
            },
            {
              'name': 'bc7521e033abdd1e92222d733590f104',
              'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
            },
            {
              'name': 'bc7521e033abdd1e92222d733590f104',
              'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
            }
          ]
        },
        imgName: '',
        visible: false,
        uploadList: []
      }
    },
    mounted () {
      this.uploadList = this.$refs.upload.fileList;
    },
    methods: {
      adddata() {
        this.isShow = true
        this.currentData = {
          thumbnail: '', // '/static/img/mainImg.jpg',
          level: '普通会员',
          term: '',
          rights: '',
          price: ''
        }
      },
      editDatas (data) {
        this.isShow = true
        this.currentData = data.row
      },
      remove (data) {
        this.dataList.splice(data.index, 1)
      },
      confirm() {
        console.log('ok')
//        return false
//        this.isShow = false
        this.modalLoading = false
      },
      cancel() {
        console.log('cancel')
      },
      deleteRow(row) {

      },
      handleView (name) {
        this.imgName = name;
        this.visible = true;
      },
      handleRemove (file) {
        const fileList = this.$refs.upload.fileList;
        this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
      },
      handleSuccess (res, file) {
        file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
        file.name = '7eb99afb9d5f317c912f08b5212fd69a';
      },
      handleFormatError (file) {
        this.$Notice.warning({
          title: 'The file format is incorrect',
          desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
        });
      },
      handleMaxSize (file) {
        this.$Notice.warning({
          title: 'Exceeding file size limit',
          desc: 'File  ' + file.name + ' is too large, no more than 2M.'
        });
      },
      handleBeforeUpload () {
        const check = this.uploadList.length < 5;
        if (!check) {
          this.$Notice.warning({
            title: 'Up to five pictures can be uploaded.'
          });
        }
        return check;
      }
    }
  }
</script>

<style scoped lang="stylus">
.backstage-datas
  height: 100%
  background: #ffffff
  .top-part
    padding: 20px
    text-align: left
    .add-data
      margin-right: 20px
  .t-pager
    margin-top: 10px
.upload-ele
  width: 60%
</style>
<style>
.thumbnail-wrap {
  padding: 10px 0;
}
.thumbnail {
  width: 100px
}
.uload-thumbnail {
  width: 100%;
}

.demo-upload-list{
  display: inline-block;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0,0,0,.2);
  margin-right: 4px;
}
.demo-upload-list img{
  width: 100%;
  height: 100%;
}
.demo-upload-list-cover{
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,.6);
}
.demo-upload-list:hover .demo-upload-list-cover{
  display: block;
}
.demo-upload-list-cover i{
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin: 0 2px;
}
</style>
