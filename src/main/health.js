function getHealth(req, res) {
    res.status(200).json({
        message: 'server is healthy',
        timestamp: new Date().toISOString()
    });
}
module.exports = {getHealth};
