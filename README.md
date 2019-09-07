# eslint-plugin-ios-scriptable

ESLint config for iOS Scriptable (https://scriptable.app)

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-ios-scriptable`:

```
$ npm install eslint-plugin-ios-scriptable --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-ios-scriptable` globally.

## Usage

Add `ios-scriptable` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "ios-scriptable"
    ]
}
```

Add provided gloabls to the globals section of your `.eslintrc` configuration file:

```json
{
    "globals": {
        "ios-scriptable/globals": true
    }
}
```
