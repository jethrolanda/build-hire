import React from 'react';
import { MessagingView } from '../../components/MessagingView';
export function EmployerMessages() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-navy-900">Messages</h1>
        <p className="text-gray-600">Communicate with your contractors.</p>
      </div>
      <MessagingView />
    </div>);

}