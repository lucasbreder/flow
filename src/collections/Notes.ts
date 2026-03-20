import type { CollectionConfig } from 'payload'

export const Notes: CollectionConfig = {
  slug: 'notes',
  labels: {
    singular: 'Notas',
    plural: 'Notas',
  },
  admin: {
    useAsTitle: 'title',
    description: 'Anotações e documentos de propriedade intelectual da empresa.',
    group: 'Geral', // Agrupando com Projetos e Tarefas
  },
  fields: [
    {
      name: 'title',
      label: 'Título',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'content',
      label: 'Conteúdo',
      type: 'richText',
      required: true,
    },
    {
      name: 'category',
      label: 'Categoria',
      type: 'select',
      options: [
        { label: 'Processos', value: 'processes' },
        { label: 'Marketing', value: 'marketing' },
        { label: 'Técnico', value: 'technical' },
        { label: 'Legal', value: 'legal' },
        { label: 'Geral', value: 'general' },
      ],
      defaultValue: 'general',
    },
  ],
}
