let timeId = null;
Page({
  data: {
    history1: [],
    flag: -1,
    hot: ['潮牌', '文艺', '复古'],
    flag2: -1,
    // flag2 0 for waitao 1 for weiyi 2 for madingxue 
    chaopai: [
      {
        id: 1, avatar: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E6%90%AD%E9%85%8D%E5%B8%88/%E5%90%B4%E4%B8%80%E9%80%B8/IMG_0759.JPG",
        name: "兔走",
        style: "潮牌，工装",
        text: "",
        fans: 362
      },

      {
        id: 4,

        avatar: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E6%90%AD%E9%85%8D%E5%B8%88/%E8%91%A3%E6%AC%A3%E6%80%A1/052c2c099e557c2209a186a91f924dd.jpg",
        name: "童童",
        style: "潮牌",
        text: "",
        fans: 640

      }

    ],
    wenyi: [
      {
        id: 5,

        avatar: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E6%90%AD%E9%85%8D%E5%B8%88/%E8%92%8B%E6%AC%A3%E6%B4%B3/12c2b36c12cfd9e8f7541be6336b6bd.jpg",
        name: "梓洳兰",
        style: "文艺，经典",
        text: "",
        fans: 330

      },
      {
        id: 2,
        avatar: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E6%90%AD%E9%85%8D%E5%B8%88/%E6%9F%B3%E9%9D%96%E4%BE%9D/18275398fb514365571a778ca307a51.jpg",
        name: "卯青",
        style: "文艺，街头",
        text: "",
        fans: 111

      }
    ],
    fugu: [

      {
        id: 3,

        avatar: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E6%90%AD%E9%85%8D%E5%B8%88/%E9%BB%84%E5%AE%89%E6%A0%BC/1064c5d378ec29283c95dd02bfdeb42.jpg",
        name: "格安",
        style: "复古，国风",
        text: "擅长适合自己的风格，因为自己是梨型身材，上半身比较瘦，下半身很胖，所以衣服的选择很重要！！",
        fans: 230

      }
    ],



    result: [
      {
        id: 1, avatar: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E6%90%AD%E9%85%8D%E5%B8%88/%E5%90%B4%E4%B8%80%E9%80%B8/IMG_0759.JPG",
        name: "兔走",
        style: "潮牌，工装",
        text: "",
        fans: 362
      },
      {
        id: 2,
        avatar: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E6%90%AD%E9%85%8D%E5%B8%88/%E6%9F%B3%E9%9D%96%E4%BE%9D/18275398fb514365571a778ca307a51.jpg",
        name: "卯青",
        style: "文艺，街头",
        text: "",
        fans: 111

      },
      {
        id: 3,

        avatar: "https://clothprogram-1300314777.cos.ap-chengdu.myqcloud.com/%E6%90%AD%E9%85%8D%E5%B8%88/%E9%BB%84%E5%AE%89%E6%A0%BC/1064c5d378ec29283c95dd02bfdeb42.jpg",
        name: "格安",
        style: "复古，国风",
        text: "擅长适合自己的风格，因为自己是梨型身材，上半身比较瘦，下半身很胖，所以衣服的选择很重要！！",
        fans: 230

      }
    ],
    showKeywords: false,
    keywords: ['潮牌', '复古', '文艺', '街头'],
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
    if (!e.detail.value) {
      this.setData({
        showKeywords: false
      })
    } else {
      if (!this.data.showKeywords) {
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
      flag: index
    })
    this.historyHandle(text);
  },
  gotoDetail: function (e) {
    var index = e.currentTarget.dataset.id;

    console.log(index);
    wx.navigateTo({
      url: '/page/component/clothdodetail/clothdodetail?index=' + index,
    })
  },

  keywordHandle2(e) {
    const text = e.target.dataset.text;
    var index = e.currentTarget.dataset.id;
    console.log(text);
    console.log(index);
    if (text == '潮牌') {
      this.setData({
        value: text,
        showKeywords: false,
        showResult: true,
        flag: 0
      })
      console.log(this.data.flag);
      this.historyHandle(text);

    }
    if (text == '文艺') {
      this.setData({
        value: text,
        showKeywords: false,
        showResult: true,
        flag: 1
      })
      console.log(this.data.flag);
      this.historyHandle(text);

    }
    if (text == '复古') {
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
    let history = this.data.history1;
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
    const history = wx.getStorageSync('history1');
    if (history) {
      this.setData({
        history: JSON.parse(history)
      })
      console.log(this.data.history);
    }
  }
})