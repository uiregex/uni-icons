import { Component, ComponentInterface, h, VNode } from '@stencil/core';

@Component({ tag: 'uni-mat-f-arrow-drop-down' })
export class UniMatFArrowDropDownComponent implements ComponentInterface {

  render(): VNode {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M7 10l5 5 5-5z" />
      </svg>
    );
  }
}
