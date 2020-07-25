// page/component/new-pages/user/user.js
Page({
  data:{
    thumb:'',
    nickname:'',
    orders:[],
    hasAddress:false,
    address:{},
    //录入衣服单品数据库的函数
    color: "",
    image: "",
    infocolor: "",
    intro: "",
    mat: "",
    name: "",
    price: "",
    //录入衣服风格
    color1:"",
    image1:"",
    name1:"",
    style1:"",

    //录入衣服饰品
    infocolor2: "",
    intro2: "",
    mat2: "",
    name2: "",
    price2: "",


  
  },
// 录入数据库
  getvalue1: function (e) {
    this.setData({ color: e.detail.value })


  },

   getvalue2: function (e) {
    this.setData({ image: e.detail.value })


  },
  getvalue3: function (e) {
    this.setData({ infocolor: e.detail.value })


  },

  getvalue4: function (e) {
    this.setData({ intro: e.detail.value })


  },

  getvalue5: function (e) {
    this.setData({ mat: e.detail.value })


  },

  getvalue6: function (e) {
    this.setData({ name: e.detail.value })


  },

  getvalue7: function (e) {
    this.setData({ price: e.detail.value })


  },
  testCloud: function (){
    var that = this;
    wx.cloud.callFunction({
      name: 'adddata',
      data: {
        color: that.data.color,
        image: that.data.image,
        infocolor: that.data.infocolor,
        intro: that.data.intro,
        mat: that.data.mat,
        name: that.data.name,
        price: that.data.price,
    
      },


      success: res => {
        wx.showToast({
          title: '添加成功',
          duration: 2000
        })
        console.log("res=", res.result)
      },
      fail: err => {
        wx.showToast({
          title: '添加失败',
          icon: 'none',
        })
      },
      complete: res => {
        console.log('callFunction test result: ', res)
      }
    })


  },


  getvalue11: function (e) {
    this.setData({ color1: e.detail.value })


  },

  getvalue12: function (e) {
    this.setData({ image1: e.detail.value })


  },
  getvalue13: function (e) {
    this.setData({ name1: e.detail.value })


  },

  getvalue14: function (e) {
    this.setData({ style1: e.detail.value })


  },


  testCloud2: function () {
    var that = this;
    wx.cloud.callFunction({
      name: 'addor',
      data: {
        color: that.data.color1,
        image: that.data.image1,
        name: that.data.name1,
        style: that.data.style1,

      },


      success: res => {
        wx.showToast({
          title: '添加成功',
          duration: 2000
        })
        console.log("res=", res.result)
      },
      fail: err => {
        wx.showToast({
          title: '添加失败',
          icon: 'none',
        })
      },
      complete: res => {
        console.log('callFunction test result: ', res)
      }
    })


  },

  getvalue112: function (e) {
    this.setData({ infocolor2: e.detail.value })


  },
  getvalue113: function (e) {
    this.setData({ intro2: e.detail.value })


  },

  getvalue114: function (e) {
    this.setData({ mat2: e.detail.value })


  },

  getvalue115: function (e) {
    this.setData({ name2: e.detail.value })


  },

  getvalue116: function (e) {
    this.setData({ price2: e.detail.value })


  },

  testCloud3: function () {
    var that = this;
    wx.cloud.callFunction({
      name: 'addshipin',
      data: {
        infocolor: that.data.infocolor2,
        intro: that.data.intro2,
        mat: that.data.mat2,
        name: that.data.name2,
        price: that.data.price2,

      },


      success: res => {
        wx.showToast({
          title: '添加成功',
          duration: 2000
        })
        console.log("res=", res.result)
      },
      fail: err => {
        wx.showToast({
          title: '添加失败',
          icon: 'none',
        })
      },
      complete: res => {
        console.log('callFunction test result: ', res)
      }
    })


  },



  onLoad(){
    var self = this;
    /**
     * 获取用户信息
     */
    wx.getUserInfo({
      success: function(res){
        self.setData({
          thumb: res.userInfo.avatarUrl,
          nickname: res.userInfo.nickName
        })
      }
    }),

    /**
     * 发起请求获取订单列表信息
     */
    wx.request({
      url: 'http://www.gdfengshuo.com/api/wx/orders.txt',
      success(res){
        self.setData({
          orders: res.data
        })
      }
    })
  },
  onShow(){
    var self = this;
    /**
     * 获取本地缓存 地址信息
     */
    wx.getStorage({
      key: 'address',
      success: function(res){
        self.setData({
          hasAddress: true,
          address: res.data
        })
      }
    })
  },
  /**
   * 发起支付请求
   */
  payOrders(){
    wx.requestPayment({
      timeStamp: 'String1',
      nonceStr: 'String2',
      package: 'String3',
      signType: 'MD5',
      paySign: 'String4',
      success: function(res){
        console.log(res)
      },
      fail: function(res) {
        wx.showModal({
          title:'支付提示',
          content:'<text>',
          showCancel: false
        })
      }
    })
  }
})