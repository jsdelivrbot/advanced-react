import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

// use describe to group together similiar tests
describe('App', () => {
  let component;

  beforeEach(() => {
    // create an instance of App
    component = renderComponent(App);
  });

  // use 'it' to test a single attribute of a target
  it('shows a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });

  it('shows a comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  });
});

