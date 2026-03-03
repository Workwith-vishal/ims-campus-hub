import { mockLectures } from '@/data/mockData';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function LecturesPage() {
  const { toast } = useToast();

  return (
    <div>
      <div className="page-header flex items-start justify-between">
        <div>
          <h1 className="page-title">Lecture Notes</h1>
          <p className="page-description">Access and manage lecture materials</p>
        </div>
        <Button className="gap-1.5" onClick={() => toast({ title: 'Upload', description: 'File upload coming with Lovable Cloud' })}>
          <Upload className="h-4 w-4" /> Upload Notes
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockLectures.map(note => (
          <Card key={note.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-sm mb-1">{note.title}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{note.subject} · {note.teacher}</p>
                  <p className="text-xs text-muted-foreground mb-3">{note.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-muted-foreground">{note.fileSize} · {note.uploadDate}</span>
                    <Button variant="ghost" size="sm" className="h-7 gap-1 text-xs">
                      <Download className="h-3 w-3" /> Download
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
