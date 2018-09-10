var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'RV Placement Alerts' });
});

router.get('/placed', function(req, res, next) {

  var list = [
    { usn: "1RV15IM020", name: "Harith Talikota", company: "ZS Associates" },
    { usn: "1RV15IM024", name: "M Abdul Haq", company: "Alp Consulting" },
    { usn: "1RV15IM025", name: "Malavika Menon", company: "Cisco" },
    { usn: "1RV15IM026", name: "Manoj K Y", company: "Alp Consulting" },
    { usn: "1RV15IM027", name: "Mayank Sagar", company: "MiQ Digital" },
    { usn: "1RV15IM043", name: "Saloni Agarwal", company: "Alp Consulting" },
    { usn: "1RV15IM051", name: "Shweta Kini", company: "Cisco" },
    { usn: "1RV15IM055", name: "Sriraksha Murali", company: "Alp Consulting" },
    { usn: "1RV16IM401", name: "Krishnananda Naik", company: "Alp Consulting" },
    { usn: "1RV16IM406", name: "Shamanth R Shrivathsa", company: "Alp Consulting" },
    { usn: "1RV16IM410", name: "Veeresh Ashok Happali", company: "Alp Consulting" }
  ];

  res.render('placed', { title: 'Placed Students', students: list});
});

module.exports = router;
