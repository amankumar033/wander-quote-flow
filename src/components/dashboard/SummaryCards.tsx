import { Card, CardContent } from '@/components/ui/card';
import { FileText, TrendingUp, Users, IndianRupee, ArrowUp, UserPlus } from 'lucide-react';

const summaryData = [
  {
    title: 'Total Quotations',
    value: '42',
    change: '+12% from last month',
    changeType: 'positive' as const,
    icon: FileText,
    color: 'text-primary',
  },
  {
    title: 'Conversion Rate',
    value: '68%',
    subtitle: '14 won / 28 sent',
    icon: TrendingUp,
    color: 'text-success',
  },
  {
    title: 'Active Clients',
    value: '28',
    change: '3 new today',
    changeType: 'positive' as const,
    icon: Users,
    color: 'text-info',
    changeIcon: UserPlus,
  },
  {
    title: 'Revenue Estimate',
    value: '₹2,48,500',
    subtitle: 'From won quotations',
    icon: IndianRupee,
    color: 'text-warning',
  },
];

export function SummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
      {summaryData.map((item, index) => {
        const Icon = item.icon;
        const ChangeIcon = item.changeIcon || ArrowUp;
        
        return (
          <Card key={index} className="group hover:shadow-lg transition-all duration-200 hover:-translate-y-1 bg-gradient-to-br from-card to-card/80">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                    {item.title}
                  </p>
                  <p className="text-3xl font-bold text-foreground">
                    {item.value}
                  </p>
                  {item.change && (
                    <p className={`text-sm flex items-center gap-1 ${
                      item.changeType === 'positive' ? 'text-success' : 'text-muted-foreground'
                    }`}>
                      {item.changeType === 'positive' && <ChangeIcon className="h-4 w-4" />}
                      {item.change}
                    </p>
                  )}
                  {item.subtitle && (
                    <p className="text-sm text-muted-foreground">
                      {item.subtitle}
                    </p>
                  )}
                </div>
                <div className={`p-3 rounded-full bg-background/50 ${item.color} group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}