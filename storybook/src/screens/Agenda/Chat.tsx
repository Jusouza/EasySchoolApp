import { useState } from 'react';
import { Phone, Paperclip, Send, CloudUpload } from 'lucide-react';
import { ScreenShell } from '../ScreenShell';
import { sectors, chatMessages, type ChatMessage } from '../../data/agendaMock';
import './Chat.css';

export interface ChatProps {
  sectorKey?: string;
  onBack?: () => void;
  onPlaceholder?: (title: string) => void;
}

export function Chat({ sectorKey = 'secretaria', onBack, onPlaceholder }: ChatProps) {
  const sector = sectors.find((s) => s.key === sectorKey) ?? sectors[0];
  const [messages, setMessages] = useState<ChatMessage[]>(chatMessages);
  const [draft, setDraft] = useState('Preciso confirmar o horário de saída de');

  const sendMessage = () => {
    if (!draft.trim()) return;
    setMessages((prev) => [...prev, { from: 'me', text: draft.trim(), time: 'agora' }]);
    setDraft('');
  };

  return (
    <ScreenShell
      title={sector.name}
      subtitle={sector.respondsIn}
      accent="var(--color-accent-agenda)"
      onBack={onBack}
      headerAction={
        <button className="app-header__action" aria-label="Ligar" onClick={() => onPlaceholder?.(`Ligar para ${sector.name}`)}>
          <Phone size={20} />
        </button>
      }
    >
      <div className="chat-body">
        <span className="chat-day-divider">Hoje</span>
        {messages.map((m, i) => (
          <div key={i} className={`chat-bubble chat-bubble--${m.from}`}>
            {m.text}
            <span className="chat-bubble__time">{m.time}</span>
          </div>
        ))}
      </div>

      <span className="chat-draft-hint">
        <CloudUpload size={14} /> Rascunho salvo agora
      </span>

      <div className="chat-composer">
        <button className="chat-composer__icon" aria-label="Anexar arquivo" onClick={() => onPlaceholder?.('Anexar arquivo')}>
          <Paperclip size={20} />
        </button>
        <input
          placeholder="Escreva uma mensagem"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button className="chat-composer__send" aria-label="Enviar mensagem" onClick={sendMessage}>
          <Send size={18} />
        </button>
      </div>
    </ScreenShell>
  );
}
