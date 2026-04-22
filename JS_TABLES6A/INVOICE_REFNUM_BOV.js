// INVOICE_REFNUM_BOV.js

window.INVOICE_REFNUM_BOV = {
  "tables": {
    "INVOICE_REFNUM_BOV": {
      "columns": {
        "INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "INVOICE_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "INVOICE_REFNUM_QUAL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "INVOICE_REFNUM_DESC": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "REFRENCE_NUMBER": {
          "type": "VARCHAR2(240)",
          "nullable": false
        },
        "ISSUE_DATE": {
          "type": "DATE",
          "nullable": true
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
