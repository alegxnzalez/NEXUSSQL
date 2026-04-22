// CORPORATION_PROFILE_DETAIL.js

window.CORPORATION_PROFILE_DETAIL = {
  "tables": {
    "CORPORATION_PROFILE_DETAIL": {
      "columns": {
        "CORPORATION_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CORPORATION_PROFILE",
          "info": "CORPORATION_PROFILE_GID contains the unique identifier for the corporation profile. "
        },
        "CORPORATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CORPORATION",
          "info": "CORPORATION_GID contains the unique identifier for the corporation."
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
      "fk_tables": []
    }
  }
};
