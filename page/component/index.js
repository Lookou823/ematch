
let col1H = 0;
let col2H = 0;


Page({
  data: {
    imgUrls: [
      'https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E6%90%AD%E9%85%8D%E6%96%B9%E6%A1%88/%E5%9B%BE%E7%89%871.png',
      'https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E6%90%AD%E9%85%8D%E6%96%B9%E6%A1%88/%E5%9B%BE%E7%89%872.png',
      'https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E6%90%AD%E9%85%8D%E6%96%B9%E6%A1%88/%E5%9B%BE%E7%89%873.png'
    ],

    itemlist:[

      {
        id:1,
        name:"外套",
        url:"https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/IMG_1441(20191122-111220).JPG",
        price:112


      },


      {
        id: 2,
        name: "卫衣",
        url: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/IMG_1442(20191122-111226).JPG",
        price: 122


      },

      {
        id: 3,
        name: "连帽外套",
        url: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/IMG_1443(20191122-111238).JPG",
        price: 132


      },

      {
        id: 4,
        name: "卫衣",
        url: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/IMG_1444(20191122-111315).JPG",
        price: 132


      },

      {
        id: 5,
        name: "夹克",
        url: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/IMG_1445(20191122-111329).JPG",
        price: 122


      },

      {
        id: 6,
        name: "马丁靴",
        url: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/IMG_1446(20191122-111348).JPG",
        price: 212


      },




    ],
    // 轮播图的属性，虽然现在用不到了
    indicatorDots: false,
    autoplay: false,
    interval: 3000,
    duration: 800,
    //瀑布流的属性
    scrollH: 0,
    imgWidth: 0,
    loadingCount: 0,
    images: [],
    col1: [],
    col2: []


  },


  gotoDetail:function(e)
  {
    var index = e.currentTarget.dataset.id;
    console.log(index);
    wx.navigateTo({
      url: '/page/component/details/details?index=' + index,
    })
  },

onLoad: function () {
    wx.getSystemInfo({
      success: (res) => {
        let ww = res.windowWidth;
        let wh = res.windowHeight;
        let imgWidth = ww * 0.48;
        let scrollH = wh;

        this.setData({
          scrollH: scrollH,
          imgWidth: imgWidth
        });

        //加载首组图片
        this.loadImages();
      }
    })
  },

  onImageLoad: function (e) {
    let imageId = e.currentTarget.id;
    let oImgW = e.detail.width;         //图片原始宽度
    let oImgH = e.detail.height;        //图片原始高度
    let imgWidth = this.data.imgWidth;  //图片设置的宽度
    let scale = imgWidth / oImgW;        //比例计算
    let imgHeight = oImgH * scale;      //自适应高度

    let images = this.data.images;
    let imageObj = null;

    for (let i = 0; i < images.length; i++) {
      let img = images[i];
      if (img.id === imageId) {
        imageObj = img;
        break;
      }
    }

    imageObj.height = imgHeight;

    let loadingCount = this.data.loadingCount - 1;
    let col1 = this.data.col1;
    let col2 = this.data.col2;

    //判断当前图片添加到左列还是右列
    if (col1H <= col2H) {
      col1H += imgHeight;
      col1.push(imageObj);
    } else {
      col2H += imgHeight;
      col2.push(imageObj);
    }

    let data = {
      loadingCount: loadingCount,
      col1: col1,
      col2: col2
    };

    //当前这组图片已加载完毕，则清空图片临时加载区域的内容
    if (!loadingCount) {
      data.images = [];
    }

    this.setData(data);
  },

  loadImages: function () {
    let images = [
      { pic: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E7%80%91%E5%B8%83%E6%B5%81/%E7%94%9C%E7%BE%8E%E6%B4%BB%E6%B3%BC/1/1.jpg", height: 0 },
      { pic: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E7%80%91%E5%B8%83%E6%B5%81/%E7%94%9C%E7%BE%8E%E6%B4%BB%E6%B3%BC/2/1.jpg", height: 0 },
      { pic: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E7%80%91%E5%B8%83%E6%B5%81/%E7%94%9C%E7%BE%8E%E6%B4%BB%E6%B3%BC/3/1.jpg", height: 0 },
      { pic: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E7%80%91%E5%B8%83%E6%B5%81/%E7%94%9C%E7%BE%8E%E6%B4%BB%E6%B3%BC/4/1.jpg", height: 0 },
      { pic: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E7%80%91%E5%B8%83%E6%B5%81/%E7%94%9C%E7%BE%8E%E6%B4%BB%E6%B3%BC/5/1.jpg", height: 0 },
      { pic: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E7%80%91%E5%B8%83%E6%B5%81/%E7%94%9C%E7%BE%8E%E6%B4%BB%E6%B3%BC/6/1.jpg", height: 0 },
      { pic: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E7%80%91%E5%B8%83%E6%B5%81/%E7%94%9C%E7%BE%8E%E6%B4%BB%E6%B3%BC/7/1.jpg", height: 0 },
      { pic: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E7%80%91%E5%B8%83%E6%B5%81/%E7%94%9C%E7%BE%8E%E6%B4%BB%E6%B3%BC/8/1.jpg", height: 0 },
      { pic: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E7%80%91%E5%B8%83%E6%B5%81/%E7%94%9C%E7%BE%8E%E6%B4%BB%E6%B3%BC/9/1.jpg", height: 0 },
      { pic: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E7%80%91%E5%B8%83%E6%B5%81/%E7%94%9C%E7%BE%8E%E6%B4%BB%E6%B3%BC/10/1.jpg", height: 0 }
  
    ];

    let baseId = "img-" + (+new Date());

    for (let i = 0; i < images.length; i++) {
      images[i].id = baseId + "-" + i;
    }

    this.setData({
      loadingCount: images.length,
      images: images
    });
  }

})

