import { Component, ComponentInterface, h, VNode } from '@stencil/core';

@Component({ tag: 'uni-mat-f-play-circle' })
export class UniMatFPlayCircleComponent implements ComponentInterface {

  render(): VNode {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    );
  }
}
