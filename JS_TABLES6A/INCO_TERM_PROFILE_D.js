// INCO_TERM_PROFILE_D.js

window.INCO_TERM_PROFILE_D = {
  "tables": {
    "INCO_TERM_PROFILE_D": {
      "columns": {
        "INCO_TERM_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INCO_TERM_PROFILE",
          "info": "The INCO term profile. "
        },
        "INCO_TERM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INCO_TERM",
          "info": "The INCO term. "
        },
        "INCO_TERM_PROFILE_D_SEQNO": {
          "type": "NUMBER(10)",
          "nullable": false,
          "key_value": true,
          "info": "Sequence number. "
        },
        "TERM_LOCATION_TEXT": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Optional field to include the term location text with the INCO term in the profile."
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": true
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
      "fk_tables": []
    }
  }
};
