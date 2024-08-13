// src/services/authService.js
export const login = async (username, password) => {
    // Mocked authentication service
    localStorage.setItem('auth', JSON.stringify({ username }));
  };
  
  export const logout = () => {
    localStorage.removeItem('auth');
  };
  
  export const isAuthenticated = () => {
    return localStorage.getItem('auth') !== null;
  };
  