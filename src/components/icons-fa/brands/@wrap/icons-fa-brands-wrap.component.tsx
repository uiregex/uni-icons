import { Component, ComponentInterface, Prop, Element } from '@stencil/core';

import { UniColor, UniSize } from '../../../../models';
import { uniGetCleanContent, uniSmartWrap } from '../../../../utils';

@Component({
  tag: 'uni-icons-fa-b-wrap',
  styleUrl: '../styles/icons-fa-brands.css',
})
export class UniIconsFaBrandsWrapComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: UniColor;

  @Prop({ reflect: true }) size: UniSize | number;

  @Prop({ reflect: true }) angle: number;

  @Prop({ reflect: true }) spin: boolean = false;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  @Prop({ reflect: true }) selector: string;

  @Prop({ reflect: true }) all: boolean = false;

  componentDidLoad(): void {
    const name = this.name || uniGetCleanContent(this.el.firstElementChild as HTMLElement);
    const { el, color, angle, spin, speed, steps, selector, all } = this;
    const props = {
      el,
      classes: `fab fa-${name}`,
      color,
      fontSize: this.size,
      angle,
      spin,
      speed,
      steps,
      selector,
      all,
    };

    uniSmartWrap(props);
  }
}

