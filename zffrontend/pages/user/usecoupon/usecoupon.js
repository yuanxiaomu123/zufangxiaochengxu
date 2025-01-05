const host = require('../../../config').host;
var totalPrice = 0;

Page({
	data: {
        coupon: null,
        isShow: true,
	},
  	onLoad: function (e) {
        wx.showToast({
            title: '加载中',
            icon: 'loading'
        });
        totalPrice = e.totalPrice;
        this.loadData();
	},
    loadData: function() {
        let that = this;
        let api_token = wx.getStorageSync('api_token');
        wx.request({
            url: `${host}api/usecoupon`,
            data: {
                api_token: api_token,
                totalPrice: totalPrice,
            },
            method: 'POST',
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            success: function(res) {
                setTimeout(function() {
                    wx.hideToast();
                },200);
                if(res.data == '') {
                    that.setData({
                        isShow: false,
                    });
                    return false;
                }
                that.setData({
                    isShow: true,
                    coupon: res.data
                });
            }
        });
    },
    couponChoice: function(e) {
        let that = this;
        let couponData = [];
        couponData.coupon_id  = e.target.dataset.id;
        couponData.api_token  = wx.getStorageSync('api_token');
        wx.request({
            url: `${host}api/usecoupon/update`,
            data: couponData,
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            method: "POST",
            success: function(res) {
                if (res.data.code == 200) { 
                    wx.showToast({
                        title: '更新成功',
                        icon: 'success'
                    });
                    setTimeout(function() {
                        that.loadData();
                    },300);
                }
            }
        });
    },
    clickBack: function(e) {
        wx.navigateBack();
    },
    onPullDownRefresh: function() {
        this.loadData();
        wx.stopPullDownRefresh();
    }
})