var util = require('../../../utils/util.js');
const host = require('../../../config').host;

Page({
    data: {
        users: null,
        loadingHide: true,
        isAuth: true,
        jifen: 0,
        sign: 0,
    },
    onLoad: function () {
        wx.showToast({
            title: '加载中',
            icon: 'loading'
        });
    },
    onShow: function() {
        this.loadData();
    },
    sendSign: function() {
        let that = this;
        util.authRequest('api/user/sign').then(res => {
            if (res.data.status == 'sucess') {
                let users = that.data.users;
                users.is_sign = 1;
                users.integral = parseInt(res.data.sign) + parseInt(users.integral);
                that.setData({
                    jifen: 1,
                    sign: res.data.sign,
                    users: users,
                });
            }
        })
    },
    loadData: function() {
        let that = this;
        util.authRequest('api/user/info').then(res => {
            setTimeout(function() {
                wx.hideToast();
            },200);
            that.setData({
                isAuth: res.data.is_auth == 1 ? true : false,
                users: res.data,
                loadingHide: false
            });
        })
    },
    onPullDownRefresh: function() {
        this.loadData();
        wx.stopPullDownRefresh();
    }
})
