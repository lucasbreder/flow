import type { CollectionConfig } from 'payload'

export const Contacts: CollectionConfig = {
  slug: 'contacts',
  labels: {
    singular: 'Contato',
    plural: 'Contatos',
  },
  admin: {
    useAsTitle: 'email',
    description: 'Informações sobre os contatos (pessoas).',
    group: 'Clientes',
  },
  fields: [
    {
      name: 'firstName',
      label: 'Primeiro Nome',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      label: 'Sobrenome',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      name: 'phone',
      label: 'Telefone',
      type: 'text',
    },
    {
      name: 'title',
      label: 'Cargo',
      type: 'text',
    },
    {
      name: 'company',
      label: 'Empresa',
      type: 'relationship',
      relationTo: 'companies',
      hasMany: false,
    },
    {
      name: 'notes',
      label: 'Observações',
      type: 'richText',
    },
  ],
}
