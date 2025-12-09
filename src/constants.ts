import { IBrandLink } from '@mf-types/fnalabs_assets/Navbar'

export const BRAND_LINK: IBrandLink = { href: '/', label: 'FnA Labs', brandIcon: 'FnALabsInverted' }
export const SUB_BRAND_LINK: IBrandLink = { href: '/federation', label: 'Federated PWAs', brandIcon: 'ModuleFederation' }

export const BACK_LINK = { href:'/', label: 'Back', button: true, color: 'primary', beforeIcon: 'arrow-left' }
export const HOME_LINK = { href:'/federation', label: 'Federated PWAs' }

export const BRAND_LINK_LIST = [BRAND_LINK, SUB_BRAND_LINK]
export const NAV_LINK_LIST = [
  BACK_LINK
]
export const DIRECTED_LINK_MAP = {
  [HOME_LINK.href]: {
    up: HOME_LINK,
  },
}
