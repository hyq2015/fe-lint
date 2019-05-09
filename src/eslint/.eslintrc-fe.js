let dftCfg, cfg;

dftCfg = require("./.eslintrc");
cfg = Object.assign({}, dftCfg);
cfg.env.amd = true;
cfg.parserOptions.sourceType = "script";

module.exports = cfg;