// index.js 页面逻辑和功能
Page({
  data: {
    message: 'Herimap',
    num: 0,
    date:'',
    latitude: 0, // 纬度
    longitude: 0,// 经度
    markers: [
      {
        id: 1,
        latitude: 31.2304,
        longitude: 121.4737,
        name: "上海中心",
        iconPath: "/resources/marker.png", // 自定义图标路径
        width: 30,
        height: 30,
      }
    ]},

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },

  // wx.getSetting({
  //   success(res) {
  //     if (!res.authSetting["scope.userLocation"]) {
  //       wx.authorize({
  //         scope: "scope.userLocation",
  //         success() {
  //           console.log("用户已授权位置权限");
  //         },
  //         fail() {
  //           console.log("用户拒绝了位置权限");
  //         },
  //       });
  //     }
  //   },
  // }),  

  onLoad: function(){
    this.updateNum();
    thiswx.getLocation();
  },

  updateNum: function(){
    const newNum = Math.floor(Math.random() * 100);
    this.setData({
      num: newNum
    });
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

  getLocation:function(){
    let thet = this;
    wx.getLocation({
      type:'wgs84',
      success(res){
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
        });
        that.addMarker();
      }
    });
  },

  addMarker:function(){
    const marker = {
      id:1,
      latitude: this.data.latitude,
      longitude: this.data.longitude};
    this.setData({
        markers: [marker]
      });
  }

  // onLoad(){
  //   const that = this;
  //   wx.getLocation({
  //     type: "gcj02", // 返回可用于 `wx.openLocation` 的坐标
  //     success(res) {
  //       that.setData({
  //         latitude: res.latitude,
  //         longitude: res.longitude,
  //       });
  //       console.log("当前位置：", res.latitude, res.longitude);
  //     },
  //     fail() {
  //       console.log("获取位置失败");
  //     },
  //   }),
  // },

  // wx.request({
  //   url: "https://apis.map.qq.com/ws/direction/v1/walking/", // 腾讯地图路径规划 API
  //   data: {
  //     from: "31.2304,121.4737", // 起点
  //     to: "31.2333,121.4787", // 终点
  //     key: "你的腾讯地图 API Key", // 替换为你的密钥
  //   },
  //   success(res) {
  //     console.log("规划路线：", res.data);
  //     // 解析路线并展示在地图上
  //   },
  //   fail(err) {
  //     console.error("路径规划失败：", err);
  // //   },
  // })

})