import type { Meta, StoryObj } from '@storybook/react-vite';
import { Paperclip } from 'lucide-react';
import { Field } from './Field';
import { SegmentedControl } from '../SegmentedControl/SegmentedControl';

const meta: Meta<typeof Field> = {
  title: 'Componentes-mestre/Campo (C/Campo)',
  component: Field,
  parameters: {
    docs: {
      description: {
        component:
          'Rótulo sempre visível acima do campo — nunca use placeholder como rótulo. Validação ao sair do campo, não a cada tecla. Autosave com debounce de 800ms em qualquer campo em edição.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof Field>;

export const Vazio: Story = {
  args: { label: 'CPF do aluno', placeholder: '000.000.000-00' },
};

export const EmFoco: Story = {
  name: 'Em foco',
  args: { label: 'CPF do aluno', defaultValue: '512.884.190-', autoFocus: true },
};

export const Preenchido: Story = {
  args: { label: 'Nome completo do aluno', defaultValue: 'Miguel Souza Ribeiro', success: true },
};

export const Erro: Story = {
  args: {
    label: 'CPF do aluno',
    defaultValue: '512.884.190-0',
    error: 'CPF incompleto — faltam 1 dígito.',
  },
};

export const Desabilitado: Story = {
  args: { label: 'Turma', defaultValue: 'Grupo 2F', disabled: true, helper: 'Definido pela secretaria.' },
};

export const ComIcone: Story = {
  name: 'Com ícone',
  args: { label: 'Certidão de nascimento', placeholder: 'Anexar arquivo (PDF ou foto)', icon: <Paperclip size={18} /> },
};

export const AreaDeTexto: Story = {
  name: 'Área de texto',
  args: {
    as: 'textarea',
    label: 'Alergias e restrições alimentares',
    defaultValue: 'Alergia a amendoim. Evitar castanhas no lanche.',
  },
};

export const Selecao: Story = {
  name: 'Seleção (até 3 opções)',
  render: () => <SegmentedControl label="Sexo" options={['Feminino', 'Masculino', 'Prefiro não informar']} defaultValue="Masculino" />,
};
