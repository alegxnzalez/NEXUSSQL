// LOG_COMPONENT_DETAIL.js

window.LOG_COMPONENT_DETAIL = {
  "tables": {
    "LOG_COMPONENT_DETAIL": {
      "columns": {
        "LOG_COMPONENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOG_COMPONENT"
        },
        "DETAIL_ID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "OFF": {
          "type": "VARCHAR2(1)",
          "nullable": false,
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
      "fk_tables": []
    }
  }
};
