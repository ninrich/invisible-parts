/* eslint-env node */
module.exports = {
    "root": true,
    "parser": 'vue-eslint-parser',
    "extends": [
        "plugin:vue/vue3-essential",
        "eslint:recommended"
    ],
    // "plugins": ['@typescript-eslint'],
    "env": {
        "vue/setup-compiler-macros": true
    },
    "parserOptions": {
        'parser': '@typescript-eslint/parser',
        'ecmaVersion': 2020,
        "extraFileExtensions": ['.vue', '.js', '.ts', '.cjs', '.mjs'],
    },
}
