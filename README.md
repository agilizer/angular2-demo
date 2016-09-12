1、环境准备
demo需要 node v5.x.x 或更高版本以及 npm 3.x.x 或更高版本。 要检查你正在使用的版本，请在终端窗口中运行 node -v 和 npm -v 命令。
如果版本不对，请升级或重装。
2、安装依赖
npm install（备注：如果npm install 之后没有出现typings目录，请手动通过命令手动安装：npm run typings install）
3、启动运用
打开终端窗口，并输入如下命令：npm start，默认打开3000端口。
该命令会同时运行两个并行的 node 进程：
> TypeScript 编译器运行在监听模式。
> 一个名叫 lite-server 的静态文件服务器，它把 index.html 加载到浏览器中，并且在该应用中的文件发生变化时刷新浏览器。


