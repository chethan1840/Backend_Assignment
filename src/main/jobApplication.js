async function createProfile(req, res) {
    try {
        const { name, email, qualification, skills, resume, photo } = req.body;
        if (!name || !email || !qualification || !skills || !resume || !photo) {
            return res.status(400).json({message: 'all fields are required'});
        }
        res.status(201).json({message: 'profile created successfully', timestamp: new Date().toISOString()});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
async function deleteProfile(req, res) {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({message: 'email is required'});
        }
        res.status(200).json({message: 'profile deleted successfully', timestamp: new Date().toISOString()});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}
async function withdrawApplication(req, res) {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({message: 'email is required'});
        }
        res.status(200).json({message: 'application withdrawn successfully', timestamp: new Date().toISOString()});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}
module.exports = {createProfile, deleteProfile, withdrawApplication};
