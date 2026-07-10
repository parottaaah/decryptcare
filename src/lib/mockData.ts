import type {
  DashboardStats,
  DiagnosticStreamItem,
  DiagnosticTrend,
  PatientQueueItem,
  UploadedDocument,
  ActiveAnalysis,
  AuditStep,
  ChatMessage,
  AuditSummary,
  CostBreakdownSlice,
  ChargeLine,
  LegalCitation,
} from "@/types";

export const dashboardStats: DashboardStats = {
  patientThroughput: 342,
  patientThroughputDelta: "+12%",
  criticalAlerts: 7,
  criticalAlertsDelta: "-2 today",
  aiAccuracy: 98.2,
  systemLatencyMs: 12,
};

export const diagnosticStream: DiagnosticStreamItem[] = [
  {
    id: "d1",
    title: "Chest X-Ray Anomaly Detected",
    detail: "Patient ID: #88392 · High probability of lower lobe con...",
    timeAgo: "2 min ago",
    risk: "high-risk",
    riskLabel: "94% RISK",
    patientId: "#88392",
  },
  {
    id: "d2",
    title: "MRI Scan Cleared",
    detail: "Patient ID: #10294 · No significant abnormalities detec...",
    timeAgo: "15 min ago",
    risk: "normal",
    riskLabel: "NORMAL",
    patientId: "#10294",
  },
];

export const diagnosticTrends: DiagnosticTrend[] = [
  { id: "t1", label: "Respiratory Admissions", changeLabel: "+18% vs last week", direction: "up" },
  { id: "t2", label: "Cardiac Anomalies", changeLabel: "-4% vs last week", direction: "down" },
];

export const patientQueue: PatientQueueItem[] = [
  { id: "p1", name: "John Doe", patientId: "#DC-88492", status: "in-review", submittedAt: "Today, 09:41 AM" },
  { id: "p2", name: "Aisha Rahman", patientId: "#DC-88493", status: "waiting", submittedAt: "Today, 09:12 AM" },
  { id: "p3", name: "Marcus Lee", patientId: "#DC-88410", status: "cleared", submittedAt: "Yesterday, 5:02 PM" },
];

export const recentUploads: UploadedDocument[] = [
  { id: "u1", fileName: "Lab_Results_Complet...", uploadedAt: "Today, 09:41 AM", sizeLabel: "1.2 MB", status: "analyzed" },
  { id: "u2", fileName: "XRay_Chest_Scan_001...", uploadedAt: "Yesterday, 14:22 PM", sizeLabel: "4.5 MB", status: "flagged" },
  { id: "u3", fileName: "Referral_Notes_Dr_Jo...", uploadedAt: "Oct 24, 11:05 AM", sizeLabel: "0.8 MB", status: "pending" },
];

export const activeAnalysis: ActiveAnalysis = {
  fileName: "Smith_Discharge_Summary.pdf",
  documentType: "Hospital Discharge Summary",
  patientId: "#DC-88492",
  ocrQualityScore: 98,
  ocrQualityLabel: "High Accuracy",
  processingProgress: 62,
};

export const auditSteps: AuditStep[] = [
  { id: "s1", label: "Reading Bill", detail: "Document digitized successfully.", status: "done" },
  { id: "s2", label: "Extracting Text", detail: "NLP models parsed content.", status: "done" },
  { id: "s3", label: "Recognizing Medicines", detail: "Cross-referencing FDA & CDSCO databases...", status: "active" },
  { id: "s4", label: "Understanding Procedures", status: "pending" },
  { id: "s5", label: "Checking CGHS Rates", status: "pending" },
  { id: "s6", label: "Generating AI Report", status: "pending" },
];

export const chatMessages: ChatMessage[] = [
  {
    id: "c1",
    role: "user",
    timestamp: "Today, 10:42 AM",
    content: "Can you explain the MRI charge on this bill? Why is it $3,450, and please translate the explanation into Tamil for the patient's family.",
  },
  {
    id: "c2",
    role: "assistant",
    timestamp: "Today, 10:42 AM",
    content: "I have analyzed Bill #DC-88492. The $3,450 charge is for an MRI of the Brain without Contrast (CPT Code: 70551).",
    translation: {
      language: "Tamil Translation",
      text: "இந்த $3,450 கட்டணம் மூளைக்கான MRI ஸ்கேனுக்கானது (கான்ட்ராஸ்ட் இல்லாமல்), இது சிடி குறியீடு 70551 இன் கீழ் வருகிறது. இந்த கட்டணம் மருத்துவமனை வசதி, உபகரணங்கள் மற்றும் ஸ்கேன் செய்வதற்கான தொழில்நுட்ப வல்லுநரின் நேரத்தை உள்ளடக்கியது.",
    },
    costNote: "This is a typical charge for an out-of-network facility. If the patient has insurance, the negotiated rate would typically be lower (around $800 - $1,200). I can help draft a letter to request an itemized breakdown or",
    quickActions: ["Explain this bill", "Why is this expensive?", "Can I dispute this?"],
  },
];

export const auditSummary: AuditSummary = {
  billTrustScore: 68,
  billTrustScoreMax: 100,
  totalBill: 245000,
  estFairCost: 182000,
  potentialSavings: 62000,
  flagsFound: 14,
  aiConfidence: 99.4,
};

export const costBreakdown: CostBreakdownSlice[] = [
  { label: "Room Rent", percent: 40, colorToken: "brand" },
  { label: "Pharmacy", percent: 30, colorToken: "sky" },
  { label: "Labs", percent: 20, colorToken: "amber" },
  { label: "Procedures", percent: 10, colorToken: "ink" },
];

export const chargeLines: ChargeLine[] = [
  {
    id: "l4",
    code: "99291",
    description: "Critical Care, first 30-74 min",
    billedAmount: 1450,
    flagLabel: "Upcoding violation",
    flagSeverity: "high",
  },
  {
    id: "l7",
    code: "85025",
    description: "CBC with differential",
    billedAmount: 350,
    flagLabel: "Unbundling",
    flagSeverity: "medium",
  },
];

export const legalCitations: LegalCitation[] = [
  {
    id: "lc1",
    severity: "violation",
    matchConfidence: 96,
    title: "Upcoding Violation",
    reference: "Consumer Protection Act, 2019 (Sec 2(47))",
    detail:
      "Constitutes an 'unfair trade practice' by charging for a higher complexity service (99291) than what medical records substantiate.",
  },
  {
    id: "lc2",
    severity: "warning",
    matchConfidence: 92,
    title: "Unbundling",
    reference: "IRDAI Guidelines (Ref: HLTH/MISC/01)",
    detail:
      "Mandates inclusive billing for routine diagnostics. Separate billing for 85025 when ordered within a standard panel violates clause 4.2 on standardized billing.",
  },
];
