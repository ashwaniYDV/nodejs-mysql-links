const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
    res.render('index', { user: req.user });
};

module.exports = indexCtrl;
