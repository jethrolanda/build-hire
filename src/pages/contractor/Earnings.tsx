import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { mockPayments } from '../../data/mockData';
import { Button } from '../../components/Button';
import { Badge } from '../../components/Badge';
import { Wallet, DollarSign, ArrowDownToLine } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer } from
'recharts';
export function Earnings() {
  const { user } = useAuth();
  // In a real app, filter by contractorId. Using all mock payments for demo.
  const payments = mockPayments;
  const totalEarned = payments.
  filter((p) => p.status === 'released').
  reduce((acc, curr) => acc + curr.amount, 0);
  const pending = payments.
  filter((p) => p.status === 'held').
  reduce((acc, curr) => acc + curr.amount, 0);
  const available = totalEarned; // simplified for demo
  const chartData = [
  {
    name: 'May',
    amount: 4000
  },
  {
    name: 'Jun',
    amount: 3000
  },
  {
    name: 'Jul',
    amount: 5500
  },
  {
    name: 'Aug',
    amount: 2000
  },
  {
    name: 'Sep',
    amount: 8000
  },
  {
    name: 'Oct',
    amount: 5000
  }];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-navy-900">
            Earnings & Payments
          </h1>
          <p className="text-gray-600">Track your income and withdraw funds.</p>
        </div>
        <Button icon={<ArrowDownToLine size={18} />}>Withdraw Funds</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center space-x-4">
          <div className="p-3 rounded-full bg-green-100 text-green-600">
            <Wallet size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">
              Available to Withdraw
            </p>
            <p className="text-2xl font-bold text-navy-900">
              ${available.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center space-x-4">
          <div className="p-3 rounded-full bg-amber-100 text-amber-600">
            <DollarSign size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">
              Pending (In Escrow)
            </p>
            <p className="text-2xl font-bold text-navy-900">
              ${pending.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center space-x-4">
          <div className="p-3 rounded-full bg-blue-100 text-blue-600">
            <DollarSign size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Total Earned</p>
            <p className="text-2xl font-bold text-navy-900">
              ${totalEarned.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-lg font-bold text-navy-900 mb-6">
          Earnings Overview
        </h2>
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{
                top: 5,
                right: 20,
                bottom: 5,
                left: 0
              }}>
              
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#f3f4f6" />
              
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: '#6b7280'
                }} />
              
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: '#6b7280'
                }}
                tickFormatter={(value) => `$${value}`} />
              
              <Tooltip
                cursor={{
                  fill: '#f3f4f6'
                }}
                contentStyle={{
                  borderRadius: '8px',
                  border: 'none',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }}
                formatter={(value: number) => [`$${value}`, 'Earnings']} />
              
              <Bar dataKey="amount" fill="#f59e0b" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-bold text-navy-900">
            Transaction History
          </h2>
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
                    
                      {payment.status === 'held' ? 'PENDING' : 'AVAILABLE'}
                    </Badge>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>);

}