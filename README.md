# PRD Writing Skill

一个面向 AI 辅助项目开发的通用 Skill，兼容 Codex 与 Claude Code，帮助产品经理和开发者把产品想法或现有需求整理为可讨论、可实现、可验收的文档。

## 能做什么

- 从产品想法梳理目标用户、场景、范围和关键决策。
- 逐步澄清高影响信息；每轮聚焦一个问题，不把需求变成固定问卷。
- 每次完整交付一套相互关联的文档：PRD、产品设计文档、测试文档。
- 用明确的假设和待确认事项处理信息缺口，不虚构产品事实。
- 检查需求、设计规则与测试用例之间的一致性和追溯关系。
- 仅在 AI 能力影响产品结果时加入相应的 AI 产品要求。
- 当界面视觉方向属于范围时，可按具体样式条目研究 Refero Styles；不把它当成统一模板。

## 安装

### Claude Code 插件安装（推荐）

在 Claude Code 中执行：

```text
/plugin marketplace add yeyoushen-03/prd-writing-skill
/plugin install prd-writing@prd-writing-skill
```

安装后重启 Claude Code，使用 `/prd-writing:prd-writing` 调用。也可以直接描述需求，让 Claude Code 自动匹配该 Skill。若 Claude Code 提示信任或确认插件来源，请核对来源为 `yeyoushen-03/prd-writing-skill` 后再确认。

Codex 与项目内自动发现入口以 `.agents/skills/prd-writing/` 为维护源。Claude Code 插件使用 `plugins/prd-writing/` 下的独立镜像，以满足插件包自包含要求；修改 Skill 或参考资料后，需同步镜像并运行 `node scripts/check-plugin-sync.mjs`。

### Codex

直接在本仓库中打开 Codex，即可从 `.agents/skills/` 发现技能。安装到其他项目时，将技能目录复制到目标项目的 `.agents/skills/` 下：

```sh
mkdir -p /path/to/your-project/.agents/skills
cp -R .agents/skills/prd-writing /path/to/your-project/.agents/skills/
```

安装后，在目标项目的 Codex 会话中使用 `$prd-writing` 调用。

### Claude Code：项目内自动发现

直接克隆本仓库并在仓库根目录启动 Claude Code，即可通过 `.claude/skills/prd-writing` 符号链接发现技能。使用 `/prd-writing` 调用。该方式适用于在此仓库内工作；若希望从 GitHub 将技能安装到 Claude Code 并在其他项目使用，请使用上面的插件安装方式。

如果你下载的是 ZIP、文件系统不保留符号链接，或要安装到另一个项目，请复制为真实目录：

```sh
mkdir -p /path/to/your-project/.claude/skills
cp -R .agents/skills/prd-writing /path/to/your-project/.claude/skills/
```

用户级安装（对自己的所有项目生效）：

```sh
mkdir -p ~/.claude/skills
cp -R .agents/skills/prd-writing ~/.claude/skills/
```

用户级安装后，在 Claude Code 中使用 `/prd-writing` 调用。也可以直接描述需求，让 Claude Code 自动匹配该技能。

### Codex 用户级安装

将技能目录复制到用户级目录：

```sh
mkdir -p ~/.agents/skills
cp -R .agents/skills/prd-writing ~/.agents/skills/
```

安装后，在 Codex 会话中使用 `$prd-writing` 调用。

## 使用示例

```text
$prd-writing 我想做一个帮助独立开发者管理 AI 编程项目的工具。请先帮我梳理关键需求，再分别完成 PRD、产品设计文档和测试文档。
```

Claude Code 中可将上面的 `$prd-writing` 替换为 `/prd-writing`。也可以提供现有需求草稿，并说明文档的保存位置、文件格式或团队模板。信息暂缺时，Skill 会标注假设和待确认项，仍完成三份文档。

## 目录结构

```text
.claude/skills/prd-writing -> ../../.agents/skills/prd-writing
.agents/skills/prd-writing/
├── SKILL.md
├── agents/openai.yaml
└── references/
    ├── ai-product-checklist.md
    ├── prd-structure.md
    ├── product-design-structure.md
    ├── test-document-structure.md
    └── visual-design-research.md
```

## Claude Code 插件结构

```text
.claude-plugin/marketplace.json
plugins/prd-writing/
├── .claude-plugin/plugin.json
└── skills/prd-writing/
    ├── SKILL.md
    └── references/
```

Marketplace 清单位于仓库根目录，插件清单和 Skill 位于插件目录内。`.agents/skills/prd-writing/agents/openai.yaml` 是 Codex 专属元数据，不复制到 Claude Code 插件中。

## 许可

本项目采用 MIT License，详见 [LICENSE](LICENSE)。

---

<div align="center">
  <h3>联系作者</h3>
  <p>作者署名：夜游榊</p>
  <p>欢迎技术交流</p>
  <img src="assets/wechat-qr.png" alt="微信二维码" width="200">
</div>
