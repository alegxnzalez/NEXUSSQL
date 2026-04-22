// DATA_SOURCE_PROFILE_D.js

window.DATA_SOURCE_PROFILE_D = {
  "tables": {
    "DATA_SOURCE_PROFILE_D": {
      "columns": {
        "DATA_SOURCE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DATA_SOURCE_PROFILE"
        },
        "DATA_FUNCTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DATA_FUNCTION"
        },
        "DATA_SOURCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "DATA_SOURCE"
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
