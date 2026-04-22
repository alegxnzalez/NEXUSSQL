// OB_REMARK_BOV.js

window.OB_REMARK_BOV = {
  "tables": {
    "OB_REMARK_BOV": {
      "columns": {
        "ORDER_BASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "REMARK_SEQUENCE": {
          "type": "NUMBER(10)",
          "nullable": false
        },
        "REMARK_QUAL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "REMARK_QUAL_DESC": {
          "type": "VARCHAR2(256)",
          "nullable": true
        },
        "REMARK_TEXT": {
          "type": "VARCHAR2(4000)",
          "nullable": false
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Domain of the User. Is used for creating the GID."
        }
      },
      "fk_tables": []
    }
  }
};
