const express = require('express')
const cors = require('cors')
const line = require('@line/bot-sdk')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
}

const client = new line.Client(config)

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use(cors())

//-----------------BOT-----------------
app.post('/bot/api', async (req, res) => {
  // req.body.events should be an array of events
  if (!Array.isArray(req.body.events)) {
    return res.status(500).end()
  }

  if (req.body.events.length == 0) {
    return res.status(200).end()
  }

  let type = req.body.events[0].type
  let replyToken = req.body.events[0].replyToken

  menuMsg = {
    type: 'flex',
    altText: 'เลือกบริการ',
    contents: {
      type: 'carousel',
      contents: [
        {
          type: 'bubble',
          size: 'nano',
          header: {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: 'BASIC',
                color: '#ffffff',
                align: 'start',
                size: 'md',
                gravity: 'center',
              },
              {
                type: 'text',
                text: 'Free',
                color: '#ffffff',
                align: 'start',
                size: 'xs',
                gravity: 'center',
                margin: 'lg',
              },
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'box',
                    layout: 'vertical',
                    contents: [
                      {
                        type: 'filler',
                      },
                    ],
                    width: '70%',
                    height: '6px',
                  },
                ],
                backgroundColor: '#9FD8E36E',
                height: '6px',
                margin: 'sm',
              },
            ],
            backgroundColor: '#27ACB2',
            paddingTop: '19px',
            paddingAll: '12px',
            paddingBottom: '16px',
          },
          body: {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  {
                    type: 'text',
                    text: 'Personal meetings',
                    color: '#8C8C8C',
                    size: 'md',
                    wrap: true,
                    margin: 'xl',
                  },
                ],
                flex: 1,
              },
              {
                type: 'button',
                action: {
                  type: 'uri',
                  label: 'Detail',
                  uri: 'https://liff.line.me/1656799747-PYaKQb3O',
                },
                style: 'secondary',
                color: '#00FFFF',
              },
            ],
            spacing: 'md',
            paddingAll: '12px',
          },
          styles: {
            footer: {
              separator: false,
            },
          },
        },
        {
          type: 'bubble',
          size: 'nano',
          header: {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: 'PRO',
                color: '#ffffff',
                align: 'start',
                size: 'md',
                gravity: 'center',
              },
              {
                type: 'text',
                text: '$149.90',
                color: '#ffffff',
                align: 'start',
                size: 'xs',
                gravity: 'center',
                margin: 'lg',
              },
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'box',
                    layout: 'vertical',
                    contents: [
                      {
                        type: 'filler',
                      },
                    ],
                    width: '70%',
                    backgroundColor: '#DE5658',
                    height: '6px',
                  },
                ],
                backgroundColor: '#FAD2A76E',
                height: '6px',
                margin: 'sm',
              },
            ],
            backgroundColor: '#FF6B6E',
            paddingTop: '19px',
            paddingAll: '12px',
            paddingBottom: '16px',
          },
          body: {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  {
                    type: 'text',
                    text: 'Great for small teams',
                    color: '#8C8C8C',
                    size: 'sm',
                    wrap: true,
                    margin: 'xl',
                  },
                ],
                flex: 1,
              },
              {
                type: 'button',
                action: {
                  type: 'uri',
                  label: 'Detail',
                  uri: 'https://liff.line.me/1656799747-YPl5a7wM',
                },
                style: 'primary',
                color: '#F36475',
              },
            ],
            spacing: 'md',
            paddingAll: '12px',
          },
          styles: {
            footer: {
              separator: false,
            },
          },
        },
        {
          type: 'bubble',
          size: 'nano',
          header: {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: 'BUSINESS',
                color: '#ffffff',
                align: 'start',
                size: 'md',
                gravity: 'center',
              },
              {
                type: 'text',
                text: '$199.90',
                color: '#ffffff',
                align: 'start',
                size: 'xs',
                gravity: 'center',
                margin: 'lg',
              },
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'box',
                    layout: 'vertical',
                    contents: [
                      {
                        type: 'filler',
                      },
                    ],
                    width: '100%',
                    backgroundColor: '#7D51E4',
                    height: '6px',
                  },
                ],
                backgroundColor: '#9FD8E36E',
                height: '6px',
                margin: 'sm',
              },
            ],
            backgroundColor: '#A17DF5',
            paddingTop: '19px',
            paddingAll: '12px',
            paddingBottom: '16px',
          },
          body: {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  {
                    type: 'text',
                    text: 'Small businesses',
                    color: '#8C8C8C',
                    size: 'sm',
                    wrap: true,
                    margin: 'xl',
                  },
                ],
                flex: 1,
              },
              {
                type: 'button',
                action: {
                  type: 'uri',
                  label: 'Detail',
                  uri: 'https://liff.line.me/1656799747-WOVk7XKE',
                },
                style: 'secondary',
                color: '#CCCCFF',
              },
            ],
            spacing: 'md',
            paddingAll: '12px',
          },
          styles: {
            footer: {
              separator: false,
            },
          },
        },
        {
          type: 'bubble',
          size: 'nano',
          body: {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: 'Contact Us',
                weight: 'bold',
                style: 'normal',
                align: 'center',
              },
              {
                type: 'button',
                action: {
                  type: 'uri',
                  label: 'Detail',
                  uri: 'https://liff.line.me/1656799747-lxoQLgjO',
                },
                style: 'primary',
                color: '#76A3EE',
                margin: 'xxl',
                height: 'md',
                gravity: 'center',
              },
            ],
            spacing: 'md',
            paddingTop: '40%',
            backgroundColor: '#94B5ED',
          },
          styles: {
            footer: {
              separator: false,
            },
          },
        },
      ],
    },
  }

  switch (type) {
    case 'message':
      let messageType = req.body.events[0].message.type
      switch (messageType) {
        case 'text':
          let text = req.body.events[0].message.text

          if (text === 'แสดงเมนูของร้าน') {
            return client.replyMessage(replyToken, menuMsg)
          } else {
            return client.replyMessage(replyToken, [
              {
                type: 'text',
                text: 'กรุณาส่งใหม่',
              },
            ])
          }

          break

        default:
      }
  }
})
