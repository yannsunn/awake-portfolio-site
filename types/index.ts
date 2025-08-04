export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export interface CompanyInfo {
  name: string
  nameEn: string
  description: string
  address: string
  phone: string
  email: string
  founded: string
  capital: string
  employees: string
}

export interface NavigationItem {
  href: string
  label: string
}