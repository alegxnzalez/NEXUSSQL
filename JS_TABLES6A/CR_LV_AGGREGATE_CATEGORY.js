// CR_LV_AGGREGATE_CATEGORY.js

window.CR_LV_AGGREGATE_CATEGORY = {
  "tables": {
    "CR_LV_AGGREGATE_CATEGORY": {
      "columns": {
        "CR_LV_AGGREGATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CR_LV_AGGREGATE"
        },
        "SHIPMENT_CATEGORY": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
        },
        "COUNT": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The number of shipments for this category in this aggregate."
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
