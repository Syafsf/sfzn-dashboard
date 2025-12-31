export interface Activity {
    id: string;
    title: string;
    timestamp: string;
    description: string;
    tags: Array<{ label: string; color: string }>;
    icon: string;
    iconColorClass: string;
    iconBgClass: string;
    borderColorClass: string;
}

export interface Task {
    id: string;
    title: string;
    priority?: 'HIGH' | 'MED' | 'LOW' | 'DONE';
    description?: string;
    completed: boolean;
}

export interface Document {
    refNo: string;
    subject: string;
    category: 'Legislative' | 'Finance' | 'HR' | 'General';
    status: 'Pending Review' | 'Approved' | 'Returned' | 'Draft';
    timeline: number; // 0-100 progress
    totalDays: number;
}

export interface Resource {
    id: string;
    name: string;
    type: 'PDF' | 'XLSX' | 'DOC';
    modified: string;
    synced: boolean;
}

export interface NoteTag {
    label: string;
    type: 'policy' | 'brainstorm' | 'general';
}
