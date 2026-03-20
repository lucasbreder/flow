import { syncToGoogleCalendar } from '@/integrations/syncToGoogleCalendar'
import type { CollectionConfig } from 'payload'

export const Tasks: CollectionConfig = {
  slug: 'tasks',
  labels: {
    singular: 'Tarefa',
    plural: 'Tarefas',
  },
  hooks: {
    afterChange: [syncToGoogleCalendar],
  },
  admin: {
    useAsTitle: 'title',
    description: 'Gerencia as tarefas individuais da equipe.',
    group: 'Gestão de Projetos',
  },
  fields: [
    {
      name: 'title',
      label: 'Título da Tarefa',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Descrição',
      type: 'richText',
    },
    {
      name: 'project',
      label: 'Projeto Associado',
      type: 'relationship',
      relationTo: 'projects',
      hasMany: false,
    },
    {
      name: 'assignedTo',
      label: 'Atribuído a',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      hasMany: false,
    },
    {
      name: 'dueDate',
      label: 'Prazo',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'priority',
      label: 'Prioridade',
      type: 'select',
      options: [
        { label: 'Baixa', value: 'low' },
        { label: 'Média', value: 'medium' },
        { label: 'Alta', value: 'high' },
        { label: 'Urgente', value: 'urgent' },
      ],
      defaultValue: 'medium',
      required: true,
    },
    {
      name: 'status',
      label: 'Status da Tarefa',
      type: 'select',
      options: [
        { label: 'A Fazer', value: 'to-do' },
        { label: 'Em Progresso', value: 'in-progress' },
        { label: 'Em Revisão', value: 'in-review' },
        { label: 'Concluída', value: 'completed' },
        { label: 'Bloqueada', value: 'blocked' },
      ],
      defaultValue: 'to-do',
      required: true,
    },
    {
      name: 'comments',
      label: 'Comentários',
      type: 'array',
      labels: {
        singular: 'Comentário',
        plural: 'Comentários',
      },
      fields: [
        {
          name: 'text',
          label: 'Comentário',
          type: 'richText',
          required: true,
        },
        {
          name: 'author',
          label: 'Autor',
          type: 'relationship',
          relationTo: 'users',
          required: true,
          hasMany: false,
        },
        {
          name: 'date',
          label: 'Data/Hora',
          type: 'date',
          required: true,
          defaultValue: () => new Date(),
        },
      ],
    },
    {
      name: 'relatedOpportunity',
      label: 'Oportunidade Relacionada',
      type: 'relationship',
      relationTo: 'opportunities',
      hasMany: false,
    },
  ],
}
