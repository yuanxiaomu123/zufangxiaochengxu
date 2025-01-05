import WxParse from '../../../wxParse/wxParse';
import util from '../../../utils/util';

var id = 1;

Page({
	data: {
        pageCate: null,
        loadingHide: true,
        content: '',
        scrollLeftpx: 200,
        pageData: [],
        active: [0, 'active']
	},
    updatePageContent: function(e) {
        id = e.target.dataset.id;
        this.loadData();
    },
  	onLoad: function (e) {
        if(e.id) {
            id = e.id;
        }
        util.wxRequest('api/content/about?cid=1').then(res => {
            this.setData({
                pageCate: res.data
            });
        })
        this.loadData();
    },
    loadData: function() {
        wx.showToast({title: '加载中', icon: 'loading'});
        let active = [];
        active[id] = 'active';
        util.wxRequest(`api/content/show?table=page&id=${id}`).then(res => {
            WxParse.wxParse('content', 'html', res.data.content, this);
            this.setData({
                pageData: res.data,
                loadingHide: false,
                active: active
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
            path: `/pages/page/about/about?id=${id}`
        }
    }
})
