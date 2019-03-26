/** *****************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2018. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 ****************************************************************************** */

const generateDemoData = () => {

  let policies = [
    {
      n: 'GDPR 25-(2)',
      s: 'GDPR',
      c: 'SystemAndInformationIntegrity',
      e: 'VA',
      d: 'Cannot process data for any purpose other than the legitimate purposes.',
      r: 'enforce',
    },
    {
      n: 'NGINX Missing',
      s: 'HA',
      c: 'SystemAndCommunicationsProtections, SystemAndInformationIntegrity',
      e: 'MutationAdvisor, VA',
      d: 'Cluster must have active NGINX',
      r: 'enforce',
    },
    {
      n: 'HIPAA 23-(1)',
      s: 'HIPAA',
      c: 'SystemAndCommunicationsProtections',
      e: 'MutationAdvisor',
      d: 'Disclosures only allowed to friends, family and others involved in a patient’s care',
      r: 'inform',
    },
    {
      n: 'NIST 800-53 (AC-11)',
      s: 'NIST',
      c: 'SystemAndCommunicationsProtections, SystemAndInformationIntegrity',
      e: 'VA',
      d: 'Retains the session lock until the user reestablishes access using established identification and authentication procedures',
      r: 'enforce',
    },
    {
      n: 'NIST 800-53 (AC-14)',
      s: 'NIST',
      c: 'SystemAndCommunicationsProtections, SystemAndInformationIntegrity',
      e: 'VA',
      d: 'Cannot perform without identification or authentication consistent with organizational missions/business functions',
      r: 'enforce',
    },
    {
      n: 'BSA 37-2',
      s: 'BSA',
      c: 'SystemAndCommunicationsProtections, SystemAndInformationIntegrity',
      e: 'MutationAdvisor, VA',
      d: 'Always be courteous and kind',
      r: 'enforce',
    },
  ].map(({n, c, e, s, d, r}) => {
    return {
      metadata: {
        name: n,
        namespace: 'policyNamespace',
        annotations: {
          'policy.mcm.ibm.com/standards': s,
          'policy.mcm.ibm.com/categories': c,
          'policy.mcm.ibm.com/controls': e,
          'policy.mcm.ibm.com/description': d
        },
      },
      spec: {
        remediationAction: r
      },
      status: {
        status: {
        }
      }
    }
  })

  const clusters = [
    {clusterHub: 'Compliant', cluster1: 'Compliant', cluster2: 'Compliant'},
    {clusterHub: 'NonCompliant', cluster1: 'NonCompliant', cluster2: 'Compliant'},
    {cluster1: 'Compliant', cluster2: 'Compliant'},
    {clusterHub: 'Compliant', cluster2: 'NonCompliant'},
    {clusterHub: 'NonCompliant', cluster1: 'Compliant', cluster2: 'Compliant'},
    {cluster1: 'Compliant', cluster2: 'Compliant'},
  ]

  policies = policies.map((p,idx)=>{
    p.status.status = clusters[idx]
    return p
  })

  return policies
}

export default generateDemoData
