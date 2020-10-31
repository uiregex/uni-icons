import { Component, ComponentInterface, h, VNode, Prop, Fragment, Element, Watch } from '@stencil/core';

import { uniAddClasses, uniModifyTarget } from '../../../../utils';
import { UniColor } from '../../../../models';

@Component({
  tag: 'uni-icons-fa-solid-wrap',
  styleUrl: '../styles/icons-fa-solid.css',
})
export class UniIconsFaSolidWrapComponent implements ComponentInterface {
  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) active: boolean = false;

  @Prop({ reflect: true }) name!: string;

  @Prop({ reflect: true }) color: UniColor = 'default';

  @Prop({ reflect: true }) selector: string;

  @Prop({ reflect: true }) all: boolean = false;

  private get data() {
    const { el, selector, all } = this;
    return { el, selector, all };
  }

  @Watch('active')
  onActiveChanged(newValue: boolean): void {
    if (newValue) {
      const classes = ['fas', `fa-${this.name}`, `uni-color-${this.color}`];

      uniModifyTarget(this.data, uniAddClasses, classes, 'uni-icons-fa-solid-wrap');
      this.active = false;
    }
  }

  componentWillLoad(): Promise<void> | void {
    this.onActiveChanged(this.active);
  }

  render(): VNode {
    return (
      <Fragment>
        <slot />
        <uni-icons-fa-common />
      </Fragment>
    );
  }
}
