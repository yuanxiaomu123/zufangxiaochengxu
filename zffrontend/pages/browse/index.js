
const host = require('../../config').host;

var getList = function(that) {
    that.setData({
        loading: true
    });
    wx.showToast({title: '加载中', icon: 'loading'});
    let api_token = wx.getStorageSync('api_token');
    wx.request({
        url: `${host}api/likes`,
        data: {
            api_token: api_token
        },
        method: 'POST',
        header: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        success: function(res) {
            that.setData({
                lists: that.data.lists.concat(res.data.data),
            }); 
            wx.request({
                url: `${host}api/like`,
                data: {
                    api_token: api_token
                },
                method: 'POST',
                header: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                success: function(ress) {
                    setTimeout(function() {
                        wx.hideToast();
                    },200);
                    that.setData({
                        lists: that.data.lists.concat(ress.data.data),
                        loading: false
                    }); 
                }
            });
        }
    });
    
};

Page({
	data: {
		lists: [],
        scrollHeight: 0,
        scrollTop: 0,
        active: null,
        hasMore: true,
        showOn: true,
        loading: false
	},
  	onLoad: function (e) {
        // 在页面展示之后先获取一次数据
        let that = this;
        wx.getSystemInfo({
            success: function(res) {
                that.setData({
                    scrollHeight: res.windowHeight - 40
                });
            }
        });
    },
    onShow: function () {
        let that = this;
        that.setData({
            lists: []
        });
        getList(that);
    },
    remove: function(e) {
        let that = this;
        let id = e.target.dataset.id;
        let api_token = wx.getStorageSync('api_token');
        wx.showModal({
            title: '取消收藏',
            content: '确定不再收藏此商品！',
            success: function(res) {
                if (res.confirm) {
                    wx.request({
                        url: `${host}api/like/destroy`,
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
