import { useState } from 'react';
import { Heart, Share2, ZoomIn, CalendarPlus, CalendarCheck } from 'lucide-react';
import { Avatar } from '../Avatar/Avatar';
import './Post.css';

export interface PostProps {
  authorName: string;
  authorAvatar?: string;
  time: string;
  category?: string;
  text: string;
  hasMedia?: boolean;
  image?: string;
  likes?: number;
  savedToCalendar?: boolean;
  onZoom?: () => void;
  onShare?: () => void;
}

/** Publicação do feed: autor, data, categoria, texto, mídia com zoom, curtir e vínculo com o calendário. */
export function Post({
  authorName,
  authorAvatar,
  time,
  category,
  text,
  hasMedia,
  image,
  likes = 0,
  savedToCalendar,
  onZoom,
  onShare,
}: PostProps) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(!!savedToCalendar);

  return (
    <article className="post">
      <header className="post__header">
        <Avatar size={38} src={authorAvatar} alt={authorName} />
        <div className="post__author-info">
          <div className="post__author">{authorName}</div>
          <div className="post__meta">{time}</div>
        </div>
        {category && <span className="post__category">{category}</span>}
      </header>
      <p className="post__text">{text}</p>
      {(hasMedia || image) && (
        <div className={`post__media ${!image ? 'post__media--placeholder' : ''}`}>
          {image && <img src={image} alt="" />}
          <button className="post__zoom" aria-label="Ampliar imagem" onClick={onZoom}>
            <ZoomIn size={16} />
          </button>
        </div>
      )}
      <footer className="post__footer">
        <button onClick={() => setLiked((v) => !v)} aria-pressed={liked}>
          <Heart size={18} fill={liked ? 'currentColor' : 'none'} color={liked ? 'var(--color-danger)' : 'currentColor'} />
          {likes + (liked ? 1 : 0)}
        </button>
        <button onClick={() => setSaved((v) => !v)} aria-pressed={saved}>
          {saved ? <CalendarCheck size={18} color="var(--color-green)" /> : <CalendarPlus size={18} />}
          {saved ? 'Salvo no calendário' : 'Salvar no calendário'}
        </button>
        <button aria-label="Compartilhar" onClick={onShare}>
          <Share2 size={18} />
        </button>
      </footer>
    </article>
  );
}
