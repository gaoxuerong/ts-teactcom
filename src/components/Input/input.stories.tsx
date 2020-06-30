import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info';
import { Input } from './input'
const ControlledInput = () => {
  const [value, setValue] = useState()
  return <Input value={value} defaultValue={value} onChange={(e) => {setValue(e.target.value)}}/>
}
const styles: React.CSSProperties = {
  textAlign: 'center'
}

const CenterDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>

const defaultInput = () => (
  <>
  <Input
    style={{width: '300px'}}
    placeholder="placeholder"
    onChange={action('changed')}
  />
  <ControlledInput />
  </>
)
const disabledInput = () => (
  <Input
    style={{width: '300px'}}
    placeholder="disabled input"
    disabled
  />
)

const iconInput = () => (
  <Input
    style={{width: '300px'}}
    placeholder="input with icon"
    icon="search"
  />
)

const sizeInput = () => (
  <>
    <Input
      style={{width: '300px'}}
      defaultValue="large size"
      size="lg"
    />
    <Input
      style={{width: '300px'}}
      placeholder="small size"
      size="sm"
    />
  </>
)

const pandInput = () => (
  <>
    <Input
      style={{width: '300px'}}
      defaultValue="prepend text"
      prepend="https://"
    />
    <Input
      style={{width: '300px'}}
      defaultValue="google"
      append=".com"
    />
  </>
)


storiesOf('Input component', module)
.addDecorator(CenterDecorator)
.addDecorator(withInfo)
.addParameters({
  info: {
    text: '这个是一个用typescript和react封装的组件库📦💄🚀',
    inline: true
  }
})
.add('Input', defaultInput)
.add('被禁用的 Input', disabledInput)
.add('带图标的 Input', iconInput)
.add('大小不同的 Input', sizeInput)
.add('带前后缀的 Input', pandInput)
