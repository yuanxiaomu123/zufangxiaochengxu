const {host} = require('../config');

function formatTime(date) {
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
  
    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()
  
  
    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
  
function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
}
  
function isEmptyObject(obj) {   
　　for (let name in obj) {
　　　　return false;//返回false，不为空对象
　　}　　
　　return true;//返回true，为空对象
}
  
function wxPromisify(fn) {
    return function(obj = {}) {
        return new Promise((resolve, reject) => {
            obj.success = function(res) {
                resolve(res)
            }
            obj.fail = function(res) {
                reject(res)
            }
            fn(obj)
        })
    }
}
  
//无论promise对象最后状态如何都会执行
Promise.prototype.finally = function(callback) {
    let P = this.constructor;
    return this.then(
        value => P.resolve(callback()).then(() => value),
        reason => P.resolve(callback()).then(() => { throw reason })
    );
};
  
/**
 * 微信请求get方法
 * url
 * data 以对象的格式传入
 */
function getRequest(url, data) {
    let getRequest = wxPromisify(wx.request)
    return getRequest({
        url: url,
        method: 'GET',
        data: data,
        header: {
            'Content-Type': 'application/json'
        }
    })
}

/**
 * 微信请求post方法封装
 * url
 * data 以对象的格式传入
 */
function postRequest(url, data) {
    let postRequest = wxPromisify(wx.request)
    return postRequest({
        url: url,
        method: 'POST',
        data: data,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
    })
}

/**
 * 微信请求方法
 * url
 * data 以对象的格式传入
 * method 请求方式
 */
function wxRequest(url, data, method='GET') {
    url = host + url;
    let wxRequest = wxPromisify(wx.request);
    let headers = {
        'content-type': method == 'POST' ? 'application/x-www-form-urlencoded' : 'application/json'
    };
    return wxRequest({
        url: url,
        method: method,
        data: data,
        header: headers
    })
}
  
  
let authRequest = function (url, data = {}, method='POST') {
    url = host + url;
    let api_token = wx.getStorageSync('api_token');
    let headers = {
        'content-type': method == 'POST' ? 'application/x-www-form-urlencoded' : 'application/json'
    };
    
    return new Promise((resolve, reject) => {
        if (api_token) {
            data.api_token = api_token;
        } else {
            return reject('no api_token！');
        }
   
        wx.request({
            url,
            method,
            data: data,
            header: headers,
            success (res) {
                return resolve(res)
            },
            fail (res) {
                return reject(res);
            }
        });
    })

}

function wxHideToast(time = 200) {
    return setTimeout(() => {
        wx.hideToast();
    },time);
}

var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../assets/libs/moment.min.js"));

e.default.defineLocale("zh-cn", {
    months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
    monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
    weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
    weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
    weekdaysMin: "日_一_二_三_四_五_六".split("_"),
    longDateFormat: {
        LT: "Ah点mm分",
        LTS: "Ah点m分s秒",
        L: "YYYY-MM-DD",
        LL: "YYYY年MMMD日",
        LLL: "YYYY年MMMD日Ah点mm分",
        LLLL: "YYYY年MMMD日ddddAh点mm分",
        l: "YYYY-MM-DD",
        ll: "YYYY年MMMD日",
        lll: "YYYY年MMMD日Ah点mm分",
        llll: "YYYY年MMMD日ddddAh点mm分"
    },
    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
    meridiemHour: function(e, t) {
        return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12;
    },
    meridiem: function(e, t, n) {
        var r = 100 * e + t;
        return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上";
    },
    calendar: {
        sameDay: function() {
            return 0 === this.minutes() ? "[今天]Ah[点整]" : "[今天]LT";
        },
        nextDay: function() {
            return 0 === this.minutes() ? "[明天]Ah[点整]" : "[明天]LT";
        },
        lastDay: function() {
            return 0 === this.minutes() ? "[昨天]Ah[点整]" : "[昨天]LT";
        },
        nextWeek: function() {
            var t, n;
            return t = (0, e.default)().startOf("week"), n = this.unix() - t.unix() >= 604800 ? "[下]" : "[本]",
                0 === this.minutes() ? n + "dddAh点整" : n + "dddAh点mm";
        },
        lastWeek: function() {
            var t, n;
            return t = (0, e.default)().startOf("week"), n = this.unix() < t.unix() ? "[上]" : "[本]",
                0 === this.minutes() ? n + "dddAh点整" : n + "dddAh点mm";
        },
        sameElse: "LL"
    },
    ordinalParse: /\d{1,2}(日|月|周)/,
    ordinal: function(e, t) {
        switch (t) {
            case "d":
            case "D":
            case "DDD":
                return e + "日";

            case "M":
                return e + "月";

            case "w":
            case "W":
                return e + "周";

            default:
                return e;
        }
    },
    relativeTime: {
        future: "%s内",
        past: "%s前",
        s: "几秒",
        m: "1 分钟",
        mm: "%d 分钟",
        h: "1 小时",
        hh: "%d 小时",
        d: "1 天",
        dd: "%d 天",
        M: "1 个月",
        MM: "%d 个月",
        y: "1 年",
        yy: "%d 年"
    },
    week: {
        dow: 1,
        doy: 4
    }
});

var t = function(e) {
    return (e = e.toString())[1] ? e : "0" + e;
};

module.exports = {
    formatDate: function(t) {
        return (0, e.default)(new Date(t)).fromNow();
    },
    formatTime: function(e) {
        var n = (e = new Date(e)).getFullYear(), r = e.getMonth() + 1, i = e.getDate(), a = e.getHours(), s = e.getMinutes(), u = e.getSeconds();
        return [ n, r, i ].map(t).join("/") + " " + [ a, s, u ].map(t).join(":");
    },
    formatSimpleTime: function(e) {
        return [ (e = new Date(e)).getFullYear(), e.getMonth() + 1, e.getDate() ].map(t).join("-");
    },
    compareVersion: function(e, t) {
        e = e.split("."), t = t.split(".");
        for (var n = Math.max(e.length, t.length); e.length < n; ) e.push("0");
        for (;t.length < n; ) t.push("0");
        for (var r = 0; r < n; r++) {
            var i = parseInt(e[r]), a = parseInt(t[r]);
            if (i > a) return 1;
            if (i < a) return -1;
        }
        return 0;
    }
};

module.exports = {
    formatTime,
    isEmptyObject,
    wxPromisify,
    wxRequest,
    getRequest,
    postRequest,
    authRequest,
    wxHideToast
}
