describe("Demo Calculato Start",function(){
   
    it("1.HomePage",function()
    {
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        expect(browser.getCurrentUrl()).toBe('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        browser.sleep(2000);
        
        
    });
    it("2.customerLoginClick",function(){

        var customerLoginButton = element(by.css('[ng-click="customer()"]'));
        customerLoginButton.click();
       browser.sleep(2); 

    });
    it("3.Click customer",function(){

        element(by.cssContainingText('option','Ron Weasly')).click();
    });
   

   
    it("4.Enter-in-account",function(){
        var login = element(by.buttonText("Login"));
        login.click();
        browser.sleep(3000)
    });

    

    it("DepositLink",function(){
        element(by.css('[ng-click="deposit()"]')).click();
        browser.sleep(2000);
    });
    it("DepositeAmount",function(){
        expect(element(by.model('amount')));
        element(by.model('amount')).sendKeys(1000);
        browser.sleep(5000);

    });

    it("DepositeButton",function(){
        let old=0;
        let depo=0;
        let final=0;
        x=element(by.css('[class="ng-binding"]')).getText();
        
        x.then(elementText=>{
            console.log(x);

        })
        element(by.css('[type="submit"]')).click();
        expect(element(by.cssContainingText('.error ng-binding','Deposit Successful')));
        browser.sleep(2000);
        browser.navigate().back();
        browser.sleep(3000)
        browser.navigate().forward();
        browser.sleep(3000)

    });
    
}
);