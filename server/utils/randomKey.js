// Importing the crypto module, which provides cryptographic functionality
const crypto = require('crypto');

// Function to generate a random key
function generateRandomKey() {
    // Generating a 32-byte random key using crypto.randomBytes()
    const key = crypto.randomBytes(32);

    // Converting the generated key to base64 encoding and returning it
    return key.toString('base64'); 
}

// Exporting the generateRandomKey function to make it accessible to other modules
module.exports = generateRandomKey;
