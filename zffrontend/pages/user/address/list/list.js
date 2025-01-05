
var util = require('../../../../utils/util.js');
const host = require('../../../../config').host;

var getList = function(that) {
    wx.showToast({title: '加载中', icon: 'loading'});
    let api_token = wx.getStorageSync('api_token');
    wx.request({
        url: `${host}api/address`,
        data: {
            api_token: api_token
        },
        method: 'POST',
        header: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        success: function(res) {
            setTimeout(function() {
                wx.hideToast();
            },200);
            that.setData({
                lists: res.data,
                loadingHide: false,
                isContent: res.data != '' ? true :false
            }); 
        }
    });
};

Page({
	data: {
        lists: null,
        loadingHide: true,
        isContent: true
	},
  	onLoad: function () {
        let that = this;
        getList(that);
    },
    defaultAddress: function (e) {
        let that = this;
        let id = e.currentTarget.dataset.id;
        let api_token = wx.getStorageSync('api_token');
        wx.request({
            url: `${host}api/address/status`,
            data: {
                api_token: api_token,
                id: id
            },
            method: 'POST',
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            success: function(res) {
                if (res.data.code == 200) {
                    wx.navigateBack({
                        delta: 1
                    })
                }
            }
        });
    },
    remove: function(e) {
        let that = this;
        let id = e.currentTarget.dataset.id;
        let api_token = wx.getStorageSync('api_token');
        wx.showModal({
            title: '删除收货地址',
            content: '确定要删除此收货地址么！',
            success: function(res) {
                if (res.confirm) {
                    wx.request({
                        url: `${host}api/address/destroy`,
                        data: {
                            api_token: api_token,
                            id: id
                        },
                        method: 'POST',
                        header: {
                            'content-type': 'application/x-www-form-urlencoded'
                        },
                        success: function(res) {
                            if (res.data.code == 200) {
                                getList(that);
                            }
                        }
                    });
                }
            }
        })
    }
})
