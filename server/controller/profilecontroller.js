const profileModel = require('../model/profilemodel'); 

async function createProfile(req, res) {
  const { name } = req.body;

  try {
    const profile = await profileModel.create({ name });
    res.status(201).json({ message: 'profile added successfully', profile });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = { createProfile };
