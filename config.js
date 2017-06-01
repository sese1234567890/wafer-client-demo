/**
 * 小程序配置文件
 */

var host = 'zjjsl.org';

var config = {

    service: {
        host,
        loginUrl: `https://${host}/login`,

        requestUrl: `https://${host}/user`,

        tunnelUrl: `https://${host}/tunnel`,
    }
};

module.exports = config;
