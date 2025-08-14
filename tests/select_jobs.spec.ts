import { test, expect } from '@playwright/test';

test.describe('Job Tests', () => {
    const jobs = [
        { name: 'ノービス', baseLevel: '99', jobLevel: '10', statusPointMax: '99', expectedText: '-2495' },
        { name: 'ソードマン', baseLevel: '99', jobLevel: '50', statusPointMax: '99', expectedText: '-2495' },
        { name: 'シーフ', baseLevel: '99', jobLevel: '50', statusPointMax: '99', expectedText: '-2495' },
        { name: 'アコライト', baseLevel: '99', jobLevel: '50', statusPointMax: '99', expectedText: '-2495' },
        { name: 'アーチャー', baseLevel: '99', jobLevel: '50', statusPointMax: '99', expectedText: '-2495' },
        { name: 'マジシャン', baseLevel: '99', jobLevel: '50', statusPointMax: '99', expectedText: '-2495' },
        { name: 'マーチャント', baseLevel: '99', jobLevel: '50', statusPointMax: '99', expectedText: '-2495' },
        { name: 'ナイト', baseLevel: '99', jobLevel: '50', statusPointMax: '99', expectedText: '-2495' },
        { name: 'アサシン', baseLevel: '99', jobLevel: '50', statusPointMax: '99', expectedText: '-2495' },
        { name: 'ハンター', baseLevel: '99', jobLevel: '50', statusPointMax: '99', expectedText: '-2495' },
        { name: 'ウィザード', baseLevel: '99', jobLevel: '50', statusPointMax: '99', expectedText: '-2495' },
        { name: 'ブラックスミス', baseLevel: '99', jobLevel: '50', statusPointMax: '99', expectedText: '-2495' },
        { name: 'クルセイダー', baseLevel: '99', jobLevel: '50', statusPointMax: '99', expectedText: '-2495' },
        { name: 'ローグ', baseLevel: '99', jobLevel: '50', statusPointMax: '99', expectedText: '-2495' },
        { name: 'モンク', baseLevel: '99', jobLevel: '50', statusPointMax: '99', expectedText: '-2495' },
        { name: 'バード', baseLevel: '99', jobLevel: '50', statusPointMax: '99', expectedText: '-2495' },
        { name: 'ダンサー', baseLevel: '99', jobLevel: '50', statusPointMax: '99', expectedText: '-2495' },
        { name: 'セージ', baseLevel: '99', jobLevel: '50', statusPointMax: '99', expectedText: '-2495' },
        { name: 'アルケミスト', baseLevel: '99', jobLevel: '50', statusPointMax: '99', expectedText: '-2495' },
        { name: 'スーパーノービス', baseLevel: '99', jobLevel: '99', statusPointMax: '99', expectedText: '-2495' },
        { name: 'ロードナイト', baseLevel: '99', jobLevel: '70', statusPointMax: '99', expectedText: '-2443' },
        { name: 'アサシンクロス', baseLevel: '99', jobLevel: '70', statusPointMax: '99', expectedText: '-2443' },
        { name: 'ハイプリースト', baseLevel: '99', jobLevel: '70', statusPointMax: '99', expectedText: '-2443' },
        { name: 'スナイパー', baseLevel: '99', jobLevel: '70', statusPointMax: '99', expectedText: '-2443' },
        { name: 'ハイウィザード', baseLevel: '99', jobLevel: '70', statusPointMax: '99', expectedText: '-2443' },
        { name: 'ホワイトスミス', baseLevel: '99', jobLevel: '70', statusPointMax: '99', expectedText: '-2443' },
        { name: 'パラディン', baseLevel: '99', jobLevel: '70', statusPointMax: '99', expectedText: '-2443' },
        { name: 'チェイサー', baseLevel: '99', jobLevel: '70', statusPointMax: '99', expectedText: '-2443' },
        { name: 'チャンピオン', baseLevel: '99', jobLevel: '70', statusPointMax: '99', expectedText: '-2443' },
        { name: 'クラウン', baseLevel: '99', jobLevel: '70', statusPointMax: '99', expectedText: '-2443' },
        { name: 'ジプシー', baseLevel: '99', jobLevel: '70', statusPointMax: '99', expectedText: '-2443' },
        { name: 'プロフェッサー', baseLevel: '99', jobLevel: '70', statusPointMax: '99', expectedText: '-2443' },
        { name: 'クリエイター', baseLevel: '99', jobLevel: '70', statusPointMax: '99', expectedText: '-2443' },
        { name: 'ハイ ノービス', baseLevel: '99', jobLevel: '10', statusPointMax: '99', expectedText: '-2443' },
        { name: 'ハイ ソードマン', baseLevel: '99', jobLevel: '50', statusPointMax: '99', expectedText: '-2443' },
        { name: 'ハイ シーフ', baseLevel: '99', jobLevel: '50', statusPointMax: '99', expectedText: '-2443' },
        { name: 'ハイ アコライト', baseLevel: '99', jobLevel: '50', statusPointMax: '99', expectedText: '-2443' },
        { name: 'ハイ アーチャー', baseLevel: '99', jobLevel: '50', statusPointMax: '99', expectedText: '-2443' },
        { name: 'ハイ マジシャン', baseLevel: '99', jobLevel: '50', statusPointMax: '99', expectedText: '-2443' },
        { name: 'ハイ マーチャント', baseLevel: '99', jobLevel: '50', statusPointMax: '99', expectedText: '-2443' },
    ];

    test.beforeEach(async ({ page, baseURL, browserName }) => {
        // ページに移動
        await page.goto(baseURL!);
    });

    for (const job of jobs) {
        test(`Select job test ${job.name}`, async ({ page, baseURL, browserName }) => {
            // ジョブを選択
            await page.locator('#OBJID_SELECT_JOB').selectOption(job.name);

            // ステータスを設定
            await page.locator('#OBJID_SELECT_BASE_LEVEL').selectOption(job.baseLevel);
            await page.locator('#OBJID_SELECT_JOB_LEVEL').selectOption(job.jobLevel);
            await page.locator('#OBJID_SELECT_STATUS_STR').selectOption(job.statusPointMax);
            await page.locator('#OBJID_SELECT_STATUS_AGI').selectOption(job.statusPointMax);
            await page.locator('#OBJID_SELECT_STATUS_VIT').selectOption(job.statusPointMax);
            await page.locator('#OBJID_SELECT_STATUS_INT').selectOption(job.statusPointMax);
            await page.locator('#OBJID_SELECT_STATUS_DEX').selectOption(job.statusPointMax);
            await page.locator('#OBJID_SELECT_STATUS_LUK').selectOption(job.statusPointMax);

            // 結果を検証
            await expect(page.locator("#A_STPOINT").getByText(job.expectedText)).toBeVisible();
        });
    }
});
