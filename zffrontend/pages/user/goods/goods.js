
const host = require('../../../config').host;
var page = 1;
var next_page_url = null;

var getList = function(that) {
    that.setData({
        loading: true
    });
    wx.showToast({title: '加载中', icon: 'loading'});
    let api_token = wx.getStorageSync('api_token');
    wx.request({
        url: `${host}api/like`,
        data: {
            api_token: api_token,
            page: page
        },
        method: 'POST',
        header: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        success: function(res) {
            setTimeout(function() {
                wx.hideToast();
            },200);
            if (page == 1 && res.data.data == '') {
                that.setData({
                    showOn: false
                });
                return false;
            } else {
                that.setData({
                    showOn: true
                });
            }
            if (page == 1) {
                that.setData({
                    lists: [],
                });  
            }
            that.setData({
                lists: that.data.lists.concat(res.data.data),
                loading: false
            }); 
            page ++;
            setTimeout(function() {
                wx.hideToast();
            },200);
            next_page_url = res.data.next_page_url;
            if (page > 2 && next_page_url == null) {
                that.setData({
                    hasMore: false
                });
            }
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
        page = 1;
        wx.getSystemInfo({
            success: function(res) {
                that.setData({
                    scrollHeight: res.windowHeight - 40
                });
            }
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
                                page = 1;
                                getList(that);
                            }
                        }
                    });
                }
            }
        })
    },
    scroll: function() {
        //
    },
    updateList: function() {
        if (this.data.loading) {
            return false;
        }
        let that = this;
        if (next_page_url == null) {
            return false;
        } 
        getList(that);
    }
})
