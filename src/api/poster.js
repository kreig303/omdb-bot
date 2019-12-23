'use strict'

const Wreck = require('@hapi/wreck')
const Joi = require('@hapi/joi')
const pkg = require('../../package.json')

const posterCall = async (key, id) => {
  const { payload } = await Wreck.get(`http://img.omdbapi.com/?apikey=${key}&i=${id}`)
  return payload
}

const plugin = {
  name: 'poster',
  version: pkg.version,
  register: (server, options) => {
    server.route({
      method: 'GET',
      path: '/poster/{id?}',
      config: {
        validate: {
          params: {
            id: Joi.string().min(9).max(10).required()
          }
        }
      },
      handler: async (req, res) => {
        let findPoster
        try {
          findPoster = await posterCall(process.env.API_KEY, req.params.id)
        } catch (err) {
          console.error(err)
          throw (err)
        }
        return res.response(findPoster).type('image/jpeg')
      }
    })
  }
}

module.exports = plugin
