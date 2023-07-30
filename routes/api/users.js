const express = require("express");
const {
    validateBody,
    authenticate,
    upload,

} = require("../../middlewares");
const ctrl = require('../../controllers/users')


const {schemas} = require("../../models/user")

const router = express.Router()


router.post("/register", validateBody(schemas.registerSchema), ctrl.register)
router.post("/login", validateBody(schemas.loginSchema), ctrl.login)

router.get("/current", authenticate, ctrl.getCurrent);
router.post("/logout", authenticate, ctrl.logout);

// router.patch("/", authenticate, validateBody(schemas.updateSubscriptionSchema), ctrl.renewalSubscription)

router.patch("/avatars",authenticate,upload.single("avatar"),ctrl.updateAvatar

    // checkFilesExtension,

)

module.exports = router;