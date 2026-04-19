import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { mockPayments } from '../../data/mockData';
import { Button } from '../../components/Button';
import { Badge } from '../../components/Badge';
import { CreditCard, DollarSign, Lock } from 'lucide-react';
export function Payments() {
  const { user } = useAuth();
  // In a real app, we'd filter by employerId via project. For mock, we just use all.
  const payments = mockPayments;
  const totalSpent = payments.
  filter((p) => p.status === 'released').
  reduce((acc, curr) => acc + curr.amount, 0);
  const inEscrow = payments.
  filter((p) => p.status === 'held').
  reduce((acc, curr) => acc + curr.amount, 0);
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-navy-900">Payments & Escrow</h1>
        <p className="text-gray-600">
          Manage your project funds and milestone releases.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center space-x-4">
          <div className="p-3 rounded-full bg-green-100 text-green-600">
            <DollarSign size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Total Released</p>
            <p className="text-2xl font-bold text-navy-900">
              ${totalSpent.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center space-x-4">
          <div className="p-3 rounded-full bg-amber-100 text-amber-600">
            <Lock size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Funds in Escrow</p>
            <p className="text-2xl font-bold text-navy-900">
              ${inEscrow.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center space-x-4">
          <div className="p-3 rounded-full bg-blue-100 text-blue-600">
            <CreditCard size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Payment Methods</p>
            <p className="text-lg font-bold text-navy-900">
              Visa ending in 4242
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-bold text-navy-900">Payment History</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-sm text-gray-500">
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Project</th>
                <th className="p-4 font-medium">Milestone</th>
                <th className="p-4 font-medium">Amount</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {payments.map((payment) =>
              <tr key={payment.id} className="hover:bg-gray-50">
                  <td className="p-4 text-sm text-gray-600">
                    {new Date(payment.date).toLocaleDateString()}
                  </td>
                  <td className="p-4 text-sm font-medium text-navy-900">
                    {payment.project?.job?.title}
                  </td>
                  <td className="p-4 text-sm text-gray-600">
                    {payment.milestone?.title}
                  </td>
                  <td className="p-4 text-sm font-bold text-navy-900">
                    ${payment.amount.toLocaleString()}
                  </td>
                  <td className="p-4">
                    <Badge
                    variant={
                    payment.status === 'released' ? 'success' : 'warning'
                    }>
                    
                      {payment.status === 'held' ?
                    'IN ESCROW' :
                    payment.status.toUpperCase()}
                    </Badge>
                  </td>
                  <td className="p-4 text-right">
                    {payment.status === 'held' ?
                  <Button size="sm" variant="outline">
                        Release Funds
                      </Button> :

                  <span className="text-sm text-gray-400">Receipt</span>
                  }
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>);

}