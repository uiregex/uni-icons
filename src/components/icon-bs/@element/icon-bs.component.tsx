import { Component, ComponentInterface, Element, h, Prop, VNode } from '@stencil/core';

import { UniColor, UniSize } from '../../../models';
import { isEmptyString, uniGetCleanContent, uniSmartWrap } from '../../../utils';

@Component({ tag: 'uni-icon-bs' })
export class UniIconBsComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: UniColor;

  @Prop({ reflect: true }) size: UniSize | number;

  @Prop({ reflect: true }) angle: number;

  @Prop({ reflect: true }) spin: boolean = false;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  componentWillLoad(): Promise<void> | void {
    this.name = this.name || uniGetCleanContent(this.el);
  }

  render(): VNode {
    const UniIconTag = !isEmptyString(this.name) ? `uni-bs-${this.name}` : null;

    return <UniIconTag />;
  }

  componentDidLoad(): void {
    const { el, color, size, angle, spin, speed, steps } = this;
    const props = { el, color, size, angle, spin, speed, steps, selector: 'svg' };

    uniSmartWrap(props);
  }
}
