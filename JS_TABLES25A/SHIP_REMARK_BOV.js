// SHIP_REMARK_BOV.js

window.SHIP_REMARK_BOV = {
  "tables": {
    "SHIP_REMARK_BOV": {
      "columns": {
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "REMARK_SEQUENCE": {
          "type": "NUMBER(10)",
          "nullable": false
        },
        "REMARK_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "REMARK_QUAL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "REMARK_TEXT": {
          "type": "VARCHAR2(4000)",
          "nullable": false
        }
      },
      "fk_tables": []
    }
  }
};
