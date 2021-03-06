// @noflow

module.exports = {
  setupFiles: ["raf/polyfill", "./config/enzymeConfig", "./config/registerContext"],
  setupFilesAfterEnv: ["./config/jestSetupFramework"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
};
