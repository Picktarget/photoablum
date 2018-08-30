var commonFunc = {
  msg: function(code, msg, data, success) {
    const t = {
      code: code,
      msg: msg,
      data: data,
      success: success
    };
    return t;
  }
};
module.exports = commonFunc;
