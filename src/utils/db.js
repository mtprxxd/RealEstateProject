// Local database using localStorage for user credential management
const DB_KEY = 'av_realty_users';
const SESSION_KEY = 'av_realty_session';

export const db = {
  init() {
    if (!localStorage.getItem(DB_KEY)) {
      const defaultUsers = [
        {
          id: 1,
          fullName: 'Demo User',
          email: 'demo@avrealty.in',
          phone: '9999999999',
          password: 'Demo@123',
          createdAt: new Date().toISOString(),
          role: 'client',
        }
      ];
      localStorage.setItem(DB_KEY, JSON.stringify(defaultUsers));
    }
  },

  getUsers() {
    return JSON.parse(localStorage.getItem(DB_KEY) || '[]');
  },

  saveUsers(users) {
    localStorage.setItem(DB_KEY, JSON.stringify(users));
  },

  register({ fullName, email, phone, password }) {
    const users = this.getUsers();
    const exists = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (exists) return { success: false, message: 'This email is already registered.' };
    const newUser = {
      id: Date.now(),
      fullName,
      email,
      phone,
      password,
      createdAt: new Date().toISOString(),
      role: 'client',
    };
    users.push(newUser);
    this.saveUsers(users);
    return { success: true, user: { ...newUser, password: undefined } };
  },

  login({ email, password }) {
    const users = this.getUsers();
    const user = users.find(
      u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (!user) return { success: false, message: 'Invalid email or password.' };
    const sessionUser = { ...user, password: undefined };
    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));
    return { success: true, user: sessionUser };
  },

  logout() {
    localStorage.removeItem(SESSION_KEY);
  },

  getSession() {
    const s = localStorage.getItem(SESSION_KEY);
    return s ? JSON.parse(s) : null;
  },
};

db.init();
