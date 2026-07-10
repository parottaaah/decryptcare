import { useQuery } from "@tanstack/react-query";
import {
  dashboardStats,
  diagnosticStream,
  diagnosticTrends,
  patientQueue,
} from "@/lib/mockData";

// In production these would call the DecryptCare API, e.g. GET /api/dashboard/overview.
// Swapped for mock data here since no backend is wired up yet.
async function fetchDashboardOverview() {
  await new Promise((r) => setTimeout(r, 150));
  return { dashboardStats, diagnosticStream, diagnosticTrends, patientQueue };
}

export function useDashboardData() {
  return useQuery({
    queryKey: ["dashboard-overview"],
    queryFn: fetchDashboardOverview,
    staleTime: 30_000,
  });
}
