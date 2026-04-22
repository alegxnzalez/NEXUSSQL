// GTM_PARTY_LAST_SCREENING.js

window.GTM_PARTY_LAST_SCREENING = {
  "tables": {
    "GTM_PARTY_LAST_SCREENING": {
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
        "CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CONTACT"
        },
        "GTM_SERVICE_PREF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_SERVICE_PREF"
        },
        "LAST_SCREEN_DATE": {
          "type": "DATE",
          "nullable": false
        }
      },
      "fk_tables": []
    }
  }
};
