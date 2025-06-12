Page({
  data: {
    
  },
  // onLoad() {
  //   // 可以在这里添加一些初始化逻辑
  // },

  onlaunch:function(){
    wx.reLaunch({
      url: 'pages/launch/launch',
    })
  },

  enterApp() {
    wx.reLaunch({
            url: '/pages/launch/launch'
    })
  }
  // enterApp() {
  //   wx.switchTab({
  //     url: '/pages/launch/launch'
  //   })
  // }
}) 