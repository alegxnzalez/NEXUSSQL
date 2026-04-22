// GTM_ENTRY_EXIT_PROF_CODE.js

window.GTM_ENTRY_EXIT_PROF_CODE = {
  "tables": {
    "GTM_ENTRY_EXIT_PROF_CODE": {
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
        "GTM_ENTRY_EXIT_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_ENTRY_EXIT_PROFILE",
          "info": "Entry Exit Profile ID "
        },
        "GTM_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TYPE_CODE",
          "info": "Type ID "
        },
        "GTM_CODE": {
          "type": "VARCHAR2(150)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TYPE_CODE",
          "info": "Code"
        }
      },
      "fk_tables": []
    }
  }
};
