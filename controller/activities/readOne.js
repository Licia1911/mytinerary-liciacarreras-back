import Activity from "../../models/Activity.js";

export default async (req, res, next) => {
    try {
        let oneActivity = await Activity.findOne({ _id: req.params.activity_id })

        if (oneActivity) {
            return res.status(200).json({
                success: true,
                message: 'activity found',
                response: oneActivity
            })
        }
        else {
            return res.status(400).json({
                success: false,
                message: 'not found',
                response: null
            })
        }
    } catch (error) {
        next(error)
    }
};