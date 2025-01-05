
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
        util.wxRequest('api/content?table=info&num=6').then(res => {
            this.setData({
                houseData: res.data
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



