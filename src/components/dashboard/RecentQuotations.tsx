import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Copy, Edit, ExternalLink } from 'lucide-react';

const quotations = [
  {
    id: 'QT-0001',
    clientName: 'Rajesh Kumar',
    destination: 'Goa',
    date: '12 Nov 2023',
    amount: '₹24,800',
    status: 'won',
  },
  {
    id: 'QT-0002',
    clientName: 'Meera Singh',
    destination: 'Darjeeling',
    date: '10 Nov 2023',
    amount: '₹18,500',
    status: 'pending',
  },
  {
    id: 'QT-0003',
    clientName: 'Arun Patel',
    destination: 'Kerala',
    date: '08 Nov 2023',
    amount: '₹32,400',
    status: 'sent',
  },
  {
    id: 'QT-0004',
    clientName: 'Sunita Iyer',
    destination: 'Rajasthan',
    date: '05 Nov 2023',
    amount: '₹41,200',
    status: 'lost',
  },
  {
    id: 'QT-0005',
    clientName: 'Vikram Malhotra',
    destination: 'Shimla',
    date: '02 Nov 2023',
    amount: '₹15,700',
    status: 'won',
  },
];

const statusVariants = {
  won: 'bg-success/10 text-success hover:bg-success/20',
  pending: 'bg-warning/10 text-warning hover:bg-warning/20',
  sent: 'bg-info/10 text-info hover:bg-info/20',
  lost: 'bg-destructive/10 text-destructive hover:bg-destructive/20',
};

export function RecentQuotations() {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-xl font-semibold">Recent Quotations</CardTitle>
        <Button variant="outline" size="sm">
          <ExternalLink className="h-4 w-4 mr-2" />
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-semibold">Client Name</TableHead>
                <TableHead className="font-semibold">Destination</TableHead>
                <TableHead className="font-semibold">Date</TableHead>
                <TableHead className="font-semibold">Amount</TableHead>
                <TableHead className="font-semibold">Status</TableHead>
                <TableHead className="font-semibold text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {quotations.map((quotation) => (
                <TableRow key={quotation.id} className="hover:bg-muted/30 transition-colors">
                  <TableCell className="font-medium">{quotation.clientName}</TableCell>
                  <TableCell>{quotation.destination}</TableCell>
                  <TableCell className="text-muted-foreground">{quotation.date}</TableCell>
                  <TableCell className="font-semibold">{quotation.amount}</TableCell>
                  <TableCell>
                    <Badge 
                      variant="secondary" 
                      className={statusVariants[quotation.status as keyof typeof statusVariants]}
                    >
                      {quotation.status.charAt(0).toUpperCase() + quotation.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-center gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}