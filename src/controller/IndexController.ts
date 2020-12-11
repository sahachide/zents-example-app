import { body, Controller, get, inject, log, params, post } from 'zents'

import ClockService from '../service/ClockService'

export default class extends Controller {
  @inject
  protected clock: ClockService

  @get('/')
  public async index() {
    return await this.render('index', {
      now: this.clock.now(),
    })
  }

  @get('hello/:world')
  public async helloWorld(@params params: { world: string }) {
    return await this.render('hello', {
      greetings: `Hello ${params.world}`,
      now: this.clock.now(),
    })
  }

  @post('product')
  public async newProduct(@body body: { name: string; price: number }) {
    log.success(`Product name: ${body.name}`)
    log.success(`Product price: ${body.price}`)

    return {
      success: true,
      name: body.name,
      price: body.price,
    }
  }
}
