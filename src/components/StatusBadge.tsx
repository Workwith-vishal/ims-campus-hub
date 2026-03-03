import { Badge } from '@/components/ui/badge';

const statusStyles: Record<string, string> = {
  active: 'bg-success/10 text-success border-success/20',
  inactive: 'bg-muted text-muted-foreground border-muted',
  graduated: 'bg-info/10 text-info border-info/20',
  present: 'bg-success/10 text-success border-success/20',
  absent: 'bg-destructive/10 text-destructive border-destructive/20',
  late: 'bg-warning/10 text-warning border-warning/20',
  paid: 'bg-success/10 text-success border-success/20',
  pending: 'bg-warning/10 text-warning border-warning/20',
  overdue: 'bg-destructive/10 text-destructive border-destructive/20',
  available: 'bg-success/10 text-success border-success/20',
  'all-issued': 'bg-destructive/10 text-destructive border-destructive/20',
  scheduled: 'bg-info/10 text-info border-info/20',
  ongoing: 'bg-warning/10 text-warning border-warning/20',
  completed: 'bg-success/10 text-success border-success/20',
  pass: 'bg-success/10 text-success border-success/20',
  fail: 'bg-destructive/10 text-destructive border-destructive/20',
  urgent: 'bg-destructive/10 text-destructive border-destructive/20',
  general: 'bg-muted text-muted-foreground border-muted',
  academic: 'bg-primary/10 text-primary border-primary/20',
  exam: 'bg-warning/10 text-warning border-warning/20',
  event: 'bg-info/10 text-info border-info/20',
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <Badge variant="outline" className={`capitalize text-xs ${statusStyles[status] || ''}`}>
      {status.replace(/[-_]/g, ' ')}
    </Badge>
  );
}
