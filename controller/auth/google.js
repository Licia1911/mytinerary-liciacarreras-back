export default (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            message: 'user logged in with google',
            response: {             //TOKEN + DATOS DEL USUARIO
                token: req.token,
                user: req.user
            }
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'User authentication failure',
            error: error.message //este de acá
        });
    }
}