import util from '../../../utils/util';

var url = 'api/content?table=info';
var next_page_url = null;
var cid = 0;
var page = 1;

var getList = function(that) {
    let active = [];
    active[cid] = 'active';
    that.setData({
        active: active,
        hasMore: true,
        loading: true
    });
    wx.showToast({title: '加载中', icon: 'loading'});
    util.wxRequest(`${url}&cid=${cid}&page=${page}`).then(res => {
        if (page == 1) {
            that.setData({
                news: [],
            });  
        }
        that.setData({
            news: that.data.news.concat(res.data.data),
            loadingHide: false,
            loading: false
        });
        util.wxHideToast();
        page ++;
        next_page_url = res.data.next_page_url;
        if (page > 2 && next_page_url == null) {
            that.setData({
                hasMore: false
            });
        }
    })
    if (cid > 0) {
        util.wxRequest(`api/content/cate-intro?table=info&cid=${cid}`).then(res => {
            wx.setNavigationBarTitle({
                title: res.data.cname
            })
        })
    }
};

Page({
	data: {
        news: [],
        loadingHide: true,
        newsCategory: null,
        scrollHeight: 0,
        scrollTop: 0,
        active: null,
        hasMore: true,
        loading: false
	},
    newsList: function(e) {
        let that = this;
        cid = e.target.dataset.cid;
        page = 1;
        getList(that);
    },
  	onLoad: function (e) {
        util.wxPromisify(wx.getSystemInfo)().then(res => {
            this.setData({
                scrollHeight: res.windowHeight - 40
            });
        })
        util.wxRequest('api/content/cate?table=info').then(res => {
            this.setData({
                newsCategory: res.data
            });
        })
        page = 1;
        getList(this);
	},
    scroll: function() {

    },
    updateList: function() {
        if (this.data.loading) {
            return false;
        }
        let that = this;
        if (next_page_url == null) {
            return false;
        }
        getList(that);
    }
})
