1) Install playwright using terminal
   - Create Folder -> playwrightAutomation
   - Terminal -> New Terminal -> npm init playwright@latest
   -  Need to install the following packages:
      create-playwright@1.17.132
      Ok to proceed? (y) y
   -  Getting started with writing end-to-end tests with Playwright:
      Initializing project in '.'
     √ Do you want to use TypeScript or JavaScript? · JavaScript
     √ Where to put your end-to-end tests? · tests
     √ Add a GitHub Actions workflow? (y/N) · false
     √ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true
  
2) Install playwright using VS Code extension
   - Create Folder -> playwrightAutomation
   - Search extension -> playwright test for vscode -> extension installed
   - view -> command palette..-> test: Insatll playwright
   - select all check box -> ok
  
Documentation of Playwright :-
https://playwright.dev/docs/intro
      
## Allure Reports for playwright

1)Installation of "allure-playwright" module

npm i-D @playwright/test allure-playwright

2) Installing Allure command line

Ref: https://www.npmjs.com/package/allure-commandline

npm install -g allure-commandline --save-dev
OR
sudo npm install -g allure-commandline --save-dev

3) playwright.config.js

reporter = ['allure-playwright', {outputfolder: 'my-allure-results'}]
OR
npx playwright test --reporter = allure-playwright

4) Run the tests

npx playwright test tests/Reporters.spec.js

5) General Allure Report
