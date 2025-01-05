
import WxParse from '../../wxParse/wxParse';
import util from '../../utils/util';

var n = void 0;

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
    onLoad: function() {},
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
    selectType: function(e) {
        wx.showLoading({
            title: "加载中"
        }), n = e.currentTarget.dataset.type;
        var a = this, i = t.globalData.avUser;
        i ? this.validateUser(i) : t.avUserCallback = function(e) {
            a.validateUser(e);
        };
    },
    selectType: function (e) {
        n = e.currentTarget.dataset.type;
        wx.navigateTo({
            url: "../step1/index?rentType=" + n
        });
    },
    selectType1: function (e) {
        n = e.currentTarget.dataset.type;
        wx.navigateTo({
            url: "../step3/index?rentType=" + n
        });
    }
})



