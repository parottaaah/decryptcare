import { AppShell } from "@/components/layout/AppShell";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CostBreakdownDonut } from "@/components/audit/CostBreakdownDonut";
import { RiskGauge } from "@/components/audit/RiskGauge";
import { ItemizedChargeTable } from "@/components/audit/ItemizedChargeTable";
import { auditSummary, costBreakdown, chargeLines } from "@/lib/mockData";
import { Download, RefreshCcw } from "lucide-react";
import { motion } from "framer-motion";

export default function AuditPage() {
  return (
    <AppShell title="Alpha Medical">
      <div className="flex items-start justify-between">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <h2 className="text-2xl font-bold text-ink-900">Audit Dashboard</h2>
          <p className="mt-1 text-sm text-ink-500">Real-time analysis of medical billing and compliance.</p>
        </motion.div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
          <Button>
            <RefreshCcw className="h-4 w-4" />
            Run New Audit
          </Button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-5">
        <Card>
          <CardContent className="p-5">
            <p className="text-xs text-ink-400">Bill Trust Score</p>
            <p className="mt-2 text-2xl font-bold text-ink-900">
              {auditSummary.billTrustScore}<span className="text-sm text-ink-400">/{auditSummary.billTrustScoreMax}</span>
            </p>
            <div className="mt-2 h-1.5 w-full rounded-full bg-ink-100">
              <div className="h-full rounded-full bg-amber-500" style={{ width: `${auditSummary.billTrustScore}%` }} />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-xs text-ink-400">Total Bill</p>
            <p className="mt-2 text-2xl font-bold text-ink-900">₹{(auditSummary.totalBill / 100_000).toFixed(2)}L</p>
            <p className="mt-2 text-xs text-emerald-600">↗ +12% vs avg</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-xs text-ink-400">Est. Fair Cost</p>
            <p className="mt-2 text-2xl font-bold text-ink-900">₹{(auditSummary.estFairCost / 100_000).toFixed(2)}L</p>
            <p className="mt-2 text-xs text-ink-400">Benchmark</p>
          </CardContent>
        </Card>
        <Card className="ring-2 ring-brand-200">
          <CardContent className="p-5">
            <p className="text-xs text-brand-700">Potential Savings</p>
            <p className="mt-2 text-2xl font-bold text-brand-700">₹{(auditSummary.potentialSavings / 1000).toFixed(1)}k</p>
            <p className="mt-2 text-xs text-ink-400">↓ Recoverable</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-xs text-ink-400">Flags Found</p>
            <p className="mt-2 text-2xl font-bold text-alert">{auditSummary.flagsFound}</p>
            <p className="mt-2 text-xs text-alert">High Priority</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <h3 className="text-sm font-semibold text-ink-900">Cost Breakdown</h3>
          </CardHeader>
          <CardContent>
            <CostBreakdownDonut slices={costBreakdown} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <h3 className="text-sm font-semibold text-ink-900">Hospital Comparison & Risk</h3>
            <div className="flex gap-1 rounded-md bg-ink-50 p-1 text-xs">
              <span className="rounded px-2 py-1 font-medium text-ink-800 bg-white shadow-sm">Cost</span>
              <span className="rounded px-2 py-1 text-ink-400">Volume</span>
            </div>
          </CardHeader>
          <CardContent className="flex items-center justify-around">
            <div className="space-y-2 text-sm text-ink-500">
              <p>Current <span className="ml-2 font-semibold text-ink-900">₹2.45L</span></p>
              <p>Avg. City <span className="ml-2 font-semibold text-ink-900">₹1.90L</span></p>
              <p>CGHS <span className="ml-2 font-semibold text-ink-900">₹1.60L</span></p>
            </div>
            <RiskGauge severity="High" />
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader className="flex flex-row items-center justify-between">
          <h3 className="text-sm font-semibold text-ink-900">Itemized Charge Analysis</h3>
          <span className="text-xs text-ink-400">Status: All Flags · Dept: All</span>
        </CardHeader>
        <CardContent>
          <ItemizedChargeTable lines={chargeLines} />
        </CardContent>
      </Card>
    </AppShell>
  );
}
