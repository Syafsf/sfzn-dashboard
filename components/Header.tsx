import React from 'react';

interface HeaderProps {
    onThunder: () => void;
}

const Header: React.FC<HeaderProps> = ({ onThunder }) => {
    return (
        <header class="sticky top-0 z-50 w-full bg-white/80 dark:bg-[#131620]/80 backdrop-blur-md border-b border-gray-200 dark:border-[#282f43]">
            <div class="max-w-[1600px] mx-auto px-4 lg:px-8 py-3 flex items-center justify-between">
                <div class="flex items-center gap-4">
                    <div class="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                        <span class="material-symbols-outlined">grid_view</span>
                    </div>
                    <h1 class="text-xl font-bold tracking-tight hidden sm:block">PolicyDiary</h1>
                </div>
                
                <div class="flex-1 max-w-lg mx-4">
                    <div class="relative group">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span class="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors">search</span>
                        </div>
                        <input 
                            class="block w-full pl-10 pr-3 py-2 border-none rounded-xl bg-gray-100 dark:bg-[#282f43] text-sm focus:ring-2 focus:ring-primary placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white transition-all" 
                            placeholder="Search entries, files, or tasks..." 
                            type="text"
                        />
                    </div>
                </div>

                <div class="flex items-center gap-4">
                    <button 
                        onClick={onThunder}
                        class="flex items-center justify-center size-10 rounded-xl bg-gray-100 dark:bg-[#282f43] text-gray-500 hover:text-amber-500 dark:hover:text-amber-400 transition-colors shadow-sm hover:shadow-md"
                        title="Make it Thunder!"
                    >
                        <span class="material-symbols-outlined">thunderstorm</span>
                    </button>

                    <button class="hidden sm:flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors shadow-lg shadow-primary/20">
                        <span class="material-symbols-outlined text-[20px]">add</span>
                        <span>New Entry</span>
                    </button>
                    <button class="relative rounded-full size-10 overflow-hidden ring-2 ring-gray-200 dark:ring-[#282f43] hover:ring-primary transition-all">
                        <img 
                            alt="User Avatar" 
                            class="object-cover size-full" 
                            src="https://picsum.photos/100/100?random=user"
                        />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;