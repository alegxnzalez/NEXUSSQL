// HTTP_PROFILE.js

window.HTTP_PROFILE = {
  "tables": {
    "HTTP_PROFILE": {
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
        "HTTP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "HTTP_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "HTTP_HEADER_FOR_RESPONSE": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "HTTP_RESPONSE_SUCCESS_VALUES": {
          "type": "VARCHAR2(500)",
          "nullable": true
        }
      },
      "fk_tables": [
        "EXTERNAL_SYSTEM",
        "HTTP_PROFILE_DETAIL"
      ]
    }
  }
};
