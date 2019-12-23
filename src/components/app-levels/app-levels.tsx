import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-levels',
  styleUrl: 'app-levels.css',
  shadow: true
})
export class AppHome {

  render() {
    return (
      <div class='app-levels'>
        <stencil-route-link url='/puzzle/1'>
          <button>
            Level 1
          </button>
        </stencil-route-link>
        <stencil-route-link url='/puzzle/2'>
          <button>
            Level 2
          </button>
        </stencil-route-link>
        <stencil-route-link url='/puzzle/3'>
          <button>
            Level 3
          </button>
        </stencil-route-link>
      </div>
    );
  }
}
