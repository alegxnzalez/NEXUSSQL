// APP_SHARED_ITEM.js

window.APP_SHARED_ITEM = {
  "tables": {
    "APP_SHARED_ITEM": {
      "columns": {
        "APP_SHARED_ITEM_ID": {
          "type": "NUMBER(12)",
          "nullable": false,
          "key_value": true
        },
        "SHARED_DOMAIN": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "SHARED_QUERY_TABLE_GID": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "foreign_key": "QUERY_TABLE"
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
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
        }
      },
      "fk_tables": []
    }
  }
};
