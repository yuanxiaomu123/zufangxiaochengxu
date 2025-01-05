import util from '../../utils/util';

var page = 1;

var getList = function(that) {
    that.setData({
        loading: true
    });
    wx.showToast({title: '加载中', icon: 'loading'});
    let word = that.data.inputValue;
    util.wxRequest(`api/search?keyword=${word}&page=${page}`).then(res => {
        if (page == 1) {
            that.setData({
                products: [],
            });  
        }
        that.setData({
            products: that.data.products.concat(res.data.data)
        });
        util.wxHideToast();
        page ++;
        if (res.data.next_page_url == null) {
            that.setData({
                hasMore: false
            });
        }
    })
};

Page({
	data: {
		products: [],
        scrollHeight: 0,
        scrollTop: 0,
        focus: true,
        isInput: false,
        inputValue: '',
        hasMore: true,
        loading: false
	},
  	onLoad: function () {
        util.wxPromisify(wx.getSystemInfo)().then(res => {
            this.setData({
                scrollHeight: res.windowHeight - 40
            });
        })
	},
    bindKeyInput: function(e) {
        this.setData({
            inputValue: e.detail.value
        })
    },
    searchBtn: function() {
        let word = this.data.inputValue;
        if (word == '') {
            this.setData({
                focus: true
            })
        } else {
            page = 1;
            getList(this);
        }
    },
    clearInput: function() {
        if (!this.data.isInput) {
            this.setData({
                isInput: true
            })
        } else {
            this.setData({
                isInput: false
            })
        }
        this.setData({
            inputValue: ''
        })
    },
    scroll: function() {
        //
    },
    updateList: function() {
        if (this.data.loading) {
            return false;
        }
        let that = this;
        if (!this.data.hasMore) {
            return false;
        }
        getList(that);
    }
})
