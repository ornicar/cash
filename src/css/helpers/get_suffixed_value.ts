
// @require core/type_checking.ts
// @require ./is_css_variable.ts

const numericProps: { [prop: string]: true | undefined } = {
  opacity: true,
  order: true,
  zIndex: true
};

function getSuffixedValue ( prop: string, value: number | string, isVariable: boolean = isCSSVariable ( prop ) ): string {

  return !isVariable && !numericProps[prop] && isNumeric ( value ) ? `${value}px` : value;

}
