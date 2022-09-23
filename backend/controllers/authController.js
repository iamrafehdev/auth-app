const login = (req, res) => {
    res.status(200).json({ message: 'Authentication' })
}

module.exports = {
    login
}