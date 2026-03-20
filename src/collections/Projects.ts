import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  labels: {
    singular: 'Projeto',
    plural: 'Projetos',
  },
  admin: {
    useAsTitle: 'title',
    description: 'Gerencia os projetos da equipe e dos clientes.',
    group: 'Gestão de Projetos',
  },
  fields: [
    {
      name: 'title',
      label: 'Nome do Projeto',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Descrição',
      type: 'richText',
    },
    {
      name: 'status',
      label: 'Status do Projeto',
      type: 'select',
      options: [
        { label: 'Planejamento', value: 'planning' },
        { label: 'Ativo', value: 'active' },
        { label: 'Em Pausa', value: 'on-hold' },
        { label: 'Concluído', value: 'completed' },
        { label: 'Cancelado', value: 'cancelled' },
      ],
      defaultValue: 'planning',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'startDate',
      label: 'Data de Início',
      type: 'date',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'dueDate',
      label: 'Prazo Final',
      type: 'date',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'manager',
      label: 'Gerente do Projeto',
      type: 'relationship',
      relationTo: 'users',
      hasMany: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'team',
      label: 'Equipe do Projeto',
      type: 'relationship',
      relationTo: 'users',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'budget',
      label: 'Orçamento Estimado',
      type: 'number',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'company',
      label: 'Empresa Cliente',
      type: 'relationship',
      relationTo: 'companies',
      hasMany: false,
    },
    {
      name: 'opportunity',
      label: 'Oportunidade de Origem',
      type: 'relationship',
      relationTo: 'opportunities',
      hasMany: false,
    },
    {
      name: 'notes',
      label: 'Anotações Internas',
      type: 'richText',
    },
  ],
}
