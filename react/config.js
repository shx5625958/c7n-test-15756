const config = {
    local: true, //是否为本地开发
    server: 'http://api.staging.saas.hand-china.com',
    // master: '@choerodon/master',
    // master:'./react/src/app/demo/containers/organization/hello/index.js',
    master:'./react/master',
    homePath: './react/rightContent/welcome',
    projectType: 'choerodon',
    buildType: 'single',
    dashboard: {},
};

module.exports = config;