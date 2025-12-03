import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  try {
    // 環境変数チェック
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set')
      return NextResponse.json(
        { error: 'サーバー設定エラー: API Keyが設定されていません' },
        { status: 500 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const body = await request.json()
    const { name, email, company, category, message } = body

    // バリデーション
    if (!name || !email || !category || !message) {
      return NextResponse.json(
        { error: '必須項目を入力してください' },
        { status: 400 }
      )
    }

    // カテゴリの日本語変換
    const categoryMap: { [key: string]: string } = {
      service: 'サービスについて',
      partnership: 'パートナーシップ・提携',
      media: '取材・メディア関連',
      career: '採用について',
      other: 'その他',
    }

    const categoryText = categoryMap[category] || category

      // メール送信
      const data = await resend.emails.send({
        from: 'aqa Website <noreply@aqa-app.jp>',
        to: [process.env.CONTACT_EMAIL || 'contact@aqa-app.jp'],
        reply_to: email as string,
        subject: `【お問い合わせ】${categoryText} - ${name}様より`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif;
                line-height: 1.6;
                color: #2a3f4f;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #AFDFE4, #7ac4cc);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 28px;
                font-weight: bold;
              }
              .content {
                background: #f5fafa;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .field {
                margin-bottom: 20px;
              }
              .field-label {
                font-weight: bold;
                color: #5a7080;
                font-size: 14px;
                margin-bottom: 5px;
              }
              .field-value {
                background: white;
                padding: 12px;
                border-radius: 6px;
                border-left: 4px solid #AFDFE4;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 2px solid #AFDFE4;
                color: #8a9aa5;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>📧 新しいお問い合わせ</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">お名前</div>
                <div class="field-value">${name}</div>
              </div>
              
              <div class="field">
                <div class="field-label">メールアドレス</div>
                <div class="field-value"><a href="mailto:${email}">${email}</a></div>
              </div>
              
              ${company ? `
              <div class="field">
                <div class="field-label">会社名・団体名</div>
                <div class="field-value">${company}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="field-label">お問い合わせ種別</div>
                <div class="field-value">${categoryText}</div>
              </div>
              
              <div class="field">
                <div class="field-label">お問い合わせ内容</div>
                <div class="field-value" style="white-space: pre-wrap;">${message}</div>
              </div>
            </div>
            <div class="footer">
              <p>このメールは aqa Webサイトのお問い合わせフォームから送信されました。</p>
              <p>© ${new Date().getFullYear()} aqa. All Rights Reserved.</p>
            </div>
          </body>
        </html>
      `,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'メール送信に失敗しました。時間をおいて再度お試しください。' },
      { status: 500 }
    )
  }
}

