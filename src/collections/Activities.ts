import type { CollectionConfig } from 'payload'

export const Activities: CollectionConfig = {
  slug: 'activities',
  labels: {
    singular: 'Atividade',
    plural: 'Atividades',
  },
  admin: {
    useAsTitle: 'subject',
    description: 'Registra interações com contatos e oportunidades.',
    group: 'CRM',
  },
  fields: [
    {
      name: 'type',
      label: 'Tipo de Atividade',
      type: 'select',
      options: [
        { label: 'Chamada', value: 'call' },
        { label: 'Email', value: 'email' },
        { label: 'Reunião', value: 'meeting' },
        { label: 'Nota', value: 'note' },
        { label: 'Tarefa de CRM', value: 'crm-task' },
        { label: 'Outro', value: 'other' },
      ],
      required: true,
    },
    {
      name: 'subject',
      label: 'Assunto',
      type: 'text',
    },
    {
      name: 'description',
      label: 'Detalhes',
      type: 'richText',
    },
    {
      name: 'date',
      label: 'Data da Atividade',
      type: 'date',
      required: true,
    },
    {
      name: 'relatedToOpportunity',
      label: 'Relacionado à Oportunidade',
      type: 'relationship',
      relationTo: 'opportunities',
      hasMany: false,
    },
    {
      name: 'relatedToContact',
      label: 'Relacionado ao Contato',
      type: 'relationship',
      relationTo: 'contacts',
      hasMany: false,
    },
    {
      name: 'assignedTo',
      label: 'Atribuído a / Realizado por',
      type: 'relationship',
      relationTo: 'users',
      hasMany: false,
    },
    {
      name: 'status',
      label: 'Status da Atividade',
      type: 'select',
      options: [
        { label: 'Concluída', value: 'completed' },
        { label: 'Agendada', value: 'scheduled' },
        { label: 'Em Progresso', value: 'in-progress' },
        { label: 'Cancelada', value: 'cancelled' },
      ],
      defaultValue: 'completed',
    },
  ],
}
