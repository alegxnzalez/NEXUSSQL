// GTM_CAMPAIGN_TYPE.js

window.GTM_CAMPAIGN_TYPE = {
  "tables": {
    "GTM_CAMPAIGN_TYPE": {
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
        "GTM_CAMPAIGN_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "This field represents unique campaign type ID across all domains. "
        },
        "GTM_CAMPAIGN_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "This field represents unique campaign type ID in a particular domain. "
        },
        "CAMPAIGN_TYPE_NAME": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "Name for a campaign type. "
        },
        "CAMPAIGN_TYPE_SHORT_NAME": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Short name for a campaign type "
        },
        "EXTERNAL_REFERENCE_CODE": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Reference code for a campaign type."
        },
        "LOGIC_CONFIG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOGIC_CONFIG"
        }
      },
      "fk_tables": [
        "GTM_CAMPAIGN"
      ]
    }
  }
};
