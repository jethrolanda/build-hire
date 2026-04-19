import React from 'react';
import { MessagingView } from '../../components/MessagingView';
export function ContractorMessages() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-navy-900">Messages</h1>
        <p className="text-gray-600">
          Communicate with employers regarding your projects.
        </p>
      </div>
      <MessagingView />
    </div>);

}