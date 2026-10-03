const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, '../../.env') });

function checkEnv() {
  const missing = [];
  if (!process.env.MONGODB_URI || !process.env.MONGODB_URI.trim()) {
    missing.push('MONGODB_URI');
  }
  if (!process.env.JWT_SECRET || !process.env.JWT_SECRET.trim()) {
    missing.push('JWT_SECRET');
  }

  if (missing.length > 0) {
    console.log('\n============================================================');
    console.log(' [SETUP REQUIRED] Add MONGODB_URI and JWT_SECRET to backend/.env');
    console.log('============================================================');
    console.log(`Missing required variables: ${missing.join(', ')}`);
    console.log('Please edit casestudy-system/backend/.env and add valid values.');
    console.log('Example:');
    console.log('  MONGODB_URI=mongodb://localhost:27017/casestudy_system');
    console.log('  JWT_SECRET=supersecretjwtkey1234567890');
    console.log('============================================================\n');
    process.exit(1);
  }
}

module.exports = {
  checkEnv,
  MONGODB_URI: process.env.MONGODB_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  ADMIN_EMAIL: process.env.ADMIN_EMAIL || 'admin@burgershop.com',
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD || 'Admin@12345',
  ADMIN_USERNAME: process.env.ADMIN_USERNAME || 'Admin',
};
