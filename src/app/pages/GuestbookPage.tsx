import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, MessageSquare, Send } from "lucide-react";

interface GuestbookEntry {
  id: number;
  nickname: string;
  message: string;
  createdAt: string;
}

export function GuestbookPage() {
  const [nickname, setNickname] = useState("");
  const [message, setMessage] = useState("");
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!nickname.trim() || !message.trim()) {
      alert("닉네임과 메시지를 모두 입력해주세요.");
      return;
    }

    if (nickname.length > 20) {
      alert("닉네임은 20자 이내로 입력해주세요.");
      return;
    }

    if (message.length > 200) {
      alert("메시지는 200자 이내로 입력해주세요.");
      return;
    }

    const newEntry: GuestbookEntry = {
      id: entries.length + 1,
      nickname: nickname.trim(),
      message: message.trim(),
      createdAt: new Date().toISOString().split('T')[0]
    };

    setEntries([newEntry, ...entries]);
    setNickname("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <div className="bg-slate-900/50 border-b border-slate-700/50 sticky top-0 z-10 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            메인으로 돌아가기
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Title */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/50">
            <MessageSquare className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl mb-3 text-white">
            방명록
          </h1>
          <p className="text-slate-400">
            자유롭게 메시지를 남겨주세요
          </p>
        </div>

        {/* Form */}
        <div className="bg-slate-800/50 rounded-xl shadow-lg border border-slate-700/50 p-6 mb-12 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nickname" className="block text-sm mb-2 text-slate-300">
                닉네임 <span className="text-slate-500">(최대 20자)</span>
              </label>
              <input
                type="text"
                id="nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                placeholder="익명으로 남기고 싶다면 '익명' 입력"
                maxLength={20}
                className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-900/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm mb-2 text-slate-300">
                메시지 <span className="text-slate-500">(최대 200자)</span>
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="응원의 메시지, 인사 등을 자유롭게 남겨주세요"
                maxLength={200}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-900/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
              <div className="text-right text-sm text-slate-500 mt-1">
                {message.length} / 200
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all flex items-center justify-center gap-2 shadow-md shadow-blue-500/20"
            >
              <Send className="w-5 h-5" />
              메시지 남기기
            </button>
          </form>
        </div>

        {/* Entries List */}
        <div>
          <h2 className="text-2xl mb-6 text-white">
            방명록 목록 <span className="text-slate-500 text-lg">({entries.length})</span>
          </h2>

          <div className="space-y-4">
            {entries.map((entry) => (
              <div 
                key={entry.id}
                className="bg-slate-800/50 rounded-xl shadow-lg border border-slate-700/50 p-6 hover:bg-slate-800/70 transition-all backdrop-blur-sm"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white shadow-md">
                      {entry.nickname.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white">
                        {entry.nickname}
                      </p>
                      <p className="text-sm text-slate-500">
                        {entry.createdAt}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed pl-13">
                  {entry.message}
                </p>
              </div>
            ))}
          </div>

          {entries.length === 0 && (
            <div className="text-center py-12 text-slate-500">
              <MessageSquare className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p>아직 방명록이 없습니다.</p>
              <p className="text-sm">첫 번째 메시지를 남겨주세요!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
