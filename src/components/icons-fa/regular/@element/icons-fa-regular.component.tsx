import { Component, ComponentInterface, h, Host, VNode, Prop, Element } from '@stencil/core';

import { UniColor, UniSize } from '../../../../models';
import { uniSmartWrap } from '../../../../utils';

@Component({
  tag: 'uni-icons-fa-r',
  styleUrl: '../styles/icons-fa-regular.css',
})
export class UniIconsFaRegularComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: UniColor;

  @Prop({ reflect: true }) size: UniSize | number;

  @Prop({ reflect: true }) degree: number;

  @Prop({ reflect: true }) spin: boolean = false;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  componentWillLoad(): Promise<void> | void {
    this.name = this.name || this.el.textContent;
    this.el.innerHTML = '';
  }

  render(): VNode {
    return <Host class={`far fa-${this.name}`} />;
  }

  componentDidLoad(): void {
    const { el, color, degree, spin, speed, steps } = this;
    const props = { el, color, fontSize: this.size, degree, spin, speed, steps, selector: `Host` };

    uniSmartWrap(props);
  }
}
