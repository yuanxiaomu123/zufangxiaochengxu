
import util from '../../../utils/util';

var url = 'api/content?table=product';
var next_page_url = null;
var cid = 0;
var page = 1;

var getList = function(that) {
    that.setData({
        loading: true
    });
    wx.showToast({title: '加载中', icon: 'loading'});
    let act = that.data.act;
    let actval = that.data.actval;
    util.wxRequest(`${url}&cid=${cid}&page=${page}&${act}=${actval}`).then(res => {
        if (page == 1) {
            that.setData({
                products: [],
            });  
        }
        that.setData({
            products: that.data.products.concat(res.data.data),
            loading: false,
            loadingHide: false
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
        util.wxRequest(`api/content/cate-intro?cid=${cid}`).then(res => {
            wx.setNavigationBarTitle({
                title: res.data.cname
            })
        })
    }
};

Page({
	data: {
        products: [],
        Category: null,
        child: [],
        loadingHide: true,
        scrollHeight: 0,
        scrollTop: 0,
        active: null,
        hasMore: true,
        loading: false,
        isChild: false,
        act: 'default',
        actval: 0,
	},
  	onLoad: function (e) {
        if (e.id) {
            cid = e.id;
        }
        util.wxPromisify(wx.getSystemInfo)().then(res => {
            this.setData({
                scrollHeight: res.windowHeight - 40
            });
        })
        util.wxRequest('api/category?table=product').then(res => {
            this.setData({
                Category: res.data,
            });
        })
        let active = [];
        active[cid] = 'active';
        this.setData({
            active: active,
            hasMore: true
        });
        page = 1;
        getList(this);  
    },
    search: function(e) {
        let act = e.currentTarget.dataset.act;
        let actval = e.currentTarget.dataset.actval;
        if (act == 'price') {
            actval = actval == 1 ? 0 : 1;
        } else {
            actval = 1;
        }
        this.setData({
            act: act,
            actval: actval
        });
        page = 1;
        this.setData({
            hasMore: true,
            loading: true,
        });
        getList(this);
    },
    cateList: function(e) {
        cid = e.target.dataset.cid;
        let children = e.target.dataset.children;
        let active = [];
        active[cid] = 'active';
        this.setData({
            active: active,
            hasMore: true,
            loading: true,
        });
        page = 1;
        if (children == 1) {
            let child = this.data.Category[cid].children;
            this.setData({
                child: child,
                isChild: true,
            });
        } else {
            getList(this);
        }
    },
    childUpdate: function(e) {
        cid = e.target.dataset.cid;
        this.setData({
            isChild: false
        });
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
    },
    onPullDownRefresh: function() {
        page = 1;
        getList(this);
        wx.stopPullDownRefresh();
    }
})
