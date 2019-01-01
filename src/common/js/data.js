/**
 * Created by wxm-pc on 2018/12/17.
 */
const classList = [
  {
    name: '国考',
    value: 0,
    child: [
      {
        name: '行测',
        value: 0,
        child: [
          {
            name: '常识判断',
            value: 0
          },
          {
            name: '言语理解与表达',
            value: 1
          },
          {
            name: '数量关系',
            value: 2
          },
          {
            name: '判断推理',
            value: 3
          },
          {
            name: '资料分析',
            value: 4
          },
        ]
      },
      {
        name: '申论',
        value: 1,
        child: []
      }
    ]
  },
  {
    name: '省考',
    value: 1,
    child: [
      {
        name: '行测',
        value: 0,
        child: [
          {
            name: '常识判断',
            value: 0
          },
          {
            name: '言语理解与表达',
            value: 1
          },
          {
            name: '数量关系',
            value: 2
          },
          {
            name: '判断推理',
            value: 3
          },
          {
            name: '资料分析',
            value: 4
          },
        ]
      },
      {
        name: '申论',
        value: 1,
        child: []
      }
    ]
  },
  {
    name: '银保监会',
    value: 2,
    child: [
      {
        name: '银保监财经类',
        value: 0,
        child: []
      },
      {
        name: '银保监财会类',
        value: 1,
        child: []
      },
      {
        name: '银保监法律类',
        value: 2,
        child: []
      },
      {
        name: '银保监计算机类',
        value: 3,
        child: []
      },
      {
        name: '银保监综合类',
        value: 4,
        child: []
      }
    ]
  },
  {
    name: '事业单位',
    value: 3,
    child: [
      {
        name: '职策',
        value: 0,
        child: [
          {
            name: '常识判断',
            value: 0
          },
          {
            name: '言语理解与表达',
            value: 1
          },
          {
            name: '数量关系',
            value: 2
          },
          {
            name: '判断推理',
            value: 3
          },
          {
            name: '资料分析',
            value: 4
          },
        ]
      },
      {
        name: '综合应用能力',
        value: 1,
        child: [
          {
            name: '综合应用能力A类',
            value: 0
          },
          {
            name: '综合应用能力B类',
            value: 1
          },
          {
            name: '综合应用能力C类',
            value: 2
          }
        ]
      }
    ]
  },
  {
    name: '证监会',
    value: 4,
    child: [
      {
        name: '证监财金类',
        value: 0,
        child: []
      },
      {
        name: '证监会计类',
        value: 1,
        child: []
      },
      {
        name: '证监法律类',
        value: 2,
        child: []
      },
      {
        name: '证监计算机类',
        value: 3,
        child: []
      }
    ]
  }
]
export default {
  classList: classList,
}
