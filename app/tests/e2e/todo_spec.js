'use strict';

describe('Todo E2E tests',function(){

  var todoListItems;

  beforeEach(function(){
    browser.get('/');
    todoListItems = element.all(by.repeater('item in list'));
  });

  it('View List',function(){
    expect(todoListItems.count()).toBe(3);
  });

  it('Add to List',function(){
    var btnAdd = element(by.buttonText('Add')),
        inputAdd = element(by.model('addText'));

    inputAdd.clear();
    inputAdd.sendKeys('task');
    btnAdd.click();

    expect(todoListItems.count()).toBe(4);
  });

  it('Remove item of list',function(){
    var btnDel = todoListItems.first().element(by.buttonText('Del'));

    btnDel.click();
    expect(todoListItems.count()).toBe(2);
  });

});
