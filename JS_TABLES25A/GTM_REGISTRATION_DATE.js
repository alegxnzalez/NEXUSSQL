// GTM_REGISTRATION_DATE.js

window.GTM_REGISTRATION_DATE = {
  "tables": {
    "GTM_REGISTRATION_DATE": {
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
        "GTM_REGISTRATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_REGISTRATION"
        },
        "DATE_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_DATE_QUALIFIER"
        },
        "REGISTRATION_DATE": {
          "type": "DATE",
          "nullable": false
        }
      },
      "fk_tables": []
    }
  }
};
