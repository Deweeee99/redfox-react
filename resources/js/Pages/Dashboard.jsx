import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react'; // (Gunakan ini di Laravel asli Tuan)
import { 
    LayoutDashboard, Rss, TrendingUp, Activity, Network, 
    Users, ShieldAlert, Search, FileText, Download, 
    Settings, Bell, ChevronDown, LogOut, User,
    Globe, MessageCircle, Heart, Share2, Eye, MapPin, Calendar, CheckCircle2, AlertTriangle, Database, Server
} from 'lucide-react';

export default function Dashboard({ auth }) {
    // Nah, ini "otak" buat ngebuka-tutup menu profile
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    
    // Pengaman data user biar gak crash layar putih
    const userName = auth?.user?.name || 'Agent Rahasia';
    const userEmail = auth?.user?.email || 'agent@redfox.osint';

    return (
        <div className="flex h-screen bg-[#0a0f1c] text-slate-300 font-sans overflow-hidden selection:bg-blue-500/30">
            {<Head title="Dashboard | AIRA OSINT" />}

            {/* --- SIDEBAR --- */}
            <aside className="w-64 bg-[#0d1425] border-r border-slate-800 flex flex-col transition-all duration-300 z-20 shrink-0">
                <div className="h-16 flex items-center px-6 border-b border-slate-800 mb-4">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-400 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20">
                            A
                        </div>
                        <span className="text-white font-bold text-lg tracking-wide">ANTASENA</span>
                    </div>
                </div>

                <nav className="flex-1 overflow-y-auto px-3 space-y-1 custom-scrollbar">
                    <NavItem icon={<LayoutDashboard size={18} />} label="Dashboard" active />
                    <NavItem icon={<Rss size={18} />} label="Intelligence Feed" />
                    <NavItem icon={<TrendingUp size={18} />} label="Trend Analysis" />
                    <NavItem icon={<Activity size={18} />} label="Sentiment Monitoring" />
                    <NavItem icon={<Network size={18} />} label="Entity Correlation" />
                    <NavItem icon={<Users size={18} />} label="Social Network Analysis" />
                    <NavItem icon={<ShieldAlert size={18} />} label="Threat Intelligence" />
                    <NavItem icon={<Search size={18} />} label="OSINT Explorer" />
                    <div className="my-4 border-t border-slate-800/50"></div>
                    <NavItem icon={<FileText size={18} />} label="Reports" />
                    <NavItem icon={<Download size={18} />} label="Downloads" />
                    <NavItem icon={<Settings size={18} />} label="Settings" />
                </nav>
            </aside>

            {/* --- MAIN CONTENT AREA --- */}
            <div className="flex-1 flex flex-col overflow-hidden relative">
                
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

                {/* TOPBAR */}
                <header className="h-16 shrink-0 flex items-center justify-between px-6 border-b border-slate-800/60 bg-[#0a0f1c]/80 backdrop-blur-md z-10">
                    <h1 className="text-2xl font-bold text-white tracking-tight">Dashboard</h1>
                    
                    <div className="flex items-center gap-6">
                        <div className="relative group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-teal-400 transition-colors" size={16} />
                            <input 
                                type="text" 
                                placeholder="Search Search..." 
                                className="bg-[#131b2f] border border-slate-700/50 text-sm rounded-full pl-10 pr-4 py-2 w-72 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all text-slate-200 placeholder-slate-500"
                            />
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="text-slate-400 hover:text-white transition-colors relative">
                                <Bell size={20} />
                                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#0a0f1c]"></span>
                            </button>
                            <div className="h-6 w-px bg-slate-700"></div>
                            
                            {/* --- INTERAKTIF PROFILE DROPDOWN --- */}
                            <div className="relative">
                                {/* Tombol Trigger (Bisa diklik) */}
                                <div 
                                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                                    className="flex items-center gap-3 cursor-pointer hover:bg-slate-800/50 py-1 px-2 rounded-lg transition-colors select-none"
                                >
                                    <div className="w-8 h-8 rounded-full bg-slate-600 border border-slate-500 overflow-hidden flex-shrink-0">
                                        <div className="w-full h-full bg-gradient-to-tr from-slate-700 to-slate-500 flex justify-center items-end">
                                            <UserIcon />
                                        </div>
                                    </div>
                                    <div className="hidden md:block text-left">
                                        <p className="text-sm font-medium text-white leading-tight capitalize">{userName}</p>
                                         <p className="text-[10px] text-slate-400">Agent Status: Active</p>
                                    </div>
                                    {/* Panahnya ikutan muter kalau menu lagi kebuka */}
                                    <ChevronDown size={14} className={`text-slate-500 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
                                </div>

                                {/* Menu Dropdown yang muncul pas diklik */}
                                {isProfileOpen && (
                                    <div className="absolute right-0 mt-3 w-48 bg-[#0d1425] border border-slate-700/50 rounded-xl shadow-2xl py-1 z-50">
                                        <div className="px-4 py-3 border-b border-slate-700/50">
                                            <p className="text-sm font-medium text-white leading-tight capitalize">{userName}</p>
                                            <p className="text-[10px] text-slate-400 mt-0.5 truncate">{userEmail}</p>
                                        </div>
                                        
                                        <div className="py-1">
                                            {/* Link ke halaman setting profile bawaan Breeze */}
                                            {/* (Note: ganti 'a' jadi 'Link' di Laravel asli) */}
                                            <a href="/profile" className="flex items-center gap-3 px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">
                                                <User size={14} /> My Profile
                                            </a>
                                            <a href="/profile" className="flex items-center gap-3 px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">
                                                <Settings size={14} /> Settings
                                            </a>
                                        </div>
                                        
                                        <div className="border-t border-slate-700/50 py-1">
                                            {/* Tombol Logout beneran! */}
                                            <button 
                                                className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-400 hover:bg-slate-800 hover:text-red-300 transition-colors"
                                            >
                                                <LogOut size={14} /> Log Out
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="flex items-center gap-2 bg-[#131b2f] border border-slate-700/50 rounded-full px-3 py-1 ml-2">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></div>
                                <span className="text-xs font-bold text-emerald-500 tracking-wider">LIVE</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* SCROLLABLE MAIN DASHBOARD */}
                <main className="flex-1 overflow-y-auto p-6 z-0 custom-scrollbar">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-6">
                        
                        {/* =========================================================
                            BAGIAN 1: EXECUTIVE SUMMARY & THREAT INTELLIGENCE
                        ========================================================= */}

                        {/* COLUMN 1 */}
                        <div className="md:col-span-3 flex flex-col gap-6">
                            <Card title="Executive Summary Cards">
                                <div className="grid grid-cols-2 gap-3 mt-4">
                                    <StatBox label="Total Mentions" value="1,662" highlight="teal" />
                                    <StatBox label="Total Engagement" value="34.7K" highlight="slate" />
                                    <StatBox label="Positive Mentions" value="5.5K" highlight="emerald" />
                                    <StatBox label="Negative Mentions" value="2.8K" highlight="red" />
                                    <StatBox label="Neutral Mentions" value="33" highlight="slate" />
                                    <StatBox label="Active Sources" value="10" trend="+2%" highlight="slate" />
                                    
                                    <div className="bg-[#131b2f] border border-slate-700/50 rounded-xl p-4 col-span-1 flex flex-col items-center justify-center relative overflow-hidden">
                                        <p className="text-xs text-slate-400 mb-2 w-full text-left">Threat Score</p>
                                        <div className="w-16 h-8 border-t-4 border-l-4 border-r-4 border-orange-500 rounded-t-full relative mt-2">
                                            <div className="absolute bottom-0 left-1/2 w-0.5 h-6 bg-white origin-bottom rotate-[30deg] -translate-x-1/2"></div>
                                        </div>
                                        <AlertTriangle size={16} className="text-orange-500 mt-2" />
                                    </div>

                                    <div className="bg-[#131b2f] border border-slate-700/50 rounded-xl p-4 col-span-1">
                                        <p className="text-xs text-slate-400 mb-1">Trending Topics</p>
                                        <p className="text-xl font-bold text-white">84 <span className="text-sm font-normal text-slate-500">Topics</span></p>
                                    </div>
                                </div>
                            </Card>

                            <Card title="AI Intelligence Summary">
                                <div className="mt-4 space-y-4">
                                    <SummaryItem title="AI Generated Issue Summary" desc="AI generated issue summary, issues risk assessment sentimentility and enterprise intelligence." />
                                    <SummaryItem title="Risk Assessment" desc="Sentiments insight, ad asseserendation." />
                                    <SummaryItem title="Sentiment Insight" desc="Sentiments insight, sentiment insight." />
                                </div>
                            </Card>
                        </div>

                        {/* COLUMN 2 */}
                        <div className="md:col-span-5 flex flex-col gap-6">
                            <Card title="Timeline Analytics" subtitle="Realtime positive, area professional charts">
                                <div className="flex items-center gap-4 mt-2 mb-4 text-xs">
                                    <Legend dotColor="bg-emerald-500" label="Positive Mentions" />
                                    <Legend dotColor="bg-red-500" label="Negative Mentions" />
                                    <Legend dotColor="bg-slate-400" label="Neutral Mentions" />
                                </div>
                                <div className="h-48 w-full border-b border-l border-slate-700/50 relative mt-4">
                                    <div className="absolute -left-6 top-0 text-[10px] text-slate-500 h-full flex flex-col justify-between py-2">
                                        <span>120</span><span>100</span><span>80</span><span>60</span><span>40</span><span>20</span><span>0</span>
                                    </div>
                                    <div className="absolute -bottom-6 w-full flex justify-between text-[10px] text-slate-500 px-2">
                                        <span>Jan 19</span><span>May 12</span><span>May 21</span><span>Sep 23</span><span>Sep 24</span><span>Nov 21</span><span>Mar 25</span>
                                    </div>
                                    
                                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                                        <path d="M0,80 Q10,70 20,80 T40,60 T60,70 T80,40 T100,50 L100,100 L0,100 Z" fill="url(#gradGreen)" opacity="0.4" />
                                        <path d="M0,80 Q10,70 20,80 T40,60 T60,70 T80,40 T100,50" fill="none" stroke="#10b981" strokeWidth="1" />
                                        
                                        <path d="M0,90 Q15,80 30,95 T50,85 T70,90 T90,75 T100,80 L100,100 L0,100 Z" fill="url(#gradRed)" opacity="0.4" />
                                        <path d="M0,90 Q15,80 30,95 T50,85 T70,90 T90,75 T100,80" fill="none" stroke="#ef4444" strokeWidth="1" />
                                        
                                        <defs>
                                            <linearGradient id="gradGreen" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#10b981" />
                                                <stop offset="100%" stopColor="transparent" />
                                            </linearGradient>
                                            <linearGradient id="gradRed" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#ef4444" />
                                                <stop offset="100%" stopColor="transparent" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </Card>

                            <Card title="Threat & Alert Center" className="flex-1">
                                <div className="mt-4 space-y-3">
                                    <AlertItem type="critical" title="Critical Alerts" />
                                    <AlertItem type="anomaly" title="Anomaly Detections" />
                                    <AlertItem type="suspicious" title="Suspicious Activity Log" />
                                    <AlertItem type="bot" title="Bot Detection" />
                                </div>
                                <button className="w-full text-center text-xs text-slate-500 hover:text-white mt-6 transition-colors">Show more ∨</button>
                            </Card>
                        </div>

                        {/* COLUMN 3 */}
                        <div className="md:col-span-4 flex flex-col gap-6">
                            <Card title="Source Distribution Panel" subtitle="Modern radial professional charts">
                                <div className="grid grid-cols-4 gap-4 mt-6">
                                    <RadialChart percentage={90} color="text-red-500" label="Youtube" />
                                    <RadialChart percentage={57} color="text-fuchsia-500" label="Instagram" />
                                    <RadialChart percentage={75} color="text-blue-400" label="X/Twitter" />
                                    <RadialChart percentage={20} color="text-teal-500" label="News" />
                                    <RadialChart percentage={12} color="text-slate-400" label="TikTok" />
                                    <RadialChart percentage={10} color="text-blue-600" label="Facebook" />
                                    <RadialChart percentage={12} color="text-sky-500" label="Telegram" />
                                    <RadialChart percentage={6} color="text-orange-400" label="Forums" />
                                </div>
                            </Card>

                            <Card title="Trending Topics" subtitle="Keyword spikes at keyword spike detection">
                                <div className="mt-4 flex flex-wrap justify-center gap-2 items-center p-4">
                                    <span className="text-slate-500 text-xs">#fanatics</span>
                                    <span className="text-teal-400 text-sm">#hashtagting</span>
                                    <span className="text-slate-600 text-[10px]">#quotes</span>
                                    <span className="text-red-400 text-sm">#honsablood</span>
                                    <span className="text-white text-xl font-bold">#Intelligget</span>
                                    <span className="text-blue-400 text-sm">#rashtagoud</span>
                                    <span className="text-slate-400 text-xs">#megains</span>
                                    <span className="text-teal-300 text-3xl font-black">#hashtagclous</span>
                                    <span className="text-slate-500 text-xs">keywords</span>
                                    <span className="text-slate-600 text-[10px]">#news</span>
                                    <span className="text-emerald-400 text-sm">#detrothate</span>
                                    <span className="text-white text-lg font-bold">#keywords</span>
                                    <span className="text-fuchsia-400 text-sm">#hashtagnow</span>
                                </div>
                            </Card>

                            <Card title="Entity Correlation Graph" subtitle="Interactive network visualization" className="flex-1">
                                <div className="mt-4 flex-1 bg-[#131b2f]/50 border border-slate-700/30 rounded-lg relative min-h-[200px] flex items-center justify-center">
                                    <svg className="absolute inset-0 w-full h-full pointer-events-none" opacity="0.3">
                                        <line x1="30%" y1="30%" x2="50%" y2="50%" stroke="#94a3b8" strokeWidth="1" />
                                        <line x1="50%" y1="50%" x2="70%" y2="30%" stroke="#94a3b8" strokeWidth="1" />
                                        <line x1="50%" y1="50%" x2="50%" y2="80%" stroke="#94a3b8" strokeWidth="1" />
                                        <line x1="30%" y1="30%" x2="30%" y2="70%" stroke="#94a3b8" strokeWidth="1" />
                                    </svg>
                                    
                                    <Node icon={<UserIcon />} label="People" top="20%" left="25%" color="bg-emerald-500/20 text-emerald-400" border="border-emerald-500/50" />
                                    <Node icon={<UserIcon />} label="People" top="40%" left="50%" color="bg-blue-500/20 text-blue-400" border="border-blue-500/50" />
                                    <Node icon={<Globe size={14}/>} label="Domains" top="70%" left="30%" color="bg-indigo-500/20 text-indigo-400" border="border-indigo-500/50" />
                                    <Node icon={<Server size={14}/>} label="IP Address" top="80%" left="60%" color="bg-slate-500/20 text-slate-300" border="border-slate-500/50" />
                                    <Node icon={<Database size={14}/>} label="Organization" top="20%" left="75%" color="bg-red-500/20 text-red-400" border="border-red-500/50" />
                                </div>
                            </Card>
                        </div>
                        
                        {/* MAP (Full Width) */}
                        <div className="md:col-span-12 mt-2">
                            <Card title="Global Intelligence Map" subtitle="Real-time geolocation tracking and mention distribution across regions" className="flex flex-col">
                                <div className="flex-1 bg-slate-800/20 rounded-xl mt-4 relative border border-slate-700/30 overflow-hidden min-h-[350px] flex items-center justify-center">
                                    <div className="absolute inset-0 opacity-30 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-cover"></div>
                                    <div className="absolute top-[40%] left-[25%] w-8 h-8 bg-red-500 rounded-full blur-[8px] animate-pulse"></div>
                                    <div className="absolute top-[30%] left-[55%] w-12 h-12 bg-orange-500 rounded-full blur-[12px] opacity-80"></div>
                                    <div className="absolute top-[50%] left-[75%] w-6 h-6 bg-yellow-400 rounded-full blur-[4px]"></div>
                                    <div className="absolute bottom-[30%] right-[20%] w-10 h-10 bg-red-600 rounded-full blur-[10px]"></div>
                                    <div className="absolute top-[20%] left-[45%] w-5 h-5 bg-teal-500 rounded-full blur-[4px]"></div>
                                </div>
                                <div className="flex items-center justify-center gap-8 mt-5 mb-2 text-xs">
                                    <Legend dotColor="bg-red-500" label="High Threat Activity" />
                                    <Legend dotColor="bg-orange-500" label="Suspicious Clusters" />
                                    <Legend dotColor="bg-teal-500" label="Monitored Entities" />
                                </div>
                            </Card>
                        </div>


                        {/* =========================================================
                            BAGIAN 2: DETAILED SOCIAL ANALYTICS (TAMBAHAN BARU)
                        ========================================================= */}
                        
                        <div className="md:col-span-12 mt-8 mb-2 border-b border-slate-800 pb-2">
                            <h2 className="text-xl font-bold text-white tracking-wide">Detailed Social Analytics</h2>
                        </div>

                        {/* --- ROW 1: SHARE OF VOICE & REACH --- */}
                        <div className="md:col-span-5">
                            <Card title="SOCIAL SHARE OF VOICE" className="h-full">
                                <div className="flex flex-col items-center justify-center mt-4">
                                    <div className="relative w-48 h-48">
                                        <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                                            {/* Youtube 61% (Red) */}
                                            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#ef4444" strokeWidth="20" strokeDasharray="61 100" />
                                            {/* Instagram 29.6% (Yellow) */}
                                            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#eab308" strokeWidth="20" strokeDasharray="29.6 100" strokeDashoffset="-61" />
                                            {/* News 9.4% (Cyan) */}
                                            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#06b6d4" strokeWidth="20" strokeDasharray="9.4 100" strokeDashoffset="-90.6" />
                                        </svg>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                                            <div className="w-12 h-12 bg-[#0a0f1c] rounded-full border-4 border-[#0d1425] flex items-center justify-center">
                                                <MessageCircle size={16} className="text-blue-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 mt-8 w-full text-[10px]">
                                        <Legend dotColor="bg-red-500" label="Youtube 61.0%" />
                                        <Legend dotColor="bg-yellow-500" label="Instagram 29.6%" />
                                        <Legend dotColor="bg-cyan-500" label="News 9.4%" />
                                        <Legend dotColor="bg-fuchsia-500" label="Blogs & Forums 0%" />
                                        <Legend dotColor="bg-blue-500" label="X (Twitter) 0%" />
                                        <Legend dotColor="bg-indigo-500" label="Facebook 0%" />
                                    </div>
                                </div>
                            </Card>
                        </div>

                        <div className="md:col-span-7 flex flex-col gap-6">
                            <Card title="POTENTIALS REACH">
                                <div className="flex justify-between items-end mt-2">
                                    <h2 className="text-4xl font-bold text-white tracking-tight">15.765.388</h2>
                                    <div className="text-right">
                                        <span className="text-emerald-500 text-sm font-bold flex items-center justify-end gap-1"><TrendingUp size={14}/> 100%</span>
                                        <span className="text-[10px] text-slate-500">vs previous period</span>
                                    </div>
                                </div>
                            </Card>

                            <Card title="REACH VS MENTIONS" className="flex-1 flex flex-col">
                                <div className="flex-1 mt-4 relative border-b border-l border-slate-700/50 min-h-[150px]">
                                    <div className="absolute bottom-0 left-[20%] w-16 h-[80%] bg-gradient-to-t from-red-600/20 to-red-500 rounded-t-sm shadow-[0_0_15px_rgba(239,68,68,0.5)]"></div>
                                    <div className="absolute bottom-0 right-[20%] w-16 h-[20%] bg-gradient-to-t from-red-600/20 to-red-500 rounded-t-sm opacity-60"></div>
                                    
                                    <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
                                        <path d="M 25 20 L 75 80" fill="none" stroke="#06b6d4" strokeWidth="2" />
                                        <circle cx="25" cy="20" r="3" fill="#06b6d4" />
                                        <circle cx="75" cy="80" r="3" fill="#06b6d4" />
                                    </svg>
                                </div>
                                <div className="flex justify-center gap-6 mt-4 text-[10px]">
                                    <Legend dotColor="bg-cyan-500" label="Mention" />
                                    <Legend dotColor="bg-red-500" label="Reach" />
                                </div>
                            </Card>
                        </div>

                        {/* --- ROW 2: TOP MENTIONS TIME & BUZZ GEO --- */}
                        <div className="md:col-span-12">
                            <Card title="TOP MENTIONS TIME" subtitle="AVERAGE DAILY MENTIONS">
                                <div className="h-64 w-full border-b border-l border-slate-700/50 relative mt-4">
                                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                                        <path d="M0,80 Q5,85 10,60 T20,40 T30,70 T40,65 T50,20 T60,30 T70,40 T80,50 T90,70 L100,85 L100,100 L0,100 Z" fill="url(#gradBlue2)" opacity="0.3" />
                                        <path d="M0,80 Q5,85 10,60 T20,40 T30,70 T40,65 T50,20 T60,30 T70,40 T80,50 T90,70 L100,85" fill="none" stroke="#3b82f6" strokeWidth="2" className="drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                                        <circle cx="10" cy="60" r="2" fill="#fff" stroke="#3b82f6" strokeWidth="1"/>
                                        <circle cx="20" cy="40" r="2" fill="#fff" stroke="#3b82f6" strokeWidth="1"/>
                                        <circle cx="30" cy="70" r="2" fill="#fff" stroke="#3b82f6" strokeWidth="1"/>
                                        <circle cx="50" cy="20" r="3" fill="#3b82f6" stroke="#fff" strokeWidth="1" className="animate-pulse shadow-[0_0_10px_#3b82f6]"/>
                                        
                                        <defs>
                                            <linearGradient id="gradBlue2" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#3b82f6" />
                                                <stop offset="100%" stopColor="transparent" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div className="absolute -bottom-6 w-full flex justify-between text-[10px] text-slate-500 px-2">
                                        <span>00:00</span><span>03:00</span><span>06:00</span><span>09:00</span><span>12:00</span><span>15:00</span><span>18:00</span><span>21:00</span>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        <div className="md:col-span-12">
                            <Card title="BUZZ GEO DISTRIBUTION (INDONESIA)">
                                <div className="w-full h-[400px] bg-slate-800/10 rounded-xl mt-4 relative border border-slate-700/30 overflow-hidden flex flex-col items-center justify-center">
                                    <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Indonesia_blank_map.svg/1024px-Indonesia_blank_map.svg.png')] bg-no-repeat bg-center bg-contain opacity-30 filter invert sepia hue-rotate-[180deg] brightness-150"></div>
                                    
                                    <div className="absolute top-[45%] left-[25%] w-10 h-10 bg-red-600 rounded-full blur-[10px] animate-pulse"></div>
                                    <div className="absolute top-[45%] left-[25%] w-2 h-2 bg-white rounded-full"></div> {/* Jakarta */}
                                    <div className="absolute top-[35%] left-[45%] w-6 h-6 bg-yellow-500 rounded-full blur-[8px]"></div> {/* Kalimantan */}
                                    <div className="absolute top-[55%] left-[35%] w-5 h-5 bg-teal-400 rounded-full blur-[6px]"></div> {/* Surabaya/Bali */}
                                    <div className="absolute top-[40%] left-[60%] w-8 h-8 bg-orange-500 rounded-full blur-[8px]"></div> {/* Sulawesi */}
                                    <div className="absolute top-[30%] left-[15%] w-4 h-4 bg-green-500 rounded-full blur-[4px]"></div> {/* Sumatera Utara */}
                                </div>
                                <div className="flex justify-center gap-6 mt-6 text-[10px] font-medium">
                                    <span className="flex items-center gap-2"><span className="text-green-500">👍</span> Positive</span>
                                    <span className="flex items-center gap-2"><span className="text-red-500">👎</span> Negative</span>
                                    <span className="flex items-center gap-2"><span className="text-yellow-500">😐</span> Neutral</span>
                                </div>
                            </Card>
                        </div>

                        {/* --- ROW 3: GENDER ESTIMATE --- */}
                        <div className="md:col-span-6">
                            <Card title="GENDER ESTIMATE BY CHANNEL">
                                <div className="mt-8 space-y-8">
                                    {/* Bar YouTube */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 flex flex-col items-center text-slate-400">
                                            <YoutubeIcon size={24} className="text-red-500 mb-1"/>
                                            <span className="text-[10px]">YouTube</span>
                                        </div>
                                        <div className="flex-1 flex h-10 rounded overflow-hidden text-xs font-bold text-white text-center leading-10 shadow-lg">
                                            <div className="bg-[#06b6d4] w-[80.6%]">80.6%</div>
                                            <div className="bg-[#ef4444] w-[19.4%]">19.4%</div>
                                        </div>
                                        <div className="w-16 text-right text-xs font-medium text-slate-300">433 users</div>
                                    </div>
                                    
                                    {/* Bar Instagram */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 flex flex-col items-center text-slate-400">
                                            <div className="w-6 h-6 rounded bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 p-[1px] mb-1">
                                                <div className="bg-[#0d1425] w-full h-full rounded flex items-center justify-center"><InstagramIcon size={14} className="text-white"/></div>
                                            </div>
                                            <span className="text-[10px]">Instagram</span>
                                        </div>
                                        <div className="flex-1 flex h-10 rounded overflow-hidden text-xs font-bold text-white text-center leading-10 shadow-lg">
                                            <div className="bg-[#06b6d4] w-[43.14%]">43.14%</div>
                                            <div className="bg-[#ef4444] w-[56.86%]">56.86%</div>
                                        </div>
                                        <div className="w-16 text-right text-xs font-medium text-slate-300">51 users</div>
                                    </div>
                                </div>
                                <div className="flex justify-center gap-6 mt-8 text-xs">
                                    <Legend dotColor="bg-[#06b6d4]" label="Male" />
                                    <Legend dotColor="bg-[#ef4444]" label="Female" />
                                </div>
                            </Card>
                        </div>
                        
                        <div className="md:col-span-6">
                            <Card title="ESTIMATE GENDER" className="h-full">
                                <div className="flex flex-col items-center justify-center mt-4">
                                    <div className="relative w-48 h-48">
                                        <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                                            <circle cx="50" cy="50" r="35" fill="transparent" stroke="#06b6d4" strokeWidth="30" strokeDasharray="77 100" />
                                            <circle cx="50" cy="50" r="35" fill="transparent" stroke="#ef4444" strokeWidth="30" strokeDasharray="23 100" strokeDashoffset="-77" />
                                        </svg>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                            <Users size={24} className="text-slate-400 mb-1" />
                                        </div>
                                        <div className="absolute top-[20%] right-[10%] text-center">
                                            <p className="text-xs text-white font-medium">Female</p>
                                            <p className="text-[10px] text-white">23%</p>
                                        </div>
                                        <div className="absolute bottom-[20%] left-[20%] text-center">
                                            <p className="text-xs text-white font-medium">Male</p>
                                            <p className="text-[10px] text-white">77%</p>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-sm text-slate-400">Total : <span className="text-white font-bold">484</span></p>
                                </div>
                            </Card>
                        </div>

                        {/* --- ROW 4: MENTIONS, WORDCLOUD, HASHTAGS --- */}
                        <div className="md:col-span-6 flex flex-col gap-6">
                            <Card title="POPULAR MENTIONS" className="flex-1">
                                <div className="mt-4 space-y-4">
                                    <MentionItem initial="IB" color="bg-cyan-600" name="seblak kecap" handle="@seblakk" date="May 12, 2026 21:30" text="#43 with, kasel lagunya beneran menggambarkan kalula 😭 #au #alter..." views="36.979" retweets="1.373" likes="38.352" />
                                    <div className="border-t border-slate-800"></div>
                                    <MentionItem initial="YU" color="bg-blue-600" name="yuppie ❌" handle="@yuppiexx" date="May 12, 2026 15:52" text="kemana, ya? #alternativeniverse #au #rekomendasiau #foryou #foryoup..." views="32.476" retweets="65" likes="32.541" />
                                    <div className="border-t border-slate-800"></div>
                                    <MentionItem initial="BO" color="bg-indigo-600" name="ubi 📸" handle="@ubiubi" date="May 12, 2026 17:16" text="NP - 26 #aamsocamotra #fakesituation #iustfiksi..." views="24.163" retweets="1.210" likes="25.373" />
                                </div>
                                <button className="w-full text-center text-xs text-slate-500 hover:text-teal-400 mt-6 pt-4 border-t border-slate-800 transition-colors">View All Mentions →</button>
                            </Card>
                        </div>

                        <div className="md:col-span-6 flex flex-col gap-6">
                            <Card title="ANALYTIC WORDCLOUD">
                                <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 items-center p-6 bg-[#0a0f1c]/50 rounded-xl min-h-[200px] text-center leading-none">
                                    <span className="text-emerald-500 text-3xl font-bold">pesawat</span>
                                    <span className="text-indigo-400 text-5xl font-black">tni</span>
                                    <span className="text-cyan-400 text-4xl font-bold">au</span>
                                    <span className="text-red-500 text-5xl font-black">iran</span>
                                    <span className="text-fuchsia-400 text-3xl font-bold">militer</span>
                                    <span className="text-cyan-500 text-3xl font-bold">indonesia</span>
                                    <span className="text-yellow-500 text-lg">pertahanan</span>
                                    <span className="text-green-400 text-sm">alternativeniverse</span>
                                    <span className="text-blue-400 text-xl">presiden</span>
                                    <span className="text-red-400 text-xl">amerika</span>
                                    <span className="text-slate-400 text-sm">konflik</span>
                                    <span className="text-orange-400 text-sm">orang</span>
                                    <span className="text-purple-400 text-sm">pantai</span>
                                    <span className="text-teal-400 text-lg">data</span>
                                    <span className="text-yellow-400 text-sm">laporan</span>
                                    <span className="text-slate-500 text-xs">strategis</span>
                                    <span className="text-pink-400 text-xs">kendaraan</span>
                                </div>
                            </Card>

                            <Card title="TOP HASHTAGS" className="flex-1">
                                <div className="mt-4 space-y-4">
                                    <HashtagRow rank="1" name="#au" count="12.532" percent="18.35%" width="w-[85%]" />
                                    <HashtagRow rank="2" name="#tni" count="9.873" percent="14.46%" width="w-[70%]" />
                                    <HashtagRow rank="3" name="#militer" count="8.451" percent="12.39%" width="w-[60%]" />
                                    <HashtagRow rank="4" name="#pesawat" count="7.125" percent="10.43%" width="w-[50%]" />
                                    <HashtagRow rank="5" name="#iran" count="6.982" percent="10.22%" width="w-[48%]" />
                                </div>
                                <button className="w-full text-center text-xs text-slate-500 hover:text-teal-400 mt-6 transition-colors">View All Hashtags →</button>
                            </Card>
                        </div>

                        {/* --- ROW 5: TOP 10 AUTHORS --- */}
                        <div className="md:col-span-12">
                            <Card title="TOP 10 AUTHORS">
                                <div className="overflow-x-auto mt-4">
                                    <table className="w-full text-left text-sm text-slate-400">
                                        <thead className="text-xs uppercase bg-slate-800/30 border-b border-slate-700/50">
                                            <tr>
                                                <th className="px-4 py-3 rounded-tl-lg">#</th>
                                                <th className="px-4 py-3">AUTHORS</th>
                                                <th className="px-4 py-3 text-center">SITE</th>
                                                <th className="px-4 py-3 text-right">MENTION</th>
                                                <th className="px-4 py-3 text-right">ENGAGEMENT</th>
                                                <th className="px-4 py-3 text-right rounded-tr-lg">FOLLOWERS</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <AuthorRow rank="1" initial="m" color="bg-fuchsia-600" name="MerdekaDotCom" site="YT" mention="1" engagement="129" followers="3.740.000" />
                                            <AuthorRow rank="2" initial="C" color="bg-blue-600" name="CNN Indonesia" site="WEB" mention="1" engagement="98" followers="2.850.000" />
                                            <AuthorRow rank="3" initial="K" color="bg-emerald-600" name="Kompas.com" site="WEB" mention="1" engagement="87" followers="2.350.000" />
                                            <AuthorRow rank="4" initial="D" color="bg-orange-600" name="detikcom" site="WEB" mention="1" engagement="76" followers="2.100.000" />
                                            <AuthorRow rank="5" initial="T" color="bg-blue-500" name="Tribunnews.com" site="WEB" mention="1" engagement="64" followers="1.890.000" />
                                        </tbody>
                                    </table>
                                </div>
                                <button className="w-full text-center text-xs text-slate-500 hover:text-teal-400 mt-4 transition-colors">View All Authors →</button>
                            </Card>
                        </div>

                    </div>
                </main>
            </div>
            
            <style dangerouslySetInnerHTML={{__html: `
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                    height: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #1e293b;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #334155;
                }
            `}} />
        </div>
    );
}

// --- SUB-COMPONENTS ---

function NavItem({ icon, label, active = false }) {
    return (
        <a href="#" className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group ${
            active 
            ? 'bg-gradient-to-r from-teal-500/20 to-blue-500/5 text-teal-400 border border-teal-500/20 relative overflow-hidden' 
            : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
        }`}>
            {active && <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-400 rounded-r-md"></div>}
            <span className={active ? 'text-teal-400' : 'text-slate-400 group-hover:text-white'}>{icon}</span>
            <span className={`text-sm ${active ? 'font-medium text-white' : ''}`}>{label}</span>
        </a>
    );
}

function Card({ title, subtitle, children, className = '' }) {
    return (
        <div className={`bg-[#0d1425] border border-slate-800 rounded-2xl p-5 shadow-xl shadow-black/20 ${className}`}>
            <div className="flex justify-between items-start mb-2">
                <div>
                    <h3 className="text-white font-semibold text-[15px] tracking-wide">{title}</h3>
                    {subtitle && <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>}
                </div>
                <button className="text-slate-500 hover:text-white">•••</button>
            </div>
            {children}
        </div>
    );
}

function StatBox({ label, value, trend, highlight }) {
    const bgColors = {
        teal: 'bg-gradient-to-br from-teal-500/20 to-blue-500/10 border-teal-500/30',
        emerald: 'bg-[#131b2f] border-slate-700/50',
        red: 'bg-[#131b2f] border-slate-700/50',
        slate: 'bg-[#131b2f] border-slate-700/50',
    };
    const textColors = {
        teal: 'text-white',
        emerald: 'text-emerald-400',
        red: 'text-red-400',
        slate: 'text-white',
    };

    return (
        <div className={`border rounded-xl p-4 flex flex-col justify-center ${bgColors[highlight] || bgColors.slate}`}>
            <p className="text-xs text-slate-400 mb-1 flex items-center gap-1.5">
                {highlight === 'emerald' && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>}
                {highlight === 'red' && <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>}
                {label}
            </p>
            <div className="flex items-baseline gap-2">
                <p className={`text-2xl font-bold ${textColors[highlight] || 'text-white'}`}>{value}</p>
                {trend && <span className="text-[10px] font-medium text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">{trend}</span>}
            </div>
        </div>
    );
}

function SummaryItem({ title, desc }) {
    return (
        <div className="border-b border-slate-800/50 pb-3 last:border-0 last:pb-0">
            <h4 className="text-sm font-medium text-slate-200 mb-1">{title}</h4>
            <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
        </div>
    );
}

function AlertItem({ type, title }) {
    const styles = {
        critical: 'bg-red-500/10 border-red-500/20 text-red-400',
        anomaly: 'bg-slate-800/50 border-slate-700/50 text-slate-300',
        suspicious: 'bg-slate-800/50 border-slate-700/50 text-slate-300',
        bot: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
    };
    
    return (
        <div className={`flex items-center justify-between p-3 rounded-lg border ${styles[type]}`}>
            <div className="flex items-center gap-3">
                {type === 'critical' && <AlertTriangle size={16} className="text-red-500" />}
                {type === 'anomaly' && <Activity size={16} className="text-indigo-400" />}
                {type === 'suspicious' && <ShieldAlert size={16} className="text-orange-400" />}
                {type === 'bot' && <CheckCircle2 size={16} className="text-emerald-500" />}
                <span className="text-sm font-medium">{title}</span>
            </div>
            {type === 'critical' && <span className="w-5 h-5 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center font-bold">1</span>}
            {type === 'bot' && <span className="w-2 h-2 rounded-full bg-emerald-500"></span>}
        </div>
    );
}

function RadialChart({ percentage, color, label }) {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="relative w-12 h-12 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none" stroke="#1e293b" strokeWidth="3"
                    />
                    <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none" stroke="currentColor" strokeWidth="3"
                        strokeDasharray={`${percentage}, 100`}
                        className={color}
                    />
                </svg>
                <span className="absolute text-[10px] font-bold text-white">{percentage}%</span>
            </div>
            <span className="text-[10px] text-slate-400 text-center">{label}</span>
        </div>
    );
}

function Node({ icon, label, top, left, color, border }) {
    return (
        <div className={`absolute flex flex-col items-center gap-1 -translate-x-1/2 -translate-y-1/2`} style={{ top, left }}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${color} ${border} shadow-lg backdrop-blur-sm z-10`}>
                {icon}
            </div>
            <span className="text-[10px] text-slate-400 bg-[#0a0f1c]/80 px-1.5 rounded">{label}</span>
        </div>
    );
}

function Legend({ dotColor, label }) {
    return (
        <div className="flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${dotColor}`}></span>
            <span className="text-slate-400">{label}</span>
        </div>
    );
}

function MentionItem({ initial, color, name, handle, date, text, views, retweets, likes }) {
    return (
        <div className="flex gap-4">
            <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-sm ${color}`}>{initial}</div>
            <div className="flex-1">
                <div className="flex justify-between items-start">
                    <div>
                        <span className="text-white font-bold text-sm mr-2">{name}</span>
                        <span className="text-slate-500 text-xs hidden sm:inline-block">{handle}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-500 text-[10px]">
                        <Calendar size={12} /> {date}
                    </div>
                </div>
                <p className="text-slate-300 text-xs mt-2 line-clamp-2 leading-relaxed">{text}</p>
                <div className="flex items-center gap-6 mt-3 text-slate-500 text-[10px]">
                    <span className="flex items-center gap-1.5"><Eye size={12}/> {views}</span>
                    <span className="flex items-center gap-1.5"><MessageCircle size={12}/> 0</span>
                    <span className="flex items-center gap-1.5"><Share2 size={12}/> {retweets}</span>
                    <span className="flex items-center gap-1.5"><Heart size={12}/> {likes}</span>
                </div>
            </div>
        </div>
    );
}

function HashtagRow({ rank, name, count, percent, width }) {
    return (
        <div className="flex items-center justify-between text-xs">
            <div className="w-4 text-slate-500">{rank}</div>
            <div className="w-24 text-white font-medium truncate">{name}</div>
            <div className="w-16 text-right text-slate-400">{count}</div>
            <div className="w-16 text-right text-slate-400">{percent}</div>
            <div className="flex-1 ml-4 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className={`h-full bg-blue-500 rounded-full ${width}`}></div>
            </div>
        </div>
    );
}

function AuthorRow({ rank, initial, color, name, site, mention, engagement, followers }) {
    return (
        <tr className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
            <td className="px-4 py-3">{rank}</td>
            <td className="px-4 py-3 font-medium text-white flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${color}`}>{initial}</div>
                {name}
            </td>
            <td className="px-4 py-3 text-center text-slate-500">
                {site === 'YT' ? <YoutubeIcon size={16} className="mx-auto"/> : <Globe size={16} className="mx-auto"/>}
            </td>
            <td className="px-4 py-3 text-right text-white">{mention}</td>
            <td className="px-4 py-3 text-right text-white">{engagement}</td>
            <td className="px-4 py-3 text-right text-slate-400">{followers}</td>
        </tr>
    );
}

function UserIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    )
}

function YoutubeIcon({ className, size = 24 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M2.25 8.905C2.25 7.151 3.67 5.732 5.424 5.732h13.152c1.754 0 3.174 1.419 3.174 3.173v6.19c0 1.754-1.42 3.174-3.174 3.174H5.424c-1.754 0-3.174-1.42-3.174-3.174v-6.19zM9.75 15.02l5.75-3.27-5.75-3.27v6.54z" />
        </svg>
    );
}

function InstagramIcon({ className, size = 24 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
    );
}