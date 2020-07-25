// page/component/list2/list2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    itemlist:[],
    weiyi:[],
    yaolirong:[],
    chenshan:[],
    lianyiqun:[],
    zhenzhishan:[],
    xiuxianku:[],
    niuzaiku:[],
    nvxue:[],
    xiaobaixie:[],
    laodiexie:[],
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
    // weiyi: [
    //   {
    //     id: 2,
    //     url: '../details/details',
    //     thumb: 'https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/IMG_1442(20191122-111226).JPG',
    //     title: '卫衣',
    //     price: 122
    //   },
    //   {
    //     id: 4,
    //     url: '../details/details',
    //     thumb: 'https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/IMG_1444(20191122-111315).JPG',
    //     title: '卫衣',
    //     price: 132
    //   }
    // ],
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var type = options.name;
    console.log(type);
    var self = this;
    if (type == "卫衣") {
      self.setData({

        itemlist: this.data.weiyi,
        caption: type
      })

    }

    if (type == "摇粒绒") {
      self.setData({

        itemlist: this.data.yaolirong,
        caption: type
      })

    }

    if (type == "衬衫") {
      self.setData({

        itemlist: this.data.chenshan,
        caption: type
      })

    }

    if (type == "连衣裙") {
      self.setData({

        itemlist: this.data.lianyiqun,
        caption: type
      })

    }
    if (type == "针织衫") {
      self.setData({

        itemlist: this.data.zhenzhishan,
        caption: type
      })

    }
    if (type == "休闲裤") {
      self.setData({

        itemlist: this.data.xiuxianku,
        caption: type
      })

    }
  
    if (type == "牛仔裤") {
      self.setData({

        itemlist: this.data.niuzaiku,
        caption: type
      })

    }
    if (type == "女靴") {
      self.setData({

        itemlist: this.data.xiezi,
        caption: type
      })

    }
    if (type == "小白鞋") {
      self.setData({

        itemlist: this.data.xiaobaixie,
        caption: type
      })

    }
    if (type == "老爹鞋") {
      self.setData({

        itemlist: this.data.laodiexie,
        caption: type
      })

    }
    if (type == "运动鞋") {
      self.setData({

        itemlist: this.data.yundongxie,
        caption: type
      })
    }







    // 页面初始化 options为页面跳转所带来的参数
  },

  gotoDetail: function (e) {
    var index = e.currentTarget.dataset.id;
    console.log(index);
    index = index-1;
    wx.navigateTo({
      url: '/page/component/details/details?index=' + index,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})