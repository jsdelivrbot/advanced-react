import jsdom from 'jsdom';
import jquery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import chai, { expect } from 'chai';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';


// Set up testing environment to run like a browser in the command line.
// JSDOM docs - https://github.com/tmpvar/jsdom
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = jquery(global.window);

// build 'renderComponent' helper that should render a given React class
// https://facebook.github.io/react/docs/test-utils.html
function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance)); // produces HTML
}


// build helper for simulating events
$.fn.simulate = function (eventName, value) {
  if(value){
    this.val(value);
  }

  TestUtils.Simulate[eventName](this[0]);
}

// Set up chai-jquery
chaiJquery(chai, chai.util, $);

export { renderComponent, expect };