import React from 'react';
import { Document } from '../types';

const documents: Document[] = [
    { refNo: 'POL-2024-089', subject: 'Housing Affordability Amendment', category: 'Legislative', status: 'Pending Review', timeline: 75, totalDays: 14 },
    { refNo: 'EXT-2024-112', subject: 'Q3 Financial Audit Report', category: 'Finance', status: 'Approved', timeline: 100, totalDays: 5 },
    { refNo: 'INT-2024-004', subject: 'Staffing Reallocation Memo', category: 'HR', status: 'Returned', timeline: 60, totalDays: 21 },
];

const DocumentRegistry: React.FC = () => {
    return (
        <section class="bento-card overflow-hidden !p-0">
            <div class="border-b border-gray-200 dark:border-[#282f43] px-6 py-4 flex flex-wrap items-center justify-between gap-4">
                <div class="flex items-center gap-2">
                    <span class="material-symbols-outlined text-primary">inventory_2</span>
                    <h2 class="text-lg font-bold">Document Registry</h2>
                </div>
                <div class="flex bg-gray-100 dark:bg-[#131620] p-1 rounded-lg">
                    <button class="px-4 py-1.5 bg-white dark:bg-[#282f43] rounded-md text-xs font-bold shadow-sm text-primary transition-all">Incoming Files</button>
                    <button class="px-4 py-1.5 text-xs font-medium text-text-muted hover:text-gray-900 dark:hover:text-white transition-all">Completed Registry</button>
                </div>
            </div>
            
            <div class="overflow-x-auto">
                <table class="w-full text-left text-sm">
                    <thead class="bg-gray-50 dark:bg-[#1a1f2b] text-text-muted font-medium uppercase text-xs">
                        <tr>
                            <th class="px-6 py-3 font-semibold tracking-wider">Ref No</th>
                            <th class="px-6 py-3 font-semibold tracking-wider">Subject</th>
                            <th class="px-6 py-3 font-semibold tracking-wider">Status</th>
                            <th class="px-6 py-3 font-semibold tracking-wider w-1/4">Timeline Progress</th>
                            <th class="px-6 py-3 font-semibold tracking-wider text-right">Total Days</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 dark:divide-[#282f43]">
                        {documents.map((doc) => (
                            <tr key={doc.refNo} class="hover:bg-gray-50 dark:hover:bg-[#1a1f2b]/50 transition-colors group">
                                <td class="px-6 py-4 font-mono text-xs text-text-muted">{doc.refNo}</td>
                                <td class="px-6 py-4">
                                    <div class="font-medium text-gray-900 dark:text-white">{doc.subject}</div>
                                    <div class="flex gap-1 mt-1">
                                        <span class="text-[10px] bg-gray-100 dark:bg-gray-700 px-1.5 rounded text-gray-500">{doc.category}</span>
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    <span class={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium 
                                        ${doc.status === 'Pending Review' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' : 
                                          doc.status === 'Approved' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300' :
                                          'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'}`}>
                                        <span class={`size-1.5 rounded-full ${doc.status === 'Pending Review' ? 'bg-blue-500' : doc.status === 'Approved' ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                                        {doc.status}
                                    </span>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="flex flex-col gap-1">
                                        <div class="flex justify-between text-[10px] text-text-muted uppercase">
                                            <span>Rcvd</span>
                                            <span>Proc</span>
                                            <span>Ret</span>
                                            <span>{doc.status === 'Approved' ? 'Done' : 'Pend'}</span>
                                        </div>
                                        <div class="flex h-1.5 w-full rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                                            <div class="bg-emerald-500" style={{ width: `${doc.timeline}%` }}></div>
                                            {doc.status !== 'Approved' && <div class="bg-blue-500 w-1/4 animate-pulse"></div>}
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 text-right font-mono">{doc.totalDays.toString().padStart(2, '0')}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            <div class="px-6 py-3 border-t border-gray-200 dark:border-[#282f43] bg-gray-50 dark:bg-[#1a1f2b] flex items-center justify-between text-xs text-text-muted">
                <span>Showing 3 of 128 documents</span>
                <div class="flex gap-2">
                    <button class="hover:text-primary disabled:opacity-50" disabled>Previous</button>
                    <button class="hover:text-primary">Next</button>
                </div>
            </div>
        </section>
    );
};

export default DocumentRegistry;