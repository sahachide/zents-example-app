import { Controller, get, inject } from 'zents'

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
}
