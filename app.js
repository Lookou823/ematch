App({



  onLaunch: function () {
    wx.cloud.init({
      traceUser: true,
      env: "lyd-cloth-app-h7e0u"

    })
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  globalData: {
    hasLogin: false
  }
})
