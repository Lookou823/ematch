// page/component/details/details.js
Page({
  data:{
    swiperArry: [{
      goodsId: 1,
      oldprice: 2.1,
      text: "外套",
      url:"https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/IMG_1441(20191122-111220).JPG",
      price: 112,
      sale_num: 454,
      all_num: 1222,
      num: 0,
      selected: true
    },
    {
      goodsId: 2,
      oldprice: 2.1,
      text: "卫衣",
      url: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/IMG_1442(20191122-111226).JPG",
      price: 122,
      sale_num: 454,
      all_num: 7474,
      num: 0,
      selected: true
    },
    {
      goodsId: 3,
      oldprice: 2.1,
      text: "连帽外套",
      url: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/IMG_1443(20191122-111238).JPG",
      price: 132,
      sale_num: 454,
      all_num: 7474,
      num: 0,
      selected: true
    },
    {
      goodsId: 4,
      oldprice: 2.1,
      text: "卫衣",
      url: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/IMG_1444(20191122-111315).JPG",
      price: 132,
      sale_num: 454,
      all_num: 7474,
      num: 0,
      selected: true
    },
    {
      goodsId: 5,
      oldprice: 2.1,
      text: "夹克",
      url: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/IMG_1445(20191122-111329).JPG",
      price: 122,
      sale_num: 454,
      all_num: 7474,
      num: 0,
      selected: true
    },
    {
      goodsId: 6,
      oldprice: 2.1,
      text: "马丁靴",
      url: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/IMG_1446(20191122-111348).JPG",
      price: 212,
      sale_num: 454,
      all_num: 7474,
      num: 0,
      selected: true
    }
    ],




    goodslist:[
      {
        id: 1,
        image: 'https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/IMG_1441(20191122-111220).JPG',
        title: '外套',
        price: 112,
        stock: '有货',
        detail: '商品详情',
        parameter: '112/件',
        service: '不支持退货'
      },
      {
        id: 2,
        image: 'https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/IMG_1442(20191122-111226).JPG',
        title: '卫衣',
        price: 122,
        stock: '有货',
        detail: '商品详情',
        parameter: '122/件',
        service: '不支持退货'
      },
      {
        id: 3,
        image: 'https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/IMG_1443(20191122-111238).JPG',
        title: '连帽外套',
        price: 132,
        stock: '有货',
        detail: '商品详情',
        parameter: '132/件',
        service: '不支持退货'
      },
      {
        id: 4,
        image: 'https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/IMG_1444(20191122-111315).JPG',
        title: '卫衣',
        price: 132,
        stock: '有货',
        detail: '商品详情',
        parameter: '132/件',
        service: '不支持退货'
      },
      {
        id: 5,
        image: 'https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/IMG_1445(20191122-111329).JPG',
        title: '夹克',
        price: 122,
        stock: '有货',
        detail: '商品详情',
        parameter: '122/件',
        service: '不支持退货'
      },
      {
        id: 6,
        image: 'https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/IMG_1446(20191122-111348).JPG',
        title: '马丁靴',
        price: 212,
        stock: '有货',
        detail: '商品详情',
        parameter: '212/双',
        service: '不支持退货'
      },


    ],

    goods: {

    },
    // count all
    num:0,

    // count/click
    num1: 1,
    totalNum: 0,
    pay:0,
    hasCarts: false,
    curIndex: 0,
    show: false,
    scaleCart: false
  },

  onLoad:function(options) {
   this.setData({

     goods:this.data.goodslist[options.index]
   })
  },

  clear: function () {
    var  that =  this;
    // 删除

    that.setData({
      num1:1,
      num:0,
      totalNum:0

    })
    wx.removeStorage({
      key:  'cart'
  

    })
    wx.removeStorage({
    
      key: 'countNum'

    })
    wx.removeStorage({
  

      key: 'countPay'
    })
  
  },
 

  addCount:function(e) {
    var _this = this;
    var index = e.currentTarget.dataset.index;
    console.log(index);
    let num1 = this.data.num1;
    num1++;
    this.setData({
      num1: num1
    })
  },

  addToCart:function(e) {
    
    var _this = this;
    var index = e.currentTarget.dataset.id;
    console.log("点击后的Index ");
    console.log(index);
    var arr = _this.data.swiperArry; //原数组
    const length = arr.length;
    console.log(arr);
    var list = [];
    for(let i = 0; i < length;i++)
    {
      var temp = arr[i];
      // console.log(temp);
      if (temp["goodsId"] == index)
      {
        console.log("find it");
        console.log(temp["goodsId"]);
        console.log(arr[i]);
        list = arr[i];
        // 找到对应货号的商品

      }
 
    }
    console.log(list)
    console.log("judge flag");
    var judgeid = list["goodsId"];
    var imgurl = list["url"];
    console.log(imgurl);
    var price = list["price"];
    var name = list["text"];
    var all_num = list['all_num'];
    var selected = list['selected'];
    const self = this;
    var num1 = this.data.num1;
    const num = this.data.num;
    let total = this.data.totalNum;
    //获取看看有没有缓存

    var cart = wx.getStorageSync('cart');
    if(cart ==''){//空就执行写入缓存

    list['num'] = 1;
    var data = new Array();//定义一个空的数组
    data.push({
        gid: judgeid,
        name:name,
        url:imgurl,
        price:price,
        num:1,
        selected: selected
    });

  _this.setData({
    carts:data,
    swiperArry:arr,
    num:1,
    pay:price,


  })

      wx.setStorageSync('cart', JSON.stringify(data)); //写入缓存
      wx.setStorageSync('countNum', 1); //写入缓存
      wx.setStorageSync('countPay', price); //写入缓存

    }
    
    else{
      console.log(judgeid);
      var carts = JSON.parse(cart);
      console.log(carts);
      var ifjia = 0;
      var ifnum = 0;

      for(var i = 0; i<carts.length;i++){
        var gid = carts[i]['gid'];
        console.log("找到相同的匹配");
        console.log(gid);
        if (gid == judgeid){//相同商品id就加1
          ifjia = 1;
          var nums = carts[i]['num'];
          console.log("现有的数量");
          console.log(nums);
          if(nums+1 > all_num){//判断是否超出库存
            ifnum = 1;
            break;
          }
          console.log("每次单击增加的商品数量");
          console.log(num);
          console.log(num1);
          carts[i]['num'] += num1;
          console.log(carts[i]['num']);

          list['num'] = carts[i]['num'];

        }

      }
  
      if(ifjia==0){
        list['num'] = 1;
        carts.push({
          gid: judgeid,
          name: name,
          url: imgurl,
          price: price,
          num: 1,
          selected: selected
        });



      }


      if (ifnum == 1) {
        return;
      }

      arr[index] = list;
      _this.setData({
        carts: carts,
        swiperArry: arr
      })

      //执行统计数量及总金额计算
      _this.countCart();

    }

    self.setData({
      show: true
    })
    setTimeout( function() {
      self.setData({
        show: false,
        scaleCart : true
      })
      setTimeout( function() {
        self.setData({
          scaleCart: false,
          hasCarts : true,
          totalNum: num1 + total
        })
      }, 200)
    }, 300)

  },

  countCart: function () {

    var _this = this;
    var carts = _this.data.carts;
    var countNum = 0;
    var countPay = 0;
    console.log(carts, '缓存数组');
    for (var i = 0; i < carts.length; i++) {
      var price = (carts[i]['price'] * 100) * carts[i]['num'];
      countNum += carts[i]['num'];
      countPay += price;
    }

    var pay = (countPay / 100);
    _this.setData({
      num: countNum,
      pay: pay
    })

    //写入缓存
    wx.setStorageSync('cart', JSON.stringify(carts));
    wx.setStorageSync('countNum', countNum);
    wx.setStorageSync('countPay', pay);
  },

  bindTap(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      curIndex: index
    })
  }
 
})