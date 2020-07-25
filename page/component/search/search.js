let timeId = null;
Page({
    data: {
        history: [],
        flag:-1,
        hot: ['外套', '卫衣', '马丁靴'],
        flag2:-1,
        // flag2 0 for waitao 1 for weiyi 2 for madingxue 
        waitao:[
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
        weiyi:[
          {
            id: 2,
            url: '../details/details',
            thumb: 'https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/IMG_1442(20191122-111226).JPG',
            title: '卫衣',
            price: 122
          },
          {
            id: 4,
            url: '../details/details',
            thumb: 'https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/IMG_1444(20191122-111315).JPG',
            title: '卫衣',
            price: 132
          }
        ],
        xiezi:[

          {
            id: 6,
            url: '../details/details',
            thumb: 'https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/IMG_1446(20191122-111348).JPG',
            title: '马丁靴',
            price: 212
          }
        ],



        result: [
            {
            id: 1,
            url: '../details/details',
            thumb: 'https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/IMG_1441(20191122-111220).JPG',
            title: '外套',
            price: 112
            },
            {
              id: 2,
              url: '../details/details',
              thumb: 'https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/IMG_1442(20191122-111226).JPG',
              title: '卫衣',
              price: 122
            },
          {
            id: 6,
            url: '../details/details',
            thumb: 'https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E8%A1%A3%E6%9C%8D%E5%8D%95%E5%93%81/IMG_1446(20191122-111348).JPG',
            title: '马丁靴',
            price: 212
          }
        ],
        showKeywords: false,
        keywords: ['卫衣', '连帽外套', '马丁靴', '夹克'],
        value: '',
        showResult: false,
    },
    cancelSearch() {
        this.setData({
            showResult: false,
            showKeywords: false,
            value: ''
        })
    },
    searchInput(e) {
        if(!e.detail.value){
            this.setData({
                showKeywords: false
            })
        }else{
            if(!this.data.showKeywords){
                timeId && clearTimeout(timeId);
                timeId = setTimeout(() => {
                    this.setData({
                        showKeywords: true
                    })
                }, 1000)
            }
        }
    },
    keywordHandle(e) {
        const text = e.target.dataset.text;
      var index = e.currentTarget.dataset.id;

        console.log(index);
        this.setData({
            value: text,
            showKeywords: false,
            showResult: true,
            flag:index
        })
        this.historyHandle(text);
    },
  gotoDetail: function (e) {
    var index = e.currentTarget.dataset.id;
    index = index - 1;
    console.log(index);
    wx.navigateTo({
      url: '/page/component/details/details?index=' + index,
    })
  },

  keywordHandle2(e) {
    const text = e.target.dataset.text;
    var index = e.currentTarget.dataset.id;
    console.log(text);
    console.log(index);
    if(text=='外套')
    {
      this.setData({
        value: text,
        showKeywords: false,
        showResult: true,
        flag:0
      })
      console.log(this.data.flag);
      this.historyHandle(text);

    }
    if (text == '卫衣') {
      this.setData({
        value: text,
        showKeywords: false,
        showResult: true,
        flag: 1
      })
      console.log(this.data.flag);
      this.historyHandle(text);

    }
    if (text == '马丁靴') {
      this.setData({
        value: text,
        showKeywords: false,
        showResult: true,
        flag: 2
      })
      console.log(this.data.flag);
      this.historyHandle(text);

    }
  },


    historyHandle(value) {
        let history = this.data.history;
        const idx = history.indexOf(value);
        if (idx === -1) {
            // 搜索记录只保留8个
            if (history.length > 7) {
                history.pop();
            }
        } else {
            history.splice(idx, 1);
        }
        history.unshift(value);
        wx.setStorageSync('history', JSON.stringify(history));
        this.setData({
            history
        });
    },
    onLoad() {
        const history = wx.getStorageSync('history');
        if (history) {
            this.setData({
                history: JSON.parse(history)
            })
            console.log(this.data.history);
        }
    }
})