
var util = require('../../../../utils/util.js');
const host = require('../../../../config').host;
var next_page_url = null;
var status = 1;
var page = 1;

var orders = function(that) {
    that.setData({
        loading: true
    });
    wx.showToast({title: '加载中', icon: 'loading'});
    let api_token = wx.getStorageSync('api_token');
    wx.request({
        url: `${host}api/order`,
        data: {
            api_token: api_token,
            status: status,
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
            that.setData({
                loadingHide: false
            });
            if (page == 1 && res.data.data == '') {
                that.setData({
                    showOn: false
                });
                return false;
            }
            if (page == 1) {
                that.setData({
                    ordertList: [],
                });  
            }
            that.setData({
                showOn: true,
                ordertList: that.data.ordertList.concat(res.data.data),
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
        ordertList: [],
        loadingHide: true,
        scrollHeight: 0,
        scrollTop: 0,
        hasMore: true,
        showOn: true,
        orderCate: [
            {
                title: '已付款',
                id: 1
            },{
                title: '已发货',
                id: 2
            },{
                title: '已完结',
                id: 3
            }
        ],
        statusTitle: '已付款',
        active: null,
        loading: false
    },
    onLoad: function () {
        wx.showToast({
            title: '加载中',
            icon: 'loading'
        });
        var that = this;
        wx.getSystemInfo({
            success: function(res) {
                that.setData({
                    scrollHeight: res.windowHeight - 40
                });
            }
        });
    },
    onShow: function() {
        let active = [];
        active[status] = 'active';
        this.setData({
            active: active
        }); 
        page = 1;
        orders(this);
    },
    statusList: function (e) {
        let that = this;
        status = e.target.dataset.status;
        page = 1;
        let active = [];
        active[status] = 'active';
        
        if (status == 2) {
            var statusTitle = '已发货';
        } else if (status == 3) {
            var statusTitle = '已完结';
        } else {
            var statusTitle = '已付款';
        }
        that.setData({
            active: active,
            statusTitle: statusTitle,
            hasMore: true
        });  
        orders(that);
    },
    removeOrder: function(e) {
        let that = this;
        let api_token = wx.getStorageSync('api_token');
        wx.showModal({
            title: '删除订单',
            content: '确定要删除此订单信息么！',
            success: function(res) {
                if (res.confirm) {
                    wx.request({
                        url: `${host}api/order/destroy`,
                        data: {
                            api_token: api_token,
                            id: e.target.dataset.id
                        },
                        method: 'POST',
                        header: {
                            'content-type': 'application/x-www-form-urlencoded'
                        },
                        success: function(res) {
                            if (res.data.errMsg == 'success') {
                                page = 1;
                                orders(that);
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
        orders(that);
    }
})
