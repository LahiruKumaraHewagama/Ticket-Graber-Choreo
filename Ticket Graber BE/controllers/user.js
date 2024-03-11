// Import userService to handle business logic
import UserService from '../services/user.js';

// Define controller functions for handling requests and responses
const sync_user = async (req, res) => {
  const email = req.body.authenticateResponse.username;
  const data = req.body; // Assuming the new data is passed in the request body
  try {
    const user = await UserService.sync_user(email, data);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export default { sync_user };