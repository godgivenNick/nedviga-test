export default {
  BASE_URL: 'https://api.__domain__',
  endpoints: {
    getLegalEntities: '/data/api/v1/legal_entities',
    getOneLegalEntity: '/data_import_legal_entities/api/v1/legal_entities/:id',
    getMembers: '/data_import_members/api/v1/members',
    getOneMember: '/data_import_members/api/v1/members/:id',
    getShares: '/data_import_shares/api/v1/shares'
  }
}
