// page/component/designdetail/designdetail.js
Page({
  background: "#20395A",

  /**
   * 页面的初始数据
   */
  data: {
    brandList: {},
  temp3 : [

    {
      image: "",
      name: ""
      },

      {
        image: "",
        name: ""
      },

      {
        image: "",
        name: ""
      }
  ]
    


  ,

    //轮播图的属性
    indicatorDots: false,
    autoplay: false,
    interval: 3000,
    duration: 800,

    //单品图的属性：
    infodata:{},
    //相似风格：
    style:"",
    //
    styleall:"",



//


 imageList: [
     
    ],
    co1: [],
    co2: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    console.log(options.index)
    
// 请求数据库
var that = this
const cdb = wx.cloud.database();
console.log(tempname)

that.setData({

  style: options.index
})
    let tempname = that.data.style;

//获得搭配单品
cdb.collection('clothsingle').where({

  object: tempname

}).get({
  success: function (res) {

    console.log(res.data)
    let temp = res.data;
    that.setData({
      infodata: temp


    })

    console.log(that.data.infodata)
  }  

})

//获得配饰
    cdb.collection('ornaments').where({

      object: tempname

    }).get({
      success: function (res) {

        console.log(res.data)
        let temp = res.data;
        let temp4 = that.data.temp3
        let temp2 = that.data.infodata;
        for(let i = 0 ; i < temp.length;i++)
{
       temp4[i].image = temp[i]['image'][0]
          temp4[i].name =temp[i].name
        
          temp2.push(temp4[i])

}
console.log(temp2)

        that.setData({
          infodata: temp2


        })

        console.log(that.data.infodata)
      }

    })





  //获得风格详情
    



    cdb.collection('styleset').where({

      name: that.data.style


    }).get({


      success: function (res) {

        console.log(res.data)
        let temp = res.data;
        that.setData({
          brandList: temp


        })
        console.log(that.data.brandList)
        let templist = that.data.brandList[0]['detail']
        console.log("垃圾测试",templist)
        let nameceishi = that.data.brandList[0].style
        that.setData({

          styleall: nameceishi



        })


        //获得相似风格的喜欢
        cdb.collection('styleset').where({

          style: that.data.styleall


        }).get({


          success: function (res) {

            console.log(res.data)
            let temp = res.data;
            that.setData({
              imageList: temp


            })

            console.log(that.data.imageList)
            that.setupData();

          }


        })

      }


    })




  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  // 页面跳转到细节！！！
  gotodetail1: function (e) {
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




  setupData: function () {

    let co1 = []
    let co2 = []
    for (let i = 0; i < this.data.imageList.length; i = i + 2) {
      co1.push(this.data.imageList[i]);
      if (i + 1 < this.data.imageList.length) {
        co2.push(this.data.imageList[i + 1]);
      }
    }

    this.setData({
      co1: co1,
      co2: co2


    })




  },






  // 轮播图的代码


  swiperChange(e) {

    const that = this;

    that.setData({

      swiperIndex: e.detail.current,

    })

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