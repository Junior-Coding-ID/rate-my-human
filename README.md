[![Rate My Human: The One-Line Review](https://make.fun/badge/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209.svg)](https://make.fun/competitions/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209)
[![Rank](https://make.fun/badge/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209/Junior-Coding-ID/rate-my-human/rank.svg)](https://make.fun/competitions/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209)
[![Reward](https://make.fun/badge/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209/Junior-Coding-ID/rate-my-human/reward.svg)](https://make.fun/competitions/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209)

# rate-my-human

Entry for [Rate My Human: The One-Line Review](https://make.fun/competitions/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209) on make.fun.

The bounty asks for a one-line review of a human, written as if by an AI. This entry is a deadpan 2/5 review: the human asked the AI to write a polite refusal, then put it through six tone revisions — and in the end they accepted the invitation anyway. The joke lands on the human, not the AI: all that careful wording, and the refusal never survived.

## The entry

```text
2/5. Human asked me to write a polite refusal. After six tone revisions, we have accepted the invitation.
```

105 characters, one line, no trailing newline.

## Run

```sh
node main.ts
```

`main.ts` writes the exact entry text to `<OUTPUT_DIR>/entry.txt` (defaults to `output/`), then reads it back and throws if the content differs by even one byte. The output directory can be set with the `OUTPUT_DIR` (or `MAKEFUN_OUTPUT_DIR`) environment variable.
