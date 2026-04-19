import React, { useState } from 'react';
import { mockConversations, mockMessages } from '../data/mockData';
import { useAuth } from '../context/AuthContext';
import { Input } from './Input';
import { Button } from './Button';
import { Search, Send, Paperclip, MessageSquare } from 'lucide-react';
export function MessagingView() {
  const { user } = useAuth();
  const [activeConvId, setActiveConvId] = useState<string | null>(
    mockConversations[0]?.id || null
  );
  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState(mockMessages);
  const activeConv = mockConversations.find((c) => c.id === activeConvId);
  const activeMessages = messages.filter(
    (m) =>
    activeConv?.participants.includes(m.senderId) &&
    activeConv?.participants.includes(m.receiverId)
  );
  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageText.trim() || !activeConv || !user) return;
    const receiverId =
    activeConv.participants.find((id) => id !== user.id) || '';
    const newMessage = {
      id: `msg-new-${Date.now()}`,
      senderId: user.id,
      receiverId,
      content: messageText,
      timestamp: new Date().toISOString(),
      read: false
    };
    setMessages([...messages, newMessage]);
    setMessageText('');
  };
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex h-[calc(100vh-12rem)] overflow-hidden">
      {/* Sidebar */}
      <div className="w-1/3 border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-100">
          <Input
            placeholder="Search messages..."
            icon={<Search size={16} />}
            className="mb-0" />
          
        </div>
        <div className="flex-1 overflow-y-auto">
          {mockConversations.map((conv) => {
            const otherParticipantId = conv.participants.find(
              (id) => id !== user?.id
            );
            // In a real app, we'd fetch the user details. For mock, we just show generic or job title
            return (
              <div
                key={conv.id}
                onClick={() => setActiveConvId(conv.id)}
                className={`p-4 border-b border-gray-50 cursor-pointer hover:bg-gray-50 transition-colors ${activeConvId === conv.id ? 'bg-amber-50 border-l-4 border-l-amber-500' : ''}`}>
                
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold text-navy-900 line-clamp-1">
                    {conv.job?.title || 'Conversation'}
                  </h4>
                  <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
                    {new Date(conv.lastMessage.timestamp).toLocaleTimeString(
                      [],
                      {
                        hour: '2-digit',
                        minute: '2-digit'
                      }
                    )}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-600 line-clamp-1">
                    {conv.lastMessage.content}
                  </p>
                  {conv.unreadCount > 0 &&
                  conv.lastMessage.senderId !== user?.id &&
                  <span className="bg-amber-500 text-white text-xs font-bold px-2 py-0.5 rounded-full ml-2">
                        {conv.unreadCount}
                      </span>
                  }
                </div>
              </div>);

          })}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-gray-50">
        {activeConv ?
        <>
            <div className="p-4 bg-white border-b border-gray-200 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-navy-900">
                  {activeConv.job?.title}
                </h3>
                <p className="text-sm text-gray-500">Project Chat</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {activeMessages.map((msg) => {
              const isMe = msg.senderId === user?.id;
              return (
                <div
                  key={msg.id}
                  className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                  
                    <div
                    className={`max-w-[70%] rounded-2xl px-4 py-2 ${isMe ? 'bg-amber-500 text-white rounded-br-none' : 'bg-white border border-gray-200 text-navy-900 rounded-bl-none'}`}>
                    
                      <p>{msg.content}</p>
                      <span
                      className={`text-xs mt-1 block ${isMe ? 'text-amber-100' : 'text-gray-400'}`}>
                      
                        {new Date(msg.timestamp).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                      </span>
                    </div>
                  </div>);

            })}
            </div>

            <div className="p-4 bg-white border-t border-gray-200">
              <form
              onSubmit={handleSend}
              className="flex items-center space-x-2">
              
                <button
                type="button"
                className="p-2 text-gray-400 hover:text-amber-500 transition-colors">
                
                  <Paperclip size={20} />
                </button>
                <Input
                fullWidth
                placeholder="Type your message..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                className="mb-0" />
              
                <Button
                type="submit"
                className="flex-shrink-0"
                disabled={!messageText.trim()}>
                
                  <Send size={18} />
                </Button>
              </form>
            </div>
          </> :

        <div className="flex-1 flex flex-col items-center justify-center text-gray-500">
            <MessageSquare size={48} className="text-gray-300 mb-4" />
            <p>Select a conversation to start messaging</p>
          </div>
        }
      </div>
    </div>);

}