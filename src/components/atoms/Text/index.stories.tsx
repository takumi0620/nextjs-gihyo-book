import { ComponentMeta, ComponentStory } from "@storybook/react";
import Text from "./index";

export default {
  title: "Atoms/Text",
  argTypes: {
    variant: {
      options: [
        "extraSmall",
        "small",
        "medium",
        "mediumLarge",
        "large",
        "extraLarge"
      ],
      control: { type: "select" },
      defaultValue: "medium",
      description: "テキストバリアント",
      table: {
        type: {
          summary: "extraSmall, small, medium, mediumLarge, large, extraLarge",
        },
        defaultValue: { summary: "medium" }
      }
    },
    children: {
      control: { type: "text" },
      description: "テキスト",
      table: {
        type: { summary: "string" }
      }
    },
    fontWeight: {
      control: { type: "text" },
      description: "フォントの太さ",
      table: {
        type: { summary: "string" }
      }
    },
    lineHeight: {
      control: { type: "text" },
      description: "行の高さ",
      table: {
        type: { summary: "string" }
      }
    },
    color: {
      control: { type: "color" },
      description: "テキストの色",
      table: {
        type: { summary: "string" }
      }
    },
    backgroundColor: {
      control: { type: "color" },
      description: "背景色",
      table: {
        type: { summary: "string" }
      }
    },
    m: {
      control: { type: "number" },
      description: "マージン",
      table: {
        type: { summary: "number" }
      }
    },
    mt: {
      control: { type: "number" },
      description: "マージントップ",
      table: {
        type: { summary: "number" }
      }
    },
    mr: {
      control: { type: "number" },
      description: "マージンライト",
      table: {
        type: { summary: "number" }
      }
    },
    mb: {
      control: { type: "number" },
      description: "マージンボトム",
      table: {
        type: { summary: "number" }
      }
    },
    ml: {
      control: { type: "number" },
      description: "マージンレフト",
      table: {
        type: { summary: "number" }
      }
    },
    p: {
      control: { type: "number" },
      description: "パディング",
      table: {
        type: { summary: "number" }
      }
    },
    pt: {
      control: { type: "number" },
      description: "パディングトップ",
      table: {
        type: { summary: "number" }
      }
    },
    pr: {
      control: { type: "number" },
      description: "パディングライト",
      table: {
        type: { summary: "number" }
      }
    },
    pb: {
      control: { type: "number" },
      description: "パディングボトム",
      table: {
        type: { summary: "number" }
      }
    },
    pl: {
      control: { type: "number" },
      description: "パディングレフト",
      table: {
        type: { summary: "number" }
      }
    },
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

export const ExtraSmall = Template.bind({})
ExtraSmall.args = { variant: "extraSmall", children: longText }

export const Small = Template.bind({})
Small.args = { variant: "small", children: longText }

export const Medium = Template.bind({})
Medium.args = { variant: "medium", children: longText }

export const MediumLarge = Template.bind({})
MediumLarge.args = { variant: "mediumLarge", children: longText }

export const Large = Template.bind({})
Large.args = { variant: "large", children: longText }

export const ExtraLarge = Template.bind({})
ExtraLarge.args = { variant: "extraLarge", children: longText }