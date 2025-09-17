import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, CheckCircle2, UserPlus, Calendar, TrendingUp } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'quotation',
    message: 'New quotation created for',
    target: 'Rajesh Kumar',
    time: '2 hours ago',
    icon: FileText,
    color: 'text-primary',
  },
  {
    id: 2,
    type: 'status',
    message: 'Quotation',
    target: '#QT-0042',
    additional: 'marked as Won',
    time: 'Yesterday',
    icon: CheckCircle2,
    color: 'text-success',
  },
  {
    id: 3,
    type: 'client',
    message: 'New client',
    target: 'Meera Singh',
    additional: 'added',
    time: '2 days ago',
    icon: UserPlus,
    color: 'text-info',
  },
  {
    id: 4,
    type: 'meeting',
    message: 'Follow-up scheduled with',
    target: 'Arun Patel',
    time: '3 days ago',
    icon: Calendar,
    color: 'text-warning',
  },
  {
    id: 5,
    type: 'revenue',
    message: 'Monthly target',
    target: '85%',
    additional: 'achieved',
    time: '1 week ago',
    icon: TrendingUp,
    color: 'text-success',
  },
];

export function RecentActivity() {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = activity.icon;
            
            return (
              <div key={activity.id} className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/30 transition-colors">
                <div className={`p-2 rounded-full bg-background/50 ${activity.color}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground">
                    {activity.message} <span className="font-semibold">{activity.target}</span>
                    {activity.additional && ` ${activity.additional}`}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {activity.time}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}