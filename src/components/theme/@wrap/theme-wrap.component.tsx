import { Component, ComponentInterface, Element, h, Prop, VNode } from '@stencil/core';

import { uniSmartWrap, UniTemplate } from '@uiwebkit/common';

import { UniColor, UniSize } from '../../../models';

@Component({ tag: 'uni-theme-wrap' })
export class UniThemeWrapComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) color: UniColor;

  @Prop({ reflect: true }) filter: UniColor;

  @Prop({ reflect: true }) size: UniSize | number;

  @Prop({ reflect: true }) fontSize: UniSize | number;

  @Prop({ reflect: true }) all: boolean = false;

  @Prop({ reflect: true }) selector: string;

  componentWillLoad(): Promise<void> | void {
    const { el, color, filter, size, fontSize, selector, all } = this;
    const props = { el, color, filter, size, fontSize, selector, all };

    uniSmartWrap(props);
  }

  render(): VNode {
    return UniTemplate(<slot/>);
  }
}
