import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { NgmlDemoAppComponent } from '../app/ngml-demo.component';

beforeEachProviders(() => [NgmlDemoAppComponent]);

describe('App: NgmlDemo', () => {
  it('should create the app',
      inject([NgmlDemoAppComponent], (app: NgmlDemoAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ngml-demo works!\'',
      inject([NgmlDemoAppComponent], (app: NgmlDemoAppComponent) => {
    expect(app.title).toEqual('ngml-demo works!');
  }));
});
