exports.convertPunycode = require(`./convertPunycode`);
exports.getDomainNameFromURL = require(`./getDomainNameFromURL`);
exports.getRoTLDDomainLabels = require(`./getRoTLDDomainLabels`);
exports.hasRoTLDSubdomain = require(`./hasRoTLDSubdomain`);
exports.isRoTLDDomain = require(`./isRoTLDDomain`);
exports.isRoTLDReservedDomain = require(`./isRoTLDReservedDomain`);
exports.queryRoTLDWhoisServer = require(`./queryRoTLDWhoisServer`);
exports.RoTLDReservedDomains = require(`./RoTLDReservedDomains`);
exports.RoTLDSubdomains = require(`./RoTLDSubdomains`);


const convertPunycode = require(`./convertPunycode`);

console.log(convertPunycode.toUnicode(''));