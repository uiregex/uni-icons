import { Component, ComponentInterface, h, Prop, VNode } from '@stencil/core';

import { UniTemplate } from '@uiwebkit/common';

import { UniColor, UniIconsFaFont, UniSize } from '../../../models';
import { uniFaTypeShort } from '../../../utils';

@Component({ tag: 'uni-icons-fa-wrap' })
export class UniIconsFaWrapComponent implements ComponentInterface {

  @Prop({ reflect: true }) type: UniIconsFaFont = 'solid';

  @Prop({ reflect: true }) name!: string;

  @Prop({ reflect: true }) color: UniColor;

  @Prop({ reflect: true }) size: UniSize | number;

  @Prop({ reflect: true }) angle: number;

  @Prop({ reflect: true }) spin: boolean = false;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  @Prop({ reflect: true }) all: boolean = false;

  @Prop({ reflect: true }) selector: string;

  render(): VNode {
    const { name, color, size, angle, spin, speed, steps, selector, all } = this;
    const props = { name, color, size, angle, spin, speed, steps, selector, all };
    const UniIconsFaTag = `uni-icons-fa-${uniFaTypeShort(this.type)}-wrap`;

    return UniTemplate(
      <UniIconsFaTag {...props}>
        <slot />
      </UniIconsFaTag>
    );
  }
}
