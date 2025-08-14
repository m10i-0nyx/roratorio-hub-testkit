import { test, expect } from '@playwright/test';

test.describe('Job Tests', () => {
    const jobs = [
        { name: 'ノービス', baseLevel: '99', jobLevel: '10', expectedText: '-2495' },
        { name: 'ソードマン', baseLevel: '99', jobLevel: '50', expectedText: '-2495' },
    ];

    test.beforeEach(async ({ page, baseURL, browserName }) => {
        // ページに移動
        await page.goto(baseURL!);
    });

    for (const job of jobs) {
        test(`should test ${job.name}`, async ({ page, baseURL, browserName }) => {
            // ジョブを選択
            await page.locator('#OBJID_SELECT_JOB').selectOption(job.name);

            // ステータスを設定
            await page.locator('#OBJID_SELECT_BASE_LEVEL').selectOption(job.baseLevel);
            await page.locator('#OBJID_SELECT_JOB_LEVEL').selectOption(job.jobLevel);
            await page.locator('#OBJID_SELECT_STATUS_STR').selectOption('99');
            await page.locator('#OBJID_SELECT_STATUS_AGI').selectOption('99');
            await page.locator('#OBJID_SELECT_STATUS_VIT').selectOption('99');
            await page.locator('#OBJID_SELECT_STATUS_INT').selectOption('99');
            await page.locator('#OBJID_SELECT_STATUS_DEX').selectOption('99');
            await page.locator('#OBJID_SELECT_STATUS_LUK').selectOption('99');

            // 結果を検証
            await expect(page.locator("#A_STPOINT").getByText(job.expectedText)).toBeVisible();
        });
    }
});
