/*******************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2019. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 *******************************************************************************/
'use strict'

import React from 'react'
import { shallow } from 'enzyme'
import { ResourceModal } from '../../../../src-web/components/modals/ResourceModal'
import { resourceModalData, resourceModalYAML } from './ModalsTestingData'

describe('CreateResourceModal modal', () => {
  it('renders as expected', () => {
    const component = shallow(<ResourceModal
      open={true}
      label={{'primaryBtn':'modal.button.submit','label':'modal.edit-hcmpolicypolicy.label','heading':'modal.edit-hcmpolicypolicy.heading'}}
      locale={'en-US'}
      resourceType={{'name':'HCMPolicyPolicy','list':'HCMPolicyPolicyList'}}
      data={resourceModalData}
    />)
    expect(component).toMatchSnapshot()
  })

  it('renders as expected', () => {
    const component = shallow(<ResourceModal
      reqCount={2}
      open={true}
      label={{'primaryBtn':'modal.button.submit','label':'modal.edit-hcmpolicypolicy.label','heading':'modal.edit-hcmpolicypolicy.heading'}}
      locale={'en-US'}
      resourceType={{'name':'HCMPolicyPolicy','list':'HCMPolicyPolicyList'}}
      data={resourceModalData}
    />)
    expect(component).toMatchSnapshot()
  })

  it('onChange as expected', () => {
    const e1 = {
      persist:jest.fn(),
      shiftKey:jest.fn(),
      ctrlKey:jest.fn(),
      which:81
    }
    const e2 = {
      persist:jest.fn(),
      shiftKey:jest.fn(),
      ctrlKey:jest.fn(),
      which:82
    }
    const component = shallow(<ResourceModal
      open={true}
      label={{'primaryBtn':'modal.button.submit','label':'modal.edit-hcmpolicypolicy.label','heading':'modal.edit-hcmpolicypolicy.heading'}}
      locale={'en-US'}
      resourceType={{'name':'HCMPolicyPolicy','list':'HCMPolicyPolicyList'}}
      clearRequestStatus={jest.fn()}
      handleClose={jest.fn()}
      data={resourceModalData}
    />)
    component.instance().componentDidMount()
    component.instance().onChange(resourceModalData)
    component.instance().escapeEditor(e1)
    component.instance().escapeEditor(e2)
    component.instance().handleSubmit()
    component.instance().handleClose()
    expect(component.state()).toMatchSnapshot()
    component.state().data = resourceModalYAML
    component.instance().handleSubmit()
  })
})
