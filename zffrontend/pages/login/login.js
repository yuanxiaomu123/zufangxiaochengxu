
import WxParse from '../../wxParse/wxParse';
import util from '../../utils/util';

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
    onLoad: function() {
        util.wxRequest('api/content/ads?id=1').then(res => {
            this.setData({
                imgUrls: res.data
            });
        })
        util.wxRequest('api/content/ads?id=6').then(res => {
            this.setData({
                Popularity: res.data
            });
        })
        util.wxRequest('api/content/cate').then(res => {
            this.setData({
                ProductSort: res.data
            });
        })
        util.wxRequest('api/content?cid=10&num=4').then(res => {
            this.setData({
                airConditioning: res.data
            });
        })
        util.wxRequest('api/content?cid=3&num=4').then(res => {
            this.setData({
                Refrigerator: res.data
            });
        })
        util.wxRequest('api/content/coupon?num=3').then(res => {
            this.setData({
                couponlist: res.data
            });
        })
        util.wxRequest('api/content?cid=4&num=4').then(res => {
            this.setData({
                washingMachine: res.data
            });
        })
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
    }
})



