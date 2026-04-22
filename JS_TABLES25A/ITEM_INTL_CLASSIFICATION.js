// ITEM_INTL_CLASSIFICATION.js

window.ITEM_INTL_CLASSIFICATION = {
  "tables": {
    "ITEM_INTL_CLASSIFICATION": {
      "columns": {
        "ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ITEM"
        },
        "SEQNO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        },
        "HTS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "HTS"
        },
        "IMPORT_EXPORT": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "values": [
            "IMPORT",
            "EXPORT"
          ]
        },
        "X_LANE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LANE"
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
