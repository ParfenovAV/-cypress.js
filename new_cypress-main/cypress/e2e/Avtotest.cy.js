describe('AвтоТест ParfenovAV', function () {

    it('search something', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('german@dolnikov.ru'); // ввести правильный логин
       cy.get('#pass').type('iLoveqastudio1'); // ввести правильный пароль
       cy.get('#loginButton').click();         // нажать кнопку
       cy.get('#messageHeader').contains('Авторизация прошла успешно');
       cy.get('#messageHeader').should('be.visible'); // надпись видна пользователю
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден пользователю

              })

    it('search something', function () {
        cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton').click(); // нажал востановить пароль
         cy.get('#mailForgot').type('german@dolnikov.ru'); // ввести правильный логин
         cy.get('#restoreEmailButton').click(); // нажали отправить код
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail')
         cy.get('#messageHeader').should('be.visible'); // надпись видна пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден пользователю
        })
        
    it('search something', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru'); // ввести правильный логин
        cy.get('#pass').type('iLoveqastudio'); // ввести НЕправильный пароль
        cy.get('#loginButton').click();         // нажать кнопку
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#messageHeader').should('be.visible'); // надпись видна пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден пользователю
     
         })

    it('search something', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germn@dolnikov.ru'); // ввести НЕправильный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввести правильный пароль
        cy.get('#loginButton').click();         // нажать кнопку
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#messageHeader').should('be.visible'); // надпись видна пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден пользователю
         
             })
    it('search something', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germndolnikov.ru'); // ввести  логин без @
        cy.get('#pass').type('iLoveqastudio1'); // ввести правильный пароль
        cy.get('#loginButton').click();         // нажать кнопку
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#messageHeader').should('be.visible'); // надпись видна пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден пользователю
              
                     })
     
     it('search something', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввести правильный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввести правильный пароль
        cy.get('#loginButton').click();         // нажать кнопку
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#messageHeader').should('be.visible'); // надпись видна пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден пользователю
                 
                               })   
})
 
