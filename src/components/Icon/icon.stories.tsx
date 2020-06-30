import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import fontawesome from "@fortawesome/fontawesome-free-solid";
import Icon,{ ThemeProps } from './icon';
import '../../styles/index.less';

const styles: React.CSSProperties = {
  textAlign: 'center'
}
console.log(fontawesome);
const CenterDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>

const styleIcon = () => (
  <>
    <Icon icon= "address-card" className= { `icon-${ThemeProps.Success}`}/>
    <Icon icon= "address-card" className= { `icon-${ThemeProps.Success}` }/>
    <Icon icon="address-card" className= { `icon-${ThemeProps.Success}` }/>
    <Icon icon="bath" className= { `icon-${ThemeProps.Success}` }/>
    <Icon icon="address-book" className= { `icon-${ThemeProps.Success}` }/>
    <Icon icon="chart-area" className= { `icon-${ThemeProps.Success}` }/>
    <Icon icon="bicycle" className= { `icon-${ThemeProps.Success}` }/>
    <Icon icon="bell" className= { `icon-${ThemeProps.Success}` }/>
  </>
)
const colorIcon = () => (
  <>
    <Icon icon= "bath" className={`icon-${ ThemeProps.Primary }`}/>
    <Icon icon= "bath" className= { `icon-${ThemeProps.Secondary}` }/>
    <Icon icon="bath" className= { `icon-${ThemeProps.Success}` }/>
    <Icon icon="bath" className= { `icon-${ThemeProps.Info}` }/>
    <Icon icon="bath" className= { `icon-${ThemeProps.Warning}` }/>
    <Icon icon="bath" className= { `icon-${ThemeProps.Dark}` }/>
    <Icon icon="bath" className= { `icon-${ThemeProps.Danger}` }/>
    <Icon icon="bath" className= { `icon-${ThemeProps.Light}` }/>
  </>
)
storiesOf('icon component',module)
.addDecorator(CenterDecorator)
.addDecorator(withInfo)
.addParameters({
  info: {
    text: 'icon组件💄',
    inline: true
  }
})
.add('不同样式的icon', styleIcon)
.add('不同颜色的icon', colorIcon)


