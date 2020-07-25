// page/component/sortsearch/sortsearch.js

let col1H = 0;
let col2H = 0;

Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    // 搜索框的属性
    inputShowed: false,
    inputVal: "",
    

    //瀑布流的属性
    scrollH:0,
    imageList:[],
    co1: [],
    co2: [], 
    
  //瀑布流的图片
  // 获得所有蓝色的数据
    styleList:{},
  //
   waterfallList:[]
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  // 判定回车键输入
  inputSearch:function(e)
    {
      this.setData({
        inputVal: e.detail.value
      });


      var that = this;
      const cdDb = wx.cloud.database();
      if (!that.data.inputVal == '') {

        wx.cloud.callFunction({
          name: 'getstyle',

          data: {
            color: that.data.inputVal
          },


          success: function (res) {

            console.log("res=", res.data)


          },
          fail: err => {
            wx.showToast({
              title: '查询失败',
              icon: 'none',
            })
          },
          complete: res => {
            console.log('callFunction test result: ', res.result.data)
            that.setData({

              styleList: res.result.data
            })
            // 将数据转换为json类型
            // that.data.styleList = JSON.stringify(that.data.styleList);
            console.log("style list :" , that.data.styleList)
            console.log(that.data.styleList[0].image)

          }

        })

      }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    wx.getSystemInfo({
      success: (res) => {
        let wh = res.windowHeight;
    
        let scrollH = wh;

        this.setData({
          scrollH: scrollH,
        });
        //isDetailsCanLoad = true;
        var that = this;
        const cdDb = wx.cloud.database();
       

          wx.cloud.callFunction({
            name: 'getstyle',

            data: {
              color: "蓝色"
            },


            success: function (res) {

              console.log("res=", res.data)


            },
            fail: err => {
              wx.showToast({
                title: '查询失败',
                icon: 'none',
              })
            },
            complete: res => {
              console.log('callFunction test result: ', res.result.data)
              that.setData({

                styleList: res.result.data
              })
              // 将数据转换为json类型
              // that.data.styleList = JSON.stringify(that.data.styleList);
              console.log("style list :", that.data.styleList)
              console.log(that.data.styleList[0].image)

              that.setupData();


            }

          })

        


      }
    })




  },
  
  loadImages:function(){
    var that = this;
    let temp = that.data.styleList
    if(temp.length>0)
    {

      this.setupData();

    }

  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  setupData:function(){
    
    let co1 = []
    let co2 = []
    for (let i = 0; i < this.data.styleList.length; i = i + 2) {
      co1.push(this.data.styleList[i]);
      if (i + 1 < this.data.styleList.length) {
        co2.push(this.data.styleList[i + 1]);
      }
    }

    this.setData({
      co1:co1,
      co2:co2


    })




  },




  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.loadImages();

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

  // 页面跳转到细节！！！
  gotodetail1:function(e){
 var index = e.currentTarget.dataset.id;
 console.log(index)
    wx.navigateTo({
      url: '/page/component/designdetail/designdetail?index=' + index,
    })



  },
  gotodetail2: function (e) {
    var index = e.currentTarget.dataset.id;
    console.log(index)
    wx.navigateTo({
      url: '/page/component/designdetail/designdetail?index=' + index,
    })



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