import { mockNotices } from '@/data/mockData';
import { Card, CardContent } from '@/components/ui/card';
import { StatusBadge } from '@/components/StatusBadge';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function NoticesPage() {
  const { toast } = useToast();

  return (
    <div>
      <div className="page-header flex items-start justify-between">
        <div>
          <h1 className="page-title">Notices</h1>
          <p className="page-description">Campus announcements and updates</p>
        </div>
        <Button className="gap-1.5" onClick={() => toast({ title: 'Create Notice', description: 'Form coming with Lovable Cloud integration' })}>
          <Plus className="h-4 w-4" /> New Notice
        </Button>
      </div>

      <div className="space-y-4">
        {mockNotices.map(notice => (
          <Card key={notice.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-5">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-heading font-semibold">{notice.title}</h3>
                <StatusBadge status={notice.category} />
              </div>
              <p className="text-sm text-muted-foreground mb-3">{notice.content}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>By {notice.author}</span>
                <span>{notice.date}</span>
                <span>For: {notice.targetAudience.map(r => r.replace('_', ' ')).join(', ')}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
