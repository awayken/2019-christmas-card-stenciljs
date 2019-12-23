import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <h1>Choose a puzzle level</h1>

        <app-levels></app-levels>
      </div>
    );
  }
}
