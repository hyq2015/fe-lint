### install
npm install fe-lint --save-dev

### usage

> eslint
```
// path/to/yourproject/.eslintrc.js

let dftCfg, cfg;

dftCfg = require("fe-lint/eslint/.eslintrc");
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

const cfg = require("gs-lint/stylelint/.stylelintrc");
module.exports = Object.assign({}, cfg);
```

> add below scripts commands to your package.json file
```
"scripts": {
    "eslint": "eslint --ext .js,.vue src",
    "stylelint": "stylelint \"./src/**/*.less\"",
}

```
