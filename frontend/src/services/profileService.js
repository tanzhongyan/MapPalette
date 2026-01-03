import axios from '@/lib/axios';

const PROFILE_SERVICE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

class ProfileService {
  // Get complete user profile data
  // currentUserId is now extracted from JWT token on backend
  async getUserProfile(userId) {
    const response = await axios.get(`${PROFILE_SERVICE_URL}/api/profile/user/${userId}`);
    return response.data;
  }

  // Get user's followers
  // currentUserId is now extracted from JWT token on backend
  async getUserFollowers(userId) {
    const response = await axios.get(`${PROFILE_SERVICE_URL}/api/profile/user/${userId}/followers`);
    return response.data;
  }

  // Get users that the user is following
  // currentUserId is now extracted from JWT token on backend
  async getUserFollowing(userId) {
    const response = await axios.get(`${PROFILE_SERVICE_URL}/api/profile/user/${userId}/following`);
    return response.data;
  }
}

export default new ProfileService();