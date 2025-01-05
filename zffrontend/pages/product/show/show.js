
var WxParse = require('../../../wxParse/wxParse.js');
var util = require('../../../utils/util.js');
const host = require('../../../config').host;
var id = 0;
var api_token;
var formData = {};

Page({
	data: {
		product: null,
        indicatorDots: true,
        loadingHide: true,
        obtainIntegral: 0,
        autoplay: true,
        integralPrice: 0,
        interval: 5000,
        duration: 1000,
        goodsOn: '',
        cartNum: 0,
        quantity: 1,
        lessDisabled: true,
        plusDisabled: false,
        stockNum: 0,
        productPrice: 0,
        typeShow: false,
        scrollHeight: 0,
        scrollWidth: 0,
        checks: [],
        winWidth: 0,
        winHeight: 0,
        currentTab: 0
	},
  	onLoad: function (e) {
        api_token = wx.getStorageSync('api_token');
        let that = this;
        wx.showToast({
            title: '加载中',
            icon: 'loading'
        });
        wx.getSystemInfo({
            success: function(res) {
                that.setData({
                    scrollHeight: res.windowHeight - 110,
                    scrollWidth: res.windowWidth,
                    winWidth: res.windowWidth,
                    winHeight: res.windowHeight
                });
            }
        });
        id = e.id;
        this.loadData();
	},
    loadData: function() {
        let that = this;
        wx.request({
            url: `${host}api/content/show?id=${id}`,
            success: function(res) {
                setTimeout(function() {
                    wx.hideToast();
                },200);
                let obtainIntegral = 0;
                if (parseInt(res.data.give_integral) < 0) {
                    obtainIntegral = parseInt(res.data.price) < 1 ? 0 : parseInt(res.data.price);
                } else {
                    obtainIntegral = parseInt(res.data.give_integral)*100;
                }
                wx.setNavigationBarTitle({
                    title: res.data.title
                });
                let attrs = res.data.attrs;
                let checks = res.data.checks;
                that.setData({
                    product: res.data,
                    loadingHide: false,
                    obtainIntegral: obtainIntegral,
                    productPrice: res.data.price,
                    checks: checks,
                });
                that.setData({
                    integralPrice: parseInt(that.data.productPrice),
                });
                that.stockUptate();
                WxParse.wxParse('content', 'html', res.data.content, that);
            }
        });
    },
    cartListNum: function() {
        util.wxRequest('api/cart/amount', {api_token: api_token}, 'POST').then(res => {
            this.setData({
                cartNum: res.data.count
            });
        })
    },
    onShow: function() {
        this.cartListNum();
        this.isGoods();
    },
    isGoods: function() {
        let that = this;
        util.wxRequest('api/like/is-like', {api_token: api_token, id: id}, 'POST').then(res => {
            that.setData({
                goodsOn: res.data.code == 200 ? res.data.active : ''
            });
        })
    },
    goods: function() {
        let that = this;
        var ajaxUrl = that.data.goodsOn == 'on' ? 'api/like/destroy' : 'api/like/create';
        util.wxRequest(ajaxUrl, {api_token: api_token, id: id}, 'POST').then(res => {
            that.setData({
                goodsOn: res.data.code == 200 ? res.data.active : ''
            });
        })
    },
    buyNow: function(e) {
        let that = this;
        let attrids = '';
        let checks = that.data.checks;
        let item = null;
        for (item in checks) {
            attrids += checks[item] + '-';
        }
        let createpamas = {
            api_token: api_token,
            id: id,
            num: that.data.quantity,
            type_ids: attrids,
        };
        util.wxRequest('api/cart/create', createpamas, 'POST').then(res => {
            if (res.data.code == 200) {
                wx.switchTab({
                    url: '../../user/cart/cart'
                })
            }
            if (res.data.code == 500) {
                wx.showToast({
                    title: '库存不足！',
                    icon: 'success',
                    duration: 1000
                });
            }
        })
    },
    buyNows: function(e) {
        let that = this;
        let attrids = '';
        let checks = that.data.checks;
        let item = null;
        for (item in checks) {
            attrids += checks[item] + '-';
        }
        let createpamas = {
            api_token: api_token,
            id: id,
            num: that.data.quantity,
            type_ids: attrids,
        };
        util.wxRequest('api/cart/create', createpamas, 'POST').then(res => {
            if (res.data.code == 200) {
                that.setData({
                    cartNum: that.data.cartNum + 1
                });
                wx.showToast({
                    title: '添加成功！',
                    icon: 'success',
                    duration: 1000
                });
            }
            if (res.data.code == 500) {
                wx.showToast({
                    title: '库存不足！',
                    icon: 'success',
                    duration: 1000
                });
            }
        })
    },
    stockUptate: function(){
        let item = null;
        let attrs = this.data.product.attrs;
        let checks = this.data.checks;
        console.log(attrs);
        let num = null;
        for (item in checks) {
            for (let i = 0; i < attrs[item].length; i++) {
                if (checks[item] == attrs[item][i].id && attrs[item][i].is_stock == 1) {
                    num = attrs[item][i].attr_stock;
                }
                
            }
        }
        this.setData({
            stockNum: num == null ? this.data.product.stock : num,
        });
    },
    bindNum: function(e) {
        let that = this;
        let status = parseInt(e.target.dataset.status);
        let num = parseInt(that.data.quantity);
        let stockNum = parseInt(that.data.stockNum);
        if (status == 1) {
            num--;
        } else if (status == 2) {
            num++;
        }
        if (num == 1 && stockNum == 0) {
            that.setData({
                lessDisabled: true,
                plusDisabled: true
            });
        }
        let isTrue = stockNum == num ? true : false;
        if (stockNum == -1) {
            isTrue = false;
        }
        that.setData({
            lessDisabled: num < 2 ? true : false,
            plusDisabled: isTrue,
            quantity: num
        });
    },
    openType: function() {
        this.setData({
            typeShow: true
        });
    },
    closeType: function() {
        this.setData({
            typeShow: false
        });
    },
    selectPrice: function(e) {
        let id = e.target.dataset.id;
        let attr_id = e.target.dataset.attrid;
        let stock = e.target.dataset.stock;
        let checks = this.data.checks;
        checks[attr_id] = id;
        let price = this.data.productPrice;
        let newprice = e.target.dataset.price;
        if (newprice && newprice > 0) {
            price = newprice;
        }
        if (stock != -10) {
            this.setData({
                stockNum: stock,
                lessDisabled: true,
                plusDisabled: false,
                quantity: 1,
            });
        }
        this.setData({
            checks: checks,
            productPrice: price,
        });
    },
    bindKeyInput: function(e) {
        let that = this;
        let num = e.detail.value;
        let stockNum = parseInt(that.data.stockNum);
        if (stockNum >= 0) {
            if (parseInt(num) > parseInt(stockNum)) {
                num = stockNum;
            }
        }
        let isTrue = stockNum == num ? true : false;
        if (stockNum == -1) {
            isTrue = false;
        }
        that.setData({
            lessDisabled: num < 2 ? true : false,
            plusDisabled: num == isTrue,
            quantity: num == 0 ? 1 :num
        });
    },
    onPullDownRefresh: function() {
        this.loadData();
        this.cartListNum();
        wx.stopPullDownRefresh();
    },
    onShareAppMessage: function () {
        var that = this;
        return {
            title: that.data.product.title,
            path: '/pages/product/show/show?id=' + that.data.product.id
        }
    },
    //  tab切换逻辑
    swichNav: function( e ) {

        var that = this;

        if( this.data.currentTab === e.target.dataset.current ) {
            return false;
        } else {
            that.setData( {
                currentTab: e.target.dataset.current
            })
        }
    },

    bindChange: function( e ) {

        var that = this;
        that.setData( { currentTab: e.detail.current });

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
