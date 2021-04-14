/** *****************************************************************************
 * Licensed Materials - Property of Red Hat, Inc.
 * Copyright (c) 2020 Red Hat, Inc.
 ****************************************************************************** */

/// <reference types="cypress" />

import { describeT } from '../support/tagging'
import { welcomePage, leftNav, userMenu } from '../support/welcome'

const squad = 'policy-grc'

describeT('GRC UI: [P1][Sev1][policy-grc] Welcome page', () => {
    before(() => {
        cy.login()
    })

    it(`[P1][Sev1][${squad}] should load`, () => {
        welcomePage.whenGoToWelcomePage()
        welcomePage.shouldExist()
    })

    // FIXME: Skipping tests until welcome page is fixed.
    it('validate links on Welcome page', () => {
        welcomePage.validateSvcs()
        welcomePage.validateConnect()
    })

    // Validate left navigation
    it(`[P3][Sev3][${squad}] should open left navigation`, () => {
        leftNav.validateMenu()
    })

    it(`[P3][Sev3][${squad}] using left navigation - should navigate to Clusters page`, () => {
        leftNav.goToClusters()
    })

    it(`[P3][Sev3][${squad}] using left navigation - should navigate to Home page`, () => {
        leftNav.goToHome()
    })

    it(`[P3][Sev3][${squad}] using left navigation - should navigate to KUI`, () => {
        leftNav.goToKUI()
    })

    it(`[P3][Sev3][${squad}] using left navigation - should navigate to Overview page`, () => {
        leftNav.goToOverview()
    })

    it(`[P3][Sev3][${squad}] using left navigation - should navigate to Applications page`, () => {
        leftNav.goToApplications()
    })

    it(`[P3][Sev3][${squad}] using left navigation - should navigate to GRC page`, () => {
        leftNav.goToGRC()
    })

    it(`[P3][Sev3][${squad}] using left navigation - should navigate to credentials page`, () => {
        leftNav.goToCredentials()
    })

    // Validate navigation from header icons
    it(`[P3][Sev3][${squad}] using header icons - should navigate to Search page`, () => {
        userMenu.openSearch()
    })

    it(`[P3][Sev3][${squad}] using header icons - should navigate to Info page`, () => {
        userMenu.openInfo()
    })

    it(`[P3][Sev3][${squad}] using header icons - should navigate to User page`, () => {
        userMenu.openUser()
    })
})