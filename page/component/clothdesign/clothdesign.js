// page/component/clothdesign/clothdesign.js

var clodeData = require('../../../data/clode-data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {

      infodata:[],
      track:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(clodeData.clodeList)
      this.setData({
        infodata: clodeData.clodeList
      })
      console.log(this.infodata);
  },
  gotoDetail: function (e) {
    var index = e.currentTarget.dataset.id;
    console.log(index);
    wx.navigateTo({
      url: '/page/component/clothdodetail/clothdodetail?index=' + index,
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

  reflash:function(e){

    let num = e.currentTarget.dataset.id;
    console.log(num)

    this.setData({

      track:num-1
    })
    

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  swiperChange(e) {

    const that = this;

    that.setData({

      swiperIndex: e.detail.current,

    })

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