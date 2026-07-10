import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DashboardPage from "@/pages/DashboardPage";
import DocumentsPage from "@/pages/DocumentsPage";
import InsightsPage from "@/pages/InsightsPage";
import AuditPage from "@/pages/AuditPage";
import ReportPage from "@/pages/ReportPage";
import ScanPage from "@/pages/ScanPage";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false, retry: 1 } },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/documents" element={<DocumentsPage />} />
          <Route path="/scan" element={<ScanPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/diagnostics" element={<AuditPage />} />
          <Route path="/report" element={<ReportPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
