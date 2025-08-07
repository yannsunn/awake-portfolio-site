import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(1, '名前を入力してください').max(100, '名前は100文字以内で入力してください'),
  email: z.string().email('有効なメールアドレスを入力してください'),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(1, 'メッセージを入力してください').max(1000, 'メッセージは1000文字以内で入力してください'),
  projectType: z.enum(['ホームページ制作', 'ECサイト', 'ランディングページ', 'その他']).optional(),
  budget: z.enum(['〜20万円', '20〜50万円', '50〜100万円', '100万円〜', '未定']).optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export const projectSchema = z.object({
  id: z.number(),
  title: z.string(),
  category: z.string(),
  description: z.string(),
  longDescription: z.string(),
  imageUrl: z.string().url(),
  url: z.string().url().nullable(),
  pages: z.string().nullable(),
  marketPrice: z.string().nullable(),
  price: z.string(),
  duration: z.string(),
  features: z.array(z.string()).nullable(),
  result: z.string().nullable(),
  breakdown: z.string().nullable(),
})

export type Project = z.infer<typeof projectSchema>

export const profileSchema = z.object({
  name: z.string(),
  title: z.string(),
  description: z.string(),
  email: z.string().email(),
  phone: z.string(),
  address: z.string(),
})

export type Profile = z.infer<typeof profileSchema>