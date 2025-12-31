import React from 'react';

const Notes: React.FC = () => {
    return (
        <div class="bento-card bg-yellow-50 dark:bg-yellow-900/10 border-yellow-200 dark:border-yellow-900/30 relative flex flex-col group h-full">
            <div class="flex items-center justify-between mb-2">
                <h3 class="font-bold text-yellow-800 dark:text-yellow-500 flex items-center gap-2">
                    <span class="material-symbols-outlined">lightbulb</span>
                    Notes & Insights
                </h3>
                <div class="flex gap-1 items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button class="size-6 flex items-center justify-center rounded hover:bg-yellow-200 dark:hover:bg-yellow-900/50 text-yellow-800 dark:text-yellow-500 transition-colors mr-2">
                        <span class="material-symbols-outlined text-sm">edit</span>
                    </button>
                    <button class="size-6 flex items-center justify-center rounded hover:bg-yellow-200 dark:hover:bg-yellow-900/50 text-yellow-800 dark:text-yellow-500 transition-colors">
                        <span class="material-symbols-outlined text-sm">format_bold</span>
                    </button>
                    <button class="size-6 flex items-center justify-center rounded hover:bg-yellow-200 dark:hover:bg-yellow-900/50 text-yellow-800 dark:text-yellow-500 transition-colors">
                        <span class="material-symbols-outlined text-sm">format_list_bulleted</span>
                    </button>
                </div>
            </div>

            <div class="mb-3 flex flex-wrap gap-2">
                <div class="flex items-center gap-1 bg-white/60 dark:bg-yellow-900/30 px-2 py-1 rounded text-xs text-yellow-800 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800/30">
                    <span class="material-symbols-outlined text-[14px]">sell</span>
                    <span>Policy Drafts</span>
                    <button class="hover:text-red-500 transition-colors ml-1"><span class="material-symbols-outlined text-[12px]">close</span></button>
                </div>
                <div class="flex items-center gap-1 bg-white/60 dark:bg-yellow-900/30 px-2 py-1 rounded text-xs text-yellow-800 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800/30">
                    <span class="material-symbols-outlined text-[14px]">group_work</span>
                    <span>Brainstorming</span>
                    <button class="hover:text-red-500 transition-colors ml-1"><span class="material-symbols-outlined text-[12px]">close</span></button>
                </div>
                <button class="flex items-center gap-1 px-2 py-1 rounded text-xs text-yellow-700 dark:text-yellow-500 hover:bg-yellow-200/50 dark:hover:bg-yellow-900/30 transition-colors border border-transparent hover:border-yellow-200 dark:hover:border-yellow-800/30">
                    <span class="material-symbols-outlined text-[14px]">add</span>
                    <span>Add Tag</span>
                </button>
                <div class="ml-auto flex items-center gap-2">
                    <span class="text-[10px] uppercase font-bold text-yellow-800/60 dark:text-yellow-500/60">Group:</span>
                    <select class="bg-transparent border-none text-xs font-medium text-yellow-900 dark:text-yellow-400 focus:ring-0 p-0 pr-6 cursor-pointer hover:bg-yellow-100/50 dark:hover:bg-yellow-900/20 rounded">
                        <option>Housing Project</option>
                        <option>General</option>
                    </select>
                </div>
            </div>

            <div class="flex-1 relative">
                <textarea 
                    class="w-full h-full bg-transparent border-none resize-none focus:ring-0 p-0 text-sm text-gray-800 dark:text-yellow-100 placeholder-yellow-800/40 dark:placeholder-yellow-100/30 leading-relaxed min-h-[100px]" 
                    placeholder="Quick thoughts from the meeting..."
                ></textarea>
            </div>
            
            <div class="absolute bottom-2 right-2 text-[10px] text-yellow-800/40 dark:text-yellow-500/40 font-mono">
                Last saved: 2m ago
            </div>
        </div>
    );
};

export default Notes;