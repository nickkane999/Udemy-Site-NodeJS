const express = require('express');
router = express.Router();
googleAuth = require("./authRoutes") 

router.get('/auth/google', googleAuth.googleAuthenticate)
router.get('/auth/google/callback', googleAuth.googleReturnData)