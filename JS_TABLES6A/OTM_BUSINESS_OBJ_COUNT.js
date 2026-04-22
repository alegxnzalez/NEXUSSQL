// OTM_BUSINESS_OBJ_COUNT.js

window.OTM_BUSINESS_OBJ_COUNT = {
  "tables": {
    "OTM_BUSINESS_OBJ_COUNT": {
      "columns": {
        "OBJECT_NAME": {
          "type": "VARCHAR2(100)",
          "nullable": false,
          "key_value": true
        },
        "OBJECT_TYPE": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "values": [
            "total",
            "otm",
            "gtm",
            "fti",
            "other"
          ]
        },
        "OBJECT_COUNT": {
          "type": "NUMBER()",
          "nullable": false
        },
        "COLLECTION_DATE": {
          "type": "DATE",
          "nullable": false,
          "key_value": true
        },
        "PARTITION_KEY": {
          "type": "NUMBER()",
          "nullable": false
        }
      },
      "fk_tables": []
    }
  }
};
