var util = require('../../../utils/util.js');
const host = require('../../../config').host;
var api_token;

var getList = function(that) {
    wx.showToast({title: '加载中', icon: 'loading'});
    wx.request({
        url: `${host}api/cart/lists`,
        data: {
            api_token: api_token
        },
        method: 'POST',
        header: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        success: function(res) {
            setTimeout(function() {
                wx.hideToast();
            },100);
            let prices = (res.data.price - res.data.subPrice).toFixed(2);
            that.setData({
                cartList: res.data.data,
                totalPrice: res.data.price,
                originalPrice: prices,
                totalPrice: prices,
                totalNum: res.data.count,
                discount: parseInt(res.data.discount),
                integral: res.data.integral,
                couponNum: res.data.couponNum,
                canUseNum: res.data.canUseNum,
                subPrice: res.data.subPrice,
                userIntegral: parseInt(res.data.userIntegral),
                showOn: res.data.count < 1 ? 1 : 2
            });
        }
    });
}

Page({
    data: {
        cartList: null,
        showOn: 0,
        discount: 0,
        originalPrice: 0,
        totalPrice: null,
        totalNum: 0,
        adress: '',
        isAddress: 0,
        isStock: false,
        isFixed: false,
        quantity: 1,
        productId: 0,
        cartid: 0,
        focus: true,
        integral: 0,
        couponNum: 0,
        userIntegral: 0,
        isIntegral: 0,
        canUseNum: 0,
        subPrice: 0,
        isCoupon: 0
    },
    onLoad: function() {
        api_token = wx.getStorageSync('api_token');
        wx.showToast({
            title: '加载中',
            icon: 'loading'
        });
        this.stocks();
    },
    onShow: function() {
        this.adressList();
        getList(this);
    },
    bindNum: function(e) {
        let that = this;
        let status = parseInt(e.target.dataset.status);
        let id = e.target.dataset.id;
        let cart_id = e.target.dataset.cartid;
        let num = parseInt(e.target.dataset.num);
  
        if (status == 1) {
            num--;
        } else if (status == 2) {
            num++;
        }
        if (num < 1) {
            wx.showModal({
                title: '确认删除',
                content: '此商品最小购买数量为1，是否删除产品?',
                success: function(res) {
                    if (res.confirm) {
                        that.remove(id, cart_id);
                    }
                }
            })
        } else {
            that.cartUpdate(id, num, cart_id);
        }
    },
    quantity: function(e) {
        this.setData({
            isFixed: true,
            quantity: e.target.dataset.num,
            productId: e.target.dataset.id,
            cartid: e.target.dataset.cartid,
        })
    },
    bindFixedNum: function(e) {
        let status = parseInt(e.target.dataset.status);
        let num = parseInt(this.data.quantity);
        if (status == 1) {
            num--;
        } else if (status == 2) {
            num++;
        }
        if (num < 1) {
            num = 1;
        }
        this.setData({
            quantity: num
        })
    },
    bindKeyInput: function(e) {
        this.setData({
            quantity: e.detail.value
        })
    },
    cancel: function() {
        this.setData({
            isFixed: false
        })
    },
    determine: function() {
        this.setData({
            isFixed: false
        })
        let num = this.data.quantity;
        let id = this.data.productId;
        let cart_id = this.data.cartid;
        if (parseInt(num) > 0) {
            this.cartUpdate(id, num, cart_id);
        }
    },
    stocks: function() {
        let that = this;
        wx.request({
            url: `${host}api/content/config`,
            success: function(res) {
                that.setData({
                    isStock: res.data.is_stock == 1 ? true : false
                });
            }
        });
    },
    cartUpdate: function(id, num, cart_id) {
        let that = this;
        let createpamas = {
            api_token: api_token,
            id: id,
            num: num,
            cart_id: cart_id,
        };
        util.wxRequest('api/cart/create', createpamas, 'POST').then(res => {
            if (res.data.code == 200) {
                getList(that);
            }
            if (res.data.code == 500) {
                wx.showToast({
                    title: '库存不足！',
                    image: '../../../image/prompt.png',
                    duration: 1000
                });
            }
        })
    },
    adressList: function() {
        let that = this;
        wx.request({
            url: `${host}api/address`,
            data: {
                api_token: api_token,
                status: 1
            },
            method: 'POST',
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            success: function(res) {
                if (res.data.length > 0) {
                    that.setData({
                        adress: res.data[0],
                        isAddress: 1
                    });
                } else {
                    that.setData({
                        isAddress: 0
                    });
                }
            }
        });
    },
    removecart: function(e) {
        let id = e.target.dataset.id;
        let cart_id = e.target.dataset.cartid;
        this.remove(id, cart_id);
    },
    remove: function(id, cart_id) {
        let that = this;
        wx.request({
            url: `${host}api/cart/destroy`,
            data: {
                api_token: api_token,
                id: id,
                cart_id: cart_id
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
    },
    payment: function(e) {
        let that = this;
        if (that.data.isAddress == 0) {
            wx.showToast({
                title: '请完善收货信息！'
            });
            return false;
        }
        wx.showToast({
            title: '发起支付中',
            icon: 'loading'
        });
        let params = {
            api_token: api_token,
            is_integral: that.data.isIntegral,
            is_coupon: that.data.isCoupon
        };
        util.wxRequest('api/pay', params, 'POST').then(res => {
            if (res.data.code == 500) {
                wx.showToast({
                    title: res.data.message,
                    image: '../../../image/prompt.png',
                    duration: 1000
                });
                return setTimeout(() => {
                    getList(that);
                }, 1000);
            }
            wx.requestPayment({
                'timeStamp': res.data.timeStamp,
                'nonceStr': res.data.nonceStr,
                'package': res.data.package,
                'signType': 'MD5',
                'paySign': res.data.paySign,
                'success': function(res) {
                    wx.showToast({
                        title: '支付成功',
                        icon: 'success',
                        duration: 1000
                    });
                    setTimeout(function() {
                        wx.switchTab({
                            url: '/pages/user/member/member'
                        })
                    }, 1000);
                },
                'fail': function(res) {
                    wx.showToast({
                        title: '交易被取消',
                        icon: 'loading',
                        duration: 1000,
                        success: function() {
                            util.wxRequest('api/pay/cancel', {api_token: api_token}, 'POST').then(res => {
                                if (res.statusCode == 200) {
                                    wx.switchTab({
                                        url: '/pages/user/member/member'
                                    })
                                }
                            })
                        }
                    });
                }
            });
        })
        
    },
    switchChange: function (e){
        let that = this;
        let price = 0;
        let totalPrice = Number(that.data.originalPrice);
        if (e.detail.value == 1) {
            price = Number(that.data.totalPrice) - Number(that.data.discount);
        } else {
            price = totalPrice;
        }
        this.setData({
            totalPrice: price,
            isIntegral: e.detail.value ? 1 : 0
        })
    },
    switchCoupon: function (e) {
        this.setData({
            isCoupon: e.detail.value ? 1 : 0,
        })
    }

})