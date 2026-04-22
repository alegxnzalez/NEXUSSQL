// GTM_JURISDICTION.js

window.GTM_JURISDICTION = {
  "tables": {
    "GTM_JURISDICTION": {
      "columns": {
        "GTM_JURISDICTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "GTM_JURISDICTION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "JURISDICTION_NAME": {
          "type": "VARCHAR2(200)",
          "nullable": true
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "REPORTING_AUTHORITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_AUTHORITY"
        },
        "GTM_REGIME_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_REGIME"
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
          "foreign_key": "REGION"
        },
        "COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE"
        }
      },
      "fk_tables": [
        "GTM_LICENSE",
        "GTM_REGISTRATION",
        "GTM_TRADE_INCENTIVE_PROGRAM"
      ]
    }
  }
};
