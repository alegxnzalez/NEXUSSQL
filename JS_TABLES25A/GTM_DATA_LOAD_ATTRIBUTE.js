// GTM_DATA_LOAD_ATTRIBUTE.js

window.GTM_DATA_LOAD_ATTRIBUTE = {
  "tables": {
    "GTM_DATA_LOAD_ATTRIBUTE": {
      "columns": {
        "GTM_DATA_LOAD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_DATA_LOAD"
        },
        "ATTR_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": false,
          "key_value": true
        },
        "ATTR_VALUE": {
          "type": "VARCHAR2(120)",
          "nullable": true
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
