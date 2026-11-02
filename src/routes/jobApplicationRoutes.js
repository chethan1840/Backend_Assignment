const express = require('express');
const {createProfile, deleteProfile, withdrawApplication} = require('../main/jobApplication');
const router = express.Router();

router.post('/create-profile', createProfile);
router.delete('/delete-profile', deleteProfile);
router.post('/withdraw-application', withdrawApplication);

module.exports = router;
