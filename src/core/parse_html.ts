
// @require ./cash.ts
// @require ./variables.ts
// @require ./type_checking.ts
// @require collection/get.ts
// @require manipulation/detach.ts

interface CashStatic {
  parseHTML ( html: string ): EleLoose[];
}

const fragmentRe = /^\s*<(\w+)[^>]*>/,
      singleTagRe = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;

//TODO: Create elements inside a document fragment, in order to prevent inline event handlers from firing
//TODO: Ensure the created elements have the fragment as their parent instead of null, this also ensures we can deal with detatched nodes more reliably

function parseHTML ( html: string ): EleLoose[] {

  if ( !isString ( html ) ) return [];

  if ( singleTagRe.test ( html ) ) return [createElement ( RegExp.$1 )];

  const fragment = fragmentRe.test ( html ) && RegExp.$1,
        container = createElement(fragment == 'tr' ?  'tbody' : 'div');

  container.innerHTML = html;

  return cash ( container.childNodes ).detach ().get ();

}

cash.parseHTML = parseHTML;
