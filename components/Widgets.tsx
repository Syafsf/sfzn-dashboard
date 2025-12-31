import React, { useState } from 'react';
import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from 'recharts';

export const Scorecard: React.FC = () => {
    return (
        <div class="bento-card relative overflow-hidden h-full">
            <div class="absolute -right-4 -top-4 size-24 bg-primary/5 rounded-full blur-2xl"></div>
            <button class="absolute top-4 right-4 z-20 text-gray-400 hover:text-primary dark:text-gray-500 dark:hover:text-white transition-colors">
                <span class="material-symbols-outlined text-[18px]">edit</span>
            </button>
            <h3 class="font-bold text-sm text-text-muted uppercase tracking-wider mb-3">Weekly Scorecard</h3>
            <div class="flex items-end justify-between mb-2">
                <span class="text-4xl font-extrabold text-gray-900 dark:text-white">82%</span>
                <span class="text-xs text-accent-teal font-medium flex items-center bg-accent-teal/10 px-2 py-1 rounded mb-1">
                    <span class="material-symbols-outlined text-[14px] mr-1">trending_up</span> +5%
                </span>
            </div>
            <div class="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden flex mb-4">
                <div class="h-full bg-primary w-[50%]"></div>
                <div class="h-full bg-accent-teal w-[30%]"></div>
                <div class="h-full bg-gray-300 dark:bg-gray-600 w-[20%]"></div>
            </div>
            
            <div class="grid grid-cols-2 gap-2 mt-auto">
                <div class="bg-gray-50 dark:bg-[#282f43] p-2 rounded-lg text-center">
                    <span class="block text-xl font-bold">24</span>
                    <span class="text-[10px] text-text-muted uppercase">Emails</span>
                </div>
                <div class="bg-gray-50 dark:bg-[#282f43] p-2 rounded-lg text-center">
                    <span class="block text-xl font-bold">06</span>
                    <span class="text-[10px] text-text-muted uppercase">Drafts</span>
                </div>
            </div>

            <div class="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                <button 
                    onClick={() => alert("Add to Document Registry modal would open here.")}
                    class="w-full flex items-center justify-between p-2 rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-[#282f43] dark:hover:bg-[#323b54] transition-all group"
                >
                    <div class="flex items-center gap-3">
                        <div class="size-8 rounded-lg bg-primary text-white flex items-center justify-center shadow-sm group-hover:bg-primary-hover transition-colors">
                             <span class="material-symbols-outlined text-[20px]">add</span>
                        </div>
                        <div class="text-left">
                            <span class="block text-xs font-bold text-gray-900 dark:text-white">Registry</span>
                            <span class="block text-[10px] text-text-muted">Add document</span>
                        </div>
                    </div>
                    <span class="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors text-[18px]">chevron_right</span>
                </button>
            </div>
        </div>
    );
};

export const Blockers: React.FC = () => {
    return (
        <div class="bento-card border-accent-amber/50 dark:border-accent-amber/30 relative h-full">
            <div class="absolute top-0 left-0 w-1 h-full bg-accent-amber rounded-l-2xl"></div>
            <div class="flex items-center justify-between mb-3">
                <h3 class="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <span class="material-symbols-outlined text-accent-amber fill-current">warning</span>
                    Blockers
                </h3>
                <div class="flex items-center gap-2">
                    <button class="text-gray-400 hover:text-primary dark:text-gray-500 dark:hover:text-white transition-colors">
                        <span class="material-symbols-outlined text-[18px]">edit</span>
                    </button>
                    <span class="bg-accent-amber/10 text-accent-amber text-xs font-bold px-2 py-0.5 rounded">2 Active</span>
                </div>
            </div>
            <div class="flex flex-col gap-3">
                <div class="flex gap-3 items-start p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-[#282f43] transition-colors cursor-pointer">
                    <span class="material-symbols-outlined text-red-500 text-sm mt-0.5">error</span>
                    <div class="text-sm leading-tight">
                        <p class="font-medium">Waiting on Legal Sign-off</p>
                        <p class="text-xs text-text-muted mt-0.5">Specifically Section 12b regarding data privacy.</p>
                    </div>
                </div>
                <div class="flex gap-3 items-start p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-[#282f43] transition-colors cursor-pointer">
                    <span class="material-symbols-outlined text-accent-amber text-sm mt-0.5">schedule</span>
                    <div class="text-sm leading-tight">
                        <p class="font-medium">Budget Approval Pending</p>
                        <p class="text-xs text-text-muted mt-0.5">Delayed by Finance Dept.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const FocusAllocation: React.FC = () => {
    return (
        <div class="bento-card relative flex flex-col items-center justify-center h-full">
             <button class="absolute top-4 right-4 text-gray-400 hover:text-primary dark:text-gray-500 dark:hover:text-white transition-colors">
                <span class="material-symbols-outlined text-[18px]">edit</span>
            </button>
            <h3 class="w-full font-bold text-sm text-text-muted uppercase tracking-wider mb-2 text-left">Focus Allocation</h3>
            
            <div class="relative size-32 conic-gradient rounded-full flex items-center justify-center mb-2 shadow-lg hover:scale-105 transition-transform cursor-pointer">
                <div class="size-20 bg-card-light dark:bg-[#1e2330] rounded-full flex flex-col items-center justify-center">
                    <span class="text-xs text-text-muted">Total</span>
                    <span class="font-bold text-lg">7.5h</span>
                </div>
            </div>

            <div class="w-full flex justify-between text-xs px-2 mt-2">
                <div class="flex items-center gap-1">
                    <div class="size-2 rounded-full bg-[#1e3b8a]"></div>
                    <span>Policy</span>
                </div>
                <div class="flex items-center gap-1">
                    <div class="size-2 rounded-full bg-[#14b8a6]"></div>
                    <span>Admin</span>
                </div>
                <div class="flex items-center gap-1">
                    <div class="size-2 rounded-full bg-[#f59e0b]"></div>
                    <span>Other</span>
                </div>
            </div>
        </div>
    );
};

export const StatusUpdate: React.FC = () => {
    const [status, setStatus] = useState('');

    return (
        <div class="bento-card bg-gradient-to-br from-primary to-blue-500 text-white border-none h-full">
            <div class="flex items-center justify-between mb-2 opacity-90 w-full">
                <div class="flex items-center gap-2">
                    <span class="material-symbols-outlined text-sm">edit_note</span>
                    <h3 class="text-sm font-bold uppercase tracking-wider">Latest Update</h3>
                </div>
                <button class="text-white/70 hover:text-white transition-colors">
                    <span class="material-symbols-outlined text-[18px]">edit</span>
                </button>
            </div>
            <div class="flex-1 flex flex-col justify-end">
                <label class="sr-only" htmlFor="status-update">Quick Status Update</label>
                <textarea 
                    id="status-update"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    class="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg p-3 text-sm text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-transparent resize-none h-24 scrollbar-hide" 
                    placeholder="What are you working on right now?"
                ></textarea>
                <button 
                    onClick={() => { setStatus(''); alert('Status updated!'); }}
                    class="mt-3 w-full bg-white text-primary font-bold py-2 rounded-lg text-xs hover:bg-gray-100 transition-colors shadow-sm"
                >
                    Update Status
                </button>
            </div>
        </div>
    );
};

const energyData = [
    { time: '9am', level: 40 },
    { time: '11am', level: 60 },
    { time: '1pm', level: 90 },
    { time: '3pm', level: 50 },
    { time: '5pm', level: 30 },
];

export const EnergyChart: React.FC = () => {
    return (
        <div class="bento-card relative flex flex-col justify-between h-full min-h-[180px]">
            <div class="flex justify-between items-start">
                <h3 class="font-bold text-sm text-text-muted uppercase tracking-wider">Energy Level</h3>
                 <button class="text-gray-400 hover:text-primary dark:text-gray-500 dark:hover:text-white transition-colors">
                    <span class="material-symbols-outlined text-[18px]">edit</span>
                </button>
            </div>
            
            <div class="h-24 w-full -ml-2">
                 <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={energyData}>
                        <Tooltip 
                            cursor={{fill: 'transparent'}}
                            contentStyle={{ backgroundColor: '#1f2937', borderRadius: '8px', border: 'none', color: '#fff', fontSize: '10px' }}
                        />
                        <Bar dataKey="level" radius={[4, 4, 0, 0]}>
                            {energyData.map((entry, index) => (
                                <Cell 
                                    key={`cell-${index}`} 
                                    fill={entry.time === '1pm' ? '#1A1A1A' : entry.level > 50 ? '#bfdbfe' : '#dbeafe'} 
                                    className="dark:opacity-80"
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div class="text-center text-xs text-text-muted mt-2">Peak focus at 1:00 PM</div>
        </div>
    );
};


export const PendingReview: React.FC = () => {
    return (
        <div class="bento-card h-full">
            <div class="flex justify-between items-start mb-4">
                <h3 class="font-bold text-sm text-text-muted uppercase tracking-wider">Pending Review</h3>
                <button class="text-gray-400 hover:text-primary dark:text-gray-500 dark:hover:text-white transition-colors">
                    <span class="material-symbols-outlined text-[18px]">edit</span>
                </button>
            </div>
            <div class="flex items-center -space-x-2 overflow-hidden mb-4">
                <img alt="Team 1" class="inline-block size-10 rounded-full ring-2 ring-white dark:ring-[#1e2330] object-cover" src="https://picsum.photos/100/100?random=1"/>
                <img alt="Team 2" class="inline-block size-10 rounded-full ring-2 ring-white dark:ring-[#1e2330] object-cover" src="https://picsum.photos/100/100?random=2"/>
                <img alt="Team 3" class="inline-block size-10 rounded-full ring-2 ring-white dark:ring-[#1e2330] object-cover" src="https://picsum.photos/100/100?random=3"/>
                <div class="size-10 rounded-full ring-2 ring-white dark:ring-[#1e2330] bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-500 dark:text-gray-300">+2</div>
            </div>
            <button class="w-full py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-xs font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                Nudge All
            </button>
        </div>
    );
};