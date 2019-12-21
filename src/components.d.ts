/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  MatchResults,
} from '@stencil/router';

export namespace Components {
  interface AppHome {}
  interface AppProfile {
    'match': MatchResults;
  }
  interface AppRoot {}
  interface XwordClue {
    'autofocus': boolean;
    'column': number;
    'invalid': boolean;
    'isDown': boolean;
    'length': number;
    'row': number;
    'squareSize': number;
    'value': string;
  }
  interface XwordPuzzle {
    'difficulty': number;
    'height': number;
    'width': number;
  }
  interface XwordSquare {
    'status': string;
    'value': string;
  }
}

declare global {


  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLXwordClueElement extends Components.XwordClue, HTMLStencilElement {}
  var HTMLXwordClueElement: {
    prototype: HTMLXwordClueElement;
    new (): HTMLXwordClueElement;
  };

  interface HTMLXwordPuzzleElement extends Components.XwordPuzzle, HTMLStencilElement {}
  var HTMLXwordPuzzleElement: {
    prototype: HTMLXwordPuzzleElement;
    new (): HTMLXwordPuzzleElement;
  };

  interface HTMLXwordSquareElement extends Components.XwordSquare, HTMLStencilElement {}
  var HTMLXwordSquareElement: {
    prototype: HTMLXwordSquareElement;
    new (): HTMLXwordSquareElement;
  };
  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement;
    'app-profile': HTMLAppProfileElement;
    'app-root': HTMLAppRootElement;
    'xword-clue': HTMLXwordClueElement;
    'xword-puzzle': HTMLXwordPuzzleElement;
    'xword-square': HTMLXwordSquareElement;
  }
}

declare namespace LocalJSX {
  interface AppHome {}
  interface AppProfile {
    'match'?: MatchResults;
  }
  interface AppRoot {}
  interface XwordClue {
    'autofocus'?: boolean;
    'column'?: number;
    'invalid'?: boolean;
    'isDown'?: boolean;
    'length'?: number;
    'onSquareUpdate'?: (event: CustomEvent<any>) => void;
    'row'?: number;
    'squareSize'?: number;
    'value'?: string;
  }
  interface XwordPuzzle {
    'difficulty'?: number;
    'height'?: number;
    'width'?: number;
  }
  interface XwordSquare {
    'status'?: string;
    'value'?: string;
  }

  interface IntrinsicElements {
    'app-home': AppHome;
    'app-profile': AppProfile;
    'app-root': AppRoot;
    'xword-clue': XwordClue;
    'xword-puzzle': XwordPuzzle;
    'xword-square': XwordSquare;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'app-home': LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
      'app-profile': LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
      'xword-clue': LocalJSX.XwordClue & JSXBase.HTMLAttributes<HTMLXwordClueElement>;
      'xword-puzzle': LocalJSX.XwordPuzzle & JSXBase.HTMLAttributes<HTMLXwordPuzzleElement>;
      'xword-square': LocalJSX.XwordSquare & JSXBase.HTMLAttributes<HTMLXwordSquareElement>;
    }
  }
}


