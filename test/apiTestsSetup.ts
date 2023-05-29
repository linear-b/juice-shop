/*
 * Copyright (c) 2014-2023 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import server = require('./../server')
export const SONAR_REGEX = {
  BUGS: /\[\d+ Bug[s]?\]/g,
  VULNERABILITIES: /\[\d+ Vulnerabilit(?:ies|y)\]/g,
  SECURITY_HOTSPOTS: /\[\d+ Security Hotspot[s]?\]/g,
  CODE_SMELL: /\[\d+ Code Smell[s]?\]/g,
  DUPLICATIONS: /\[(\d+(\.\d+)?|\.\d+)%\]/g,
  COVERAGE: /\[(\d+(\.\d+)?|\.\d+)%\]/g,
  RATING: /!\[([A-Z])\]/g,
};

// eslint-disable-next-line no-async-promise-executor,@typescript-eslint/no-misused-promises
export = async () => await new Promise<void>(async (resolve, reject) =>
  await server.start((err: Error) => {
    if (err) {
      reject(err)
    }
    resolve()
  })
)
