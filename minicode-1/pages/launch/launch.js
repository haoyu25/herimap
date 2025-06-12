Page({
  /**
   * 页面的初始数据
   */
  data: {
    days: 10,
    visits: 10,
    routeslength: 1,
    distance: 100,
    shares: 10,
    temperature: 32,
    date: ''
  },

  navigateToIndex: function(){
    wx.navigateTo({
      url: '/pages/index/index'
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(){
    this.updateDate();
    // this.updateLoginDays();
    setTimeout(() => {
      wx.reLaunch({
        url: '/pages/index/index'
      });
    },3000);
  },

  updateDate: function(){
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0')
    this.setData({
      date: `${year}年${month}月${day}日`
    });
  },

  onindex:function(){
    wx.reLaunch({
      url: '/pages/index/index',
    })
  },

  enterApp() {
    wx.reLaunch({
      url: '/pages/index/index'
    })
  },

  // updateLoginDays: function(){
  //   const days = wx.getStorageSync('loginDays')|| 0;
  //   const updatedDays = days + 1;
  //   wx.setStorageSync('loginDays', updatedDays);
  //   this.setData({
  //     days: updatedDays
  //   });
  // }

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
});