// GTM_RULES_OF_ORIGIN.js

window.GTM_RULES_OF_ORIGIN = {
  "tables": {
    "GTM_RULES_OF_ORIGIN": {
      "columns": {
        "GTM_RULES_OF_ORIGIN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the rules of origin. "
        },
        "GTM_RULES_OF_ORIGIN_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the rules of origin. "
        },
        "GTM_RULES_OF_ORIGIN_NAME": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "The name given to the rules of origin. "
        },
        "SHORT_NAME": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The short name given to the rules of origin. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "The description for rules of origin. "
        },
        "GTM_DATA_VERSION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_DATA_VERSION",
          "info": "The data version for rules of origin record. "
        },
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Rules of origin effective date. "
        },
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Rules of origin expiration date. "
        },
        "GTM_RULES_OF_ORIGIN_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The rules of origin type. "
        },
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Determines if rules of origin is active. By default all rules are not active. "
        },
        "TRADE_AGREEMENT_SHORT_NAME": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The trade agreement short name for which the rule of origin is applicable. "
        },
        "EXTERNAL_REFERENCE_CODE": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Code that is externally used to identify the rules of origin. "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION",
          "info": "Identifies the region of import for which the Rules of origin is applicable. "
        },
        "COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "Identifies the country of import for which the Rules of origin is applicable."
        }
      },
      "fk_tables": [
        "GTM_ROO_BASE_RULE",
        "GTM_ROO_PSR",
        "GTM_ROO_RULE_CODE"
      ]
    }
  }
};
