import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {

  render() {
    return [
      <header>
        <stencil-route-link url='/'>
          <button>
            Go Home
          </button>
        </stencil-route-link>

        <h1>Rauschword Puzzle</h1>
      </header>,

      <main>
        <stencil-router>
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url='/' component='app-home' exact={true} />
            <stencil-route url='/puzzle/:level' component='app-puzzle' />
          </stencil-route-switch>
        </stencil-router>
      </main>
    ];
  }
}
