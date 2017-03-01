/* 3rd party modules */
import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

/* About module pieces */
import { INITIAL_STATE } from './about.reducer';

/* Types */
import { AppState } from '../../types';

/**
 * Redux Actions for About module
 */
@Injectable()
export class AboutActions {
  constructor(private store: NgRedux<AppState>) {}

  /**
   * Set the current item ID
   * @param id Identifier
   */
  public setCurrent(id: number): void {
    if (typeof id !== 'number' || Number.isNaN(id)) {
      id = INITIAL_STATE.currentItem;
    }
    this.store.dispatch({ type: 'ABOUT_SET_CURRENT', payload: id });
  }
}