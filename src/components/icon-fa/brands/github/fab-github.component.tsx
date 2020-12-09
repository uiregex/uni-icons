import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../assets/svg/fa/brands/github.svg';
import { uniModifyStyle } from '../../../../utils';
import { uniIconFaDimensions } from '../../../../models';

@Component({ tag: 'uni-fab-github' })
export class UniFabGithubComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
    uniModifyStyle([this.el.firstElementChild as HTMLElement], uniIconFaDimensions);
  }
}
