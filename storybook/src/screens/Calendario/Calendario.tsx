import { useState } from 'react';
import { ChevronLeft, ChevronRight, SlidersHorizontal, ChevronRight as ChevronRightIcon } from 'lucide-react';
import { ScreenShell } from '../ScreenShell';
import { Chip } from '../../components/Chip/Chip';
import { calendarWeeks, markerColor, selectedDayEvents } from '../../data/calendarMock';
import type { TabKey } from '../../components/TabBar/TabBar';
import '../ScreenShell.css';
import './Calendario.css';

const weekdays = ['dom.', 'seg.', 'ter.', 'qua.', 'qui.', 'sex.', 'sáb.'];
const flatDays = calendarWeeks.flat();

export interface CalendarioProps {
  onBack?: () => void;
  onSelectTab?: (key: TabKey) => void;
  onPlaceholder?: (title: string) => void;
}

export function Calendario({ onBack, onSelectTab, onPlaceholder }: CalendarioProps) {
  const [selectedDay, setSelectedDay] = useState(22);
  const selectedIndex = flatDays.findIndex((c) => c?.day === selectedDay);
  const weekdayLabel = selectedIndex >= 0 ? weekdays[selectedIndex % 7] : '';
  const dayLabel = weekdayLabel
    ? `${{ 'dom.': 'Domingo', 'seg.': 'Segunda', 'ter.': 'Terça', 'qua.': 'Quarta', 'qui.': 'Quinta', 'sex.': 'Sexta', 'sáb.': 'Sábado' }[weekdayLabel]}, ${selectedDay} de agosto`
    : `${selectedDay} de agosto`;
  const eventsForDay = selectedDay === 22 ? selectedDayEvents : [];

  return (
    <ScreenShell
      title="Calendário"
      accent="var(--color-accent-calendario)"
      onBack={onBack}
      activeTab="calendario"
      onSelectTab={onSelectTab}
      headerAction={
        <button className="app-header__action" aria-label="Filtros" onClick={() => onPlaceholder?.('Filtros do calendário')}>
          <SlidersHorizontal size={20} />
        </button>
      }
      headerExtra={
        <div className="calendar-nav">
          <button onClick={() => onPlaceholder?.('Mês anterior')}>
            <ChevronLeft size={16} /> Anterior
          </button>
          <span className="calendar-nav__title">Agosto 2026</span>
          <button onClick={() => onPlaceholder?.('Próximo mês')}>
            Próximo <ChevronRight size={16} />
          </button>
        </div>
      }
    >
      <div className="calendar-grid">
        {weekdays.map((w) => (
          <div key={w} className="calendar-grid__weekday">
            {w}
          </div>
        ))}
        {flatDays.map((cell, i) =>
          cell ? (
            <button
              key={i}
              className={`calendar-day ${cell.day === selectedDay ? 'calendar-day--today' : ''}`}
              onClick={() => setSelectedDay(cell.day)}
            >
              {cell.day}
              {cell.markers && (
                <span className="calendar-day__markers">
                  {cell.markers.map((m) => (
                    <span
                      key={m}
                      className="calendar-day__marker"
                      style={{ background: cell.day === selectedDay ? '#fff' : markerColor[m] }}
                    />
                  ))}
                </span>
              )}
            </button>
          ) : (
            <span key={i} />
          )
        )}
      </div>

      <div className="calendar-legend">
        <span className="calendar-legend__item">
          <span className="calendar-legend__dot" style={{ background: markerColor.eventos }} /> Eventos
        </span>
        <span className="calendar-legend__item">
          <span className="calendar-legend__dot" style={{ background: markerColor.comunicados }} /> Comunicados
        </span>
        <span className="calendar-legend__item">
          <span className="calendar-legend__dot" style={{ background: markerColor.pedagogico }} /> Pedagógico
        </span>
      </div>

      <div className="section-title">{dayLabel}</div>

      {eventsForDay.length > 0 ? (
        eventsForDay.map((e) => (
          <div className="calendar-event-card" key={e.id}>
            <span className="calendar-event-card__icon" style={{ background: e.soft }}>
              {e.icon}
            </span>
            <span style={{ flex: 1 }}>
              <div className="calendar-event-card__title">{e.title}</div>
              <div className="calendar-event-card__time">{e.time}</div>
              {e.fromClips && <Chip variant="category">Do Clips</Chip>}
            </span>
            <ChevronRightIcon size={18} color="var(--color-text-3)" />
          </div>
        ))
      ) : (
        <div style={{ color: 'var(--color-text-2)', fontSize: 14 }}>Nenhum evento neste dia.</div>
      )}
    </ScreenShell>
  );
}
