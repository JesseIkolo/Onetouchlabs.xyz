'use strict';

/**
 * bloc service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bloc.bloc');
