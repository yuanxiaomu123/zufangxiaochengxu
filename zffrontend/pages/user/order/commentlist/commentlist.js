const host = require('../../../../config').host;
var next_page_url = null;
var id   = 0;
var page = 1;

var comments = function(that) {
    that.setData({
        loading: true
    });
    wx.showToast({title: '加载中', icon: 'loading'});
    let api_token = wx.getStorageSync('api_token');
    wx.request({
        url: `${host}api/comment/list`,
        data: {
            api_token: api_token,
            id: id,
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
                    commentList: [],
                });  
            }
            that.setData({
                commentList: that.data.commentList.concat(res.data.data),
                loading: false
            }); 
            page ++;
            next_page_url = res.data.next_page_url;
            if (page > 2 && next_page_url == null) {
                that.setData({
                    hasMore: false
                });
            }
        }
    }); 
}

Page({
	data: {
        commentList: [],
        scrollHeight: 0,
        scrollTop: 0,
        hasMore: true,
        showOn: true,
        loading: false
	},
  	onLoad: function (e) {
        wx.showToast({
            title: '加载中',
            icon: 'loading'
        });
        var that = this;
        page = 1;
        id   = e.id;
        wx.getSystemInfo({
            success: function(res) {
                that.setData({
                    scrollHeight: res.windowHeight - 40
                });
            }
        });
        comments(that);
	},
    loadData: function() {
        let that      = this;
        let api_token = wx.getStorageSync('api_token');
        wx.request({
            url: `${host}api/comment/list`,
            data: {
                api_token: api_token,
                id: id
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
                    isShow: true,
                    order: res.data
                });
            }
        });
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
        orders(that);
    },
    onPullDownRefresh: function() {
        this.loadData();
        wx.stopPullDownRefresh();
    }
})