import { defineConfig } from '@playwright/test';

// 環境に合わせてURLを設定
const baseURL = "http://localhost/roratorio-hub/ro4/m/calcx.html";

export default defineConfig({
    projects: [
        {
            name: 'chromium',
            use: {
                launchOptions: {
                    headless: true,
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
        trace: 'retain-on-failure',
        screenshot: { mode: 'only-on-failure', fullPage: true },
        video: "retain-on-failure",
    }
});
