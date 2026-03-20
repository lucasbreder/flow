import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  labels: {
    singular: 'Projeto',
    plural: 'Projetos',
  },
  admin: {
    useAsTitle: 'name',
    description: 'Gerencia os projetos da equipe.',
    group: 'Gestão de Projetos',
  },
  fields: [
    {
      name: 'name',
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
        { label: 'Ativo', value: 'active' },
        { label: 'Em Espera', value: 'on-hold' },
        { label: 'Concluído', value: 'completed' },
        { label: 'Arquivado', value: 'archived' },
      ],
      defaultValue: 'active',
      required: true,
    },
    {
      name: 'startDate',
      label: 'Data de Início',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'endDate',
      label: 'Data de Término Prevista',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'owner',
      label: 'Dono do Projeto',
      type: 'relationship',
      relationTo: 'users',
      hasMany: false,
    },
    {
      name: 'members',
      label: 'Membros da Equipe',
      type: 'relationship',
      relationTo: 'users',
      hasMany: true,
    },
  ],
}
