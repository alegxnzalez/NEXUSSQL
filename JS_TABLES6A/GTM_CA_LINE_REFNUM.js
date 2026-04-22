// GTM_CA_LINE_REFNUM.js

window.GTM_CA_LINE_REFNUM = {
  "tables": {
    "GTM_CA_LINE_REFNUM": {
      "columns": {
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
        "GTM_CAMPAIGN_LINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_CAMPAIGN_LINE",
          "info": "This field represents unique campaign line ID across all domains. "
        },
        "GTM_CA_LINE_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_CA_LINE_REFNUM_QUAL",
          "info": "This field represents unique campaign line refnum qualifier ID across all domains. "
        },
        "REFNUM_VALUE": {
          "type": "VARCHAR2(240)",
          "nullable": false,
          "key_value": true,
          "info": "The reference number value for campaign line."
        }
      },
      "fk_tables": []
    }
  }
};
