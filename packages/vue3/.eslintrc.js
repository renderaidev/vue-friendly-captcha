module.exports = {
    extends: ['plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],

    parser: 'vue-eslint-parser',

    parserOptions: {
        parser: '@typescript-eslint/parser',
    },

    plugins: ['prettier'],

    rules: {
        indent: 'off', // avoid conflicts with prettier

        semi: ['error', 'always'],

        'comma-dangle': ['error', 'always-multiline'],

        camelcase: 'off',

        'no-useless-constructor': 'off',

        'no-console': 'off',

        'require-await': 'off',

        'dot-notation': 'off',

        'no-case-declarations': 'off',

        'import/no-named-as-default': 'off',

        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always',
            },
        ],

        'vue/script-indent': 'off',

        'vue/html-indent': 'off',
    },

    overrides: [
        {
            files: ['*.vue'],
            rules: {
                'import/named': 'off', // fixes some weird conflicts with relfect-metadata
            },
        },
    ],
};
