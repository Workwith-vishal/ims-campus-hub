import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Plus, ChevronLeft, ChevronRight, Pencil, Trash2 } from 'lucide-react';
import { useState, useMemo } from 'react';

interface Column<T> {
  key: keyof T | string;
  label: string;
  render?: (item: T) => React.ReactNode;
}

interface Props<T> {
  data: T[];
  columns: Column<T>[];
  searchKey?: keyof T;
  title: string;
  onAdd?: () => void;
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
  addLabel?: string;
  pageSize?: number;
}

export function DataTable<T extends { id: string }>({ data, columns, searchKey, title, onAdd, onEdit, onDelete, addLabel = 'Add New', pageSize = 10 }: Props<T>) {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);

  const filtered = useMemo(() => {
    if (!search || !searchKey) return data;
    return data.filter(item => String(item[searchKey]).toLowerCase().includes(search.toLowerCase()));
  }, [data, search, searchKey]);

  const totalPages = Math.ceil(filtered.length / pageSize);
  const paged = filtered.slice(page * pageSize, (page + 1) * pageSize);
  const showActions = !!(onEdit || onDelete);

  return (
    <div className="data-table-container">
      <div className="flex items-center justify-between p-4 border-b">
        <h3 className="font-heading font-semibold text-lg">{title}</h3>
        <div className="flex items-center gap-3">
          {searchKey && (
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(0); }}
                className="pl-9 w-[200px] h-9"
              />
            </div>
          )}
          {onAdd && (
            <Button size="sm" onClick={onAdd} className="gap-1.5">
              <Plus className="h-4 w-4" />
              {addLabel}
            </Button>
          )}
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((col) => (
              <TableHead key={String(col.key)} className="font-heading text-xs uppercase tracking-wider">
                {col.label}
              </TableHead>
            ))}
            {showActions && (
              <TableHead className="font-heading text-xs uppercase tracking-wider text-right">Actions</TableHead>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {paged.length === 0 ? (
            <TableRow>
              <TableCell colSpan={columns.length + (showActions ? 1 : 0)} className="text-center py-8 text-muted-foreground">
                No records found
              </TableCell>
            </TableRow>
          ) : (
            paged.map((item) => (
              <TableRow key={item.id} className="hover:bg-muted/50 transition-colors">
                {columns.map((col) => (
                  <TableCell key={String(col.key)}>
                    {col.render ? col.render(item) : String((item as Record<string, unknown>)[String(col.key)] ?? '')}
                  </TableCell>
                ))}
                {showActions && (
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      {onEdit && (
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => onEdit(item)}>
                          <Pencil className="h-3.5 w-3.5" />
                        </Button>
                      )}
                      {onDelete && (
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive" onClick={() => onDelete(item)}>
                          <Trash2 className="h-3.5 w-3.5" />
                        </Button>
                      )}
                    </div>
                  </TableCell>
                )}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      {totalPages > 1 && (
        <div className="flex items-center justify-between p-4 border-t">
          <p className="text-sm text-muted-foreground">
            Showing {page * pageSize + 1}-{Math.min((page + 1) * pageSize, filtered.length)} of {filtered.length}
          </p>
          <div className="flex gap-1">
            <Button variant="outline" size="icon" className="h-8 w-8" disabled={page === 0} onClick={() => setPage(p => p - 1)}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8" disabled={page >= totalPages - 1} onClick={() => setPage(p => p + 1)}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
