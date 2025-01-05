import util from '../../../../utils/util';
var id = 0;

Page({
	data: {
        order: null,
        isShow: false,
        loadingHide: true,
        orderStatus: {
            1: '已付款',
            2: '已发货',
            3: '已完结'
        }
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
        util.authRequest('api/order/show', {id: id}).then(res => {
            setTimeout(function() {
                wx.hideToast();
            },200);
            this.setData({
                isShow: true,
                order: res.data,
                loadingHide: false
            });
        })
    },
    receiving: function() {
        let that = this;
        wx.showModal({
            title: '确认收货',
            content: '确认商品已经签收么？',
            success: function(res) {
                if (res.confirm) {
                    util.authRequest('api/order/receiving', {id: id}).then(res => {
                        if (res.data.status == 'sucess') {
                            that.loadData();
                        }
                    })
                }
            }
        })
    },
    onPullDownRefresh: function() {
        this.loadData();
        wx.stopPullDownRefresh();
    }
})
