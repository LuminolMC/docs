# 接下来的步骤

现在，你的服务器已经启动并正在运行，你还应该做几件事来确保服务器平稳运行。

## 配置

首先要做的就是确保服务器配置符合你的需求。

Luminol 的可配置性很高，你可以根据自己的需要更改许多设置。请查看 [Luminol 配置](../reference/configuration)
和 [Paper 配置](https://docs.papermc.io/paper/reference/configuration)。

## 插件

使用 Luminol 的主要原因之一就是为了使用上原版特性或针对 Folia 的修复。

::: danger
在安装任何插件之前，请确保你完全信任其来源。
**插件不仅可以访问你的服务器，还可以不受限制地访问运行它的机器。**
因此，请仅从可信来源安装插件。请务必小心！
:::

## 安全

### 白名单

如果你想限制谁可以加入你的服务器，可以使用白名单功能。
你可以通过服务器控制台或编辑服务器目录中的 `whitelist.json` 文件来使用白名单。

### 权限

权限是一种控制玩家在服务器上能做什么和不能做什么的方法。
你可以使用权限来限制谁可以使用某些命令，或谁可以访问服务器的某些区域。
使用权限来控制谁可以使用其功能是插件的常见做法。
你可以使用权限插件（如 [LuckPerms](https://luckperms.net)）来管理授予玩家的权限。

### 特性

Luminol 恢复了许多原版特性支持，这些特性用于无政府服务器及生电服以增强体验。
它们可能会破坏你不希望使用的特性。
因此在开启特性前，请先了解对应的功能。

## 备份

备份服务器非常重要。
如果出现问题，你可以将服务器恢复到以前的状态。
[PaperMC 在更新指南中介绍了如何进行备份。](https://docs.papermc.io/paper/updating#step-1-backup)

## 优化

Luminol 已针对性能进行优化且开箱即用。不过，你还可以做很多事情来进一步优化服务器。
最常见的做法之一就是确保为服务器运行正确的启动参数。
你可以使用 [PaperMC 的启动脚本生成器](https://docs.papermc.io/misc/tools/start-script-gen)为服务器自动生成带有正确启动参数的启动脚本。
除此以外，[本指南](https://paper-chan.moe/paper-optimization/)还将帮助你进一步优化服务器。

## 将服务器公开

如果你想将服务器公开，则需要转发服务器端口。这样，局域网外的人就可以连接到你的服务器。
[动视](https://support.activision.com/cn/zh/articles/port-forward-and-nat-faq)制作了一份指南，
解释了什么是端口转发以及如何进行端口转发。

## 疑难解答

如果你在服务器上遇到任何问题，可以来我们的 [QQ群](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=MfosKhcDd8Fdxn1MREuZ8Krbf9T6jiBC&authKey=3cm6qdHohON3gHnuD63FK4k07fIbrWnY4hdyq8OmELsfjMVP1kbFTJY9mRyM2Rkj&noverify=0&group_code=368632360)寻求帮助！
