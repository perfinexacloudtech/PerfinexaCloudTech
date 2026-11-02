/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.perfinexacloudtech.com',
  generateRobotsTxt: true,
  additionalPaths: async (config) => [
    await config.transform(config, '/privacy-policy'),
    await config.transform(config, '/terms-and-conditions'),
    await config.transform(config, '/refund-policy'),
    await config.transform(config, '/cookie-policy'),
  ],
}