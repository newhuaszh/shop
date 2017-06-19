var coolsite360 = require('./coolsite/index.js');
App({
  coolsite360: coolsite360,
  globalData: {
    userInfo: null
  },
  onLaunch: function () {
    var that = this;
    wx.login({
      success: function () {
        wx.getUserInfo({
          success: function (res) {
            that.globalData.userInfo = res.userInfo;
          }
        })
      }
    })
  }
})