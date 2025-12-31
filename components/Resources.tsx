import React from 'react';

const Resources: React.FC = () => {
    return (
        <div class="bento-card flex flex-col h-full">
            <div class="flex items-center justify-between mb-4">
                <h3 class="font-bold text-lg flex items-center gap-2">
                    <span class="material-symbols-outlined text-primary">folder_open</span>
                    Active Resources
                </h3>
                <div class="flex items-center gap-3">
                    <button class="text-gray-400 hover:text-primary dark:text-gray-500 dark:hover:text-white transition-colors">
                        <span class="material-symbols-outlined text-[18px]">edit</span>
                    </button>
                    <button class="text-xs font-medium text-primary hover:underline">View Drive</button>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
                {/* Recent Files */}
                <div class="flex flex-col gap-2">
                    <h4 class="text-xs font-bold text-text-muted uppercase tracking-wider mb-2 flex items-center gap-2">
                        Recent Files
                        <span class="bg-gray-100 dark:bg-[#282f43] text-gray-500 px-1.5 py-0.5 rounded text-[10px]">2</span>
                    </h4>
                    <div class="flex flex-col gap-3">
                        <div class="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-[#282f43] border border-transparent hover:border-gray-200 dark:hover:border-gray-600 transition-all group cursor-pointer">
                            <div class="size-10 rounded-lg bg-red-100 dark:bg-red-900/20 text-red-600 flex items-center justify-center shrink-0">
                                <span class="material-symbols-outlined">picture_as_pdf</span>
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="text-sm font-medium truncate text-gray-900 dark:text-white group-hover:text-primary transition-colors">Housing_Draft_v4.pdf</p>
                                <div class="flex items-center gap-2 mt-0.5">
                                    <p class="text-xs text-text-muted">Modified 2h ago</p>
                                    <span class="text-[10px] bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 px-1 rounded">PDF</span>
                                </div>
                            </div>
                            <span class="text-accent-teal material-symbols-outlined text-sm" title="Synced">cloud_done</span>
                        </div>

                        <div class="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-[#282f43] border border-transparent hover:border-gray-200 dark:hover:border-gray-600 transition-all group cursor-pointer">
                            <div class="size-10 rounded-lg bg-green-100 dark:bg-green-900/20 text-green-600 flex items-center justify-center shrink-0">
                                <span class="material-symbols-outlined">table_chart</span>
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="text-sm font-medium truncate text-gray-900 dark:text-white group-hover:text-primary transition-colors">Q3_Budget_Analysis.xlsx</p>
                                <div class="flex items-center gap-2 mt-0.5">
                                    <p class="text-xs text-text-muted">Syncing...</p>
                                    <span class="text-[10px] bg-green-50 dark:bg-green-900/10 text-green-600 dark:text-green-400 px-1 rounded">XLSX</span>
                                </div>
                            </div>
                            <span class="text-gray-400 material-symbols-outlined text-sm animate-spin" title="Syncing">sync</span>
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div class="flex flex-col gap-2 lg:border-l lg:border-gray-100 dark:lg:border-gray-700 lg:pl-6">
                    <div class="flex items-center justify-between mb-2">
                        <h4 class="text-xs font-bold text-text-muted uppercase tracking-wider flex items-center gap-1">Quick Links</h4>
                        <button class="size-6 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-[#282f43] text-primary transition-colors" title="Add Link">
                            <span class="material-symbols-outlined text-sm">add</span>
                        </button>
                    </div>
                    <div class="grid grid-cols-2 gap-4 h-full content-start">
                        <div class="space-y-2">
                            <div class="flex items-center justify-between group">
                                <span class="text-[10px] font-bold text-primary bg-blue-50 dark:bg-blue-900/20 px-2 py-0.5 rounded border border-blue-100 dark:border-blue-900/30 uppercase tracking-wide">Portals</span>
                            </div>
                            <ul class="space-y-1">
                                <li class="relative flex items-center gap-2 group/link cursor-pointer hover:bg-gray-50 dark:hover:bg-[#282f43] p-1.5 rounded-lg transition-colors">
                                    <div class="size-1.5 rounded-full bg-gray-300 group-hover/link:bg-primary transition-colors"></div>
                                    <span class="text-xs font-medium text-gray-600 dark:text-gray-300 group-hover/link:text-primary transition-colors truncate">HR Connect</span>
                                    <span class="absolute right-1 opacity-0 group-hover/link:opacity-100 material-symbols-outlined text-[12px] text-gray-400">arrow_outward</span>
                                </li>
                                <li class="relative flex items-center gap-2 group/link cursor-pointer hover:bg-gray-50 dark:hover:bg-[#282f43] p-1.5 rounded-lg transition-colors">
                                    <div class="size-1.5 rounded-full bg-gray-300 group-hover/link:bg-primary transition-colors"></div>
                                    <span class="text-xs font-medium text-gray-600 dark:text-gray-300 group-hover/link:text-primary transition-colors truncate">Intranet</span>
                                    <span class="absolute right-1 opacity-0 group-hover/link:opacity-100 material-symbols-outlined text-[12px] text-gray-400">arrow_outward</span>
                                </li>
                            </ul>
                        </div>
                        <div class="space-y-2">
                             <div class="flex items-center justify-between group">
                                <span class="text-[10px] font-bold text-accent-amber bg-amber-50 dark:bg-amber-900/20 px-2 py-0.5 rounded border border-amber-100 dark:border-amber-900/30 uppercase tracking-wide">Ref.</span>
                            </div>
                            <ul class="space-y-1">
                                <li class="relative flex items-center gap-2 group/link cursor-pointer hover:bg-gray-50 dark:hover:bg-[#282f43] p-1.5 rounded-lg transition-colors">
                                    <div class="size-1.5 rounded-full bg-gray-300 group-hover/link:bg-accent-amber transition-colors"></div>
                                    <span class="text-xs font-medium text-gray-600 dark:text-gray-300 group-hover/link:text-accent-amber transition-colors truncate">Legislation</span>
                                </li>
                                <li class="relative flex items-center gap-2 group/link cursor-pointer hover:bg-gray-50 dark:hover:bg-[#282f43] p-1.5 rounded-lg transition-colors">
                                    <div class="size-1.5 rounded-full bg-gray-300 group-hover/link:bg-accent-amber transition-colors"></div>
                                    <span class="text-xs font-medium text-gray-600 dark:text-gray-300 group-hover/link:text-accent-amber transition-colors truncate">Hansard</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resources;