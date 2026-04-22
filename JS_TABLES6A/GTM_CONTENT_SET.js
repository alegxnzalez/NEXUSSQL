// GTM_CONTENT_SET.js

window.GTM_CONTENT_SET = {
  "tables": {
    "GTM_CONTENT_SET": {
      "columns": {
        "GTM_CONTENT_SOURCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_CONTENT_SOURCE"
        },
        "CONTENT_SET_ID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
        },
        "STATUS": {
          "type": "VARCHAR2(30)",
          "nullable": true
        },
        "AVAILABLE_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "RETRIEVE_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "IS_RECENT": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
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
      "fk_tables": [
        "GTM_CONTENT_SET_D"
      ]
    }
  }
};
