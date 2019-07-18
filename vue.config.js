const fs = require('fs');
const copywebpackplugin = require('copy-webpack-plugin');

const PROJECTNAME = process.env.PROJECTNAME || '**';
/**
 * 添加项目入口
 * 添加本地开发环境路由配置
 */
function createPages(projectname) {
  const pages = {};
  let outputDir = 'dist';
  const files = fs.readdirSync('./src/project');
  const projects = files.filter(item => fs.lstatSync(`./src/project/${item}`).isDirectory());
  if (projectname !== '**' && projects.includes(projectname)) {
    pages[projectname] = {
      // page 的入口
      entry: `src/project/${projectname}/main.js`,
      // 模板来源
      template: `src/project/${projectname}/index.html`,
      // 在 dist/index.html 的输出
      filename: 'index.html',
      chunks: ['chunk-vendors', 'chunk-common', projectname],
    };
    outputDir = `dist/${projectname}`;
  }
  return {
    pages,
    outputDir,
  };
}
const pagesInfo = createPages(PROJECTNAME);
module.exports = {
  pages: pagesInfo.pages,
  outputDir: pagesInfo.outputDir,
  // assetsDir: `${pagesInfo.outputDir}/assets`,
  productionSourceMap: false,
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  devServer: {
    historyApiFallback: {
      // rewrites: pagesInfo.devServerPath,
    },
  },
  configureWebpack: (config) => {
    config.externals = {
      '@antv/g2': 'G2',
    };
  },
  chainWebpack: (config) => {
    config
      .plugin('copy')
      .use(copywebpackplugin, [[{
        from: 'src/public',
        to: 'public',
        toType: 'dir',
      }]]);
  },
};
