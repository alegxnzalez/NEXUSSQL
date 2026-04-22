// GTM_TIP_APPL_PROFILE.js

window.GTM_TIP_APPL_PROFILE = {
  "tables": {
    "GTM_TIP_APPL_PROFILE": {
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
        "GTM_TRADE_INCENTIVE_PGM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TRADE_INCENTIVE_PROGRAM",
          "info": "Trade Incentive Program ID "
        },
        "SEQUENCE_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "Sequence Number "
        },
        "ENTRY_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_ENTRY_EXIT_PROFILE",
          "info": "Entry Profile ID "
        },
        "EXIT_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_ENTRY_EXIT_PROFILE",
          "info": "Exit Profile ID"
        }
      },
      "fk_tables": []
    }
  }
};
