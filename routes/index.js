var express = require("express");
var router = express.Router();
var Console = require("console");
var IW = require("../models/iwModel");
var cf = require("../utils/commonFunc");

/* GET home page. */
router.post("/iw/add", function(req, res, next) {
  Console.log(req.body);
  IW.create(req.body, function(err, post) {
    if (err) {
      res.send(cf.msg(301, "新增图文失败！", null, false));
      return next(err);
    } else {
      res.send(cf.msg(200, "新增图文成功！", post, true));
    }
  });
});

module.exports = router;
