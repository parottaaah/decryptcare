export interface DashboardStats {
  patientThroughput: number;
  patientThroughputDelta: string;
  criticalAlerts: number;
  criticalAlertsDelta: string;
  aiAccuracy: number;
  systemLatencyMs: number;
}

export interface DiagnosticStreamItem {
  id: string;
  title: string;
  detail: string;
  timeAgo: string;
  risk: "high-risk" | "normal" | "pending";
  riskLabel: string;
  patientId: string;
}

export interface DiagnosticTrend {
  id: string;
  label: string;
  changeLabel: string;
  direction: "up" | "down";
}

export interface PatientQueueItem {
  id: string;
  name: string;
  patientId: string;
  status: "waiting" | "in-review" | "cleared";
  submittedAt: string;
}

export type UploadStatus = "analyzed" | "flagged" | "pending";

export interface UploadedDocument {
  id: string;
  fileName: string;
  uploadedAt: string;
  sizeLabel: string;
  status: UploadStatus;
}

export interface ActiveAnalysis {
  fileName: string;
  documentType: string;
  patientId: string;
  ocrQualityScore: number;
  ocrQualityLabel: string;
  processingProgress: number;
}

export type AuditStepStatus = "done" | "active" | "pending";

export interface AuditStep {
  id: string;
  label: string;
  detail?: string;
  status: AuditStepStatus;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  timestamp: string;
  content: string;
  translation?: {
    language: string;
    text: string;
  };
  costNote?: string;
  quickActions?: string[];
}

export interface AuditSummary {
  billTrustScore: number;
  billTrustScoreMax: number;
  totalBill: number;
  estFairCost: number;
  potentialSavings: number;
  flagsFound: number;
  aiConfidence: number;
}

export interface CostBreakdownSlice {
  label: string;
  percent: number;
  colorToken: "brand" | "sky" | "amber" | "ink";
}

export interface ChargeLine {
  id: string;
  code: string;
  description: string;
  billedAmount: number;
  flagLabel?: string;
  flagSeverity?: "high" | "medium" | "low";
}

export interface LegalCitation {
  id: string;
  severity: "violation" | "warning";
  matchConfidence: number;
  title: string;
  reference: string;
  detail: string;
}
