// GTM_TIP_INVOLVED_PARTIES.js

window.GTM_TIP_INVOLVED_PARTIES = {
  "tables": {
    "GTM_TIP_INVOLVED_PARTIES": {
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
        "INVOLVED_PARTY_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOLVED_PARTY_QUAL",
          "info": "Involved Party Qualifier GID "
        },
        "INVOLVED_PARTY_CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CONTACT",
          "info": "Involved Party Contact GID "
        },
        "GTM_TRADE_INCENTIVE_PGM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TRADE_INCENTIVE_PROGRAM",
          "info": "Trade Incentive Program GID"
        }
      },
      "fk_tables": []
    }
  }
};
