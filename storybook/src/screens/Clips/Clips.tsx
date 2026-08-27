import { useState } from 'react';
import { ChevronLeft, ChevronRight, Search, MessageCircleHeart } from 'lucide-react';
import { ScreenShell } from '../ScreenShell';
import { HeaderSegmented } from '../../components/HeaderSegmented/HeaderSegmented';
import { Chip } from '../../components/Chip/Chip';
import { Post } from '../../components/Post/Post';
import { dateChips, categoryChips, posts, classTimeline, classStats, classNote } from '../../data/clipsMock';
import type { TabKey } from '../../components/TabBar/TabBar';
import './Clips.css';

type ClipsTab = 'mural' | 'sala';

export interface ClipsProps {
  initialTab?: ClipsTab;
  onBack?: () => void;
  onSelectTab?: (key: TabKey) => void;
  onPlaceholder?: (title: string) => void;
}

const timelineIcons: Record<string, string> = { sun: '☀️', art: '🎨', food: '🍎', play: '♻️' };

const salaDays = ['10 de agosto', '11 de agosto', 'Hoje · 12 de agosto', '13 de agosto'];

export function Clips({ initialTab = 'mural', onBack, onSelectTab, onPlaceholder }: ClipsProps) {
  const [tab, setTab] = useState<ClipsTab>(initialTab);
  const [date, setDate] = useState(dateChips[0]);
  const [category, setCategory] = useState(categoryChips[0]);
  const [dayIndex, setDayIndex] = useState(2);

  return (
    <ScreenShell
      title={tab === 'mural' ? 'Clips' : 'Sala de Aula'}
      subtitle={tab === 'mural' ? 'Miguel Souza · Grupo 2F' : 'Grupo 2F · Prof. Camila'}
      accent="var(--color-green)"
      onBack={onBack}
      activeTab="clips"
      onSelectTab={onSelectTab}
      headerAction={
        <button className="app-header__action" aria-label="Buscar" onClick={() => onPlaceholder?.('Buscar no Clips')}>
          <Search size={22} />
        </button>
      }
      headerExtra={
        <HeaderSegmented
          active={tab}
          onChange={setTab}
          options={[
            { key: 'mural', label: 'Mural da Escola' },
            { key: 'sala', label: 'Sala de Aula' },
          ]}
        />
      }
    >
      {tab === 'mural' ? (
        <>
          <div className="clips-filters">
            {dateChips.map((d) => (
              <Chip key={d} variant={d === date ? 'selected' : 'default'} onClick={() => setDate(d)}>
                {d}
              </Chip>
            ))}
          </div>
          <div className="clips-filters">
            {categoryChips.map((c) => (
              <Chip key={c} variant={c === category ? 'category' : 'default'} onClick={() => setCategory(c)}>
                {c}
              </Chip>
            ))}
          </div>
          {posts.map((p) => (
            <Post
              key={p.id}
              authorName={p.authorName}
              time={p.time}
              category={p.category}
              text={p.text}
              hasMedia={p.hasMedia}
              likes={p.likes}
              savedToCalendar={p.savedToCalendar}
              onZoom={() => onPlaceholder?.('Ampliar imagem')}
              onShare={() => onPlaceholder?.('Compartilhar publicação')}
            />
          ))}
        </>
      ) : (
        <>
          <div className="clips-day-nav">
            <button
              aria-label="Dia anterior"
              disabled={dayIndex === 0}
              onClick={() => setDayIndex((i) => Math.max(0, i - 1))}
            >
              <ChevronLeft size={18} />
            </button>
            <span>{salaDays[dayIndex]}</span>
            <button
              aria-label="Próximo dia"
              disabled={dayIndex === salaDays.length - 1}
              onClick={() => setDayIndex((i) => Math.min(salaDays.length - 1, i + 1))}
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="clips-stat-grid">
            <div className="clips-stat-card" style={{ background: 'var(--color-soft-clips)' }}>
              <div className="clips-stat-card__icon">🍽️</div>
              <div className="clips-stat-card__label">Alimentação</div>
              <div className="clips-stat-card__value">{classStats.alimentacao}</div>
            </div>
            <div className="clips-stat-card" style={{ background: 'var(--color-soft-calendario)' }}>
              <div className="clips-stat-card__icon">🌙</div>
              <div className="clips-stat-card__label">Sono</div>
              <div className="clips-stat-card__value">{classStats.sono}</div>
            </div>
            <div className="clips-stat-card" style={{ background: 'var(--color-soft-clippag)' }}>
              <div className="clips-stat-card__icon">🙂</div>
              <div className="clips-stat-card__label">Humor</div>
              <div className="clips-stat-card__value">{classStats.humor}</div>
            </div>
          </div>

          <div className="clips-timeline-title">Linha do tempo da turma</div>
          <div className="clips-timeline">
            {classTimeline.map((item) => (
              <div className="clips-timeline-item" key={item.time}>
                <span className="clips-timeline-item__icon">{timelineIcons[item.kind]}</span>
                <span>
                  <div className="clips-timeline-item__time">{item.time}</div>
                  <div className="clips-timeline-item__title">{item.title}</div>
                </span>
              </div>
            ))}
          </div>

          <div className="clips-note">
            <div className="clips-note__title">
              <MessageCircleHeart size={14} style={{ verticalAlign: -2, marginRight: 4 }} />
              Recado da {classNote.author}
            </div>
            <div className="clips-note__text">{classNote.text}</div>
          </div>
        </>
      )}
    </ScreenShell>
  );
}
