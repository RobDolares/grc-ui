/*******************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2018, 2019. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 *******************************************************************************/
'use strict'

import React from 'react'
import { shallow } from 'enzyme'
import { policiesTabModuleFilteredPolicies, policiesTabModuleRefreshControl, policiesTabModuleSecondaryHeaderProps } from './ModuleTestingData'
import PolicyTabModule from '../../../../src-web/components/modules/PolicyTabModule'

describe('PoliciesView view', () => {
  it('renders expand as expected', () => {
    const component = shallow(<PolicyTabModule
      refreshControl = {policiesTabModuleRefreshControl}
      policies={policiesTabModuleFilteredPolicies}
      secondaryHeaderProps={policiesTabModuleSecondaryHeaderProps}
      locale={''}
      policyTabToggleIndex={0}
      showPolicyTabToggle={true}
      highLightRowName={''}
      showSidePanel={false}
    />)
    expect(component).toMatchSnapshot()
  })
})