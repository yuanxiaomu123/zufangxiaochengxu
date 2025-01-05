
const host = require('../../../config').host;
var api_token; 

Page({
    data: {},
    onLoad: function (e) {
        api_token = wx.getStorageSync('api_token');
        wx.getSetting({
          success(res) {
            if (res.authSetting['scope.userInfo']) {
              // 已经授权，可以直接调用 getUserInfo 获取头像昵称
              wx.getUserInfo({
                success: function (res) {
                  console.log(res.userInfo)
                }
              })
            }
          }
        })
    },
    bindGetUserInfo(e) {
      this.getUser();
    },
    cancel: function() {
        wx.navigateBack({
            delta: 1
        })
    },
    determine: function() {
        let that = this;
        wx.getSetting({
            success: (res) => {
                if (!res.authSetting["scope.userInfo"]) {
                    wx.openSetting({
                        success: (res) => {
                            if (res.authSetting["scope.userInfo"]) {
                                that.getUser();
                            }
                        }
                    })
                }
            }
        })
    },
    getUser: function() {
        wx.getUserInfo({
            success: function(e) {
                let userInfo = e.userInfo;
                wx.request({
                    url: `${host}api/user/edit`,
                    data: {
                        api_token: api_token,
                        name: userInfo.nickName,
                        img: userInfo.avatarUrl,
                        gender: userInfo.gender,
                        is_auth: 1
                    },
                    header: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    method: "POST",
                    success: function(res) {
                        if (res.data.code) {
                            wx.navigateBack({
                                delta: 1
                            })
                        }
                    }
                });
            }
        })
    }
})
