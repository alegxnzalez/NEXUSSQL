// QF_PREFERENCE_CRITERIA.js

window.QF_PREFERENCE_CRITERIA = {
  "tables": {
    "QF_PREFERENCE_CRITERIA": {
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
        "QF_PREFERENCE_CRITERIA_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Unique preference criteria id across all domains. "
        },
        "QF_PREFERENCE_CRITERIA_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Unique preference criteria id in a particular domain "
        },
        "QF_PREFERENCE_CRITERIA_NAME": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "Preference criteria name "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Preference criteria description "
        },
        "EXTERNAL_REFERENCE_CODE": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "GTM_TRADE_AGREEMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_TRADE_AGREEMENT",
          "info": "Trade Agreement Id "
        },
        "PRIORITY": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Identifies the priority of a Preference Criteria within a Trade Agreement."
        }
      },
      "fk_tables": [
        "GTM_CAMPAIGN_LINE",
        "GTM_TRANS_LINE_QF",
        "ITEM_QF",
        "QF_PREFERENCE_CRITERIA_CODE"
      ]
    }
  }
};
