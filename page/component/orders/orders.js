// page/component/orders/orders.js
Page({
  data:{
    address:{},
    hasAddress: false,
    total:0,
    orders:[
 
      ]
  },

  onReady() {
    this.getTotalPrice();
  },
  
  onShow:function(){
    const self = this;
    wx.getStorage({
      key:'address',
      success(res) {
        self.setData({
          address: res.data,
          hasAddress: true
        })
      }
    })

    var cart = wx.getStorageSync('cart'); //获取看看有没有缓存
    var carts = JSON.parse(cart);//注意对json数据获取后的格式转换
    this.setData({
      orders: carts
    })


  },

  /**
   * 计算总价
   */
  getTotalPrice() {
    let orders = this.data.orders;
    let total = 0;
    for(let i = 0; i < orders.length; i++) {
      total += orders[i].num * orders[i].price;
    }
    this.setData({
      total: total
    })
  },

  toPay() {
    wx.showModal({
      title: '提示',
      content: '本系统只做演示，支付系统已屏蔽',
      text:'center',
      complete() {
        wx.switchTab({
          url: '/page/component/user/user'
        })
      }
    })
  }
})