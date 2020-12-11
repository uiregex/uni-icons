import { Component, ComponentInterface, Element, Prop } from '@stencil/core';

import { uniSmartWrap } from '../../../../utils';
import { UniColor, UniSize } from '../../../../models';

@Component({
  tag: 'uni-icons-mat-s-wrap',
  styleUrl: '../styles/icons-mat-sharp.css',
})
export class UniIconsMatSharpWrapComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: UniColor;

  @Prop({ reflect: true }) size: UniSize | number;

  @Prop({ reflect: true }) degree: number;

  @Prop({ reflect: true }) rotate: boolean = false;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  @Prop({ reflect: true }) selector: string;

  @Prop({ reflect: true }) all: boolean = false;

  componentDidLoad(): void {
    const { el, color, rotate, degree, speed, steps, selector, all } = this;
    const props = {
      el,
      classes: `material-icons-sharp`,
      content: this.name,
      color,
      fontSize: this.size,
      rotate,
      degree,
      speed,
      steps,
      selector,
      all
    };

    uniSmartWrap(props);
  }
}
