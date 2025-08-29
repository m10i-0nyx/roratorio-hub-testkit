import { defineConfig } from '@playwright/test';

// 環境に合わせてURLを設定
const baseURL = process.env.BASE_URL;

export default defineConfig({
    fullyParallel: true,
    timeout: 30 * 1000,
    expect: {
        timeout: 5 * 1000,  　// expectのtimeoutの時間を変更
    },
    projects: [
        {
            name: 'chromium',
            use: {
                launchOptions: {
                    args: ["--headless=new"]
                },
                baseURL: baseURL,
                browserName: 'chromium'
            },
        },
        {
            name: 'firefox',
            use: {
                launchOptions: {
                    headless: true,
                },
                baseURL: baseURL,
                browserName: 'firefox'
            },
        },
    ],
    use: {
        trace: process.env.CI ? 'off' : 'retain-on-failure',
        screenshot: { mode: 'only-on-failure', fullPage: true },
        video: process.env.CI ? 'off' : 'retain-on-failure'
    }
});
