import { Component, ComponentInterface, Element, h, Prop, VNode } from '@stencil/core';

import { uniSmartWrap, UniTemplate } from '@uiwebkit/common';

@Component({ tag: 'uni-spin-wrap' })
export class UniSpinWrapComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  @Prop({ reflect: true }) all: boolean = false;

  @Prop({ reflect: true }) selector: string;

  componentWillLoad(): Promise<void> | void {
    const { el, speed, steps, selector, all } = this;
    const props = { el, spin: true, speed, steps, selector, all };

    uniSmartWrap(props);
  }

  render(): VNode {
    return UniTemplate(<slot/>);
  }
}
