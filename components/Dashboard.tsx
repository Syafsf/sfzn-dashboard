import React, { useState, useRef } from 'react';
import ActivityLog from './ActivityLog';
import { Scorecard, Blockers, FocusAllocation, StatusUpdate, EnergyChart, PendingReview } from './Widgets';
import NextActions from './NextActions';
import Resources from './Resources';
import Notes from './Notes';
import DocumentRegistry from './DocumentRegistry';

interface WidgetItem {
  id: string;
  component: React.ReactNode;
  className: string;
}

const initialWidgets: WidgetItem[] = [
  { id: 'activity', component: <ActivityLog />, className: 'md:col-span-2 md:row-span-2' },
  { id: 'scorecard', component: <Scorecard />, className: '' },
  { id: 'blockers', component: <Blockers />, className: '' },
  { id: 'focus', component: <FocusAllocation />, className: '' },
  { id: 'status', component: <StatusUpdate />, className: '' },
  { id: 'actions', component: <NextActions />, className: 'md:col-span-1 md:row-span-2' },
  { id: 'resources', component: <Resources />, className: 'md:col-span-2' },
  { id: 'notes', component: <Notes />, className: 'md:col-span-2' },
  { id: 'energy', component: <EnergyChart />, className: '' },
  { id: 'pending', component: <PendingReview />, className: '' },
];

const Dashboard: React.FC = () => {
    const [widgets, setWidgets] = useState<WidgetItem[]>(initialWidgets);
    const dragItem = useRef<number | null>(null);
    const dragOverItem = useRef<number | null>(null);

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, position: number) => {
        dragItem.current = position;
        e.dataTransfer.effectAllowed = "move";
        // Make the drag ghost transparent or use a custom image if desired
        // e.dataTransfer.setDragImage(e.currentTarget, 0, 0); 
    };

    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>, position: number) => {
        dragOverItem.current = position;
        e.preventDefault();
        
        // Basic swap preview logic
        if (dragItem.current !== null && dragItem.current !== position) {
            const newWidgets = [...widgets];
            const draggedItemContent = newWidgets[dragItem.current];
            newWidgets.splice(dragItem.current, 1);
            newWidgets.splice(position, 0, draggedItemContent);
            
            dragItem.current = position; // Update drag index to new position
            setWidgets(newWidgets);
        }
    };

    const handleDragEnd = () => {
        dragItem.current = null;
        dragOverItem.current = null;
    };

    return (
        <div class="flex flex-col gap-6">
            <section class="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
                <div class="flex flex-col gap-3">
                    <div class="flex flex-col md:flex-row md:items-center gap-4">
                        <h2 class="text-3xl font-bold tracking-tight">Dashboard</h2>
                        <div class="inline-flex bg-gray-100 dark:bg-[#1e2330] p-1 rounded-lg">
                            <button class="px-3 py-1 bg-white dark:bg-[#282f43] rounded shadow-sm text-xs font-semibold text-primary dark:text-white transition-all">Housing Reform</button>
                            <button class="px-3 py-1 text-xs font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all">Transport Bill</button>
                            <button class="px-3 py-1 text-xs font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all">Budget 2025</button>
                            <button class="px-3 py-1 text-xs font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all">Climate Init.</button>
                        </div>
                        <div class="h-6 w-px bg-gray-200 dark:bg-gray-700 hidden md:block"></div>
                        <span class="bg-accent-teal/10 text-accent-teal px-3 py-1 rounded-full text-xs font-bold border border-accent-teal/20 flex items-center gap-1 w-fit">
                            <span class="size-2 rounded-full bg-accent-teal animate-pulse"></span>
                            On Track
                        </span>
                    </div>
                    <p class="text-text-muted text-sm">Wednesday, October 25th • <span class="text-primary font-medium">Week 43</span></p>
                </div>

                <div class="flex-1 w-full lg:w-auto overflow-x-auto scrollbar-hide">
                    <div class="flex items-center min-w-max px-1 py-2">
                        <div class="flex items-center gap-2 text-text-muted text-sm font-medium">
                            <span class="text-primary">Research</span>
                            <span class="material-symbols-outlined text-[16px]">chevron_right</span>
                            <span class="text-primary">Drafting</span>
                            <span class="material-symbols-outlined text-[16px]">chevron_right</span>
                            <span class="text-white bg-primary px-3 py-1 rounded-lg shadow-md shadow-primary/20">Internal Review</span>
                            <span class="material-symbols-outlined text-[16px]">chevron_right</span>
                            <span>Feedback</span>
                            <span class="material-symbols-outlined text-[16px]">chevron_right</span>
                            <span>Submission</span>
                        </div>
                    </div>
                </div>

                <nav class="flex p-1 space-x-1 bg-gray-100 dark:bg-[#1e2330] rounded-xl overflow-x-auto">
                    <button class="bg-white dark:bg-[#282f43] shadow text-gray-900 dark:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap">Overview</button>
                    <button class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap">Outreach</button>
                    <button class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap">Deep Work</button>
                    <button class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap">Legislative</button>
                </nav>
            </section>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
                {widgets.map((widget, index) => (
                    <div 
                        key={widget.id}
                        draggable
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDragEnter={(e) => handleDragEnter(e, index)}
                        onDragOver={(e) => e.preventDefault()}
                        onDragEnd={handleDragEnd}
                        class={`relative group/drag ${widget.className} transition-all duration-300 ease-in-out`}
                    >
                        {/* Drag Handle Button */}
                        <button 
                            class="absolute top-2 left-2 z-30 p-1.5 bg-white/90 dark:bg-black/40 backdrop-blur-md rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-gray-400 hover:text-primary dark:hover:text-white cursor-grab active:cursor-grabbing opacity-0 group-hover/drag:opacity-100 transition-opacity"
                            title="Drag to rearrange"
                        >
                            <span class="material-symbols-outlined text-sm">drag_pan</span>
                        </button>
                        {widget.component}
                    </div>
                ))}
            </div>

            <DocumentRegistry />
        </div>
    );
};

export default Dashboard;