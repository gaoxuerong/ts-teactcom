import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';

import Progress from './progress';
import '../../styles/index.less';

const styles: React.CSSProperties = {
  textAlign: 'center'
}
const CenterDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>
export enum ProgressType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link',
  Success = 'success',
  Info = 'info',
  Warning = 'warning'
}

export enum ProgressPercent {
  a = 10,
  b = 20,
  c = 50,
  d = 100
}
const defaultProgress = () => {
  return <Progress percent={ProgressPercent.a}>default Progress</Progress>
}
const progressWithPercent = () => (
  <>
  <Progress  percent={ProgressPercent.a}>inner Progress</Progress>
  <Progress percent={ProgressPercent.a}>outer Progress</Progress>
  <Progress percent={ProgressPercent.a}> Progress</Progress>
  </>
)
const progressWithType = () => (
  <>
    <Progress percent={ProgressPercent.a} >Default Progress</Progress>
    <Progress percent={ProgressPercent.a} >Primary Progress</Progress>
    <Progress percent={ProgressPercent.a} >Danger Progress</Progress>
    <Progress percent={ProgressPercent.a} >Warning Progress</Progress>
    <Progress percent={ProgressPercent.a} >Info Progress</Progress>
    <Progress percent={ProgressPercent.a} >Success Progress</Progress>
  </>
)
storiesOf('progress component',module)
.addDecorator(CenterDecorator)
.addDecorator(withInfo)
.addParameters({
  info: {
    text: '这个是一个用typescript和react封装的组件库📦💄🚀',
    inline: true
  }
})
.add('默认progress', defaultProgress)
.add('不同尺寸的progress', progressWithPercent)
.add('不同颜色的progress', progressWithType)
