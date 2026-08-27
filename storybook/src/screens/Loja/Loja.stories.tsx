import type { Meta, StoryObj } from '@storybook/react-vite';
import { LojaUniformes } from './LojaUniformes';
import { ProdutoDetalhe } from './ProdutoDetalhe';
import { Carrinho } from './Carrinho';
import { RevisarPedido } from './RevisarPedido';
import { PedidoEnviado } from './PedidoEnviado';
import { PagamentoPix } from './PagamentoPix';

const meta: Meta = {
  title: 'Telas/Loja de Uniformes',
  parameters: { layout: 'centered' },
};
export default meta;

export const _01Catalogo: StoryObj<typeof LojaUniformes> = { name: '1 · Catálogo', render: () => <LojaUniformes /> };
export const _02Detalhe: StoryObj<typeof ProdutoDetalhe> = { name: '2 · Detalhe do produto', render: () => <ProdutoDetalhe /> };
export const _03Carrinho: StoryObj<typeof Carrinho> = { name: '3 · Carrinho', render: () => <Carrinho /> };
export const _04RevisarPedido: StoryObj<typeof RevisarPedido> = { name: '4 · Revisar pedido', render: () => <RevisarPedido /> };
export const _05PedidoEnviado: StoryObj<typeof PedidoEnviado> = { name: '5 · Pedido enviado', render: () => <PedidoEnviado /> };
export const _06PagamentoPix: StoryObj<typeof PagamentoPix> = { name: '6 · Pagamento Pix', render: () => <PagamentoPix /> };
