var express = require("express");
var router = express.Router();
var fs = require("fs");
var multer = require("multer");

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
    cb(null, file.originalname);
  }
});

// 通过 storage 选项来对 上传行为 进行定制化
var upload = multer({ storage: storage }).single("file");

/* GET img. */

/* POST upload img. */
router.post("/images", function(req, res) {
  // var file = req.file;
  upload(req, res, function(err) {
    if (err) {
      res.send({
        code: "201",
        msg: "上传失败!",
        data: null,
        succcess: false
      });
    } else {
      res.send({
        code: "200",
        msg: "上传成功!",
        data: { id: "123123" },
        succcess: true
      });
    }
    // Everything went fine
  });
});
module.exports = router;
