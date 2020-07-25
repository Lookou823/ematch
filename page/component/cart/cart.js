// page/component/new-pages/cart/cart.js
Page({
  data: {
    carts:[],               // 购物车列表
    hasList:false,          // 列表是否有数据
    totalPrice:0,           // 总价，初始为0
    selectAllStatus:true,    // 全选状态，默认全选
    obj:{
        name:"hello"
    }
  },


  onShow() {
    var that =  this;
    var cart = wx.getStorageSync('cart'); //获取看看有没有缓存
    var carts = JSON.parse(cart);//注意对json数据获取后的格式转换
    this.setData({
      hasList:true,
      carts:carts
    })
   
    this.getTotalPrice();
  },
  /**
   * 当前商品选中事件
   */
  selectList(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    console.log(carts);
    var selected = carts[index]["selected"];
    console.log(selected);
    carts[index]["selected"] = !selected;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },

  /**
   * 删除购物车当前商品
   */
  deleteList(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    carts.splice(index,1);
    this.setData({
      carts: carts
    });
    if(!carts.length){
      wx.removeStorage({
        key: 'cart'


      })
      wx.removeStorage({
        key: 'countNum'


      })
      wx.removeStorage({
        key: 'countPay'


      })
      this.setData({
        hasList: false
      });
    }else{
      this.getTotalPrice();
    }
  },

  /**
   * 购物车全选事件
   */
  selectAll(e) {
    let selectAllStatus = this.data.selectAllStatus;
    selectAllStatus = !selectAllStatus;
    let carts = this.data.carts;

    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = selectAllStatus;
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      carts: carts
    });
    this.getTotalPrice();
  },

  /**
   * 绑定加数量事件
   */
  addCount(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    num = num + 1;
    carts[index].num = num;
    var count = wx.getStorageSync('countNum');
    count+=1;
    this.setData({
      carts: carts
    });

    wx.setStorageSync('cart', JSON.stringify(carts));
    wx.setStorageSync('countNum', count);
    this.getTotalPrice();
  },

  /**
   * 绑定减数量事件
   */
  minusCount(e) {
    const index = e.currentTarget.dataset.index;
    const obj = e.currentTarget.dataset.obj;
    let carts = this.data.carts;
    let num = carts[index].num;
    if(num <= 1){
      return false;
    }
    num = num - 1;
    carts[index].num = num;
    var count = wx.getStorageSync('countNum');
    count -= 1;
    this.setData({
      carts: carts
    });
    wx.setStorageSync('cart', JSON.stringify(carts));
    wx.setStorageSync('countNum', count);

    this.getTotalPrice();
  },

  /**
   * 计算总价
   */
  getTotalPrice() {
    let carts = this.data.carts;                  // 获取购物车列表
    console.log(carts);
    let total = 0;
    for(let i = 0; i<carts.length; i++) {         // 循环列表得到每个数据
      if(carts[i].selected) {                     // 判断选中才会计算价格
        total += carts[i].num * carts[i].price;   // 所有价格加起来
      }
    }
    console.log("test");
    console.log(total);
    this.setData({                                // 最后赋值到data中渲染到页面
      carts: carts,
      totalPrice: total.toFixed(2)
    });
    wx.setStorageSync('countPay', total)
      
      
        }

})