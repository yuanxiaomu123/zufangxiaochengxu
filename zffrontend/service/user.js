Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../utils/util"), r = require("../assets/libs/av-weapp-min");

exports.default = {
    setMobilePhone: function(e) {
        return r.Cloud.run("setMobilePhone", {
            phoneNumber: e
        });
    },
    validatePublish: function() {
        return r.Cloud.run("validatePublish");
    },
    queryUserInfo: function() {
        return r.Cloud.run("queryUserInfo");
    },
    queryUserById: function(e) {
        return r.Cloud.run("queryUserById", {
            userId: e
        });
    },
    update: function(e, n) {
        return r.Cloud.run("updateUser", {
            userInfo: e,
            isInitial: n
        });
    },
    incJifen: function(e) {
        return r.Cloud.run("incJifen", {
            jifen: e
        });
    },
    incJifenWhenLogin: function() {
        return r.Cloud.run("incJifenWhenLogin");
    },
    incJifenByShare: function(e) {
        return r.Cloud.run("incJifenByShare", {
            fromUser: e
        });
    },
    listJifenHelper: function(n) {
        return r.Cloud.run("listJifenHelper", {
            pageNumber: n
        }).then(function(r) {
            return r.map(function(r) {
                return r.createdAt = (0, e.formatDate)(r.createdAt), r;
            });
        });
    },
    report: function(e) {
        return r.Cloud.run("reportUser", {
            reportData: e
        });
    },
    createRecord: function(e) {
        return r.Cloud.run("createRecord", {
            recordData: e
        });
    },
    addFormId: function(e) {
        return r.Cloud.run("addFormId", {
            formId: e
        });
    }
};