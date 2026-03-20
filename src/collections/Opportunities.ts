import type { CollectionConfig } from 'payload'

export const Opportunities: CollectionConfig = {
  slug: 'opportunities',
  labels: {
    singular: 'Oportunidade',
    plural: 'Oportunidades',
  },
  admin: {
    useAsTitle: 'name',
    description: 'Gerencia as oportunidades de vendas e seus estágios.',
    group: 'CRM',
  },
  fields: [
    {
      name: 'name',
      label: 'Nome da Oportunidade',
      type: 'text',
      required: true,
    },
    {
      name: 'company',
      label: 'Empresa Associada',
      type: 'relationship',
      relationTo: 'companies',
      required: true,
      hasMany: false,
    },
    {
      name: 'primaryContact',
      label: 'Contato Principal',
      type: 'relationship',
      relationTo: 'contacts',
      hasMany: false,
    },
    {
      name: 'pipeline',
      label: 'Funil de Vendas',
      type: 'relationship',
      relationTo: 'salesPipelines',
      required: true,
      hasMany: false,
    },
    {
      name: 'stage',
      label: 'Estágio Atual',
      type: 'text', // Este campo será atualizado via lógica ou N8N, espelhando o estágio do pipeline
      required: true,
    },
    {
      name: 'value',
      label: 'Valor Estimado',
      type: 'number',
      min: 0,
      defaultValue: 0,
    },
    {
      name: 'closeDate',
      label: 'Data de Fechamento Prevista',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'probability',
      label: 'Probabilidade de Fechamento (%)',
      type: 'number',
      min: 0,
      max: 100,
      defaultValue: 0,
    },
    {
      name: 'notes',
      label: 'Observações',
      type: 'richText',
    },
  ],
}
