
import WxParse from '../../wxParse/wxParse';
import util from '../../utils/util';

function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../service/house")), a = t(require("../../service/user")), o = t(require("../../service/common")), i = getApp();

Page({
    data: {
        imgUrls: null,
        ProductSort: null,
        Popularity: null,
        airConditioning: null,
        Refrigerator: null,
        washingMachine: null,
        couponlist: null,
        indicatorDots: true,
        autoplay: true,
        scrollLeftpx: 600,
        interval: 5000,
        duration: 1000
    },
    onLoad: function(t) {
        util.wxRequest('api/content?num=6').then(res => {
            console.log(res.data)
            for (let i = 0; i < res.data.length; i++) {
                if (res.data[i].houseTags) {
                    res.data[i].houseTags = res.data[i].houseTags.split(',')
                }
            };
            this.setData({
                houseData: res.data
            });
        });
        //获取城市
        // var e = this;
        // try {
        //     var i = wx.getStorageSync("currCity");
        //     i && i.length ? (e.setData({
        //         currCity: i,
        //         cityBak: i
        //     }), e.fetchAfterLogin()) : o.default.getRegeo().then(function(t) {
        //         (i = t.city) && i.length ? (e.setData({
        //             currCity: i,
        //             cityBak: i
        //         }), wx.setStorage({
        //             key: "currCity",
        //             data: i
        //         }), e.fetchAfterLogin()) : e.showSelectCity();
        //     }).catch(function(t) {
        //         e.showSelectCity();
        //     });
        // } catch (t) {
        //     e.showSelectCity();
        // }
        // var n = t.fromUser || "";
        // n && a.default.incJifenByShare(n);
    },
    onPullDownRefresh: function() {
        this.onLoad();
        wx.stopPullDownRefresh();
    },
    onShareAppMessage: function () {
        return {
            title: '苏州电器小程序',
            path: '/pages/index/index'
        }
    },
    onShow: function() {
        var t = wx.getStorageSync("currCity"), e = this.data.cityBak;
        t && t != e && (this.setData({
            currCity: t,
            cityBak: t,
            pageNumber: 1,
            houses: []
        }), this.fetchAfterLogin());
    },
    showSelectCity: function() {
        wx.showModal({
            content: "请手动选择城市",
            showCancel: !1,
            success: function(t) {
                wx.navigateTo({
                    url: "../city/index"
                });
            }
        });
    },
    selectCity: function() {
        wx.navigateTo({
            url: "../city/index"
        });
    },
    fetchAfterLogin: function() {
        var t = this;
        i.globalData.avUser ? this.fetchHouses() : i.avUserCallback = function() {
            t.fetchHouses();
        };
    },
    fetchHouses: function() {
        var t = this, a = this.data, o = a.currCity, i = a.houses, n = a.pageNumber;
        o && e.default.listHomeHouse(o, n).then(function(e) {
            t.setData({
                houses: i.concat(e),
                isFetching: !1
            }), wx.stopPullDownRefresh();
        });
    },
    goToList: function(t) {
        var e = t.currentTarget.dataset.type;
        wx.navigateTo({
            url: "/pages/list/index?type=" + e
        });
    },
    viewSpecial: function(t) {
        var e = t.currentTarget.dataset.type, a = i.globalData, o = a.avUser, n = a.userInfo, c = o.hasInfo, s = o.gender;
        n ? "女生合租" !== e || c ? "女生合租" === e && c && "女" !== s ? wx.showToast({
            title: "该板块仅女生可进哟",
            icon: "none",
            duration: 1500
        }) : wx.navigateTo({
            url: "/pages/list/index?type=" + e
        }) : wx.showModal({
            content: "进入该板块之前，请先完善信息哦",
            success: function(t) {
                t.confirm && wx.navigateTo({
                    url: "../profile/info/index"
                });
            }
        }) : wx.showModal({
            content: "进入该板块之前，请先授权登录哦",
            success: function(t) {
                t.confirm && wx.navigateTo({
                    url: "../login/index"
                });
            }
        });
    },
    openLoc: function(t) {
        var e = t.currentTarget.dataset.loc, a = e.longitude, o = e.latitude;
        wx.openLocation({
            longitude: a,
            latitude: o
        });
    },
    search: function() {
        i.globalData.chooseLocStatus = !0, wx.chooseLocation({
            success: function(t) {
                i.globalData.selectedLoc = t, wx.navigateTo({
                    url: "../map/index"
                });
            },
            fail: function(t) {
                t.errMsg.indexOf("auth") > -1 && wx.navigateTo({
                    url: "../auth/index?from=loc"
                });
            }
        });
    },
    viewDetail: function(t) {
        var e = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../detail/index?id=" + e + "&type=house"
        });
    },
    onShareAppMessage: function(t) {
        return {
            title: "高效全能租房小程序",
            path: "/pages/home/index"
        };
    },
    onPullDownRefresh: function() {
        this.setData({
            houses: [],
            pageNumber: 1,
            isFetching: !0
        }), this.fetchAfterLogin();
    },
    onReachBottom: function() {
        this.setData({
            pageNumber: this.data.pageNumber + 1,
            iconVisual: !0
        }), this.fetchAfterLogin();
    },
    backTop: function(t) {
        wx.pageScrollTo ? (wx.pageScrollTo({
            scrollTop: 0
        }), this.setData({
            iconVisual: !1
        })) : wx.showModal({
            title: "提示",
            content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
        });
    }
})



