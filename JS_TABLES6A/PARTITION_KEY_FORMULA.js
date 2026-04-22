// PARTITION_KEY_FORMULA.js

window.PARTITION_KEY_FORMULA = {
  "tables": {
    "PARTITION_KEY_FORMULA": {
      "columns": {
        "TABLE_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
        },
        "PARTITION_DURATION": {
          "type": "NUMBER()",
          "nullable": false
        },
        "PARTITION_DURATION_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false
        },
        "PARTITION_DURATION_BASE": {
          "type": "NUMBER()",
          "nullable": false
        }
      },
      "fk_tables": []
    }
  }
};
