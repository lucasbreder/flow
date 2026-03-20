import type { CollectionConfig } from 'payload'

export const SalesPipelines: CollectionConfig = {
  slug: 'salesPipelines',
  labels: {
    singular: 'Funil de Venda',
    plural: 'Funis de Vendas',
  },
  admin: {
    useAsTitle: 'name',
    description: 'Define os funis de vendas com seus estágios.',
    group: 'CRM',
  },
  fields: [
    {
      name: 'name',
      label: 'Nome do Funil',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'description',
      label: 'Descrição',
      type: 'richText',
    },
    {
      name: 'stages',
      label: 'Estágios',
      type: 'array',
      minRows: 1,
      required: true,
      fields: [
        {
          name: 'name',
          label: 'Nome do Estágio',
          type: 'text',
          required: true,
        },
        {
          name: 'slug',
          label: 'Slug do Estágio',
          type: 'text',
          required: true,
        },
        {
          name: 'color',
          label: 'Cor (Hex)',
          type: 'text',
          defaultValue: '#CCCCCC',
        },
        {
          name: 'order',
          label: 'Ordem',
          type: 'number',
          required: true,
          defaultValue: 0,
        },
      ],
    },
  ],
}
