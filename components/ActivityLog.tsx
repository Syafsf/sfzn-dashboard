import React, { useState } from 'react';
import { Activity } from '../types';

const initialActivities: Activity[] = [
    {
        id: '1',
        title: 'Stakeholder Alignment',
        timestamp: 'Today, 09:00 AM',
        description: 'Meeting with the Department of Housing regarding the new affordability framework draft.',
        tags: [
            { label: 'Meeting', color: 'text-blue-600 bg-blue-50 dark:bg-blue-900/30' },
            { label: 'Ext', color: 'text-purple-600 bg-purple-50 dark:bg-purple-900/30' }
        ],
        icon: 'groups',
        iconColorClass: 'text-primary',
        iconBgClass: 'bg-blue-50 dark:bg-blue-900/20',
        borderColorClass: 'border-blue-100 dark:border-blue-900/50'
    },
    {
        id: '2',
        title: 'Drafting Section 4.2',
        timestamp: 'Yesterday, 11:30 AM',
        description: 'Concentrated work on the legislative clauses for tenant protections.',
        tags: [
            { label: 'Deep Work', color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-900/30' }
        ],
        icon: 'edit_document',
        iconColorClass: 'text-indigo-600',
        iconBgClass: 'bg-indigo-50 dark:bg-indigo-900/20',
        borderColorClass: 'border-indigo-100 dark:border-indigo-900/50'
    },
    {
        id: '3',
        title: 'Internal Correspondence',
        timestamp: 'Oct 24, 02:15 PM',
        description: "Cleared inbox and responded to urgent queries from the Minister's office.",
        tags: [
            { label: 'Admin', color: 'text-orange-600 bg-orange-50 dark:bg-orange-900/30' }
        ],
        icon: 'mail',
        iconColorClass: 'text-orange-600',
        iconBgClass: 'bg-orange-50 dark:bg-orange-900/20',
        borderColorClass: 'border-orange-100 dark:border-orange-900/50'
    },
    {
        id: '4',
        title: 'Literature Review',
        timestamp: 'Oct 23, 04:00 PM',
        description: 'Reviewing academic papers on rent control impacts across EU member states.',
        tags: [
            { label: 'Research', color: 'text-teal-600 bg-teal-50 dark:bg-teal-900/30' }
        ],
        icon: 'library_books',
        iconColorClass: 'text-teal-600',
        iconBgClass: 'bg-teal-50 dark:bg-teal-900/20',
        borderColorClass: 'border-teal-100 dark:border-teal-900/50'
    }
];

const ActivityLog: React.FC = () => {
    const [activities, setActivities] = useState<Activity[]>(initialActivities);
    const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState<Activity | null>(null);
    const [isSaving, setIsSaving] = useState(false);

    const handleActivityClick = (activity: Activity) => {
        setSelectedActivity(activity);
        setFormData(activity);
        setIsEditing(false);
    };

    const handleCloseModal = () => {
        setSelectedActivity(null);
        setFormData(null);
        setIsEditing(false);
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleDiscard = () => {
        setFormData(selectedActivity);
        setIsEditing(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (!formData) return;
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = async () => {
        if (!formData) return;
        setIsSaving(true);

        // Simulate backend API call
        await new Promise(resolve => setTimeout(resolve, 800));

        setActivities(prev => prev.map(a => a.id === formData.id ? formData : a));
        setSelectedActivity(formData); // Update the modal view with new data
        setIsEditing(false);
        setIsSaving(false);
    };

    return (
        <>
            <div class="bento-card overflow-hidden group h-full">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="font-bold text-lg flex items-center gap-2">
                        <span class="material-symbols-outlined text-primary">history</span>
                        What I Have Done So Far
                    </h3>
                    <div class="flex items-center gap-3">
                        <button class="text-gray-400 hover:text-primary dark:text-gray-500 dark:hover:text-white transition-colors" title="Edit Card">
                            <span class="material-symbols-outlined text-[18px]">edit</span>
                        </button>
                        <button class="text-xs font-medium text-primary hover:underline">View Full Log</button>
                    </div>
                </div>
                <div class="relative flex-1 overflow-y-auto scrollbar-thin pr-2 space-y-6 pl-2">
                    <div class="absolute left-[27px] top-2 bottom-0 w-[2px] bg-gray-200 dark:bg-[#282f43]"></div>
                    
                    {activities.map((activity) => (
                        <div key={activity.id} class="relative flex gap-4 group/item">
                            <div class={`relative z-10 size-14 rounded-xl ${activity.iconBgClass} ${activity.iconColorClass} flex items-center justify-center shrink-0 border ${activity.borderColorClass} shadow-sm`}>
                                <span class="material-symbols-outlined">{activity.icon}</span>
                            </div>
                            <div class="flex-1 py-1">
                                <div class="flex justify-between items-start">
                                    <button 
                                        onClick={() => handleActivityClick(activity)}
                                        class="font-semibold text-gray-900 dark:text-white group-hover/item:text-primary hover:underline text-left transition-colors"
                                    >
                                        {activity.title}
                                    </button>
                                    <span class="text-xs text-text-muted bg-gray-100 dark:bg-[#282f43] px-2 py-1 rounded-md whitespace-nowrap">{activity.timestamp}</span>
                                </div>
                                <p class="text-sm text-text-muted mt-1 line-clamp-2">{activity.description}</p>
                                <div class="mt-2 flex gap-2">
                                    {activity.tags.map(tag => (
                                        <span key={tag.label} class={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${tag.color}`}>
                                            {tag.label}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedActivity && formData && (
                <div class="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={handleCloseModal}></div>
                    <div class="relative bg-white dark:bg-[#1f2937] rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col max-h-[90vh]">
                        {/* Modal Header */}
                        <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between bg-gray-50/50 dark:bg-[#252b3b]">
                            <h3 class="text-lg font-bold text-gray-900 dark:text-white">
                                {isEditing ? 'Edit Activity' : 'Activity Details'}
                            </h3>
                            <button onClick={handleCloseModal} class="text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors">
                                <span class="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div class="p-6 overflow-y-auto scrollbar-thin">
                            {isEditing ? (
                                <div class="space-y-4">
                                    <div>
                                        <label class="block text-xs font-bold text-text-muted uppercase tracking-wider mb-1">Title</label>
                                        <input 
                                            name="title"
                                            value={formData.title}
                                            onChange={handleInputChange}
                                            class="w-full rounded-lg bg-gray-50 dark:bg-[#131620] border-gray-200 dark:border-gray-700 text-sm focus:ring-primary focus:border-primary p-2.5"
                                        />
                                    </div>
                                    <div>
                                        <label class="block text-xs font-bold text-text-muted uppercase tracking-wider mb-1">Timestamp</label>
                                        <input 
                                            name="timestamp"
                                            value={formData.timestamp}
                                            onChange={handleInputChange}
                                            class="w-full rounded-lg bg-gray-50 dark:bg-[#131620] border-gray-200 dark:border-gray-700 text-sm focus:ring-primary focus:border-primary p-2.5"
                                        />
                                    </div>
                                    <div>
                                        <label class="block text-xs font-bold text-text-muted uppercase tracking-wider mb-1">Description</label>
                                        <textarea 
                                            name="description"
                                            value={formData.description}
                                            onChange={handleInputChange}
                                            rows={4}
                                            class="w-full rounded-lg bg-gray-50 dark:bg-[#131620] border-gray-200 dark:border-gray-700 text-sm focus:ring-primary focus:border-primary p-2.5 resize-none"
                                        />
                                    </div>
                                    {/* Icon & Tags editing could be added here, kept simple for now */}
                                    <div class="p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-200 text-xs border border-amber-100 dark:border-amber-900/30">
                                        Note: Tag editing is disabled in this demo.
                                    </div>
                                </div>
                            ) : (
                                <div class="space-y-6">
                                    <div class="flex items-center gap-4">
                                        <div class={`size-16 rounded-2xl ${selectedActivity.iconBgClass} ${selectedActivity.iconColorClass} flex items-center justify-center shrink-0 border ${selectedActivity.borderColorClass} shadow-sm`}>
                                            <span class="material-symbols-outlined text-3xl">{selectedActivity.icon}</span>
                                        </div>
                                        <div>
                                            <h4 class="text-xl font-bold text-gray-900 dark:text-white leading-tight">{selectedActivity.title}</h4>
                                            <p class="text-sm text-text-muted mt-1">{selectedActivity.timestamp}</p>
                                        </div>
                                    </div>
                                    
                                    <div class="prose dark:prose-invert text-sm text-gray-600 dark:text-gray-300">
                                        <p>{selectedActivity.description}</p>
                                    </div>

                                    <div class="flex flex-wrap gap-2 pt-2">
                                        {selectedActivity.tags.map(tag => (
                                            <span key={tag.label} class={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md ${tag.color}`}>
                                                {tag.label}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Modal Footer */}
                        <div class="px-6 py-4 bg-gray-50 dark:bg-[#1e2330] border-t border-gray-100 dark:border-gray-700 flex items-center justify-end gap-3">
                            {isEditing ? (
                                <>
                                    <button 
                                        onClick={handleDiscard}
                                        disabled={isSaving}
                                        class="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"
                                    >
                                        Discard
                                    </button>
                                    <button 
                                        onClick={handleSave}
                                        disabled={isSaving}
                                        class="px-4 py-2 rounded-lg text-sm font-bold text-white bg-primary hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all flex items-center gap-2 disabled:opacity-70"
                                    >
                                        {isSaving && <span class="material-symbols-outlined text-sm animate-spin">sync</span>}
                                        {isSaving ? 'Saving...' : 'Save Changes'}
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button 
                                        onClick={handleCloseModal}
                                        class="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                    >
                                        Close
                                    </button>
                                    <button 
                                        onClick={handleEditClick}
                                        class="px-4 py-2 rounded-lg text-sm font-bold text-white bg-primary hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all flex items-center gap-2"
                                    >
                                        <span class="material-symbols-outlined text-sm">edit</span>
                                        Edit Entry
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ActivityLog;