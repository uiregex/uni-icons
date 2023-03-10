import { Component, ComponentInterface, Element, h, Prop, VNode } from '@stencil/core';

import { uniSmartWrap, UniTemplate } from '@uiwebkit/common';

import { UniColor, UniSize } from '../../../../models';

@Component({
  tag: 'uni-icons-mat-o-wrap',
  styleUrl: '../styles/icons-mat-outline.css',
})
export class UniIconsMatOutlineWrapComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: UniColor;

  @Prop({ reflect: true }) size: UniSize | number;

  @Prop({ reflect: true }) angle: number;

  @Prop({ reflect: true }) spin: boolean = false;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  @Prop({ reflect: true }) all: boolean = false;

  @Prop({ reflect: true }) selector: string;

  render(): VNode {
    return UniTemplate(<slot/>);
  }

  componentDidRender(): void {
    const { el, color, angle, spin, speed, steps, selector, all } = this;
    const props = {
      el,
      classes: `material-icons-outlined`,
      content: this.name,
      color,
      fontSize: this.size,
      angle,
      spin,
      speed,
      steps,
      selector,
      all
    };

    uniSmartWrap(props);
  }
}
