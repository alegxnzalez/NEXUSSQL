// AUTO_ASSIGN_BDT.js

window.AUTO_ASSIGN_BDT = {
  "tables": {
    "AUTO_ASSIGN_BDT": {
      "columns": {
        "BUSINESS_OBJECT_TYPE": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "key_value": true
        },
        "XML_STRING": {
          "type": "CLOB",
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
