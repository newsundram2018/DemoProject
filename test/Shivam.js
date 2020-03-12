

describe('Protractor Banking App', function() {

    it('Should Open Home Page', function() {
  
       browser.get('http://way2automation.com/angularjs-protractor/banking/#/login');
       browser.sleep('2000');
       expect(browser.getTitle()).toEqual('Protractor practice website - Banking App')
   });
   
   it('Should click on Customer login button', function() {
       element(by.css('[ng-click="customer()"]')).click();
       browser.sleep('3000');
       expect(browser.getCurrentUrl()).toEqual("http://way2automation.com/angularjs-protractor/banking/#/customer")
   });     
  
   it('Should select customer name from drop down list', function() {
       element(by.cssContainingText('option', 'Hermoine Granger')).click();
       browser.sleep('3000');
       var el = element(by.model('custId')).$('option:checked');
       expect(el.getText()).toEqual('Hermoine Granger');
   });     
  
   it('Should click on login button', function() {
       element(by.className('btn btn-default')).click();
       browser.sleep('3000');
       expect(element(by.cssContainingText('.center', 'Account Number : ')));
   });
  
   it('Should click on Transaction button', function() { 
       element(by.className('btn btn-lg tab')).click();
       browser.sleep('3000');
       expect(element(by.tagName('a')).getText()).toBe('Date-Time');
   });

});