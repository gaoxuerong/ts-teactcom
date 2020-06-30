import React from 'react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';

import Button,{ButtonType, ButtonSize} from './button';
import '../../styles/index.less';

const styles: React.CSSProperties = {
  textAlign: 'center'
}

const CenterDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>

const defaultButton = () => {
  return <Button onClick={action('clicked')}>default Button</Button>
}
const buttonWithSize = () => (
  <>
  <Button  size={ButtonSize.Large}>large Button</Button>
  <Button  size={ButtonSize.Small}>small Button</Button>
  </>
)
const buttonWithType = () => (
  <>
  <Button btnType={ButtonType.Default}>Default Button</Button>
  <Button btnType={ButtonType.Primary}>Primary Button</Button>
  <Button btnType={ButtonType.Danger}>Danger Button</Button>
  <Button btnType={ButtonType.Warning}>Warning Button</Button>
  <Button btnType={ButtonType.Info}>Info Button</Button>
  <Button btnType={ButtonType.Success}>Success Button</Button>
  </>
)
storiesOf('button component',module)
.addDecorator(CenterDecorator)
.addDecorator(withInfo)
.addParameters({
  info: {
    text: '这个是一个用typescript和react封装的组件库📦💄🚀',
    inline: true
  }
})
.add('默认button', defaultButton)
.add('不同尺寸的button', buttonWithSize)
.add('不同类型的button', buttonWithType)


