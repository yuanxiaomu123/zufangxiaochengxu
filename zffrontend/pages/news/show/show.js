import WxParse from '../../../wxParse/wxParse';
import util from '../../../utils/util';

var id = 0;
var api_token;

Page({
	data: {
        show: null,
        loadingHide: true,
        goodsOn: ''
	},
  	onLoad: function (e) {
        api_token = wx.getStorageSync('api_token');
        wx.showToast({
            title: '加载中',
            icon: 'loading'
        });
        id = e.id;
        this.loadData();
    },
    onShow: function() {
        this.isGoods();
    },
    isGoods: function() {
        let that = this;
        util.wxRequest('api/likes/is-like', {api_token: api_token, id: id}, 'POST').then(res => {
            that.setData({
                goodsOn: res.data.code == 200 ? res.data.active : ''
            });
        })
    },
    goods: function() {
        let that = this;
        var ajaxUrl = that.data.goodsOn == 'on' ? 'api/likes/destroy' : 'api/likes/create';
        util.wxRequest(ajaxUrl, {api_token: api_token, id: id}, 'POST').then(res => {
            that.setData({
                goodsOn: res.data.code == 200 ? res.data.active : ''
            });
        })
    },
    loadData: function() {
        util.wxRequest(`api/content/show?table=info&id=${id}`).then(res => {
            // WxParse.wxParse('newsShow', 'html', res.data.content, this);
            this.setData({
                show: res.data,
                loadingHide: false
            });
            util.wxHideToast();
        })
    },
    onPullDownRefresh: function() {
        this.loadData();
        wx.stopPullDownRefresh();
    },
    onShareAppMessage: function () {
        return {
            title: this.data.pageData.title,
            path: `/pages/news/show/show?id=${id}`
        }
    },
    formSubmit: function(e) {
        var c = e.detail.target.dataset.click;
        "backHome" === c ? this.backHome() : "toggleLike" === c ? this.goods() : "showActions" === c ? this.showActions() : "createHaibao" === c ? s ? n ? this.share() : wx.showModal({
            content: "该操作需要先完善信息哦",
            success: function(e) {
                e.confirm && wx.navigateTo({
                    url: "/pages/profile/info/index"
                });
            }
        }) : wx.navigateTo({
            url: "/pages/login/index"
        }) : "contact" === c ? this.contact() : ''
    },
    backHome: function() {
        wx.switchTab({
            url: "/pages/index/index"
        });
    },
    contact: function() {
        
        var e = this
        wx.showLoading({
            title: "加载中..."
        }), util.authRequest('api/user/info').then(res => {
            wx.hideLoading();
            var a = res.data.tel, i = res.data.userWechat;
            e.callUser(a, i);
        })
    },
    callUser: function(e, t) {
        var a = this;
        wx.showActionSheet({
            itemList: [ "电话联系", "微信联系" ],
            success: function(i) {
                0 === i.tapIndex ? a.callUserPhone(e) : a.copyUserWechat(t);
            }
        });
    },
    callUserPhone: function(e) {
        wx.showModal({
            content: "联系我时请说明【租房】小程序上看到的~",
            showCancel: !1,
            confirmText: "好哒",
            success: function(t) {
                wx.makePhoneCall({
                    phoneNumber: e
                });
            }
        });
    },
    copyUserWechat: function(e) {
        wx.showModal({
            content: "加我时请备注在【梧居租房】小程序上看到的~",
            showCancel: !1,
            confirmText: "复制微信",
            success: function() {
                wx.setClipboardData({
                    data: e,
                    success: function(e) {
                        wx.showToast({
                            title: "微信号已复制",
                            icon: "success",
                            duration: 1500
                        });
                    }
                });
            }
        });
    }
})
