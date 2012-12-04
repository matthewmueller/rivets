var rivets = module.exports = require('./lib/rivets');

var adapter = {
  subscribe : function(obj, keypath, callback) {
    obj.on('change', callback);
  },
  unsubscribe : function(obj, keypath, callback) {
    obj.off('change', callback);
  },
  read : function(obj, keypath) {
    return obj[keypath]();
  },
  publish : function(obj, keypath, value) {
    obj[keypath](value);
  }
};

rivets.config.adapter = adapter;
