

# Hearts K 企业资产发现与脆弱性检查工具

### 感谢各位师傅的支持，测试版已结束，全新正式版请前往 <a href="https://github.com/yqcs/prismx">prismx</a>

![pc_home](public/static/pc_home.png)
<Alert type="warning">
本工具仅面向合法授权的企业资产风险检测，请严格遵守法律规定，不得危害国家安全、公共利益，不得损害个人、组织的合法权益，否则应自行承担所引起的一切法律责任。
</Alert>

## 特性

- 轻量，跨平台。支持在多种系统架构无需额外依赖运行，方便设备携带与任务执行
- 灵活的插件扩展机制，可编写自定义验证逻辑
- 丰富的检测插件，源于互联网及开放社区提供
- 极高的运行效率，允许设置扫描线程数量及响应超时
- 可视化，系统提供一套精美的 UI，自适应各种尺寸设备
- 安全，系统内置插件仅具有检测能力，无损害行为

## 启动

下载对应 OS ARCH 的软件包 [Hearts K-App releases](https://github.com/yqcs/heartsk_community/releases/)，解压之后赋予可执行权限之后直接运行即可。

Linux amd64 运行示例：

```bash
$ wget https://github.com/yqcs/heartsk_community/releases/download/LOWBUG@Latest/HeartsK_linux_amd64.zip
$ unzip HeartsK_linux_amd64.zip
$ cd HeartsK_linux_amd64
$ chmod +x HeartsK
$ ./HeartsK
```

### WEB 模式

为了方便使用，系统提供了 CLI 命令行以及更具交互性的 WEB 模式两种运行方式。WEB 模式需提供 License 文件，运行`./HeartsK`命令即可启动。 LOW BUG 版本已经签发了 WEB 模式需要的 License 及公钥文件。

运行之后访问`http://yourIP:80`即可进入登录页，使用-port 参数可指定端口。

<img src="public/static/guide/login.png" alt="login Page"/>

系统内置了两个权限的账户，管理员与具有较高权限的高级用户，默认均是启用状态。

> 管理员：heartsk/heartsk
>
> 高级用户：superuser/superuser

