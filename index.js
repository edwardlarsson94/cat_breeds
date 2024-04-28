import { registerRootComponent } from 'expo';
import App from './App';
import {Text, TextInput } from 'react-native'

registerRootComponent(App);

const setDefaultProps = (component) => {
  if (component) {
    component.defaultProps ??= {};
    component.defaultProps.allowFontScaling = false;
  }
};

setDefaultProps(Text);
setDefaultProps(TextInput);
