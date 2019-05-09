### install
npm install fe-lint --save-dev

### usage

> eslint
```
// path/to/yourproject/.eslintrc.js

let dftCfg, cfg;

dftCfg = require("fe-code-lint/src/eslint/.eslintrc");
cfg = Object.assign({}, dftCfg, {
    root: true,
    parser: "babel-eslint",
    // required to lint *.vue files
    plugins: [
        "html"
    ]
});
// allow debugger during development
cfg.rules["no-debugger"] = process.env.NODE_ENV === "production" ? 2 : 0;

module.exports = cfg;
```
> stylelint
```
// path/to/yourproject/.stylelintrc.js

const cfg = require("fe-code-lint/src/stylelint/.stylelintrc");
module.exports = Object.assign({}, cfg);
```

> add below commands to your package.json file

```
"scripts": {
    "eslint": "eslint --ext .js,.vue src",
    "stylelint": "stylelint \"./src/**/*.less\"",
}

```
### detail config
[https://cn.eslint.org/docs/user-guide/configuring](https://cn.eslint.org/docs/user-guide/configuring)
