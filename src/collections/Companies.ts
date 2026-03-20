import type { CollectionConfig } from 'payload'

export const Companies: CollectionConfig = {
  slug: 'companies',
  labels: {
    singular: 'Empresa',
    plural: 'Empresas',
  },
  admin: {
    useAsTitle: 'name',
    description: 'Informações sobre as empresas dos clientes.',
    group: 'Clientes',
    components: {
      edit: {
        PreviewButton: '/components/CompanyIcon#CompanyIcon',
      },
    },
  },
  fields: [
    {
      name: 'name',
      label: 'Nome da Empresa',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'brand',
      label: 'Marca',
      type: 'upload',
      relationTo: 'media',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'email',
      label: 'Email Principal',
      type: 'email',
    },
    {
      name: 'phone',
      label: 'Telefone Principal',
      type: 'text',
    },
    {
      name: 'address',
      label: 'Endereço',
      type: 'textarea',
    },
    {
      name: 'website',
      label: 'Website',
      type: 'text',
    },
    {
      name: 'industry',
      label: 'Indústria',
      type: 'select',
      options: [
        { label: 'Tecnologia', value: 'technology' },
        { label: 'Serviços', value: 'services' },
        { label: 'Manufatura', value: 'manufacturing' },
        { label: 'Varejo', value: 'retail' },
        { label: 'Financeiro', value: 'finance' },
        { label: 'Saúde', value: 'healthcare' },
        { label: 'Educação', value: 'education' },
        { label: 'Outros', value: 'other' },
      ],
    },
    {
      name: 'notes',
      label: 'Observações',
      type: 'richText',
    },
    {
      name: 'contacts',
      label: 'Contatos na Empresa',
      type: 'relationship',
      relationTo: 'contacts',
      hasMany: true,
    },
  ],
}
