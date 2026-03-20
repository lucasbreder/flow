import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    group: 'Configurações',
  },
  labels: {
    singular: 'Usuário',
    plural: 'Usuários',
  },
  auth: true,
  fields: [
    // Email added by default
    {
      name: 'role',
      label: 'Função',
      type: 'select',
      options: [
        { label: 'Administrador', value: 'admin' },
        { label: 'Vendedor', value: 'sales' },
        { label: 'Gerente de Projeto', value: 'project-manager' },
        { label: 'Membro da Equipe', value: 'team-member' },
      ],
      defaultValue: 'team-member',
      required: true,
    },
    // Add more fields as needed
  ],
}
