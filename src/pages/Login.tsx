import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { GraduationCap, Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch {
      toast({ title: 'Login Failed', description: 'Invalid email or password.', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground mb-4">
            <GraduationCap className="h-7 w-7" />
          </div>
          <h1 className="text-2xl font-bold font-heading">IMS Noida</h1>
          <p className="text-muted-foreground text-sm mt-1">College Management System</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="font-heading">Sign In</CardTitle>
            <CardDescription>Enter your credentials to access the portal</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@ims.edu" value={email} onChange={e => setEmail(e.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input id="password" type={showPassword ? 'text' : 'password'} placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} required />
                  <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>

            <div className="mt-6 p-3 rounded-lg bg-muted">
              <p className="text-xs font-medium mb-2">Demo Accounts:</p>
              <div className="grid grid-cols-2 gap-1 text-[11px] text-muted-foreground">
                <span>superadmin@ims.edu</span><span>admin123</span>
                <span>admin@ims.edu</span><span>admin123</span>
                <span>teacher@ims.edu</span><span>teacher123</span>
                <span>student@ims.edu</span><span>student123</span>
                <span>accountant@ims.edu</span><span>acc123</span>
                <span>librarian@ims.edu</span><span>lib123</span>
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-4">
              Don't have an account? <Link to="/register" className="text-primary hover:underline">Register</Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
