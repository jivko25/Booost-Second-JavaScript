import config from '../config';
import StarWarsUniverse,{init} from './custom/StarWarsUniverse';
import EventEmitter from 'eventemitter3';

const EVENTS = {
  APP_READY: 'app_ready',
};

/**
 * App entry point.
 * All configurations are described in src/config.js
 */
export default class Application extends EventEmitter {
  constructor() {
    super();

    this.config = config;
    this.data = {};

    this.init();
  }

  /**
   * Initializes the app.
   * Called when the DOM has loaded. You can initiate your custom classes here
   * and manipulate the DOM tree. Task data should be assigned to Application.data.
   * The APP_READY event should be emitted at the end of this method.
   */
  async init() {
    // Initiate classes and wait for async operations here.
    const universe = new StarWarsUniverse();
    await universe.init();
    this.data = {"universe" : universe.entities};
    console.log(this.data)

    this.emit(Application.events.APP_READY);
  }
  
  static get events() {
    return EVENTS;
  }
}

