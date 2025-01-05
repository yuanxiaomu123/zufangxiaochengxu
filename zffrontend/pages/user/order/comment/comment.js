const host = require('../../../../config').host;
var id    = 0;
var stars = 5;

Page({
	data: {
        order: null,
        isShow: true,
        stars: stars,
        change: [],
        userId: null,
        productId: null,
	},
  	onLoad: function (e) {
        wx.showToast({
            title: '加载中',
            icon: 'loading'
        });
        id = e.id;
        this.loadData();
	},
    loadData: function() {
        let that = this;
        let api_token = wx.getStorageSync('api_token');
        wx.request({
            url: `${host}api/order/show`,
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
                if(res.data == '') {
                    that.setData({
                        isShow: false,
                    });
                    return false;
                }
                that.setData({
                    isShow: true,
                    order: res.data
                });
            }
        });
    },
    starChange: function(e) {
        let that   = this;
        let change = [];
        stars      = e.target.dataset.stars;
        for (let i = 1; i < 6; ++i) {
            if (i > stars) {
                change[i] = 'change';
            }else {
                change[i] = '';
            }
        }
        that.setData({
            stars: stars,
            change: change
        });
    },
    formSubmit: function(e) {
        var formData        = e.detail.value;
        formData.api_token  = wx.getStorageSync('api_token');
        formData.user_id    = this.data.order.userid;
        formData.order_id   = this.data.order.orderid;
        formData.product_id = this.data.order.orders[0].id;
        formData.stars      = this.data.stars;
        formData.imgs       = this.data.order.orders[0].img;
        if(formData.message_content.replace(/ /g,'').length == 0) {
            wx.showToast({
				title: '请填写评价内容！'
			});
			return;
        }
        wx.request({
            url: `${host}api/comment/create`,
            data: formData,
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            method: "POST",
            success: function(res) {
                if (res.data.code == 200) { 
                    wx.showToast({
                        title: '评论成功',
                        icon: 'success'
                    });
                    setTimeout(function() {
                        wx.redirectTo({
                            url: '../list/list'
                        })
                    },300);
                }
            }
        });
    },
    onPullDownRefresh: function() {
        this.loadData();
        wx.stopPullDownRefresh();
    }
})