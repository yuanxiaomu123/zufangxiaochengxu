Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("../utils/util"), e = require("../assets/libs/av-weapp-min");

exports.default = {
    queryContactByUser: function(t) {
        return e.Cloud.run("queryContactByUser", {
            userId: t
        });
    },
    getRealContact: function(t, u) {
        return e.Cloud.run("getRealContact", {
            userId: t,
            houseId: u
        });
    },
    queryContactDirect: function(t, u) {
        return e.Cloud.run("queryContactDirect", {
            userId: t,
            houseId: u
        });
    },
    listMyContact: function(u) {
        return e.Cloud.run("listMyContact", {
            pageNumber: u
        }).then(function(e) {
            return e.map(function(e) {
                return e.updatedAt = (0, t.formatDate)(e.updatedAt), e;
            });
        });
    },
    queryContactById: function(t) {
        return e.Cloud.run("queryContactById", {
            contactId: t
        });
    }
};