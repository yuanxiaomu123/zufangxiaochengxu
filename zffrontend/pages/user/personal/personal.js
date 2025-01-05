
const host = require('../../../config').host;
var api_token; 

Page({
    data: {
        loadingHide: true,
        users: null,
        userImg: '',
        isShow: false,
        isPhoto: false,
        Index: 0,
        genders: {
            0: '保密',
            1: '男',
            2: '女'
        },
        isGender: false
    },
    onLoad: function () {
        api_token = wx.getStorageSync('api_token');
        wx.showToast({
            title: '加载中',
            icon: 'loading'
        });
    },
    onShow: function() {
        this.loadData();
    },
    loadData: function() {
        let that = this;
        wx.request({
            url: `${host}api/user/info`,
            data: {
                api_token: api_token
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            method: "POST",
            success: function(res) {
                setTimeout(function() {
                    wx.hideToast();
                },200);
                that.setData({
                    users:  res.data,
                    userImg: res.data.img,
                    loadingHide: false,
                    userGender: res.data.gender,
                    isShow: true
                });
            }
        });
    },
    formSubmit: function(e) {
        wx.request({
            url: `${host}api/user/update`,
            data: {
                api_token: api_token,
                name: e.detail.value.name,
                gender: e.detail.value.gender
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            method: "POST",
            success: function(res) {
                if (res.data.code == 200) { 
                    wx.showToast({
                        title: '修改成功',
                        icon: 'success'
                    })
                    wx.switchTab({
                        url: '/pages/user/member/member'
                    })
                }
            }
        });
    },
    saveAvatar: function(e) {
        let that = this;
        let opt = e.currentTarget.dataset.opt;
        wx.chooseImage({
            count: 1, // 默认1
            sizeType: ['compressed'],
            sourceType: [opt], 
            success: function (res) {
                let tempFilePaths = res.tempFilePaths;
                wx.uploadFile({
                    url: `${host}api/user/avatar`,
                    filePath: tempFilePaths[0],
                    name: 'file',
                    header: {
                        'content-type': 'application/json'
                    },
                    formData: {
                        api_token: api_token
                    },
                    success: function(res){
                        let obj = JSON.parse(res.data);
                        if (obj.code == 200) {
                            that.setData({
                                userImg: obj.img,
                                isPhoto: false
                            });
                        }
                    }
                })
            }
        })
    },
    photoShow: function() {
        this.setData({
            isPhoto: true
        });
    },
    photoCancel: function() {
        this.setData({
            isPhoto: false
        });
    },
    changeGender: function(e) {
        let that = this;
        let val  = e.detail.value;
        that.setData({
            Index: val,
            userGender: that.data.genders[val]
        })

    },
    genderCancel: function() {
        this.setData({
            isGender: false
        });
    },
    genderShow: function() {
        let that = this;
        for (let i = 0; i < 3; i++) {
            if (that.data.genders[i] == that.data.users.gender) {
                that.setData({
                    Index: [i]
                });
            }
        }
        this.setData({
            isGender: true
        });
    },
    onReachBottom: function() {

    },
    onPullDownRefresh: function() {
        this.loadData();
        wx.stopPullDownRefresh();
    }
})
