import { NextResponse } from 'next/server'
import { z } from 'zod'

// バリデーションスキーマ
const contactSchema = z.object({
  name: z.string().min(1, 'お名前を入力してください'),
  email: z.string().email('正しいメールアドレスを入力してください'),
  subject: z.string().min(1, '件名を入力してください'),
  message: z.string().min(10, 'メッセージは10文字以上で入力してください'),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // バリデーション
    const validatedData = contactSchema.parse(body)

    // ここでメール送信処理を実装
    // オプション1: Nodemailer
    // オプション2: SendGrid
    // オプション3: Resend
    // オプション4: AWS SES

    // 例: コンソールログ（本番環境では削除）
    console.log('お問い合わせを受信しました:', validatedData)

    // TODO: 実際のメール送信処理
    // await sendEmail({
    //   to: process.env.CONTACT_EMAIL,
    //   subject: `【お問い合わせ】${validatedData.subject}`,
    //   html: `
    //     <h2>新しいお問い合わせ</h2>
    //     <p><strong>お名前:</strong> ${validatedData.name}</p>
    //     <p><strong>メールアドレス:</strong> ${validatedData.email}</p>
    //     <p><strong>件名:</strong> ${validatedData.subject}</p>
    //     <p><strong>メッセージ:</strong></p>
    //     <p>${validatedData.message}</p>
    //   `
    // })

    // 簡易実装: フォームデータをログに出力
    // 本番環境では、メール送信サービスを使用してください

    return NextResponse.json(
      {
        success: true,
        message: 'お問い合わせを受け付けました。24時間以内にご返信いたします。',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('お問い合わせ送信エラー:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'バリデーションエラー',
          errors: error.errors,
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      {
        success: false,
        message: '送信に失敗しました。しばらく時間をおいてから再度お試しください。',
      },
      { status: 500 }
    )
  }
}
