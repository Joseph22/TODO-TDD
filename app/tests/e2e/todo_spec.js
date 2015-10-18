'use strict';

describe('Todo E2E tests',function(){

  beforeEach(function(){
    browser.get('/');
  });

  it('View List',function(){
    var todoListItems = element.all(by.repeater('item in list'));
    expect(todoListItems.count()).toBe(3);
  });
});
