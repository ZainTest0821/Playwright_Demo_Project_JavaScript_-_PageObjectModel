import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    //Go to Luma HomePage and verify the title and then move on, the given code is written through CodeGen
  await page.goto('https://magento.softwaretestingboard.com/', {timeout: 60000, waitUntil: 'domcontentloaded'});
  await expect (page).toHaveTitle('Home Page');

  //Create a new account 

  await page.getByRole('link', { name: 'Create an Account' }).click();
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('Test');
  await page.getByLabel('First Name').press('Tab');
  await page.getByLabel('Last Name').fill('User');
  await page.getByLabel('Email', { exact: true }).click();
  await page.getByLabel('Email', { exact: true }).fill('zainsqa123@gmail.com');
  await page.getByLabel('Email', { exact: true }).press('Tab');
  await page.getByRole('textbox', { name: 'Password*', exact: true }).fill('testuser@123');
  await page.getByRole('textbox', { name: 'Password*', exact: true }).press('Tab');
  await page.getByLabel('Confirm Password').fill('testuser@123');
  await page.getByRole('button', { name: 'Create an Account' }).click();
});