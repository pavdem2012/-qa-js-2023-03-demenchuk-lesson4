module.exports = {
    TYPICODE_BASE_URL: 'https://jsonplaceholder.typicode.com',
    BOOKSTORE_BASE_URL: process.env.BASE_URL || 'https://bookstore.demoqa.com',
    USER_ACC_PATH: '/Account/v1/User',
    GEN_ACC_TOKEN_PATH: '/Account/v1/GenerateToken',
    AUTORIZED_USER: '/Account/v1/Authorized',
    BOOKS_OPS_PATH: '/BookStore/v1/Books',
    HEADERS : {
        "accept": "application/json",
        "Content-Type": "application/json"
    }

  };