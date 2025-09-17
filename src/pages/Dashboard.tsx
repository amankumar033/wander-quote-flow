import { useState } from 'react';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { Header } from '@/components/dashboard/Header';
import { SummaryCards } from '@/components/dashboard/SummaryCards';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { RecentQuotations } from '@/components/dashboard/RecentQuotations';
import { StatusChart } from '@/components/dashboard/StatusChart';
import { RecentActivity } from '@/components/dashboard/RecentActivity';

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
      
      <div className="lg:ml-64 flex flex-col">
        <Header onSidebarToggle={toggleSidebar} />
        
        <main className="flex-1 p-4 lg:p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <SummaryCards />
            <QuickActions />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <RecentQuotations />
              </div>
              <div className="space-y-6">
                <StatusChart />
                <RecentActivity />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}