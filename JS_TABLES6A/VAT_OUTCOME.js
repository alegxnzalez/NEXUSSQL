// VAT_OUTCOME.js

window.VAT_OUTCOME = {
  "tables": {
    "VAT_OUTCOME": {
      "columns": {
        "VAT_OUTCOME_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "VAT_OUTCOME_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "VAT_OUTCOME_DESC": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "Human-readable description e.g. \"EXPORTED BY FOREIGN SERVICE PROVIDER\""
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
        }
      },
      "fk_tables": [
        "VAT_CONFIGURATION_PERSP_D"
      ]
    }
  }
};
