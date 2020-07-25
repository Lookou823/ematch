// page/component/list/list.js
Page({
  data:{
    caption:"",
    itemlist:[],
    maoyi:[],
    duanxiu:[],
    yurongfu:[],
    chenshan:[],
    changku:[],
    niuzaiku:[],
    yundongku:[],
    xiuxianxie:[],
    fanbuxie:[],
    banxie:[],
    yundongxie:[],
    waitao: [
      {
        id: 1,
        url: '../details/details',
        thumb: 'https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/IMG_1441(20191122-111220).JPG',
        title: '外套',
        price: 112
      },

      {
        id: 3,
        url: '../details/details',
        thumb: 'https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/IMG_1443(20191122-111238).JPG',
        title: '连帽外套',
        price: 132
      },

      {
        id: 5,
        url: '../details/details',
        thumb: 'https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/IMG_1445(20191122-111329).JPG',
        title: '夹克',
        price: 122
      }

    ],
    weiyi: [
      {
        id: 2,
        url: '../details/details',
        thumb: 'https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/IMG_1442(20191122-111226).JPG',
        title: '卫衣',
        price: 122
      },
      {
        id: 4,
        url: '../details/details',
        thumb: 'https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/IMG_1444(20191122-111315).JPG',
        title: '卫衣',
        price: 132
      }
    ],
    xiezi: [

      {
        id: 6,
        url: '../details/details',
        thumb: 'https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/IMG_1446(20191122-111348).JPG',
        title: '马丁靴',
        price: 212
      }
    ]


  },
  onLoad:function(options){
      var type = options.name;
      console.log(type);
    var self = this;
      if(type=="外套")
      {
        self.setData({

          itemlist: this.data.waitao,
          caption:type
        })

      }

    if (type == "卫衣") {
      self.setData({

        itemlist: this.data.weiyi,
        caption: type
      })

    }

    if (type == "毛衣") {
      self.setData({

        itemlist: this.data.maoyi,
        caption: type
      })

    }

    if (type == "短袖") {
      self.setData({

        itemlist: this.data.duanxiu,
        caption: type
      })

    }
    if (type == "羽绒服") {
      self.setData({

        itemlist: this.data.yurongfu,
        caption: type
      })

    }
    if (type == "衬衫") {
      self.setData({

        itemlist: this.data.chenshan,
        caption: type
      })

    }
    if (type == "休闲长裤") {
      self.setData({

        itemlist: this.data.maoyi,
        caption: type
      })

    }
    if (type == "牛仔裤") {
      self.setData({

        itemlist: this.data.maoyi,
        caption: type
      })

    }
    if (type == "运动裤") {
      self.setData({

        itemlist: this.data.maoyi,
        caption: type
      })

    }
    if (type == "休闲鞋") {
      self.setData({

        itemlist: this.data.maoyi,
        caption: type
      })

    }
    if (type == "帆布鞋") {
      self.setData({

        itemlist: this.data.maoyi,
        caption: type
      })

    }
      if (type == "板鞋") {
        self.setData({

          itemlist: this.data.maoyi,
          caption: type
        })
      }

        if (type == "运动鞋") {
          self.setData({

            itemlist: this.data.maoyi,
            caption: type
          })
        }

    



    // 页面初始化 options为页面跳转所带来的参数
  },

  gotoDetail: function (e) {
    var index = e.currentTarget.dataset.id;
    index = index - 1;
    console.log(index);
    
    wx.navigateTo({
      url: '/page/component/details/details?index=' + index,
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})