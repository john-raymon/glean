import { validate } from '@redwoodjs/api'
import mailchimpClient from '@mailchimp/mailchimp_marketing'
import { logger } from 'src/lib/logger'
import crypto from 'crypto'

mailchimpClient.setConfig({
  apiKey: 'a265880a04a0e0bac56af24b9934e168-us20',
  server: 'us20',
})

export const subscribeToNewsletter = async (input) => {
  validate(input.email, 'Email', {
    email: true,
  })
  const subscriberHash = crypto
    .createHash('md5')
    .update(input.email)
    .digest('hex')
  const response = await mailchimpClient.lists
    .addListMember('dbbe73e4e3', {
      email_address: input.email,
      status: 'subscribed',
    })
    .catch(async (_error) => {
      const error = JSON.parse(_error.response.text)
      // only resubscribe the member if they exist in the list but have an unsubscribed status
      // otherwise notify that the member is already subscribed
      if (error.title === 'Member Exists') {
        const response = await mailchimpClient.lists.getListMember(
          'dbbe73e4e3',
          subscriberHash
        )
        if (response.status !== 'subscribed') {
          const response = await mailchimpClient.lists.setListMember(
            'dbbe73e4e3',
            subscriberHash,
            {
              email_address: input.email,
              status: 'subscribed',
            }
          )
          return response
        }
      }
      throw error
    })
    .catch((error) => {
      throw {
        message: error.title || 'An error occurred.',
        detail: error.detail || '',
        status: error.status || 500,
      }
    })
  return {
    success: response.status === 'subscribed' ? true : false,
  }
}
