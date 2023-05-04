import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { App, ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN";

import "antd/dist/reset.css";

import router from "~/router.tsx";

import "~/index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root") as HTMLElement).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <ConfigProvider locale={zhCN}>
                <App>
                    <RouterProvider router={router} />
                </App>
            </ConfigProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    </StrictMode>
);
