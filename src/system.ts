import type { Model } from "./types"

export const defaultSetting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "nie",
  systemRule: "",
  model: "gpt-3.5-turbo" as Model
}

export const defaultMessage = `OpenAI
- 如果本项目对你有所帮助， 可以给孩子[买点零食](https://cdn.jsdelivr.net/gh/ourongxing/chatgpt-vercel/assets/20230331122519.jpg)，但不接受任何付费功能请求。
- 本网站仅作为项目演示，不提供长期服务，网站密码为 \`nie\`，因默认的gtp3.5的API Key 由我自己免费提供，所以请不要滥用。
- 可以自己选择OpenAI 模型并输入自己的key进行操作，如果自己没有key，可以使用我提供的gtp3.5的key。
- OpenAI 并没有提供 ChatGPT 那样的上下文功能，只能每次都把全部对话传过去，并且都要算 token，而且仍然有最大 4096 token 的限制。
- OpenAI 模型需要注意的是, 只有获得了 GPT4 API 内测资格的用户才可以使用您的 API KEY 调用 GPT4。不同的模型对应的 token 最大值不同，比如 gpt-3.5-turbo 的最大 token 为 4k(4096)，gpt-4 的最大 token 为 8k(8192)，gpt-4-32k 的最大 token 为 32k(32768)
- 有偿回答问题，付款时自己的联系方式写备注里[链接](https://cdn.jsdelivr.net/gh/ourongxing/chatgpt-vercel/assets/20230331130755.jpg)，有问题先可以自己问问AI。
- 提醒:各种卖号的卖个几十元的都是坑，不如自己去注册，当然钱多无所谓。
- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] 搜索 Prompt 预设。[[↑]] 可编辑最近一次提问。点击顶部名称滚动到顶部，点击输入框滚动到底部。`

export type Setting = typeof defaultSetting

export const defaultResetContinuousDialogue = false

export const defaultMaxInputTokens: Record<Model, number> = {
  "gpt-3.5-turbo": 3072,
  "gpt-4": 6144,
  "gpt-4-32k": 24576
}

export const defaultModel: Model = "gpt-3.5-turbo"
