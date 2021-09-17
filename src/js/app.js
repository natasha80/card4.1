/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable eol-last */
/* eslint-disable no-new */
import WidgetController from './WidgetController/WidgetController';
import WidgetValidate from './WidgetValidate/WidgetValidate';

const widget = new WidgetValidate();

new WidgetController(widget);