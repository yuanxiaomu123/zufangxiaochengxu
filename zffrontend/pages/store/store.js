
const host = require('../../config').host;
var _imgs = [];

Page({
	data: {
		Contents: null,
        sroteList: null,
        isShow: false
	},
  	onLoad: function () {
        wx.showToast({title: '加载中', icon: 'loading'});
        let that = this;
        wx.request({
            url: `${host}api/content/config`,
            success: function(res) {
                that.setData({
                    Contents: res.data,
                    isShow: true
                });
                setTimeout(function() {
                    wx.hideToast();
                },1000);
            }
        });
        wx.request({
            url: `${host}api/content/ads?id=7`,
            success: function(res) {
                setTimeout(function() {
                    wx.hideToast();
                },200);
                if (res.data.length > 0) {
                    that.setData({
                        sroteList: res.data
                    });
                    for (let i = 0; i < res.data.length; i ++) {
                        _imgs[i] = res.data[i].uploadfiles;
                    }
                }
            }  
        }); 
    },
    clickAddress: function () {
        let that = this;
        let xy = that.data.Contents.store_xy;
        xy = xy.split(",");
        wx.openLocation({
            latitude: Number(xy[0]),
            longitude: Number(xy[1]),
            name: that.data.Contents.store_name,
            address: that.data.Contents.store_address
        })
    },
    clickTel: function () {
        let tel = this.data.Contents.store_tel.replace(/-/g, "");
        wx.makePhoneCall({
            phoneNumber: tel
        })
    },
    clickImage: function (e) {
        let current = e.target.dataset.src;
        wx.previewImage({
            current: current,
            urls: _imgs
        })
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh();
    },
    onShareAppMessage: function () {
        let that = this;
        return {
            title: that.data.store_name,
            path: '/store/store'
        }
    }
})
