import { AppShell } from "@/components/layout/AppShell";
import { StatCard } from "@/components/dashboard/StatCard";
import { LiveDiagnosticStream } from "@/components/dashboard/LiveDiagnosticStream";
import { DiagnosticTrends } from "@/components/dashboard/DiagnosticTrends";
import { RecentPatientQueue } from "@/components/dashboard/RecentPatientQueue";
import { Button } from "@/components/ui/Button";
import { useDashboardData } from "@/hooks/useDashboardData";
import { Users, AlertTriangle, Target, Gauge, Plus } from "lucide-react";
import { motion } from "framer-motion";

export default function DashboardPage() {
  const { data, isLoading } = useDashboardData();

  if (isLoading || !data) {
    return (
      <AppShell>
        <div className="animate-pulse text-sm text-ink-400">Loading clinical overview…</div>
      </AppShell>
    );
  }

  const { dashboardStats, diagnosticStream, diagnosticTrends, patientQueue } = data;

  return (
    <AppShell>
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <h2 className="text-2xl font-bold text-ink-900">Clinical Overview</h2>
        <p className="mt-1 max-w-2xl text-sm text-ink-500">
          DecryptCare AI has analyzed 1,248 new cases over the last 24 hours. Critical alert volume is
          down 4%, while automated triage confidence remains high at 98.2%.
        </p>
      </motion.div>

      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard
          label="Patient Throughput"
          value={dashboardStats.patientThroughput.toString()}
          icon={Users}
          footnote={`↗ ${dashboardStats.patientThroughputDelta}`}
          footnoteTone="up"
        />
        <StatCard
          label="Critical Alerts"
          value={dashboardStats.criticalAlerts.toString()}
          icon={AlertTriangle}
          footnote={`↘ ${dashboardStats.criticalAlertsDelta} · Requires immediate review`}
          footnoteTone="down"
        />
        <StatCard
          label="AI Accuracy"
          value={`${dashboardStats.aiAccuracy}%`}
          icon={Target}
          accent
        />
        <StatCard
          label="System Latency"
          value={`${dashboardStats.systemLatencyMs} ms`}
          icon={Gauge}
          footnote="Real-time processing active"
        />
      </div>

      <div className="mt-6 flex flex-col gap-4 lg:flex-row">
        <LiveDiagnosticStream items={diagnosticStream} />
        <DiagnosticTrends items={diagnosticTrends} />
      </div>

      <div className="mt-6">
        <RecentPatientQueue items={patientQueue} />
      </div>

      <Button className="fixed bottom-8 left-6 shadow-panel" variant="primary" size="lg">
        <Plus className="h-4 w-4" />
        New Analysis
      </Button>
    </AppShell>
  );
}
