import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { mockProjects, mockMilestones } from '../../data/mockData';
import { Button } from '../../components/Button';
import { Badge } from '../../components/Badge';
import {
  ClipboardCheck,
  CheckCircle,
  Circle,
  Clock,
  Upload } from
'lucide-react';
export function ContractorProjects() {
  const { user } = useAuth();
  const myProjects = mockProjects.filter((p) => p.contractorId === user?.id);
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-navy-900">Active Projects</h1>
        <p className="text-gray-600">
          Manage your ongoing work and submit milestones for payment.
        </p>
      </div>

      {myProjects.length > 0 ?
      <div className="space-y-8">
          {myProjects.map((project) => {
          const projectMilestones = mockMilestones.filter(
            (m) => m.projectId === project.id
          );
          const completedCount = projectMilestones.filter(
            (m) => m.status === 'completed' || m.status === 'approved'
          ).length;
          const progress =
          projectMilestones.length > 0 ?
          Math.round(completedCount / projectMilestones.length * 100) :
          0;
          return (
            <div
              key={project.id}
              className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              
                <div className="p-6 border-b border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-1">
                      {project.job?.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Employer:{' '}
                      <span className="font-medium text-gray-900">
                        {project.employer?.name}
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <Badge variant="primary" className="mb-2">
                      IN PROGRESS
                    </Badge>
                    <div className="text-sm font-medium text-navy-900">
                      Earned: ${project.amountPaid.toLocaleString()} / $
                      {project.totalAmount.toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gray-50 border-b border-gray-200">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-gray-700">
                      Overall Progress
                    </span>
                    <span className="font-bold text-navy-900">{progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                    className="bg-amber-500 h-2.5 rounded-full"
                    style={{
                      width: `${progress}%`
                    }}>
                  </div>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="font-bold text-navy-900 mb-6">Milestones</h4>
                  <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                    {projectMilestones.map((milestone) =>
                  <div
                    key={milestone.id}
                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-gray-100 text-gray-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                          {milestone.status === 'approved' ?
                      <CheckCircle size={20} className="text-green-500" /> :
                      milestone.status === 'completed' ?
                      <CheckCircle size={20} className="text-amber-500" /> :
                      milestone.status === 'in-progress' ?
                      <Clock size={20} className="text-blue-500" /> :

                      <Circle size={20} />
                      }
                        </div>

                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                          <div className="flex justify-between items-start mb-1">
                            <h5 className="font-bold text-navy-900">
                              {milestone.title}
                            </h5>
                            <span className="text-sm font-bold text-amber-600">
                              ${milestone.amount.toLocaleString()}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">
                            {milestone.description}
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-500">
                              Due:{' '}
                              {new Date(milestone.dueDate).toLocaleDateString()}
                            </span>
                            <Badge
                          variant={
                          milestone.status === 'approved' ?
                          'success' :
                          milestone.status === 'completed' ?
                          'warning' :
                          milestone.status === 'in-progress' ?
                          'info' :
                          'neutral'
                          }>
                          
                              {milestone.status.toUpperCase()}
                            </Badge>
                          </div>
                          {milestone.status === 'in-progress' &&
                      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                              <button className="text-sm text-amber-600 hover:text-amber-700 flex items-center font-medium">
                                <Upload size={16} className="mr-1" /> Upload
                                Deliverable
                              </button>
                              <Button size="sm">Submit for Approval</Button>
                            </div>
                      }
                        </div>
                      </div>
                  )}
                  </div>
                </div>
              </div>);

        })}
        </div> :

      <div className="bg-white p-12 rounded-xl border border-gray-200 text-center shadow-sm">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
            <ClipboardCheck size={28} className="text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-navy-900 mb-2">
            No active projects
          </h3>
          <p className="text-gray-500">
            You don't have any projects in progress right now.
          </p>
        </div>
      }
    </div>);

}