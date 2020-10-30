export function uniAddClasses(target: Element, classNames: string[]): void {
  classNames.forEach((className: string): void => {
    target.classList.add(className);
  });
}

export function uniReplaceContent(target: Element, content: string): void {
  target.textContent = content;
}

export function uniModifyTarget(context, modifyFunc, data: string[] | string, name: string): void {
  if (context.selector) {
    const targets = context.all
      ? context.el.querySelectorAll(context.selector)
      : [context.el.querySelector(context.selector)];

    if (targets[0]) {
      targets.forEach((target: Element): void => {
        modifyFunc(target, data);
      });
    } else {
      console.warn(`Element(s) with CSS selector: '${context.selector}' was not found into ${name}.
If the selected element is dynamic and when element appears - the 'active' property should be set again.`);
    }
  } else {
    const firstChild = context.el.firstElementChild;

    if (firstChild) {
      modifyFunc(firstChild, data);
    } else {
      console.warn(`${name} should have at least one child element.`);
    }
  }
}
