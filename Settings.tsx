import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useAuth } from '../contexts/AuthContext';
import { User, CreditCard, Bell, Shield, LogOut } from 'lucide-react';

export function Settings() {
  const [activeTab, setActiveTab] = useState('profile');
  const { user, logout, updateUser } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Settings</h1>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="space-y-2">
            <TabButton
              active={activeTab === 'profile'}
              onClick={() => setActiveTab('profile')}
              icon={<User size={20} />}
            >
              Profile
            </TabButton>
            <TabButton
              active={activeTab === 'billing'}
              onClick={() => setActiveTab('billing')}
              icon={<CreditCard size={20} />}
            >
              Billing
            </TabButton>
            <TabButton
              active={activeTab === 'notifications'}
              onClick={() => setActiveTab('notifications')}
              icon={<Bell size={20} />}
            >
              Notifications
            </TabButton>
            <TabButton
              active={activeTab === 'security'}
              onClick={() => setActiveTab('security')}
              icon={<Shield size={20} />}
            >
              Security
            </TabButton>
            <button
              onClick={logout}
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-950 transition-colors"
            >
              <LogOut size={20} />
              Log Out
            </button>
          </div>

          {/* Content */}
          <div className="md:col-span-3">
            {activeTab === 'profile' && <ProfileSettings user={user} updateUser={updateUser} />}
            {activeTab === 'billing' && <BillingSettings user={user} />}
            {activeTab === 'notifications' && <NotificationSettings />}
            {activeTab === 'security' && <SecuritySettings />}
          </div>
        </div>
      </div>
    </div>
  );
}

function TabButton({ active, onClick, icon, children }: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
        active
          ? 'bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400'
          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
      }`}
    >
      {icon}
      {children}
    </button>
  );
}

function ProfileSettings({ user, updateUser }: { user: any; updateUser: (updates: any) => void }) {
  const [name, setName] = useState(user?.name || '');
  const [company, setCompany] = useState(user?.company || '');

  const handleSave = () => {
    updateUser({ name, company });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Input
          label="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label="Email"
          value={user?.email}
          disabled
          helperText="Contact support to change your email"
        />
        <Input
          label="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <Button onClick={handleSave}>Save Changes</Button>
      </CardContent>
    </Card>
  );
}

function BillingSettings({ user }: { user: any }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Billing & Subscription</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Current Plan</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white capitalize">
            {user?.subscription?.plan || 'Free'}
          </p>
        </div>

        <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-700 dark:text-gray-300">Status</span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300">
              Active
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700 dark:text-gray-300">Next billing date</span>
            <span className="text-gray-900 dark:text-white">
              {new Date(user?.subscription?.currentPeriodEnd).toLocaleDateString()}
            </span>
          </div>
        </div>

        <div className="flex gap-4">
          <Button variant="outline">Change Plan</Button>
          <Button variant="outline">Billing History</Button>
        </div>
      </CardContent>
    </Card>
  );
}

function NotificationSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Preferences</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <NotificationToggle
          label="Email notifications"
          description="Receive email updates about your scans"
          defaultChecked
        />
        <NotificationToggle
          label="Weekly reports"
          description="Get weekly revenue insights via email"
          defaultChecked
        />
        <NotificationToggle
          label="Product updates"
          description="Stay informed about new features"
        />
        <Button>Save Preferences</Button>
      </CardContent>
    </Card>
  );
}

function SecuritySettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Security Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Change Password</h3>
          <div className="space-y-4">
            <Input type="password" label="Current Password" />
            <Input type="password" label="New Password" />
            <Input type="password" label="Confirm New Password" />
            <Button>Update Password</Button>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Two-Factor Authentication</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Add an extra layer of security to your account
          </p>
          <Button variant="outline">Enable 2FA</Button>
        </div>
      </CardContent>
    </Card>
  );
}

function NotificationToggle({ label, description, defaultChecked = false }: {
  label: string;
  description: string;
  defaultChecked?: boolean;
}) {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-800">
      <div>
        <p className="font-medium text-gray-900 dark:text-white">{label}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </div>
      <button
        onClick={() => setChecked(!checked)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          checked ? 'bg-indigo-600' : 'bg-gray-200 dark:bg-gray-700'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            checked ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
}
