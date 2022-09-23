const loginUser = (req, res) => {
    res.status(200).json({ message: 'Login User' })
}

const registerUser = (req, res) => {
    res.status(200).json({ message: 'Register User' })
}

const getUserInfo = (req, res) => {
    res.status(200).json({ message: 'User data display' })
}

module.exports = {
    loginUser, registerUser, getUserInfo
}