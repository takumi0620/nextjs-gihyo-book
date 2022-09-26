import { ComponentMeta, ComponentStory } from "@storybook/react"
import React, { useState, useEffect } from "react"
import Dropzone from "./index"
import Box from "components/layout/Box"
import Button from "components/atoms/Button"

export default {
  title: "Molecules/Dropzone",
  argTypes: {
    height: {
      control: { type: "number" },
      description: "縦幅",
      table: {
        type: { summary: "number" }
      }
    },
    width: {
      control: { type: "number" },
      description: "横幅",
      table: {
        type: { summary: "number" }
      }
    },
    hasError: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "バリデーションエラーフラグ",
      table: {
        type: { summary: "boolean" }
      }
    },
    acceptedFileTypes: {
      options: {
        control: { type: "array" },
        description: "受け付けるファイルタイプ",
        table: {
          type: { summary: "array" },
        }
      }
    },
    onDrop: {
      description: "ファイルがドロップされたときのイベントハンドラ",
      table: {
        type: { summary: "function" }
      }
    },
    onChange: {
      description: "ファイルが入力されたときのイベントハンドラ",
      table: {
        type: { summary: "function" }
      }
    }
  }
} as ComponentMeta<typeof Dropzone>

const Template: ComponentStory<typeof Dropzone> = (args) => {
  const [files, setFiles] = useState<File[]>([])
  const handleDrop = (files: File[]) => {
    setFiles(files)
    args && args.onDrop && args.onDrop(files)
  }
  const fetchData = async () => {
    const res = await fetch("/images/sample/1.jpeg")
    const blob = await res.blob()
    const file = new File([blob], "1.png", blob)

    setFiles([...files, file])
  }
  const clearImages = () => {
    setFiles([])
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Box marginBottom={1}>
        <Dropzone {...args} value={files} onDrop={handleDrop} />
      </Box>
      <Box marginBottom={1}>
        <Button onClick={fetchData}>画像を追加</Button>
      </Box>
      <Box marginBottom={2}>
        <Button onClick={clearImages}>全ての画像をクリア</Button>
      </Box>
      <Box>
        {files.map((f, i) => (
          <img
            src={URL.createObjectURL(f)}
            width="100px"
            key={i}
            alt="sample"
            />
        ))}
      </Box>
    </>
  )
}

export const WithControl = Template.bind({})
WithControl.args = {
  height: 200,
  width: "100%",
  acceptedFileTypes: ["image/png", "image/jpeg", "image/jpg", "image/gif"],
  hasError: false,
}