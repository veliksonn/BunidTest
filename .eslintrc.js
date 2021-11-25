module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "import",
        "react",
        "@typescript-eslint",
    ],
    "rules": {
        "arrow-body-style": ["error", "as-needed"],

        "arrow-parens": [
            "off",
            "always"
        ],

        "brace-style": [
            "error",
            "1tbs"
        ],

        "comma-dangle": [
            "error",
            "always-multiline",
        ],

        "curly": [
            "off",
            "multi-line"
        ],

        "eqeqeq": [ "error", "always" ],

        "import/order": ["error", {
            "groups": ["external", "internal", "parent"],
        }],

        "import/no-anonymous-default-export": ["error", {
            "allowArray": false,
            "allowArrowFunction": false,
            "allowAnonymousClass": false,
            "allowAnonymousFunction": false,
            "allowCallExpression": true,
            "allowLiteral": false,
            "allowObject": false
        }],

        "linebreak-style": [
            "error",
            "unix"
        ],

        "no-duplicate-imports": "error",

        "no-eval": "error",

        "no-fallthrough": "error",

        "no-null/no-null": "off",

        "no-trailing-spaces": "error",

        "no-var": "error",

        "object-shorthand": "error",

        "object-curly-spacing": ["error", "always" ],

        "prefer-const": "error",

        "space-in-parens": [
            "error",
            "never"
        ],

        "spaced-comment": [
            "error",
            "always",
            {
                "markers": [
                    "/"
                ]
            }
        ],

        "react/boolean-prop-naming": [
            "error",
            {
                "rule": "^(is|has)[A-Z]([A-Za-z0-9]?)+"
            }
        ],

        "@typescript-eslint/ban-types": [
            "error",
            {
                "types": {
                    "Object": {
                        "message": "Avoid using the `Object` type. Did you mean `object`?"
                    },
                    "Function": {
                        "message": "Avoid using the `Function` type. Prefer a specific function type, like `() => void`, or use `ts.AnyFunction`."
                    },
                    "Boolean": {
                        "message": "Avoid using the `Boolean` type. Did you mean `boolean`?"
                    },
                    "Number": {
                        "message": "Avoid using the `Number` type. Did you mean `number`?"
                    },
                    "String": {
                        "message": "Avoid using the `String` type. Did you mean `string`?"
                    }
                }
            }
        ],
        "@typescript-eslint/consistent-type-definitions": "off",
        "@typescript-eslint/indent": [
            "error",
            4,
            {
                "ArrayExpression": "first",
                "FunctionDeclaration": {
                    "parameters": "first"
                },
                "FunctionExpression": {
                    "parameters": "first"
                }
            }
        ],
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false
                }
            }
        ],
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/no-inferrable-types": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/quotes": [
            "error",
            "single",
            {
                "avoidEscape": true
            }
        ],
        "@typescript-eslint/semi": [
            "error",
            "always"
        ],
        "@typescript-eslint/type-annotation-spacing": "error",
    }
};
