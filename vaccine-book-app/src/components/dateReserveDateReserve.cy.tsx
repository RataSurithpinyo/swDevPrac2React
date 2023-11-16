import React from 'react'
import DateReserve from './dateReserve'

describe('<DateReserve />', () => {
  let testObj: {dateHandler: Function}
  beforeEach(() => {
    testObj = {
      dateHandler: () => {}
    }
    cy.spy(testObj, 'dateHandler').as('dateSpy')
  })
  it('should select correct date', () => {
    cy.mount(<DateReserve onDateChange={testObj.dateHandler}/>)
    // cy.get('#')
  })
})