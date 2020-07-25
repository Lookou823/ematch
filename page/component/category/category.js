Page({
    data: {
        category: [
            {name:'男士上身',id:'manup'},
            {name:'男士下身',id:'mandown'},
            {name:'女士上身',id:'womanup'},
            {name:'女士下身',id:'womandown'},
            {name:'男鞋',id:'mans'},
            {name:'女鞋',id:'womans'}
        ],

        manups:[
            {
              id:101,
              name:"卫衣",
            url:"https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/%E8%A1%A3%E6%9C%8D%E6%80%BB%E7%B1%BB/%E7%94%B7%E5%A3%AB%E4%B8%8A%E8%BA%AB/%E5%8D%AB%E8%A1%A3.jpg"
            },
          {
            id: 102,
            name: "外套",
            url: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/%E8%A1%A3%E6%9C%8D%E6%80%BB%E7%B1%BB/%E7%94%B7%E5%A3%AB%E4%B8%8A%E8%BA%AB/%E5%A4%96%E5%A5%97.jpg"
          },

          {
            id: 103,
            name: "毛衣",
            url: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/%E8%A1%A3%E6%9C%8D%E6%80%BB%E7%B1%BB/%E7%94%B7%E5%A3%AB%E4%B8%8A%E8%BA%AB/%E6%AF%9B%E8%A1%A3.jpg"
          },

          {
            id: 104,
            name: "短袖",
            url: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/%E8%A1%A3%E6%9C%8D%E6%80%BB%E7%B1%BB/%E7%94%B7%E5%A3%AB%E4%B8%8A%E8%BA%AB/%E7%9F%AD%E8%A2%96.jpg"
          },

          {
            id: 105,
            name: "羽绒服",
            url: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/%E8%A1%A3%E6%9C%8D%E6%80%BB%E7%B1%BB/%E7%94%B7%E5%A3%AB%E4%B8%8A%E8%BA%AB/%E7%BE%BD%E7%BB%92%E6%9C%8D.png"
          },

          {
            id: 106,
            name: "衬衫",
            url: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/%E8%A1%A3%E6%9C%8D%E6%80%BB%E7%B1%BB/%E7%94%B7%E5%A3%AB%E4%B8%8A%E8%BA%AB/%E8%A1%AC%E8%A1%AB.jpg"
          }

        ],


        mandowns:[

          {
            id: 107,
            name: "休闲长裤",
            url: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/%E8%A1%A3%E6%9C%8D%E6%80%BB%E7%B1%BB/%E7%94%B7%E5%A3%AB%E4%B8%8B%E8%BA%AB/%E4%BC%91%E9%97%B2%E9%95%BF%E8%A3%A4.jpg"
          },

          {
            id: 108,
            name: "牛仔裤",
            url: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/%E8%A1%A3%E6%9C%8D%E6%80%BB%E7%B1%BB/%E7%94%B7%E5%A3%AB%E4%B8%8B%E8%BA%AB/%E7%89%9B%E4%BB%94%E8%A3%A4.jpg"
          },

          {
            id: 109,
            name: "运动裤",
            url: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/%E8%A1%A3%E6%9C%8D%E6%80%BB%E7%B1%BB/%E7%94%B7%E5%A3%AB%E4%B8%8B%E8%BA%AB/%E8%BF%90%E5%8A%A8%E8%A3%A4.jpg"
          },


        ],
        womanups:[
          {
            id: 110,
            name: "卫衣",
            url: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/%E5%A5%B3%E5%A3%AB%E8%A1%A3%E6%9C%8D/%E5%A5%B3%E5%A3%AB%E4%B8%8A%E8%BA%AB/%E5%8D%AB%E8%A1%A3.png"
          },

          {
            id: 111,
            name: "摇粒绒",
            url: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/%E5%A5%B3%E5%A3%AB%E8%A1%A3%E6%9C%8D/%E5%A5%B3%E5%A3%AB%E4%B8%8A%E8%BA%AB/%E6%91%87%E7%B2%92%E7%BB%92.png"
          },

          {
            id: 112,
            name: "衬衫",
            url: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/%E5%A5%B3%E5%A3%AB%E8%A1%A3%E6%9C%8D/%E5%A5%B3%E5%A3%AB%E4%B8%8A%E8%BA%AB/%E8%A1%AC%E8%A1%AB.png"
          },

          {
            id: 113,
            name: "连衣裙",
            url: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/%E5%A5%B3%E5%A3%AB%E8%A1%A3%E6%9C%8D/%E5%A5%B3%E5%A3%AB%E4%B8%8A%E8%BA%AB/%E8%BF%9E%E8%A1%A3%E8%A3%99.png"
          },

          {
            id: 114,
            name: "针织衫",
            url: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/%E5%A5%B3%E5%A3%AB%E8%A1%A3%E6%9C%8D/%E5%A5%B3%E5%A3%AB%E4%B8%8A%E8%BA%AB/%E9%92%88%E7%BB%87%E8%A1%AB.png"
          }

        ],
        womandowns:[
          {
            id: 115,
            name: "休闲裤",
            url: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/%E5%A5%B3%E5%A3%AB%E8%A1%A3%E6%9C%8D/%E5%A5%B3%E5%A3%AB%E4%B8%8B%E8%BA%AB/%E4%BC%91%E9%97%B2%E8%A3%A4.png"
          },
          {
            id: 116,
            name: "牛仔裤",
            url: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/%E5%A5%B3%E5%A3%AB%E8%A1%A3%E6%9C%8D/%E5%A5%B3%E5%A3%AB%E4%B8%8B%E8%BA%AB/%E7%89%9B%E4%BB%94%E8%A3%A4.jpg"
          }



        ],
        mansh:[
          {
            id: 117,
            name: "休闲鞋",
            url: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/%E7%94%B7%E9%9E%8B/%E4%BC%91%E9%97%B2%E9%9E%8B.png"
          },
          {
            id: 118,
            name: "帆布鞋",
            url: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/%E7%94%B7%E9%9E%8B/%E5%B8%86%E5%B8%83%E9%9E%8B.png"
          },
          {
            id: 119,
            name: "板鞋",
            url: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/%E7%94%B7%E9%9E%8B/%E6%9D%BF%E9%9E%8B.png"
          },
          {
            id: 120,
            name: "运动鞋",
            url: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/%E7%94%B7%E9%9E%8B/%E8%BF%90%E5%8A%A8%E9%9E%8B.png"
          },


        ],
        womansh:[
          {
            id: 121,
            name: "女靴",
            url: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/%E5%A5%B3%E9%9E%8B/%E5%A5%B3%E9%9D%B4.png"
          },

          {
            id: 122,
            name: "小白鞋",
            url: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/%E5%A5%B3%E9%9E%8B/%E5%B0%8F%E7%99%BD%E9%9E%8B.png"
          },
          {
            id: 123,
            name: "老爹鞋",
            url: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/%E5%A5%B3%E9%9E%8B/%E8%80%81%E7%88%B9%E9%9E%8B.png"
          },
          {
            id: 124,
            name: "运动鞋",
            url: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/%E5%A5%B3%E9%9E%8B/%E8%BF%90%E5%8A%A8%E9%9E%8B.png"
          }


        ],

        detail:[],
        curIndex: 0,
        isScroll: false,
      toView: 'manup'
    },
    onReady(){
        var self = this;
        wx.request({
            url:'http://www.gdfengshuo.com/api/wx/cate-detail.txt',
            success(res){
                self.setData({
                    detail : res.data
                })
            }
        });
        
    },


  gotoMlist: function (e) {
    var index = e.currentTarget.dataset.id;
    console.log(index);
    wx.navigateTo({
      url: '/page/component/list/list?name=' + index,
    })
  },

  gotoWlist: function (e) {
    var index = e.currentTarget.dataset.id;
    console.log(index);
    wx.navigateTo({
      url: '/page/component/list2/list2?name=' + index,
    })
  },
    switchTab(e){
      const self = this;
      this.setData({
        isScroll: true
      })
      setTimeout(function(){
        self.setData({
          toView: e.target.dataset.id,
          curIndex: e.target.dataset.index
        })
      },0)
      setTimeout(function () {
        self.setData({
          isScroll: false
        })
      },1)
        
    }
    
})