var express = require("express");
var router = express.Router();
var fs = require("fs");
var multer = require("multer");
var cf = require("../utils/commonFunc");
const moment = require("moment");

var createFolder = function(folder) {
  try {
    fs.accessSync(folder);
  } catch (e) {
    fs.mkdirSync(folder);
  }
};

var uploadFolder = "./upload/";

createFolder(uploadFolder);

// 通过 filename 属性定制
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, uploadFolder); // 保存的路径，备注：需要自己创建
  },
  filename: function(req, file, cb) {
    // 将保存文件名设置为 字段名 + 时间戳，比如 logo-1478521468943
    // 判断路径下是否有重名文件
    let filename = uploadFolder + file.originalname;
    fs.exists(filename, exists => {
      if (exists) {
        let t = file.originalname.split(".");
        const len = t.length;
        let f_newName = t.slice(0, len - 1).join(".");
        const mm = moment(Date.now()).format("YYYY-MM-DD-HH-mm-ss");
        f_newName = f_newName + "-" + mm + "." + t[len - 1];
        cb(null, f_newName);
      } else {
        cb(null, file.originalname);
      }
    });
  }
});

// 通过 storage 选项来对 上传行为 进行定制化
var upload = multer({ storage: storage }).single("file");

/* GET img. */

/* POST upload img. */
router.post("/images", function(req, res) {
  upload(req, res, function(err) {
    if (err) {
      res.json(cf.msg(301, "上传失败!", null, false));
    } else {
      res.json(cf.msg(200, "上传成功!", req.file.filename, true));
    }
  });
});
module.exports = router;
