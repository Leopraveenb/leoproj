import test, { expect } from "@playwright/test";

test.describe('Redo Shortcut Tests', () => {
    
    test('test redo shortcut (Ctrl+Y) after undo on text input', async ({ page }) => {
        // Navigate to the edit page with input fields
        await page.goto("https://letcode.in/edit");
        
        // Select the input field
        const inputField = page.locator("input#fullName");
        
        // Type initial text
        await inputField.fill("Initial Text");
        await page.waitForTimeout(500);
        
        // Verify initial text
        let currentValue = await inputField.inputValue();
        expect(currentValue).toBe("Initial Text");
        
        // Clear and type new text
        await inputField.fill("Modified Text");
        await page.waitForTimeout(500);
        
        // Verify modified text
        currentValue = await inputField.inputValue();
        expect(currentValue).toBe("Modified Text");
        
        // Perform undo (Ctrl+Z)
        await inputField.focus();
        await page.keyboard.press("Control+z");
        await page.waitForTimeout(500);
        
        // Verify text after undo
        currentValue = await inputField.inputValue();
        console.log("After undo:", currentValue);
        
        // Perform redo (Ctrl+Y)
        await page.keyboard.press("Control+y");
        await page.waitForTimeout(500);
        
        // Verify text after redo
        currentValue = await inputField.inputValue();
        console.log("After redo:", currentValue);
        expect(currentValue).toBe("Modified Text");
    });
    
    test('test redo shortcut (Ctrl+Shift+Z) alternative on text input', async ({ page }) => {
        // Navigate to the edit page with input fields
        await page.goto("https://letcode.in/edit");
        
        // Select the input field
        const inputField = page.locator("input#fullName");
        
        // Type initial text
        await inputField.fill("Test Content");
        await page.waitForTimeout(500);
        
        // Clear and type new text
        await inputField.fill("New Content");
        await page.waitForTimeout(500);
        
        // Verify new text
        let currentValue = await inputField.inputValue();
        expect(currentValue).toBe("New Content");
        
        // Perform undo (Ctrl+Z)
        await inputField.focus();
        await page.keyboard.press("Control+z");
        await page.waitForTimeout(500);
        
        // Perform redo (Ctrl+Shift+Z) - alternative redo shortcut
        await page.keyboard.press("Control+Shift+z");
        await page.waitForTimeout(500);
        
        // Verify text after redo
        currentValue = await inputField.inputValue();
        console.log("After redo with Ctrl+Shift+Z:", currentValue);
        expect(currentValue).toBe("New Content");
    });
    
    test('test multiple undo and redo operations', async ({ page }) => {
        // Navigate to the edit page with input fields
        await page.goto("https://letcode.in/edit");
        
        // Select the input field
        const inputField = page.locator("input#fullName");
        
        // Type first version
        await inputField.fill("Version 1");
        await page.waitForTimeout(500);
        
        // Type second version
        await inputField.fill("Version 2");
        await page.waitForTimeout(500);
        
        // Type third version
        await inputField.fill("Version 3");
        await page.waitForTimeout(500);
        
        let currentValue = await inputField.inputValue();
        expect(currentValue).toBe("Version 3");
        
        // Undo twice
        await inputField.focus();
        await page.keyboard.press("Control+z");
        await page.waitForTimeout(500);
        await page.keyboard.press("Control+z");
        await page.waitForTimeout(500);
        
        currentValue = await inputField.inputValue();
        console.log("After 2 undos:", currentValue);
        
        // Redo once
        await page.keyboard.press("Control+y");
        await page.waitForTimeout(500);
        
        currentValue = await inputField.inputValue();
        console.log("After 1 redo:", currentValue);
        expect(currentValue).toBe("Version 2");
        
        // Redo again
        await page.keyboard.press("Control+y");
        await page.waitForTimeout(500);
        
        currentValue = await inputField.inputValue();
        console.log("After 2 redos:", currentValue);
        expect(currentValue).toBe("Version 3");
    });
});
