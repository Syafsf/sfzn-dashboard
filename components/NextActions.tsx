import React, { useState } from 'react';
import { Task } from '../types';

const initialTasks: Task[] = [
    { id: '1', title: 'Review Briefing', priority: 'DONE', completed: true },
    { id: '2', title: 'Email Policy Manager', priority: 'HIGH', description: 'Regarding EOW deadline extension.', completed: false },
    { id: '3', title: 'Draft Annex B', priority: 'MED', description: 'Include statistical analysis.', completed: false },
    { id: '4', title: 'Team Sync Prep', priority: 'LOW', completed: false },
];

const NextActions: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>(initialTasks);

    const toggleTask = (id: string) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    const getPriorityColor = (p?: string) => {
        switch (p) {
            case 'HIGH': return 'text-red-600 bg-red-100 dark:bg-red-900/30';
            case 'MED': return 'text-amber-600 bg-amber-100 dark:bg-amber-900/30';
            case 'LOW': return 'text-blue-600 bg-blue-100 dark:bg-blue-900/30';
            case 'DONE': return 'text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30';
            default: return 'text-gray-600 bg-gray-100';
        }
    };

    return (
        <div class="bento-card h-full">
            <div class="flex items-center justify-between mb-4">
                <h3 class="font-bold text-lg flex items-center gap-2">
                    <span class="material-symbols-outlined text-primary">check_circle</span>
                    Next Actions
                </h3>
                <div class="flex gap-1">
                    <button class="size-6 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-[#282f43] text-gray-400 hover:text-primary dark:text-gray-500 dark:hover:text-white transition-colors">
                        <span class="material-symbols-outlined text-sm">edit</span>
                    </button>
                    <button class="size-6 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-[#282f43] transition-colors">
                        <span class="material-symbols-outlined text-sm">add</span>
                    </button>
                </div>
            </div>
            
            <div class="flex-1 overflow-y-auto scrollbar-thin space-y-2">
                {tasks.map((task) => (
                    <div key={task.id} class={`group flex items-start gap-3 p-3 rounded-xl border transition-all cursor-move ${task.completed ? 'bg-gray-50 dark:bg-[#282f43] border-transparent hover:border-gray-200 dark:hover:border-gray-600' : 'bg-white dark:bg-[#1e30] border-gray-100 dark:border-[#374151] shadow-sm hover:shadow-md'}`}>
                        <span class="material-symbols-outlined text-gray-400 cursor-grab mt-0.5 text-sm">drag_indicator</span>
                        <div class="flex-1">
                            <div class="flex justify-between mb-1">
                                <span class={`text-sm font-medium ${task.completed ? 'line-through text-gray-400' : ''}`}>{task.title}</span>
                                {task.priority && (
                                    <span class={`text-[10px] font-bold px-1.5 py-0.5 rounded ${getPriorityColor(task.priority)}`}>
                                        {task.priority}
                                    </span>
                                )}
                            </div>
                            {task.description && <p class="text-xs text-text-muted">{task.description}</p>}
                        </div>
                        <input 
                            type="checkbox" 
                            checked={task.completed} 
                            onChange={() => toggleTask(task.id)}
                            class="rounded text-primary focus:ring-primary bg-gray-100 dark:bg-[#282f43] border-gray-300 dark:border-gray-600"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NextActions;