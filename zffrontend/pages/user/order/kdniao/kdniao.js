const host = require('../../../../config').host;
var express_key = '';
var express_order = '';

Page({
	data: {
        lists: null,
        isShow: false,
        express_name: '',
        express_order: ''
	},
  	onLoad: function (e) {
        wx.showToast({
            title: '加载中',
            icon: 'loading'
        });
        express_key   = e.key;
        express_order = e.order;
        this.setData({
            express_name: e.name,
            express_order: express_order
        });
        this.loadData();
	},
    loadData: function() {
        let that = this;
        wx.request({
            url: `${host}api/logistics?ex=${express_key}&order=${express_order}`,
            success: function(res) {
                setTimeout(function() {
                    wx.hideToast();
                },200);
                that.setData({
                    isShow: true,
                    lists: res.data
                });
            }
        });
    },
    onPullDownRefresh: function() {
        this.loadData();
        wx.stopPullDownRefresh();
    }
})
