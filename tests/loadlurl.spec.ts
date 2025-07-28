import { test, expect } from '@playwright/test';

const url: string = "http://localhost/roratorio-hub/ro4/m/calcx.html";

test.describe('Load URL Test', () => {
    test('should load the page and interact with elements', async ({ page }) => {
        // ページに移動
        await page.goto(
            `${url}?cx1cy1xtHmpseEoA2pb100wA91cz21001_bQBqcpHsanjD5Kjy7cz22.419hcz23001UjsyxVGsDOltcz24001-hqRaqyBFwkAOj2cz25001-hf5YmjrPwDu6-lcz26001VjiS1h93o_86Cvcz27001UjfFpNvrv3Opcz28001VjszhODVJxCjG4cz29001-h8usaldNabe2Vocz2a001-he5smrfPoIf6ldcz2b.4hoicz2c.4hpacA1Z_1127456b89a3cA128c0cB1.m1Mvhf87Z-__-DxGGC1l5515h5B6GmBmqlG6jFll1l5cC1.ecD1.fxKfaaaaaaaaa5cR2.4124cW100dvx2001cZ1i2`,
        );

        // 要素に対する操作
        await expect(page.getByRole('cell', { name: '235', exact: true })).toBeVisible();
        await page.getByRole('cell', { name: '45', exact: true }).click();
        await page.getByRole('textbox', { name: 'ウィンドホーク' }).click();
    });
});
