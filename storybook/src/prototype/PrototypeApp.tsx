import { useState } from 'react';
import type { TabKey } from '../components/TabBar/TabBar';
import type { ModuleName } from '../tokens/tokens';
import { Home } from '../screens/Home/Home';
import { Clips } from '../screens/Clips/Clips';
import { AgendaList } from '../screens/Agenda/AgendaList';
import { Chat } from '../screens/Agenda/Chat';
import { Calendario } from '../screens/Calendario/Calendario';
import { EntradaSaida } from '../screens/EntradaSaida/EntradaSaida';
import { ClipPag } from '../screens/ClipPag/ClipPag';
import { LojaUniformes } from '../screens/Loja/LojaUniformes';
import { ProdutoDetalhe } from '../screens/Loja/ProdutoDetalhe';
import { Carrinho } from '../screens/Loja/Carrinho';
import { RevisarPedido } from '../screens/Loja/RevisarPedido';
import { PedidoEnviado } from '../screens/Loja/PedidoEnviado';
import { PagamentoPix } from '../screens/Loja/PagamentoPix';
import { Matricula } from '../screens/Matricula/Matricula';
import { Perfil } from '../screens/Perfil/Perfil';
import { Placeholder } from '../screens/Placeholder/Placeholder';
import { Notificacoes } from '../screens/Notificacoes/Notificacoes';
import { MeuPerfil } from '../screens/MeuPerfil/MeuPerfil';
import type { NotificationTarget } from '../data/notificationsMock';
import './PrototypeApp.css';

type Route =
  | { name: 'home' }
  | { name: 'clips'; tab: 'mural' | 'sala' }
  | { name: 'agendaList' }
  | { name: 'chat'; sector: string }
  | { name: 'calendario' }
  | { name: 'entradaSaida' }
  | { name: 'clipPag' }
  | { name: 'loja' }
  | { name: 'produtoDetalhe'; productId: string }
  | { name: 'carrinho' }
  | { name: 'revisarPedido' }
  | { name: 'pedidoEnviado' }
  | { name: 'pagamentoPix' }
  | { name: 'matricula' }
  | { name: 'notificacoes' }
  | { name: 'meuPerfil' }
  | { name: 'placeholder'; title: string };

const tabRoutes: Record<TabKey, Route> = {
  inicio: { name: 'home' },
  clips: { name: 'clips', tab: 'mural' },
  agenda: { name: 'agendaList' },
  calendario: { name: 'calendario' },
  clippag: { name: 'clipPag' },
};

export function PrototypeApp() {
  const [stack, setStack] = useState<Route[]>([{ name: 'home' }]);
  const [menuOpen, setMenuOpen] = useState(false);
  const route = stack[stack.length - 1];

  const push = (r: Route) => setStack((s) => [...s, r]);
  const pop = () => setStack((s) => (s.length > 1 ? s.slice(0, -1) : s));
  const resetTo = (r: Route) => setStack([r]);

  // Toda tela é empilhada sobre a Home (regra 3.4 do design system) — por
  // isso módulos abertos a partir da Home ou da tab bar sempre entram como
  // push, nunca substituem a pilha inteira. Assim a seta de voltar do
  // header (sempre visível nessas telas) tem para onde voltar.
  const openModule = (key: ModuleName) => {
    switch (key) {
      case 'clips':
        push({ name: 'clips', tab: 'mural' });
        break;
      case 'salaDeAula':
        push({ name: 'clips', tab: 'sala' });
        break;
      case 'agenda':
        push({ name: 'agendaList' });
        break;
      case 'calendario':
        push({ name: 'calendario' });
        break;
      case 'entradaSaida':
        push({ name: 'entradaSaida' });
        break;
      case 'clipPag':
        push({ name: 'clipPag' });
        break;
    }
  };

  const onSelectTab = (key: TabKey) => {
    const target = tabRoutes[key];
    setStack(target.name === 'home' ? [{ name: 'home' }] : [{ name: 'home' }, target]);
  };

  // Destino genérico para qualquer ação que ainda não tem tela própria no
  // PDF de referência — garante que nenhum botão fique sem reação ao toque.
  const openPlaceholder = (title: string) => push({ name: 'placeholder', title });

  const openNotifications = () => push({ name: 'notificacoes' });

  const openNotificationTarget = (target: NotificationTarget) => {
    switch (target.kind) {
      case 'clipPag':
        push({ name: 'clipPag' });
        break;
      case 'chat':
        push({ name: 'chat', sector: target.sector });
        break;
      case 'clips':
        push({ name: 'clips', tab: target.tab });
        break;
      case 'entradaSaida':
        push({ name: 'entradaSaida' });
        break;
    }
  };

  let screen = null;
  if (menuOpen) {
    screen = (
      <Perfil
        onClose={() => setMenuOpen(false)}
        onOpenMatricula={() => {
          setMenuOpen(false);
          push({ name: 'matricula' });
        }}
        onOpenLoja={() => {
          setMenuOpen(false);
          push({ name: 'loja' });
        }}
        onLogout={() => {
          setMenuOpen(false);
          resetTo({ name: 'home' });
        }}
        onDeleteAccount={() => {
          setMenuOpen(false);
          resetTo({ name: 'home' });
        }}
        onOpenNotifications={() => {
          setMenuOpen(false);
          openNotifications();
        }}
        onOpenMeuPerfil={() => {
          setMenuOpen(false);
          push({ name: 'meuPerfil' });
        }}
        onPlaceholder={(title) => {
          setMenuOpen(false);
          openPlaceholder(title);
        }}
      />
    );
  } else {
    switch (route.name) {
      case 'home':
        screen = (
          <Home
            onOpenMenu={() => setMenuOpen(true)}
            onOpenModule={openModule}
            onOpenResume={() => push({ name: 'matricula' })}
            onSelectTab={onSelectTab}
            onOpenNotifications={openNotifications}
            onPlaceholder={openPlaceholder}
          />
        );
        break;
      case 'clips':
        screen = <Clips initialTab={route.tab} onBack={pop} onSelectTab={onSelectTab} onPlaceholder={openPlaceholder} />;
        break;
      case 'agendaList':
        screen = (
          <AgendaList
            onBack={pop}
            onSelectTab={onSelectTab}
            onOpenChat={(sector) => push({ name: 'chat', sector })}
            onPlaceholder={openPlaceholder}
          />
        );
        break;
      case 'chat':
        screen = <Chat sectorKey={route.sector} onBack={pop} onPlaceholder={openPlaceholder} />;
        break;
      case 'calendario':
        screen = <Calendario onBack={pop} onSelectTab={onSelectTab} onPlaceholder={openPlaceholder} />;
        break;
      case 'entradaSaida':
        screen = <EntradaSaida onBack={pop} onPlaceholder={openPlaceholder} />;
        break;
      case 'clipPag':
        screen = (
          <ClipPag
            onBack={pop}
            onSelectTab={onSelectTab}
            onOpenLoja={() => push({ name: 'loja' })}
            onOpenPix={() => push({ name: 'pagamentoPix' })}
            onOpenCart={() => push({ name: 'carrinho' })}
            onOpenChat={(sector) => push({ name: 'chat', sector })}
          />
        );
        break;
      case 'loja':
        screen = (
          <LojaUniformes
            onBack={pop}
            onOpenProduct={(productId) => push({ name: 'produtoDetalhe', productId })}
            onOpenCart={() => push({ name: 'carrinho' })}
            onPlaceholder={openPlaceholder}
          />
        );
        break;
      case 'produtoDetalhe':
        screen = (
          <ProdutoDetalhe
            productId={route.productId}
            onBack={pop}
            onAddToCart={pop}
            onOpenCart={() => push({ name: 'carrinho' })}
            onPlaceholder={openPlaceholder}
          />
        );
        break;
      case 'carrinho':
        screen = (
          <Carrinho
            onBack={pop}
            onReview={() => push({ name: 'revisarPedido' })}
            onContinueShopping={pop}
            onPlaceholder={openPlaceholder}
          />
        );
        break;
      case 'revisarPedido':
        screen = (
          <RevisarPedido
            onBack={pop}
            onConfirm={() => push({ name: 'pedidoEnviado' })}
            onEditItems={pop}
            onPlaceholder={openPlaceholder}
          />
        );
        break;
      case 'pedidoEnviado':
        screen = (
          <PedidoEnviado onPay={() => push({ name: 'pagamentoPix' })} onViewOrders={() => resetTo({ name: 'home' })} />
        );
        break;
      case 'pagamentoPix':
        screen = <PagamentoPix onBack={pop} onPlaceholder={openPlaceholder} />;
        break;
      case 'matricula':
        screen = (
          <Matricula
            onExit={() => resetTo({ name: 'home' })}
            onDiscard={() => resetTo({ name: 'home' })}
            onPlaceholder={openPlaceholder}
          />
        );
        break;
      case 'notificacoes':
        screen = <Notificacoes onBack={pop} onOpenTarget={openNotificationTarget} />;
        break;
      case 'meuPerfil':
        screen = <MeuPerfil onBack={pop} onPlaceholder={openPlaceholder} />;
        break;
      case 'placeholder':
        screen = <Placeholder title={route.title} onBack={pop} />;
        break;
    }
  }

  return <div className="prototype-frame">{screen}</div>;
}
