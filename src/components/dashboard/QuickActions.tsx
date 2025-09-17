import { Button } from '@/components/ui/button';
import { Plus, Hotel, Car, Utensils, Mountain } from 'lucide-react';

const quickActions = [
  {
    label: 'Create New Quotation',
    icon: Plus,
    variant: 'hero' as const,
  },
  {
    label: 'Add Hotel',
    icon: Hotel,
    variant: 'outline' as const,
  },
  {
    label: 'Add Car',
    icon: Car,
    variant: 'outline' as const,
  },
  {
    label: 'Add Meal',
    icon: Utensils,
    variant: 'outline' as const,
  },
  {
    label: 'Add Activity',
    icon: Mountain,
    variant: 'outline' as const,
  },
];

export function QuickActions() {
  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-3">
        {quickActions.map((action, index) => {
          const Icon = action.icon;
          
          return (
            <Button
              key={index}
              variant={action.variant}
              size="lg"
              className="font-medium"
            >
              <Icon className="h-5 w-5" />
              {action.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
}