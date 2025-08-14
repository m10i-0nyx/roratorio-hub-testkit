import { test, expect } from '@playwright/test';

test.describe('シミュレーション (ウインドホーク)', () => {
    test('「ベテルギウス」への「エイムドボルト」攻撃', async ({ page, baseURL, browserName }) => {
        // ページに移動
        await page.goto(
            `${baseURL}?cx1cy1xtHmpseEoA2pb100wA91cz21001kbQBqylsly7cz22.419hcz23001gjs2LnFn5cz24001khqlUR1Ej2cz25001khf5AX2e-lcz26001hjiS1hpfmr7cz27001gjfFpSvb1cz28001hjszhOLEiE4cz29001kh8uldkmVocz2a001khe5CvOpldcz2b.4hoicz2c.4hpacA1Z_1127456b89a3cA128c0cB1.m1Mvhf87Z-__-DxGGC1l5515h5a5B6GmBmqlG6jFll1l5cC1.ecD1.fxKfaaaaaaaaa5cR2.41QfcW100dvx2001cZ1i2`
        );

        // 要素に対する操作
        await page.getByRole('button', { name: '計算する' }).click();

        // ダメージ検証
        await expect(page.getByText('9223780', { exact: true }).first()).toBeVisible(); // 最小ダメージ
        await expect(page.getByText('8972253', { exact: true }).first()).toBeVisible(); // 平均ダメージ
        await expect(page.getByText('11524830', { exact: true }).first()).toBeVisible(); // 最大ダメージ
    });
});
